-- 011_library_engagement.sql
-- Tracking views, likes, and engagement for Google Drive library resources

CREATE TABLE IF NOT EXISTS library_resource_engagement (
  file_id TEXT PRIMARY KEY,
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS library_resource_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id TEXT NOT NULL,
  user_id UUID,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(file_id, user_id)
);

ALTER TABLE library_resource_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_resource_likes ENABLE ROW LEVEL SECURITY;

-- Allow reading engagement
CREATE POLICY "Anyone can read library engagement"
  ON library_resource_engagement FOR SELECT
  USING (true);

-- Allow upserting engagement
CREATE POLICY "Anyone can update library engagement"
  ON library_resource_engagement FOR ALL
  USING (true);

-- Allow reading likes
CREATE POLICY "Anyone can read likes"
  ON library_resource_likes FOR SELECT
  USING (true);

-- Allow toggling likes
CREATE POLICY "Users can manage likes"
  ON library_resource_likes FOR ALL
  USING (true);
