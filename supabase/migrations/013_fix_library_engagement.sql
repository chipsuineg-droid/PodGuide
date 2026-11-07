-- ============================================================
-- 013_fix_library_engagement.sql
-- Standalone Self-Healing Migration: Creates library_resource_likes
-- and sets up safe Row Level Security (RLS) policies.
-- ============================================================

-- 1. Create Engagement Table if missing
CREATE TABLE IF NOT EXISTS public.library_resource_engagement (
  file_id TEXT PRIMARY KEY,
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create Likes Table if missing
CREATE TABLE IF NOT EXISTS public.library_resource_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id TEXT NOT NULL,
  user_id UUID,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(file_id, user_id)
);

-- 3. Enable RLS
ALTER TABLE public.library_resource_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.library_resource_likes ENABLE ROW LEVEL SECURITY;

-- 4. Safe Idempotent Policies
DO $$
BEGIN
  -- Engagement Policies
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

  -- Likes Policies
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
