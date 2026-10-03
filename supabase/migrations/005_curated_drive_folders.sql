-- ============================================================
-- 005_curated_drive_folders.sql
-- PodGuide Library - Google Drive Curated Folders Schema
-- ============================================================

CREATE TABLE IF NOT EXISTS curated_drive_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  drive_url TEXT NOT NULL,
  folder_id TEXT,
  programme TEXT DEFAULT 'All',
  level TEXT DEFAULT 'All',
  category TEXT DEFAULT 'General',
  icon TEXT DEFAULT '📁',
  color TEXT DEFAULT 'brand',
  item_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE curated_drive_folders ENABLE ROW LEVEL SECURITY;

-- Read policy: Anyone authenticated can read
CREATE POLICY "Curated drive folders are readable by everyone"
  ON curated_drive_folders FOR SELECT
  USING (true);

-- Insert policy: Any authenticated student or admin can add a folder
CREATE POLICY "Authenticated users can add drive folders"
  ON curated_drive_folders FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Delete policy: Creator or Admin can delete
CREATE POLICY "Users or Admins can delete drive folders"
  ON curated_drive_folders FOR DELETE
  USING (
    auth.uid() = created_by OR
    EXISTS (SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true)
  );

-- Sample initial curated folders
INSERT INTO curated_drive_folders (title, description, drive_url, folder_id, programme, level, category, icon, color, item_count)
VALUES
  (
    'Gross Anatomy 3D Atlases & Cadaveric Dissections',
    'High-resolution Netter anatomical cross-sections, osteology scans, and regional dissection video manuals.',
    'https://drive.google.com/drive/folders/1sample_anatomy_drive_folder',
    '1sample_anatomy_drive_folder',
    'Medicine (MBChB / MBBS)',
    'Year 1 (Pre-clinical / Basic Sciences)',
    'Anatomy',
    '🦴',
    'emerald',
    48
  ),
  (
    'Robbins & Cotran Pathology Slides & Case Vignettes',
    'Microscopic histopathology tissue slides, cellular injury cases, and clinical pathology CPC conference reviews.',
    'https://drive.google.com/drive/folders/1sample_pathology_drive_folder',
    '1sample_pathology_drive_folder',
    'Biomedical Science (BSc)',
    'Part 3',
    'Pathology',
    '🔬',
    'purple',
    64
  ),
  (
    'Clinical Pharmacology Drug Monographs & Prescribing Sheets',
    'Hospital formularies, renal adjustment calculators, antimicrobial stewardship guidelines, and dosing protocols.',
    'https://drive.google.com/drive/folders/1sample_pharmacology_drive_folder',
    '1sample_pharmacology_drive_folder',
    'Pharmacy (BPharm / PharmD)',
    'Part 3',
    'Pharmacology',
    '💊',
    'blue',
    35
  ),
  (
    'Internal Medicine & Surgery Ward Round Handbooks',
    'Oxford Clinical Medicine pocket summaries, acute medical on-call algorithms, and surgical emergency flowcharts.',
    'https://drive.google.com/drive/folders/1sample_clinical_drive_folder',
    '1sample_clinical_drive_folder',
    'Medicine (MBChB / MBBS)',
    'Year 4 (Clinical Rotations)',
    'Clinical Medicine',
    '🏥',
    'amber',
    52
  )
ON CONFLICT DO NOTHING;
