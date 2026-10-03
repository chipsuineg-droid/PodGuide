-- ============================================================
-- PodGuide Admin & Materials Schema
-- Paste this into: Supabase > SQL Editor > Run
-- ============================================================

-- 1. Create the materials table
CREATE TABLE IF NOT EXISTS materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  file_url TEXT NOT NULL,
  material_type TEXT NOT NULL CHECK (material_type IN ('pdf', 'video', 'document', 'other')),
  programme TEXT NOT NULL,
  level TEXT NOT NULL,
  subject TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on materials
ALTER TABLE materials ENABLE ROW LEVEL SECURITY;

-- Anyone can read materials
CREATE POLICY "Materials are readable by everyone" ON materials
  FOR SELECT USING (true);

-- Only admins can insert/update/delete materials
CREATE POLICY "Only admins can insert materials" ON materials
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true)
  );
  
CREATE POLICY "Only admins can update materials" ON materials
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true)
  );

CREATE POLICY "Only admins can delete materials" ON materials
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true)
  );

-- 2. Make all current users admins (for development purposes)
-- NOTE: In production, you would only set this for your specific email.
UPDATE student_profiles SET is_admin = true;

-- 3. Storage Bucket Configuration
-- Note: It is highly recommended to create the 'materials' bucket manually in the Supabase UI 
-- (Storage -> Create a new bucket -> name it 'materials', set to Public). 
-- The following SQL attempts to do it programmatically but requires superuser permissions.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('materials', 'materials', true) 
ON CONFLICT (id) DO NOTHING;

-- Storage Policies for 'materials' bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'materials' );

CREATE POLICY "Admin Upload Access" 
ON storage.objects FOR INSERT 
WITH CHECK ( 
  bucket_id = 'materials' AND 
  EXISTS (SELECT 1 FROM public.student_profiles WHERE user_id = auth.uid() AND is_admin = true)
);