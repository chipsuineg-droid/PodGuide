-- Migration 013: MCQ Bank Expansion - quiz_sessions, quiz_session_answers, extended questions schema

-- ============================================================
-- 1. Extend the `questions` table with new metadata columns
-- ============================================================

ALTER TABLE questions
  ADD COLUMN IF NOT EXISTS question_type       text DEFAULT 'sba',          -- 'sba' | 'true_false' | 'multiple_true_false'
  ADD COLUMN IF NOT EXISTS section             text,                         -- e.g. "Cardiovascular Physiology"
  ADD COLUMN IF NOT EXISTS reference_textbook  text,                         -- mapped textbook reference
  ADD COLUMN IF NOT EXISTS course_id           text,                         -- e.g. "physiology", "anatomy"
  ADD COLUMN IF NOT EXISTS programme           text DEFAULT 'both';          -- 'mbchb' | 'bds' | 'both'

-- ============================================================
-- 2. Create `quiz_sessions` table
-- ============================================================

CREATE TABLE IF NOT EXISTS quiz_sessions (
  id                     uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id              text        NOT NULL,
  course_name            text        NOT NULL,
  section                text,                                               -- NULL means "All Sections"
  question_type          text        DEFAULT 'sba',
  difficulty             text        DEFAULT 'mixed',
  question_count         integer     NOT NULL,
  current_index          integer     DEFAULT 0,
  score                  integer     DEFAULT 0,
  question_ids           jsonb       DEFAULT '[]'::jsonb,                   -- ordered array of question ids for this session
  answers                jsonb       DEFAULT '{}'::jsonb,                   -- map of question_id -> selected option id
  started_at             timestamptz DEFAULT now(),
  completed_at           timestamptz,
  is_completed           boolean     DEFAULT false,
  programme              text        DEFAULT 'mbchb',
  timing_mode            text        DEFAULT 'off',                         -- 'off' | 'per_question' | 'whole_session'
  seconds_per_question   integer     DEFAULT 60,
  allow_pause            boolean     DEFAULT true
);

-- ============================================================
-- 3. Create `quiz_session_answers` table
-- ============================================================

CREATE TABLE IF NOT EXISTS quiz_session_answers (
  id                   uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id           uuid        REFERENCES quiz_sessions(id) ON DELETE CASCADE NOT NULL,
  question_id          text        NOT NULL,                                -- references MCQ bank question id (string, not uuid)
  selected_option_id   text,
  is_correct           boolean,
  time_taken_seconds   integer,
  answered_at          timestamptz DEFAULT now()
);

-- ============================================================
-- 4. Enable Row-Level Security on new tables
-- ============================================================

ALTER TABLE quiz_sessions        ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_session_answers ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 5. RLS policies for `quiz_sessions`
-- ============================================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'quiz_sessions'
      AND policyname = 'Users manage own quiz sessions'
  ) THEN
    CREATE POLICY "Users manage own quiz sessions"
      ON quiz_sessions FOR ALL
      USING     (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;
END
$$;

-- ============================================================
-- 6. RLS policies for `quiz_session_answers`
-- ============================================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'quiz_session_answers'
      AND policyname = 'Users manage own session answers'
  ) THEN
    CREATE POLICY "Users manage own session answers"
      ON quiz_session_answers FOR ALL
      USING (
        EXISTS (
          SELECT 1 FROM quiz_sessions
          WHERE id = quiz_session_answers.session_id
            AND user_id = auth.uid()
        )
      )
      WITH CHECK (
        EXISTS (
          SELECT 1 FROM quiz_sessions
          WHERE id = quiz_session_answers.session_id
            AND user_id = auth.uid()
        )
      );
  END IF;
END
$$;

-- ============================================================
-- 7. Performance indexes
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_id
  ON quiz_sessions(user_id);

CREATE INDEX IF NOT EXISTS idx_quiz_sessions_completed
  ON quiz_sessions(user_id, is_completed);

CREATE INDEX IF NOT EXISTS idx_quiz_session_answers_session
  ON quiz_session_answers(session_id);

-- ============================================================
-- 8. Quiz history view
-- ============================================================

CREATE OR REPLACE VIEW quiz_session_history AS
SELECT
  qs.id,
  qs.user_id,
  qs.course_name,
  qs.section,
  qs.question_type,
  qs.difficulty,
  qs.question_count,
  qs.score,
  CASE
    WHEN qs.question_count > 0
    THEN ROUND((qs.score::numeric / qs.question_count) * 100, 1)
    ELSE 0
  END AS percentage,
  qs.started_at,
  qs.completed_at,
  qs.is_completed,
  qs.programme
FROM quiz_sessions qs;
