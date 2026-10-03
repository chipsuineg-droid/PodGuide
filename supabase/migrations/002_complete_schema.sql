-- ============================================================
-- PodGuide Complete Schema
-- Paste this entire file into: Supabase > SQL Editor > Run
-- ============================================================

-- Enable UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── STUDENT PROFILES
CREATE TABLE IF NOT EXISTS student_profiles (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name     TEXT,
  avatar_url    TEXT,
  bio           TEXT DEFAULT '',
  institution   TEXT DEFAULT '',
  programme     TEXT DEFAULT '',
  level         TEXT DEFAULT '',
  study_streak  INT DEFAULT 0,
  xp            INT DEFAULT 0,
  is_mentor     BOOLEAN DEFAULT false,
  is_admin      BOOLEAN DEFAULT false,
  onboarding_complete BOOLEAN DEFAULT false,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ── NOTEBOOKS
CREATE TABLE IF NOT EXISTS notebooks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  description TEXT DEFAULT '',
  subject     TEXT DEFAULT '',
  is_shared   BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ── POSTS (Campus feed)
CREATE TABLE IF NOT EXISTS posts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content      TEXT NOT NULL,
  post_type    TEXT DEFAULT 'post' CHECK (post_type IN ('post','question','resource')),
  likes_count  INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  is_pinned    BOOLEAN DEFAULT false,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- ── POST LIKES
CREATE TABLE IF NOT EXISTS post_likes (
  post_id    UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (post_id, user_id)
);

-- ── POST COMMENTS
CREATE TABLE IF NOT EXISTS post_comments (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id    UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  author_id  UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content    TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── GROUPS
CREATE TABLE IF NOT EXISTS groups (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  description  TEXT DEFAULT '',
  group_type   TEXT DEFAULT 'study',
  icon         TEXT DEFAULT '📚',
  member_count INT DEFAULT 0,
  is_official  BOOLEAN DEFAULT false,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- ── GROUP MEMBERS
CREATE TABLE IF NOT EXISTS group_members (
  group_id   UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role       TEXT DEFAULT 'member',
  joined_at  TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (group_id, user_id)
);

-- ── FLASHCARD DECKS
CREATE TABLE IF NOT EXISTS flashcard_decks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  description TEXT DEFAULT '',
  subject     TEXT DEFAULT '',
  is_public   BOOLEAN DEFAULT false,
  card_count  INT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ── FLASHCARDS
CREATE TABLE IF NOT EXISTS flashcards (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deck_id     UUID NOT NULL REFERENCES flashcard_decks(id) ON DELETE CASCADE,
  front       TEXT NOT NULL,
  back        TEXT NOT NULL,
  due_date    TIMESTAMPTZ DEFAULT now(),
  ease_factor NUMERIC DEFAULT 2.5,
  interval    INT DEFAULT 1,
  repetitions INT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ── FLASHCARD REVIEWS
CREATE TABLE IF NOT EXISTS flashcard_reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flashcard_id  UUID NOT NULL REFERENCES flashcards(id) ON DELETE CASCADE,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rating        INT NOT NULL CHECK (rating BETWEEN 1 AND 4),
  reviewed_at   TIMESTAMPTZ DEFAULT now()
);

-- ── QUESTIONS
CREATE TABLE IF NOT EXISTS questions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id  UUID REFERENCES auth.users(id),
  stem        TEXT NOT NULL,
  type        TEXT DEFAULT 'mcq',
  difficulty  TEXT DEFAULT 'medium',
  explanation TEXT DEFAULT '',
  subject     TEXT DEFAULT '',
  topic       TEXT DEFAULT '',
  is_admin    BOOLEAN DEFAULT false,
  status      TEXT DEFAULT 'approved',
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ── QUESTION OPTIONS
CREATE TABLE IF NOT EXISTS question_options (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  option_text TEXT NOT NULL,
  is_correct  BOOLEAN DEFAULT false,
  explanation TEXT DEFAULT ''
);

-- ── QUESTION ATTEMPTS
CREATE TABLE IF NOT EXISTS question_attempts (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id            UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id        UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_option_id UUID REFERENCES question_options(id),
  is_correct         BOOLEAN NOT NULL,
  time_taken_seconds INT DEFAULT 0,
  attempted_at       TIMESTAMPTZ DEFAULT now()
);

-- ── MENTORSHIP REQUESTS
CREATE TABLE IF NOT EXISTS mentorship_requests (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES auth.users(id),
  mentor_id  UUID NOT NULL REFERENCES auth.users(id),
  message    TEXT DEFAULT '',
  type       TEXT DEFAULT 'one_to_one',
  status     TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── STUDY SESSIONS (analytics)
CREATE TABLE IF NOT EXISTS study_sessions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type  TEXT NOT NULL,
  subject        TEXT DEFAULT '',
  duration_minutes INT DEFAULT 0,
  studied_at     TIMESTAMPTZ DEFAULT now()
);

-- ═══════════════════════════════
-- ROW LEVEL SECURITY
-- ═══════════════════════════════
ALTER TABLE student_profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE notebooks           ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts               ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_likes          ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_comments       ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups              ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_members       ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_decks     ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcards          ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_reviews   ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions           ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_options    ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_attempts   ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions      ENABLE ROW LEVEL SECURITY;

-- PROFILES
CREATE POLICY "Profiles readable by all"    ON student_profiles FOR SELECT USING (true);
CREATE POLICY "Users insert own profile"    ON student_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own profile"    ON student_profiles FOR UPDATE USING (auth.uid() = user_id);

-- NOTEBOOKS
CREATE POLICY "Own or shared notebooks"     ON notebooks FOR SELECT USING (auth.uid() = user_id OR is_shared = true);
CREATE POLICY "Users create notebooks"      ON notebooks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own notebooks"  ON notebooks FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users delete own notebooks"  ON notebooks FOR DELETE USING (auth.uid() = user_id);

-- POSTS
CREATE POLICY "Posts readable by authed"    ON posts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users create posts"          ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users update own posts"      ON posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Users delete own posts"      ON posts FOR DELETE USING (auth.uid() = author_id);

-- POST LIKES
CREATE POLICY "Likes readable"             ON post_likes FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users like posts"           ON post_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users unlike posts"         ON post_likes FOR DELETE USING (auth.uid() = user_id);

-- POST COMMENTS
CREATE POLICY "Comments readable"          ON post_comments FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users comment"              ON post_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users delete own comments"  ON post_comments FOR DELETE USING (auth.uid() = author_id);

-- GROUPS
CREATE POLICY "Groups readable by all"     ON groups FOR SELECT USING (true);

-- GROUP MEMBERS
CREATE POLICY "Members readable"           ON group_members FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users join groups"          ON group_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users leave groups"         ON group_members FOR DELETE USING (auth.uid() = user_id);

-- FLASHCARD DECKS
CREATE POLICY "Own or public decks"        ON flashcard_decks FOR SELECT USING (auth.uid() = user_id OR is_public = true);
CREATE POLICY "Users create decks"         ON flashcard_decks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own decks"     ON flashcard_decks FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users delete own decks"     ON flashcard_decks FOR DELETE USING (auth.uid() = user_id);

-- FLASHCARDS
CREATE POLICY "Flashcards readable via deck" ON flashcards FOR SELECT USING (
  EXISTS (SELECT 1 FROM flashcard_decks d WHERE d.id = deck_id AND (d.user_id = auth.uid() OR d.is_public = true))
);
CREATE POLICY "Users create flashcards"    ON flashcards FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM flashcard_decks d WHERE d.id = deck_id AND d.user_id = auth.uid())
);

-- FLASHCARD REVIEWS
CREATE POLICY "Users see own reviews"      ON flashcard_reviews FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create reviews"       ON flashcard_reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

-- QUESTIONS
CREATE POLICY "Questions readable"         ON questions FOR SELECT USING (status = 'approved');
CREATE POLICY "Users create questions"     ON questions FOR INSERT WITH CHECK (auth.uid() = creator_id);

-- QUESTION OPTIONS
CREATE POLICY "Options readable"           ON question_options FOR SELECT USING (
  EXISTS (SELECT 1 FROM questions q WHERE q.id = question_id AND q.status = 'approved')
);

-- QUESTION ATTEMPTS
CREATE POLICY "Users see own attempts"     ON question_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create attempts"      ON question_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- MENTORSHIP REQUESTS
CREATE POLICY "Users see own requests"     ON mentorship_requests FOR SELECT USING (auth.uid() = student_id OR auth.uid() = mentor_id);
CREATE POLICY "Students create requests"   ON mentorship_requests FOR INSERT WITH CHECK (auth.uid() = student_id);

-- STUDY SESSIONS
CREATE POLICY "Users see own sessions"     ON study_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users log sessions"         ON study_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ═══════════════════════════════
-- TRIGGER: auto-create profile on signup
-- ═══════════════════════════════
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.student_profiles (user_id, full_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ═══════════════════════════════
-- SEED DATA — Sample Questions
-- ═══════════════════════════════
INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status) VALUES
('A 45-year-old man presents with sudden onset chest pain radiating to the jaw and left arm, diaphoresis, and nausea. ECG shows ST elevation in leads II, III, and aVF. What is the MOST likely diagnosis?', 'mcq', 'medium', 'ST elevation in inferior leads (II, III, aVF) indicates an inferior STEMI, most commonly due to RCA occlusion.', 'Medicine', 'Cardiology', true, 'approved'),
('Which enzyme is MOST useful in diagnosing acute pancreatitis?', 'mcq', 'easy', 'Serum lipase is more sensitive and specific than amylase for acute pancreatitis and remains elevated longer.', 'Medicine', 'Gastroenterology', true, 'approved'),
('A 28-year-old woman presents with fever, joint pain, and a butterfly-shaped rash over her cheeks. ANA is positive. Which of the following is the MOST likely diagnosis?', 'mcq', 'easy', 'SLE classically presents with a malar (butterfly) rash, arthralgia, and positive ANA in young women.', 'Medicine', 'Rheumatology', true, 'approved'),
('What is the FIRST-LINE treatment for community-acquired pneumonia in an otherwise healthy outpatient?', 'mcq', 'medium', 'Amoxicillin is the recommended first-line agent for CAP in healthy adults without comorbidities per most guidelines.', 'Medicine', 'Respiratory', true, 'approved'),
('A newborn develops jaundice within the first 24 hours of life. What is the MOST concerning cause?', 'mcq', 'hard', 'Jaundice in the first 24 hours is always pathological and most commonly due to haemolytic disease (Rh or ABO incompatibility).', 'Paediatrics', 'Neonatology', true, 'approved')
ON CONFLICT DO NOTHING;

-- Seed question options
DO $$
DECLARE
  q1 UUID; q2 UUID; q3 UUID; q4 UUID; q5 UUID;
BEGIN
  SELECT id INTO q1 FROM questions WHERE stem LIKE 'A 45-year-old man presents with sudden onset chest pain%' LIMIT 1;
  SELECT id INTO q2 FROM questions WHERE stem LIKE 'Which enzyme is MOST useful%' LIMIT 1;
  SELECT id INTO q3 FROM questions WHERE stem LIKE 'A 28-year-old woman presents with fever%' LIMIT 1;
  SELECT id INTO q4 FROM questions WHERE stem LIKE 'What is the FIRST-LINE treatment%' LIMIT 1;
  SELECT id INTO q5 FROM questions WHERE stem LIKE 'A newborn develops jaundice%' LIMIT 1;

  IF q1 IS NOT NULL THEN
    INSERT INTO question_options (question_id, option_text, is_correct) VALUES
    (q1, 'Unstable Angina', false), (q1, 'Inferior STEMI', true), (q1, 'Pericarditis', false), (q1, 'Aortic Dissection', false) ON CONFLICT DO NOTHING;
  END IF;
  IF q2 IS NOT NULL THEN
    INSERT INTO question_options (question_id, option_text, is_correct) VALUES
    (q2, 'ALT', false), (q2, 'Serum Amylase', false), (q2, 'Serum Lipase', true), (q2, 'GGT', false) ON CONFLICT DO NOTHING;
  END IF;
  IF q3 IS NOT NULL THEN
    INSERT INTO question_options (question_id, option_text, is_correct) VALUES
    (q3, 'Rheumatoid Arthritis', false), (q3, 'Systemic Lupus Erythematosus', true), (q3, 'Sarcoidosis', false), (q3, 'Psoriatic Arthritis', false) ON CONFLICT DO NOTHING;
  END IF;
  IF q4 IS NOT NULL THEN
    INSERT INTO question_options (question_id, option_text, is_correct) VALUES
    (q4, 'Azithromycin', false), (q4, 'Co-amoxiclav', false), (q4, 'Amoxicillin', true), (q4, 'Ciprofloxacin', false) ON CONFLICT DO NOTHING;
  END IF;
  IF q5 IS NOT NULL THEN
    INSERT INTO question_options (question_id, option_text, is_correct) VALUES
    (q5, 'Physiological jaundice', false), (q5, 'Breast milk jaundice', false), (q5, 'Haemolytic disease of the newborn', true), (q5, 'Biliary atresia', false) ON CONFLICT DO NOTHING;
  END IF;
END $$;

-- Seed groups
INSERT INTO groups (name, description, group_type, icon, member_count, is_official) VALUES
('MBChB Study Circle', 'Official study group for MBChB students', 'programme', '🩺', 234, true),
('Anatomy Legends', 'Mastering gross and clinical anatomy together', 'subject', '🦴', 89, false),
('Clinical Skills Hub', 'Practice OSCEs, history-taking, and procedures', 'study', '💉', 156, true),
('Research & Innovation', 'Students passionate about medical research', 'research', '🔬', 42, false),
('Career Pathways', 'Specialisation, residency, and career advice', 'career', '🚀', 78, false)
ON CONFLICT DO NOTHING;