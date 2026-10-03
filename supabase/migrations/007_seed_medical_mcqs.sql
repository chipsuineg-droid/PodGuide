-- ==============================================================================
-- Migration 007: Comprehensive Medical MCQ Question Bank Seed
-- Extracted from Gold-Standard References (Snell, Guyton, Robbins, Katzung, SRB, Kumar & Clark, Ghai, Langman, Junqueira)
-- ==============================================================================

DO $$
DECLARE
  v_q1 UUID; v_q2 UUID; v_q3 UUID; v_q4 UUID; v_q5 UUID;
  v_q6 UUID; v_q7 UUID; v_q8 UUID; v_q9 UUID; v_q10 UUID;
  v_q11 UUID; v_q12 UUID; v_q13 UUID; v_q14 UUID; v_q15 UUID;
BEGIN
  -- 1. Anatomy: Radial Nerve
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 23-year-old motorcyclist is brought to the emergency department after a collision. He cannot extend his wrist (wrist drop) and has loss of sensation over the dorsal aspect of the first web space. An X-ray confirms a midshaft humeral fracture. Which nerve has MOST likely been injured?',
    'mcq', 'medium',
    'The radial nerve runs in the radial (spiral) groove on the posterior surface of the midshaft humerus along with the profunda brachii artery. Fractures of the humeral shaft frequently compromise the radial nerve, paralyzing wrist and finger extensors (producing wrist drop) and causing sensory loss over the dorsal aspect of the first web space. Ref: Snell Clinical Anatomy 10th Ed.',
    'Anatomy', 'Upper Limb & Peripheral Nerves', true, 'approved'
  ) RETURNING id INTO v_q1;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q1, 'Median nerve', false, 'Median nerve injury at elbow causes loss of wrist flexion/pronation and hand of benediction.'),
  (v_q1, 'Ulnar nerve', false, 'Ulnar nerve runs behind medial epicondyle; lesion leads to claw hand.'),
  (v_q1, 'Radial nerve', true, 'Radial nerve is vulnerable in midshaft radial groove, causing wrist drop.'),
  (v_q1, 'Axillary nerve', false, 'Axillary nerve is injured in surgical neck fractures or shoulder dislocation.'),
  (v_q1, 'Musculocutaneous nerve', false, 'Innervates biceps/brachialis; rarely injured in midshaft fractures.');

  -- 2. Anatomy: Superior Laryngeal Nerve
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'During a thyroidectomy for multinodular goiter, the surgeon ligates the superior thyroid artery close to the upper pole of the thyroid gland. Which nerve is MOST at risk of inadvertent injury during this specific step?',
    'mcq', 'hard',
    'The external branch of the superior laryngeal nerve travels in close proximity to the superior thyroid artery near the superior pole. Injury paralyzes the cricothyroid muscle, resulting in a monotonic voice and loss of high-pitched phonation. Ref: Snell Clinical Anatomy 10th Ed.',
    'Anatomy', 'Head & Neck', true, 'approved'
  ) RETURNING id INTO v_q2;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q2, 'Recurrent laryngeal nerve', false, 'Recurrent laryngeal nerve is related to inferior thyroid artery at lower pole.'),
  (v_q2, 'External branch of superior laryngeal nerve', true, 'Travels alongside superior thyroid artery and innervates cricothyroid muscle.'),
  (v_q2, 'Internal branch of superior laryngeal nerve', false, 'Pierces thyrohyoid membrane for sensory innervation above vocal cords.'),
  (v_q2, 'Hypoglossal nerve', false, 'Located higher in submandibular triangle.'),
  (v_q2, 'Glossopharyngeal nerve', false, 'Located high in carotid sheath region.');

  -- 3. Physiology: Baroreceptor Reflex
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'In response to acute severe hemorrhage with a 25% loss of circulating blood volume, which compensatory physiologic mechanism is activated FIRST within seconds to restore arterial blood pressure?',
    'mcq', 'medium',
    'The arterial baroreceptor reflex responds instantaneously within seconds to a drop in arterial pressure. Reduced stretch on carotid/aortic baroreceptors triggers increased sympathetic outflow and decreased vagal tone. Ref: Guyton & Hall 14th Ed.',
    'Physiology', 'Cardiovascular Control', true, 'approved'
  ) RETURNING id INTO v_q3;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q3, 'Renin-angiotensin-aldosterone system activation', false, 'RAAS requires 10 to 30 minutes to generate vasoconstriction and hours to days for volume.'),
  (v_q3, 'Arterial baroreceptor reflex', true, 'Responds in 1 to 5 seconds by elevating heart rate and systemic vascular resistance.'),
  (v_q3, 'Renal erythropoietin secretion', false, 'Takes days to stimulate reticulocyte release from bone marrow.'),
  (v_q3, 'Transcapillary fluid shift', false, 'Takes 15 to 60 minutes for interstitial fluid to enter vascular space.'),
  (v_q3, 'Aldosterone-mediated sodium retention', false, 'Requires transcriptional synthesis of ENaC channels taking hours.');

  -- 4. Pathology: Acute Pancreatitis Fat Necrosis
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 56-year-old chronic alcoholic presents with sudden severe epigastric pain radiating directly to the back, associated with persistent vomiting and elevated serum lipase (> 3000 U/L). Biopsy of peripancreatic tissue would classically demonstrate which type of tissue necrosis?',
    'mcq', 'easy',
    'Acute pancreatitis leads to release of activated lipases, which hydrolyze triglycerides into free fatty acids that combine with calcium to form chalky-white deposits (saponification), representing enzymatic fat necrosis. Ref: Robbins & Cotran 10th Ed.',
    'Pathology', 'Cell Injury & Necrosis', true, 'approved'
  ) RETURNING id INTO v_q4;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q4, 'Coagulative necrosis', false, 'Characteristic of ischemic infarcts in solid organs like heart, kidney, spleen.'),
  (v_q4, 'Liquefactive necrosis', false, 'Seen in brain infarcts and bacterial abscesses.'),
  (v_q4, 'Fat necrosis with calcium saponification', true, 'Enzymatic hydrolysis of peripancreatic fat followed by calcium soap formation.'),
  (v_q4, 'Caseous necrosis', false, 'Characteristic of tuberculosis granulomas.'),
  (v_q4, 'Fibrinoid necrosis', false, 'Seen in immune complex vasculitis and malignant hypertension.');

  -- 5. Pharmacology: ACE Inhibitor Hyperkalemia
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 64-year-old diabetic patient with stage 3 chronic kidney disease and hypertension is prescribed an ACE inhibitor (Lisinopril). Two weeks later, repeat biochemistry reveals a serum potassium of 5.8 mmol/L. What is the molecular mechanism underlying this hyperkalemia?',
    'mcq', 'medium',
    'ACE inhibitors reduce Angiotensin II, removing stimulus for aldosterone secretion. Reduced aldosterone decreases ENaC and ROMK activity in cortical collecting ducts, impairing K+ excretion. Ref: Katzung 15th Ed.',
    'Pharmacology', 'Cardiovascular & Renal Drugs', true, 'approved'
  ) RETURNING id INTO v_q5;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q5, 'Blockade of proximal tubular potassium secretion', false, 'Potassium is primarily reabsorbed proximally.'),
  (v_q5, 'Decreased adrenal aldosterone secretion leading to reduced distal K+ excretion', true, 'Lack of Angiotensin II suppresses aldosterone-mediated distal K+ secretion.'),
  (v_q5, 'Inhibition of Na+/K+/2Cl- cotransporter in Loop of Henle', false, 'Mechanism of loop diuretics, which cause hypokalemia.'),
  (v_q5, 'Direct stimulation of renal medullary potassium symporters', false, 'ACE inhibitors do not stimulate medullary symporters.'),
  (v_q5, 'Inhibition of carbonic anhydrase', false, 'Mechanism of acetazolamide.');

  -- 6. Internal Medicine: Inferior STEMI Localization
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 58-year-old male with type 2 diabetes presents with 2 hours of crushing retrosternal chest tightness and diaphoresis. An ECG shows 3mm ST-segment elevation in leads II, III, and aVF with reciprocal depression in leads I and aVL. Which coronary artery is MOST likely occluded?',
    'mcq', 'easy',
    'Leads II, III, and aVF view the inferior LV wall, supplied in right-dominant circulation by the Posterior Descending Artery branching from the Right Coronary Artery (RCA). Ref: Kumar & Clark 10th Ed.',
    'Internal Medicine', 'Cardiology & Acute Coronary Syndromes', true, 'approved'
  ) RETURNING id INTO v_q6;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q6, 'Left anterior descending artery (LAD)', false, 'Occlusion causes anterior STEMI (V1-V4).'),
  (v_q6, 'Right coronary artery (RCA)', true, 'Supplies inferior wall via PDA in 85-90% of individuals.'),
  (v_q6, 'Left circumflex artery (LCx)', false, 'Produces lateral STEMI (I, aVL, V5, V6).'),
  (v_q6, 'Left main coronary artery (LMCA)', false, 'Causes diffuse depression with ST elevation in aVR.'),
  (v_q6, 'Obtuse marginal branch', false, 'Supplies high lateral ventricular wall.');

  -- 7. Surgery: Calot Triangle & Critical View of Safety
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 42-year-old woman with symptomatic gallstone disease is scheduled for laparoscopic cholecystectomy. During dissection of the Triangle of Calot, which structures form the classic boundaries that the surgeon must identify to achieve the Critical View of Safety?',
    'mcq', 'medium',
    'Triangle of Calot is bounded by cystic duct inferiorly, common hepatic duct medially, and inferior liver surface superiorly. The cystic artery runs inside. Ref: SRB Manual of Surgery 6th Ed.',
    'Surgery', 'Hepatobiliary Surgery', true, 'approved'
  ) RETURNING id INTO v_q7;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q7, 'Cystic duct, common hepatic duct, and inferior surface of liver', true, 'Classic anatomical Calot triangle boundaries.'),
  (v_q7, 'Common bile duct, portal vein, and hepatic artery', false, 'Portal triad structures in free edge of lesser omentum.'),
  (v_q7, 'Falciform ligament, ligamentum teres, and gallbladder fossa', false, 'Surface hepatic landmarks.'),
  (v_q7, 'Duodenum, head of pancreas, and right renal vein', false, 'Retroperitoneal landmarks during Kocherization.'),
  (v_q7, 'Right hepatic artery, left hepatic duct, and caudate lobe', false, 'High hepatic hilum structures.');

  -- 8. Paediatrics: Pyloric Stenosis
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 3-week-old first-born male infant presents with non-bilious projectile vomiting immediately after every feed. Physical examination reveals an olive-shaped mass palpable in the right upper quadrant. Which electrolyte and acid-base abnormality is classically seen?',
    'mcq', 'medium',
    'Infantile hypertrophic pyloric stenosis causes persistent loss of gastric HCl, resulting in Hypochloremic, Hypokalemic Metabolic Alkalosis with paradoxical aciduria. Ref: Ghai Essential Pediatrics 9th Ed.',
    'Paediatrics', 'Pediatric Gastrointestinal & Metabolic', true, 'approved'
  ) RETURNING id INTO v_q8;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q8, 'Hypochloremic, hypokalemic metabolic alkalosis', true, 'Classic biochemical signature of upper gastric HCl loss.'),
  (v_q8, 'Hyperchloremic, hyperkalemic metabolic acidosis', false, 'Seen in renal tubular acidosis type 4.'),
  (v_q8, 'Normochloremic high anion gap metabolic acidosis', false, 'Seen in DKA and lactic acidosis.'),
  (v_q8, 'Hypochloremic, hyperkalemic metabolic acidosis', false, 'Seen in congenital adrenal hyperplasia.'),
  (v_q8, 'Respiratory acidosis with hyperkalemia', false, 'Not a primary pulmonary disorder.');

  -- 9. Obstetrics: Eclampsia Seizure Prophylaxis
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A 28-year-old primigravida at 34 weeks gestation presents with blood pressure 165/110 mmHg, 3+ proteinuria, severe headache, and visual scotomata. What is the drug of choice for the prevention and treatment of eclamptic seizures?',
    'mcq', 'easy',
    'Magnesium sulfate (MgSO4) is the proven first-line agent for seizure prophylaxis in pre-eclampsia and treatment of eclampsia (Magpie Trial). Ref: Williams Obstetrics 26th Ed.; WHO Guidelines.',
    'Obstetrics & Gynaecology', 'Hypertensive Disorders of Pregnancy', true, 'approved'
  ) RETURNING id INTO v_q9;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q9, 'Magnesium sulfate (MgSO4)', true, 'Reduces eclampsia risk by >50% and is superior to diazepam or phenytoin.'),
  (v_q9, 'Diazepam intravenous infusion', false, 'Causes fetal hypotonia and respiratory depression; inferior efficacy.'),
  (v_q9, 'Phenytoin sodium', false, 'Demonstrated inferior to magnesium sulfate in randomized clinical trials.'),
  (v_q9, 'Sodium nitroprusside', false, 'Fetal cyanide toxicity risk.'),
  (v_q9, 'Labetalol only without anticonvulsant', false, 'Labetalol manages blood pressure but does not prevent eclamptic seizures.');

  -- 10. Embryology: Tetralogy of Fallot
  INSERT INTO questions (stem, type, difficulty, explanation, subject, topic, is_admin, status)
  VALUES (
    'A newborn is evaluated for cyanosis. Echocardiography confirms Tetralogy of Fallot. What is the primary embryological developmental defect underlying this malformation?',
    'mcq', 'medium',
    'Tetralogy of Fallot results from the anterior and superior malalignment of the conotruncal septum during division of the truncus arteriosus. Ref: Langman Medical Embryology 14th Ed.',
    'Embryology', 'Cardiovascular Development', true, 'approved'
  ) RETURNING id INTO v_q10;

  INSERT INTO question_options (question_id, option_text, is_correct, explanation) VALUES
  (v_q10, 'Anterior and superior malalignment of the conotruncal septum', true, 'Unequal division of truncus arteriosus creates all 4 anatomical components.'),
  (v_q10, 'Failure of septum primum fusion with endocardial cushions', false, 'Causes ostium primum ASD.'),
  (v_q10, 'Complete absence of spiral twisting of truncus arteriosus', false, 'Causes Transposition of the Great Arteries (TGA).'),
  (v_q10, 'Premature closure of foramen ovale in utero', false, 'Causes hypoplastic left heart syndrome.'),
  (v_q10, 'Failure of left 4th aortic arch to form', false, 'Causes interruption/coarctation of aortic arch.');

END $$;
