-- ============================================================
-- 006_notebook_storage.sql
-- Creates the notebooks storage bucket and open RLS policies
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- 1. Create the notebooks bucket (public, 50MB max)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'notebooks',
  'notebooks',
  true,
  52428800,
  ARRAY[
    'application/pdf',
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
    'text/plain', 'text/markdown',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 52428800;

-- 2. Storage RLS: allow authenticated users to upload to their own folder
CREATE POLICY "Authenticated users can upload notebook files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'notebooks');

CREATE POLICY "Anyone can view notebook files"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'notebooks');

CREATE POLICY "Users can delete their own notebook files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'notebooks');

-- 3. Also ensure notebook_documents has a content column for storing text directly
ALTER TABLE notebook_documents
  ADD COLUMN IF NOT EXISTS text_content TEXT;

-- 4. Ensure notebooks table has content column
ALTER TABLE notebooks
  ADD COLUMN IF NOT EXISTS content TEXT;
