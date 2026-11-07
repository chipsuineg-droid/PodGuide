-- ============================================================
-- 012_security_hardening_rls.sql
-- PodGuide Security Hardening: Row Level Security (RLS) Lock
-- Self-healing: Creates missing tables first and applies RLS safely.
-- ============================================================

-- ── 0. BASE PREREQUISITES ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.notebooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Untitled Notebook',
  description TEXT,
  subject TEXT,
  color TEXT DEFAULT '#dc2626',
  is_pinned BOOLEAN DEFAULT false,
  is_shared BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── 1. SECURE NOTEBOOK DOCUMENTS & CHAT TABLES ──────────────
CREATE TABLE IF NOT EXISTS public.notebook_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  notebook_id UUID NOT NULL REFERENCES public.notebooks(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size BIGINT,
  processing_status TEXT DEFAULT 'pending',
  extracted_text TEXT,
  text_content TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.notebook_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  notebook_id UUID NOT NULL REFERENCES public.notebooks(id) ON DELETE CASCADE,
  title TEXT DEFAULT 'New Chat',
  ai_mode TEXT DEFAULT 'teach',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.ai_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES public.notebook_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user','assistant')),
  content TEXT NOT NULL,
  source_citations JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS safely
ALTER TABLE public.notebooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notebook_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notebook_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_messages ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  -- Notebook Documents Policies
  DROP POLICY IF EXISTS "Users can read own notebook documents" ON public.notebook_documents;
  CREATE POLICY "Users can read own notebook documents"
    ON public.notebook_documents FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        WHERE n.id = notebook_documents.notebook_id
          AND (n.user_id = auth.uid() OR n.is_shared = true)
      )
    );

  DROP POLICY IF EXISTS "Users can insert own notebook documents" ON public.notebook_documents;
  CREATE POLICY "Users can insert own notebook documents"
    ON public.notebook_documents FOR INSERT
    WITH CHECK (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        WHERE n.id = notebook_documents.notebook_id
          AND n.user_id = auth.uid()
      )
    );

  DROP POLICY IF EXISTS "Users can update own notebook documents" ON public.notebook_documents;
  CREATE POLICY "Users can update own notebook documents"
    ON public.notebook_documents FOR UPDATE
    USING (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        WHERE n.id = notebook_documents.notebook_id
          AND n.user_id = auth.uid()
      )
    );

  DROP POLICY IF EXISTS "Users can delete own notebook documents" ON public.notebook_documents;
  CREATE POLICY "Users can delete own notebook documents"
    ON public.notebook_documents FOR DELETE
    USING (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        WHERE n.id = notebook_documents.notebook_id
          AND n.user_id = auth.uid()
      )
    );

  -- Notebook Sessions Policies
  DROP POLICY IF EXISTS "Users manage own notebook sessions" ON public.notebook_sessions;
  CREATE POLICY "Users manage own notebook sessions"
    ON public.notebook_sessions FOR ALL
    USING (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        WHERE n.id = notebook_sessions.notebook_id
          AND n.user_id = auth.uid()
      )
    );

  -- AI Messages Policies
  DROP POLICY IF EXISTS "Users manage own ai messages" ON public.ai_messages;
  CREATE POLICY "Users manage own ai messages"
    ON public.ai_messages FOR ALL
    USING (
      EXISTS (
        SELECT 1 FROM public.notebooks n
        JOIN public.notebook_sessions s ON s.notebook_id = n.id
        WHERE s.id = ai_messages.session_id
          AND n.user_id = auth.uid()
      )
    );
END $$;


-- ── 2. SECURE LIBRARY ENGAGEMENT & LIKES ─────────────────────
CREATE TABLE IF NOT EXISTS public.library_resource_engagement (
  file_id TEXT PRIMARY KEY,
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.library_resource_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id TEXT NOT NULL,
  user_id UUID,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(file_id, user_id)
);

ALTER TABLE public.library_resource_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.library_resource_likes ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'library_resource_engagement') THEN
    DROP POLICY IF EXISTS "Anyone can read library engagement" ON public.library_resource_engagement;
    CREATE POLICY "Anyone can read library engagement"
      ON public.library_resource_engagement FOR SELECT
      USING (true);

    DROP POLICY IF EXISTS "Anyone can update library engagement" ON public.library_resource_engagement;
    CREATE POLICY "Anyone can update library engagement"
      ON public.library_resource_engagement FOR ALL
      USING (true);
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'library_resource_likes') THEN
    DROP POLICY IF EXISTS "Anyone can read likes" ON public.library_resource_likes;
    CREATE POLICY "Anyone can read likes"
      ON public.library_resource_likes FOR SELECT
      USING (true);

    DROP POLICY IF EXISTS "Users can manage likes" ON public.library_resource_likes;
    DROP POLICY IF EXISTS "Users can insert own likes" ON public.library_resource_likes;
    CREATE POLICY "Users can insert own likes"
      ON public.library_resource_likes FOR INSERT
      WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

    DROP POLICY IF EXISTS "Users can delete own likes" ON public.library_resource_likes;
    CREATE POLICY "Users can delete own likes"
      ON public.library_resource_likes FOR DELETE
      USING (auth.uid() = user_id OR auth.uid() IS NULL);
  END IF;
END $$;


-- ── 3. SECURE STORAGE BUCKET (notebooks) ──────────────────────
-- Ensures users can only access files within their own folder: {user_id}/...
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'storage' AND table_name = 'objects') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Anyone can view notebook files" ON storage.objects';
    EXECUTE 'DROP POLICY IF EXISTS "Authenticated users can upload notebook files" ON storage.objects';
    EXECUTE 'DROP POLICY IF EXISTS "Users can delete their own notebook files" ON storage.objects';
    EXECUTE 'DROP POLICY IF EXISTS "Users can read own notebook storage" ON storage.objects';
    EXECUTE 'DROP POLICY IF EXISTS "Users can upload own notebook storage" ON storage.objects';
    EXECUTE 'DROP POLICY IF EXISTS "Users can delete own notebook storage" ON storage.objects';

    EXECUTE 'CREATE POLICY "Users can read own notebook storage"
      ON storage.objects FOR SELECT TO authenticated
      USING (bucket_id = ''notebooks'' AND (storage.foldername(name))[1] = auth.uid()::text)';

    EXECUTE 'CREATE POLICY "Users can upload own notebook storage"
      ON storage.objects FOR INSERT TO authenticated
      WITH CHECK (bucket_id = ''notebooks'' AND (storage.foldername(name))[1] = auth.uid()::text)';

    EXECUTE 'CREATE POLICY "Users can delete own notebook storage"
      ON storage.objects FOR DELETE TO authenticated
      USING (bucket_id = ''notebooks'' AND (storage.foldername(name))[1] = auth.uid()::text)';
  END IF;
END $$;


-- ── 4. PREVENT PRIVILEGE ESCALATION ON student_profiles ───────
-- Users must never be able to self-grant is_admin = true
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
