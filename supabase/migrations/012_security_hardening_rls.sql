-- ============================================================
-- 012_security_hardening_rls.sql
-- PodGuide Security Hardening: Row Level Security (RLS) Lock
-- Prevents data leakage and ensures users only access their own data.
-- ============================================================

-- 1. SECURE NOTEBOOK DOCUMENTS
ALTER TABLE notebook_documents ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own notebook documents" ON notebook_documents;
CREATE POLICY "Users can read own notebook documents"
  ON notebook_documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM notebooks n
      WHERE n.id = notebook_documents.notebook_id
        AND (n.user_id = auth.uid() OR n.is_shared = true)
    )
  );

DROP POLICY IF EXISTS "Users can insert own notebook documents" ON notebook_documents;
CREATE POLICY "Users can insert own notebook documents"
  ON notebook_documents FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM notebooks n
      WHERE n.id = notebook_documents.notebook_id
        AND n.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can update own notebook documents" ON notebook_documents;
CREATE POLICY "Users can update own notebook documents"
  ON notebook_documents FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM notebooks n
      WHERE n.id = notebook_documents.notebook_id
        AND n.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can delete own notebook documents" ON notebook_documents;
CREATE POLICY "Users can delete own notebook documents"
  ON notebook_documents FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM notebooks n
      WHERE n.id = notebook_documents.notebook_id
        AND n.user_id = auth.uid()
    )
  );

-- 2. SECURE NOTEBOOK SESSIONS & CHAT
ALTER TABLE notebook_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage own notebook sessions" ON notebook_sessions;
CREATE POLICY "Users manage own notebook sessions"
  ON notebook_sessions FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM notebooks n
      WHERE n.id = notebook_sessions.notebook_id
        AND n.user_id = auth.uid()
    )
  );

ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage own ai messages" ON ai_messages;
CREATE POLICY "Users manage own ai messages"
  ON ai_messages FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM notebooks n
      JOIN notebook_sessions s ON s.notebook_id = n.id
      WHERE s.id = ai_messages.session_id
        AND n.user_id = auth.uid()
    )
  );

-- 3. SECURE LIBRARY RESOURCE LIKES (Lock down so users only mutate their own likes)
DROP POLICY IF EXISTS "Users can manage likes" ON library_resource_likes;
DROP POLICY IF EXISTS "Users can insert own likes" ON library_resource_likes;
CREATE POLICY "Users can insert own likes"
  ON library_resource_likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own likes" ON library_resource_likes;
CREATE POLICY "Users can delete own likes"
  ON library_resource_likes FOR DELETE
  USING (auth.uid() = user_id);

-- 4. SECURE NOTEBOOK STORAGE OBJECTS
-- Restrict file uploads, reads, and deletes to the user's specific subfolder: {user_id}/{notebookId}/...
DROP POLICY IF EXISTS "Anyone can view notebook files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload notebook files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own notebook files" ON storage.objects;

CREATE POLICY "Users can read own notebook storage"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'notebooks'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can upload own notebook storage"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'notebooks'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can delete own notebook storage"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'notebooks'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- 5. PREVENT PRIVILEGE ESCALATION ON student_profiles
-- Users must never be able to elevate themselves to is_admin = true via client API
CREATE OR REPLACE FUNCTION protect_student_admin_role()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_admin IS DISTINCT FROM OLD.is_admin THEN
    -- Only allow service_role or existing admins to modify the admin flag
    IF auth.role() != 'service_role' AND NOT EXISTS (
      SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true
    ) THEN
      RAISE EXCEPTION 'Unauthorized: Privilege elevation blocked';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_protect_student_admin_role ON student_profiles;
CREATE TRIGGER trg_protect_student_admin_role
  BEFORE UPDATE ON student_profiles
  FOR EACH ROW
  EXECUTE FUNCTION protect_student_admin_role();
