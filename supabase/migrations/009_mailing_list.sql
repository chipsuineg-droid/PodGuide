-- Add mailing list columns to student_profiles
ALTER TABLE student_profiles
  ADD COLUMN IF NOT EXISTS subscribed_to_mailing_list BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS mailing_list_asked_at TIMESTAMPTZ;

-- Mailing list table (captures email even before full profile is created)
CREATE TABLE IF NOT EXISTS mailing_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'signup' -- 'signup', 'login_prompt', 'settings'
);

ALTER TABLE mailing_list ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view mailing list" ON mailing_list
  FOR ALL USING (
    EXISTS (SELECT 1 FROM student_profiles WHERE user_id = auth.uid() AND is_admin = true)
  );
CREATE POLICY "Users can insert own subscription" ON mailing_list
  FOR INSERT WITH CHECK (true);