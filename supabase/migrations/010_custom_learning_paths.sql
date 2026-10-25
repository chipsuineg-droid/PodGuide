-- ============================================================
-- 010_custom_learning_paths.sql
-- Customisable Courses and Learning Paths
-- Many-to-Many Dynamic Courses, User Enrollments & Progress
-- ============================================================

-- 1. COURSES TABLE
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  code TEXT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Academic', 'Non-Academic')),
  icon TEXT DEFAULT '📚',
  academic_years TEXT[] DEFAULT '{}',
  target_audiences TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  estimated_hours INTEGER DEFAULT 30,
  total_modules INTEGER DEFAULT 5,
  is_published BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. USER_COURSES TABLE (User Personalised Dashboard Selections)
CREATE TABLE IF NOT EXISTS user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_slug TEXT NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('enrolled', 'in_progress', 'completed', 'archived')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  completed_modules INTEGER DEFAULT 0,
  last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_slug)
);

-- 3. COURSE_UNITS TABLE (Sub-topics of each course)
CREATE TABLE IF NOT EXISTS course_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  unit_order INTEGER DEFAULT 1,
  estimated_minutes INTEGER DEFAULT 45,
  is_published BOOLEAN DEFAULT true
);

-- 4. USER_UNIT_COMPLETIONS TABLE (Tracks individual topic completion)
CREATE TABLE IF NOT EXISTS user_unit_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_slug TEXT NOT NULL,
  unit_id UUID NOT NULL REFERENCES course_units(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, unit_id)
);

-- 5. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_user_courses_user_id ON user_courses(user_id);
CREATE INDEX IF NOT EXISTS idx_user_courses_slug ON user_courses(course_slug);
CREATE INDEX IF NOT EXISTS idx_user_unit_completions_user ON user_unit_completions(user_id, course_slug);

-- 6. ROW LEVEL SECURITY
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_unit_completions ENABLE ROW LEVEL SECURITY;

-- Courses & Course Units: Public read for all authenticated and anon users
DROP POLICY IF EXISTS "courses_public_read" ON courses;
CREATE POLICY "courses_public_read" ON courses FOR SELECT USING (true);

DROP POLICY IF EXISTS "course_units_public_read" ON course_units;
CREATE POLICY "course_units_public_read" ON course_units FOR SELECT USING (true);

-- User Courses: Users can only see and manage their own selected courses
DROP POLICY IF EXISTS "user_courses_user_select" ON user_courses;
CREATE POLICY "user_courses_user_select" ON user_courses FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "user_courses_user_insert" ON user_courses;
CREATE POLICY "user_courses_user_insert" ON user_courses FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "user_courses_user_update" ON user_courses;
CREATE POLICY "user_courses_user_update" ON user_courses FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "user_courses_user_delete" ON user_courses;
CREATE POLICY "user_courses_user_delete" ON user_courses FOR DELETE USING (auth.uid() = user_id);

-- User Unit Completions: Users manage their own completions
DROP POLICY IF EXISTS "unit_completions_user_manage" ON user_unit_completions;
CREATE POLICY "unit_completions_user_manage" ON user_unit_completions FOR ALL USING (auth.uid() = user_id);

-- Service Role full access
DROP POLICY IF EXISTS "courses_service_manage" ON courses;
CREATE POLICY "courses_service_manage" ON courses FOR ALL USING (auth.role() = 'service_role');
