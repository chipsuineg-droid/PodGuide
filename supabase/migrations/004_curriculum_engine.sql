-- ============================================================
-- 004_curriculum_engine.sql
-- Dynamic Curriculum Engine
-- Programs, Modules, ProgramModules + complete seed data
-- ============================================================

-- ────────────────────────────────────────────
-- 1. PROGRAMS TABLE
-- ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS programs (
  id          TEXT PRIMARY KEY,        -- 'bms', 'medicine', 'pharmacy', 'nursing'
  title       TEXT NOT NULL,
  description TEXT,
  total_levels INTEGER DEFAULT 4,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ────────────────────────────────────────────
-- 2. MODULES TABLE (Subject Catalog)
-- ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS modules (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT UNIQUE NOT NULL,   -- e.g. 'BMS101', 'MED401'
  title       TEXT NOT NULL,
  description TEXT,
  icon        TEXT DEFAULT '📚',
  credits     INTEGER DEFAULT 10,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ────────────────────────────────────────────
-- 3. PROGRAM_MODULES JUNCTION TABLE
-- ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS program_modules (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id      TEXT REFERENCES programs(id) ON DELETE CASCADE,
  academic_level  TEXT NOT NULL,      -- 'Part 1', 'Part 2', 'Year 4', etc.
  module_id       UUID REFERENCES modules(id) ON DELETE CASCADE,
  display_order   INTEGER DEFAULT 0,
  is_core         BOOLEAN DEFAULT TRUE,
  UNIQUE(program_id, academic_level, module_id)
);

-- ────────────────────────────────────────────
-- 4. EXTEND STUDENT_PROFILES
-- ────────────────────────────────────────────
ALTER TABLE student_profiles
  ADD COLUMN IF NOT EXISTS program_id     TEXT REFERENCES programs(id),
  ADD COLUMN IF NOT EXISTS academic_level TEXT;

-- ────────────────────────────────────────────
-- 5. INDEXES
-- ────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_program_modules_lookup
  ON program_modules(program_id, academic_level);

CREATE INDEX IF NOT EXISTS idx_student_profiles_program
  ON student_profiles(program_id, academic_level);

-- ────────────────────────────────────────────
-- 6. ROW LEVEL SECURITY
-- ────────────────────────────────────────────
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_modules ENABLE ROW LEVEL SECURITY;

-- Everyone can read programs and modules (they are public curriculum data)
CREATE POLICY "programs_public_read" ON programs
  FOR SELECT USING (true);

CREATE POLICY "modules_public_read" ON modules
  FOR SELECT USING (true);

CREATE POLICY "program_modules_public_read" ON program_modules
  FOR SELECT USING (true);

-- Only service role can insert/update/delete
CREATE POLICY "programs_service_write" ON programs
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "modules_service_write" ON modules
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "program_modules_service_write" ON program_modules
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- SEED DATA
-- ============================================================

-- ────────────────────────────────────────────
-- PROGRAMS
-- ────────────────────────────────────────────
INSERT INTO programs (id, title, description, total_levels) VALUES
  ('bms',          'Biomedical Sciences (BSc)',         'Foundational biomedical science degree preparing students for clinical programmes or research.',        3),
  ('medicine',     'Medicine (MBChB / MBBS)',           'Primary medical degree qualifying graduates to practise as medical doctors.',                          6),
  ('pharmacy',     'Pharmacy (BPharm / PharmD)',        'Pharmaceutical sciences degree focusing on drug therapy, dispensing, and patient care.',                4),
  ('nursing',      'Nursing (BSc / BNurs)',             'Undergraduate nursing degree qualifying graduates as registered nurses across all clinical settings.',  4),
  ('dentistry',    'Dentistry (BDS / BChD)',            'Dental surgery degree qualifying graduates to diagnose and treat oral and maxillofacial conditions.',   5),
  ('physiotherapy','Physiotherapy (BSc / BPT)',         'Allied health degree focused on movement science, rehabilitation, and musculoskeletal health.',         4),
  ('public_health','Public Health (BSc / MPH)',         'Population health degree addressing epidemiology, health promotion, and health systems.',               3),
  ('mls',          'Medical Laboratory Science (BMLS)', 'Laboratory medicine degree covering diagnostics, pathology, and clinical laboratory operations.',       4)
ON CONFLICT (id) DO NOTHING;

-- ────────────────────────────────────────────
-- MODULES — BMS
-- ────────────────────────────────────────────
INSERT INTO modules (code, title, description, icon, credits) VALUES
  ('BMS101', 'Anatomy',               'Gross anatomy of the human body including systemic and regional dissection.',                    '🦴', 15),
  ('BMS102', 'Histology',             'Microscopic structure of tissues and organs using light and electron microscopy.',                '🔬', 12),
  ('BMS103', 'Embryology',            'Human developmental biology from fertilisation through fetal development.',                       '🧬', 10),
  ('BMS104', 'Biochemistry',          'Chemical processes within living organisms, metabolism, and molecular biology.',                  '⚗️', 15),
  ('BMS105', 'Biophysics',            'Application of physics principles to biological systems and clinical instrumentation.',           '⚡', 10),
  ('BMS106', 'Heritage-Based Medicine','Traditional and indigenous medical knowledge systems in African context.',                      '🌿', 8),
  ('BMS201', 'Behavioral Sciences',   'Psychology, sociology, and communication skills in healthcare contexts.',                        '🧠', 10),
  ('BMS202', 'Pharmacology',          'Drug mechanisms, pharmacokinetics, pharmacodynamics, and adverse effects.',                      '💊', 12),
  ('BMS301', 'Histopathology',        'Microscopic diagnosis of disease through tissue examination and biopsy interpretation.',         '🔭', 15),
  ('BMS302', 'Haematology',           'Blood cell formation, disorders, haemostasis, and laboratory haematology.',                      '🩸', 12),
  ('BMS303', 'Medical Microbiology',  'Bacteriology, virology, mycology, and parasitology with clinical correlations.',                 '🦠', 15),
  ('BMS304', 'Immunology',            'Innate and adaptive immunity, immune disorders, hypersensitivity, and immunotherapy.',           '🛡️', 12)
ON CONFLICT (code) DO NOTHING;

-- ────────────────────────────────────────────
-- MODULES — MEDICINE (Year 4–6)
-- ────────────────────────────────────────────
INSERT INTO modules (code, title, description, icon, credits) VALUES
  ('MED401', 'Surgery',                   'Principles of general surgery, surgical technique, perioperative care, and common surgical conditions.', '🩹', 20),
  ('MED402', 'Internal Medicine',         'Diagnosis and management of adult medical conditions across all organ systems.',                         '🏥', 20),
  ('MED403', 'Psychiatry',               'Mental health assessment, psychiatric disorders, and evidence-based mental health management.',           '🧠', 12),
  ('MED404', 'Clinical Pharmacology',    'Rational prescribing, drug interactions, adverse effects, and therapeutics in clinical practice.',        '💊', 10),
  ('MED501', 'Obstetrics & Gynaecology', 'Antenatal care, labour, delivery, postnatal care, and gynaecological conditions.',                       '🤱', 18),
  ('MED502', 'Paediatrics',              'Child health, growth and development, neonatal medicine, and common paediatric conditions.',               '👶', 18),
  ('MED503', 'Global Health',            'Health systems, infectious diseases, social determinants of health, and global health policy.',            '🌍', 10),
  ('MED504', 'Forensic Medicine',        'Medico-legal practice, death investigation, clinical forensics, and courtroom medicine.',                  '⚖️', 8),
  ('MED601', 'Senior Surgery',           'Advanced surgical management, subspecialty rotations, operative skills assessment, and audit.',             '🏥', 20),
  ('MED602', 'Senior Internal Medicine', 'Complex case management, subspecialty medicine, evidence-based practice, and research methods.',           '📋', 20),
  ('MED603', 'Senior Obs & Gynaecology', 'High-risk obstetrics, advanced gynaecological procedures, and reproductive medicine.',                    '🤱', 18),
  ('MED604', 'Senior Paediatrics',       'Advanced child health, neonatology, adolescent medicine, and paediatric subspecialties.',                 '👶', 18)
ON CONFLICT (code) DO NOTHING;

-- ────────────────────────────────────────────
-- MODULES — PHARMACY
-- ────────────────────────────────────────────
INSERT INTO modules (code, title, description, icon, credits) VALUES
  ('PHARM101', 'Pharmaceutical Chemistry',  'Chemical structure, synthesis, and analysis of pharmaceutical compounds.',                       '⚗️', 15),
  ('PHARM102', 'Pharmacy Practice I',       'Introduction to pharmacy practice, dispensing fundamentals, and patient communication.',           '💊', 12),
  ('PHARM103', 'Human Anatomy & Physiology','Body systems relevant to pharmaceutical care and drug action.',                                   '🫀', 12),
  ('PHARM104', 'Pharmacology I',            'Basic pharmacology: receptor theory, drug classification, and autonomic pharmacology.',            '🔬', 12),
  ('PHARM201', 'Pharmacokinetics',          'Drug absorption, distribution, metabolism, excretion, and mathematical modelling.',               '📊', 15),
  ('PHARM202', 'Medicinal Chemistry',       'Drug design, structure-activity relationships, and lead optimisation.',                           '🧪', 12),
  ('PHARM203', 'Pharmacology II',           'Cardiovascular, CNS, antimicrobial, and endocrine pharmacology.',                                '💊', 15),
  ('PHARM204', 'Drug Delivery Systems',     'Formulation science, dosage form design, and novel drug delivery technologies.',                   '🎯', 12),
  ('PHARM301', 'Clinical Pharmacy I',       'Drug therapy monitoring, pharmaceutical care, and patient counselling.',                          '🏥', 15),
  ('PHARM302', 'Pharmacotherapeutics',      'Evidence-based drug therapy for common disease states and clinical decision making.',             '📋', 15),
  ('PHARM303', 'Drug Metabolism',           'Biotransformation pathways, enzyme induction/inhibition, and drug interactions.',                 '🔄', 12),
  ('PHARM304', 'Toxicology',               'Poisoning management, drug toxicity, environmental toxins, and antidote therapy.',                 '☠️', 12),
  ('PHARM401', 'Advanced Clinical Pharmacy','Complex patient care, pharmacogenomics, and personalised medicine.',                              '🎯', 15),
  ('PHARM402', 'Hospital Pharmacy',         'Inpatient pharmacy services, sterile preparation, formulary management, and clinical audit.',      '🏥', 15),
  ('PHARM403', 'Community Pharmacy',        'Retail pharmacy management, OTC medicines, public health pharmacy, and minor ailment services.',  '🏪', 12),
  ('PHARM404', 'Research Methods',          'Scientific writing, biostatistics, systematic review, and pharmacy research design.',             '📊', 10)
ON CONFLICT (code) DO NOTHING;

-- ────────────────────────────────────────────
-- MODULES — NURSING
-- ────────────────────────────────────────────
INSERT INTO modules (code, title, description, icon, credits) VALUES
  ('NURS101', 'Fundamentals of Nursing',   'Core nursing skills, patient safety, infection control, and basic clinical procedures.',           '🏥', 15),
  ('NURS102', 'Health Assessment',         'Physical examination, vital signs, history taking, and systematic patient assessment.',             '🩺', 12),
  ('NURS103', 'Nursing Microbiology',      'Pathogenic organisms, infection prevention, and evidence-based infection control in nursing.',      '🦠', 10),
  ('NURS104', 'Pharmacology for Nurses',   'Drug classifications, safe administration, calculation, and medication reconciliation.',            '💊', 12),
  ('NURS201', 'Medical-Surgical Nursing',  'Nursing care for adult patients undergoing medical and surgical treatment.',                        '🏥', 18),
  ('NURS202', 'Nutrition & Dietetics',     'Nutritional assessment, therapeutic diets, enteral and parenteral nutrition in clinical care.',     '🥗', 8),
  ('NURS203', 'Psychology for Nurses',     'Mental health, therapeutic communication, and psychosocial care in nursing practice.',             '🧠', 10),
  ('NURS204', 'Nursing Research I',        'Research literacy, evidence-based practice, and introduction to nursing research methods.',         '📊', 8),
  ('NURS301', 'Critical Care Nursing',     'ICU/HDU nursing, ventilator management, hemodynamic monitoring, and emergency response.',           '🚨', 18),
  ('NURS302', 'Maternal & Child Health',   'Antenatal, intrapartum, postnatal care, and child health nursing across the lifespan.',             '🤱', 15),
  ('NURS303', 'Psychiatric Nursing',       'Mental health nursing, therapeutic relationships, psychopharmacology, and crisis intervention.',    '🧠', 12),
  ('NURS304', 'Community Health Nursing',  'Primary health care, health promotion, community assessment, and public health nursing.',           '🏡', 12),
  ('NURS401', 'Leadership in Nursing',     'Nursing management, team leadership, quality improvement, and healthcare governance.',              '👑', 12),
  ('NURS402', 'Advanced Clinical Practice','Nurse practitioner skills, clinical decision making, and advanced procedural competencies.',        '🏥', 18),
  ('NURS403', 'Global Health Nursing',     'International nursing, disaster response, humanitarian aid, and global health equity.',             '🌍', 10),
  ('NURS404', 'Nursing Research II',       'Quantitative and qualitative research design, data analysis, and dissertation preparation.',        '📊', 12)
ON CONFLICT (code) DO NOTHING;

-- ────────────────────────────────────────────
-- PROGRAM_MODULES — BMS
-- ────────────────────────────────────────────

-- BMS Part 1
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS101'), 1),
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS102'), 2),
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS103'), 3),
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS104'), 4),
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS105'), 5),
  ('bms', 'Part 1', (SELECT id FROM modules WHERE code='BMS106'), 6)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- BMS Part 2
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('bms', 'Part 2', (SELECT id FROM modules WHERE code='BMS101'), 1),
  ('bms', 'Part 2', (SELECT id FROM modules WHERE code='BMS102'), 2),
  ('bms', 'Part 2', (SELECT id FROM modules WHERE code='BMS103'), 3),
  ('bms', 'Part 2', (SELECT id FROM modules WHERE code='BMS201'), 4),
  ('bms', 'Part 2', (SELECT id FROM modules WHERE code='BMS202'), 5)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- BMS Part 3
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('bms', 'Part 3', (SELECT id FROM modules WHERE code='BMS301'), 1),
  ('bms', 'Part 3', (SELECT id FROM modules WHERE code='BMS302'), 2),
  ('bms', 'Part 3', (SELECT id FROM modules WHERE code='BMS303'), 3),
  ('bms', 'Part 3', (SELECT id FROM modules WHERE code='BMS304'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- ────────────────────────────────────────────
-- PROGRAM_MODULES — MEDICINE
-- ────────────────────────────────────────────

-- Medicine Year 4
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('medicine', 'Year 4', (SELECT id FROM modules WHERE code='MED401'), 1),
  ('medicine', 'Year 4', (SELECT id FROM modules WHERE code='MED402'), 2),
  ('medicine', 'Year 4', (SELECT id FROM modules WHERE code='MED403'), 3),
  ('medicine', 'Year 4', (SELECT id FROM modules WHERE code='MED404'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- Medicine Year 5
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('medicine', 'Year 5', (SELECT id FROM modules WHERE code='MED501'), 1),
  ('medicine', 'Year 5', (SELECT id FROM modules WHERE code='MED502'), 2),
  ('medicine', 'Year 5', (SELECT id FROM modules WHERE code='MED503'), 3),
  ('medicine', 'Year 5', (SELECT id FROM modules WHERE code='MED504'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- Medicine Year 6
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('medicine', 'Year 6', (SELECT id FROM modules WHERE code='MED601'), 1),
  ('medicine', 'Year 6', (SELECT id FROM modules WHERE code='MED602'), 2),
  ('medicine', 'Year 6', (SELECT id FROM modules WHERE code='MED603'), 3),
  ('medicine', 'Year 6', (SELECT id FROM modules WHERE code='MED604'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- ────────────────────────────────────────────
-- PROGRAM_MODULES — PHARMACY
-- ────────────────────────────────────────────
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('pharmacy', 'Part 1', (SELECT id FROM modules WHERE code='PHARM101'), 1),
  ('pharmacy', 'Part 1', (SELECT id FROM modules WHERE code='PHARM102'), 2),
  ('pharmacy', 'Part 1', (SELECT id FROM modules WHERE code='PHARM103'), 3),
  ('pharmacy', 'Part 1', (SELECT id FROM modules WHERE code='PHARM104'), 4),
  ('pharmacy', 'Part 2', (SELECT id FROM modules WHERE code='PHARM201'), 1),
  ('pharmacy', 'Part 2', (SELECT id FROM modules WHERE code='PHARM202'), 2),
  ('pharmacy', 'Part 2', (SELECT id FROM modules WHERE code='PHARM203'), 3),
  ('pharmacy', 'Part 2', (SELECT id FROM modules WHERE code='PHARM204'), 4),
  ('pharmacy', 'Part 3', (SELECT id FROM modules WHERE code='PHARM301'), 1),
  ('pharmacy', 'Part 3', (SELECT id FROM modules WHERE code='PHARM302'), 2),
  ('pharmacy', 'Part 3', (SELECT id FROM modules WHERE code='PHARM303'), 3),
  ('pharmacy', 'Part 3', (SELECT id FROM modules WHERE code='PHARM304'), 4),
  ('pharmacy', 'Part 4', (SELECT id FROM modules WHERE code='PHARM401'), 1),
  ('pharmacy', 'Part 4', (SELECT id FROM modules WHERE code='PHARM402'), 2),
  ('pharmacy', 'Part 4', (SELECT id FROM modules WHERE code='PHARM403'), 3),
  ('pharmacy', 'Part 4', (SELECT id FROM modules WHERE code='PHARM404'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;

-- ────────────────────────────────────────────
-- PROGRAM_MODULES — NURSING
-- ────────────────────────────────────────────
INSERT INTO program_modules (program_id, academic_level, module_id, display_order) VALUES
  ('nursing', 'Part 1', (SELECT id FROM modules WHERE code='NURS101'), 1),
  ('nursing', 'Part 1', (SELECT id FROM modules WHERE code='NURS102'), 2),
  ('nursing', 'Part 1', (SELECT id FROM modules WHERE code='NURS103'), 3),
  ('nursing', 'Part 1', (SELECT id FROM modules WHERE code='NURS104'), 4),
  ('nursing', 'Part 2', (SELECT id FROM modules WHERE code='NURS201'), 1),
  ('nursing', 'Part 2', (SELECT id FROM modules WHERE code='NURS202'), 2),
  ('nursing', 'Part 2', (SELECT id FROM modules WHERE code='NURS203'), 3),
  ('nursing', 'Part 2', (SELECT id FROM modules WHERE code='NURS204'), 4),
  ('nursing', 'Part 3', (SELECT id FROM modules WHERE code='NURS301'), 1),
  ('nursing', 'Part 3', (SELECT id FROM modules WHERE code='NURS302'), 2),
  ('nursing', 'Part 3', (SELECT id FROM modules WHERE code='NURS303'), 3),
  ('nursing', 'Part 3', (SELECT id FROM modules WHERE code='NURS304'), 4),
  ('nursing', 'Part 4', (SELECT id FROM modules WHERE code='NURS401'), 1),
  ('nursing', 'Part 4', (SELECT id FROM modules WHERE code='NURS402'), 2),
  ('nursing', 'Part 4', (SELECT id FROM modules WHERE code='NURS403'), 3),
  ('nursing', 'Part 4', (SELECT id FROM modules WHERE code='NURS404'), 4)
ON CONFLICT (program_id, academic_level, module_id) DO NOTHING;
