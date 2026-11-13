import type { MCQQuestion } from "../mcq-bank"

export const PSYCHIATRY_QUESTIONS: MCQQuestion[] = [
  {
    "id": "psych-sba-001",
    "stem": "According to DSM-5-TR, a Major Depressive Episode requires at least five symptoms present for a two-week period, which MUST include at least one of which two core cardinal symptoms?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "DSM-5-TR criteria for Major Depressive Disorder require at least 5 out of 9 symptoms (SIGECAPS) persisting for ≥2 weeks, with at least one being depressed mood or markedly diminished interest/pleasure (anhedonia).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-001-c",
        "text": "Insomnia OR Hypersomnia",
        "is_correct": false
      },
      {
        "id": "psych-sba-001-b",
        "text": "Fatigue OR Psychomotor agitation",
        "is_correct": false
      },
      {
        "id": "psych-sba-001-d",
        "text": "Feelings of worthlessness OR Guilt",
        "is_correct": false
      },
      {
        "id": "psych-sba-001-a",
        "text": "Depressed mood OR Loss of interest or pleasure (Anhedonia)",
        "is_correct": true
      },
      {
        "id": "psych-sba-001-e",
        "text": "Suicidal ideation OR Weight loss",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-002",
    "stem": "What clinical feature DEFINITIVELY differentiates Bipolar I Disorder from Bipolar II Disorder?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "A single manic episode (lasting ≥1 week or requiring hospitalization, causing marked functional impairment) suffices for Bipolar I. Bipolar II requires hypomania (≥4 days, no severe impairment/hospitalization/psychosis) plus a major depressive episode.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-002-d",
        "text": "Response only to lithium in Bipolar I and only to lamotrigine in Bipolar II",
        "is_correct": false
      },
      {
        "id": "psych-sba-002-c",
        "text": "Absence of any depressive episodes in Bipolar I disorder",
        "is_correct": false
      },
      {
        "id": "psych-sba-002-b",
        "text": "Presence of psychotic features occurring exclusively in Bipolar II",
        "is_correct": false
      },
      {
        "id": "psych-sba-002-a",
        "text": "Presence of at least ONE lifetime full Manic episode in Bipolar I; Bipolar II requires at least one Hypomanic episode and one Major Depressive episode with NO lifetime manic episodes",
        "is_correct": true
      },
      {
        "id": "psych-sba-002-e",
        "text": "Age of onset after 60 years in Bipolar I",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-003",
    "stem": "A 28-year-old man presents with 5 days of expansive mood, decreased need for sleep (sleeping 2 hours/night and feeling energized), pressured speech, grandiosity claiming he can cure cancer, and spending his life savings on sports cars. What is the most appropriate first-line pharmacotherapy?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Acute mania is treated with second-generation antipsychotics (olanzapine, risperidone, quetiapine, aripiprazole) or mood stabilizers (lithium, valproate). Antidepressant monotherapy is contraindicated as it can precipitate manic switch or cycle acceleration.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-003-a",
        "text": "Atypical Antipsychotic (e.g. Olanzapine, Quetiapine, Aripiprazole) OR Mood Stabilizer (Lithium or Valproate)",
        "is_correct": true
      },
      {
        "id": "psych-sba-003-b",
        "text": "High-dose SSRI antidepressant (e.g. Fluoxetine 40 mg daily)",
        "is_correct": false
      },
      {
        "id": "psych-sba-003-c",
        "text": "Tricyclic antidepressant (e.g. Amitriptyline 150 mg)",
        "is_correct": false
      },
      {
        "id": "psych-sba-003-e",
        "text": "Deep Brain Stimulation targeting the subcallosal cingulate",
        "is_correct": false
      },
      {
        "id": "psych-sba-003-d",
        "text": "Benzodiazepine monotherapy for 6 months",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-004",
    "stem": "Which laboratory tests are MANDATORY prior to initiating Lithium therapy and for routine maintenance monitoring?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Lithium is excreted unchanged by the kidneys and concentrates in the thyroid. Baseline and ongoing monitoring must assess renal function (creatinine/eGFR) and thyroid function (TSH), alongside regular serum lithium levels (target 0.6-1.0 mmol/L).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-004-b",
        "text": "Liver function tests (ALT/AST) and serum amylase exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-004-c",
        "text": "Complete pulmonary function tests with diffusing capacity",
        "is_correct": false
      },
      {
        "id": "psych-sba-004-d",
        "text": "Serum copper and ceruloplasmin levels",
        "is_correct": false
      },
      {
        "id": "psych-sba-004-e",
        "text": "Echocardiogram and troponin levels every 3 months",
        "is_correct": false
      },
      {
        "id": "psych-sba-004-a",
        "text": "Serum Creatinine/eGFR (renal function), Thyroid Stimulating Hormone (TSH), and baseline ECG",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-005",
    "stem": "What is the therapeutic serum concentration range for Lithium during maintenance therapy of Bipolar Disorder?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Lithium has a narrow therapeutic window: acute mania target is 0.8-1.2 mmol/L; maintenance target is 0.6-0.8 mmol/L. Toxicity begins at >1.5 mmol/L (tremor, ataxia, diarrhea, vomiting) and is life-threatening at >2.0 mmol/L.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-005-a",
        "text": "0.6 to 0.8 mmol/L (up to 1.0–1.2 mmol/L during acute mania)",
        "is_correct": true
      },
      {
        "id": "psych-sba-005-e",
        "text": "50 to 100 mcg/mL",
        "is_correct": false
      },
      {
        "id": "psych-sba-005-b",
        "text": "0.1 to 0.3 mmol/L",
        "is_correct": false
      },
      {
        "id": "psych-sba-005-d",
        "text": "3.0 to 5.0 mmol/L",
        "is_correct": false
      },
      {
        "id": "psych-sba-005-c",
        "text": "1.5 to 2.5 mmol/L (toxic range)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-006",
    "stem": "Which medication is an FDA-approved mood stabilizer that is particularly effective for preventing the DEPRESSIVE episodes of Bipolar Disorder, but carries a black box warning for Stevens-Johnson Syndrome (SJS)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Lamotrigine is effective for preventing depressive relapses in bipolar disorder. Due to the risk of severe life-threatening cutaneous adverse reactions (Stevens-Johnson syndrome / TEN), it must be titrated slowly starting at 25 mg/day.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-006-a",
        "text": "Lamotrigine",
        "is_correct": true
      },
      {
        "id": "psych-sba-006-b",
        "text": "Lithium",
        "is_correct": false
      },
      {
        "id": "psych-sba-006-d",
        "text": "Carbamazepine",
        "is_correct": false
      },
      {
        "id": "psych-sba-006-c",
        "text": "Sodium Valproate",
        "is_correct": false
      },
      {
        "id": "psych-sba-006-e",
        "text": "Haloperidol",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-007",
    "stem": "A patient on Phenelzine (an irreversible MAO inhibitor) attends a dinner party where he consumes aged red wine, mature cheddar cheese, and cured salami. Within two hours, he develops a throbbing occipital headache, palpitations, diaphoresis, and a blood pressure of 220/120 mmHg. What is the diagnosis and mechanism?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "MAO-A normally degrades dietary tyramine in the gut. MAOIs block tyramine breakdown; absorbed tyramine enters sympathetic terminals and displaces stored noradrenaline, provoking severe hypertensive crisis ('cheese reaction').",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-007-b",
        "text": "Serotonin syndrome due to excessive central 5-HT2A stimulation",
        "is_correct": false
      },
      {
        "id": "psych-sba-007-a",
        "text": "Hypertensive Crisis due to dietary Tyramine accumulation displacing stored noradrenaline into the synaptic cleft",
        "is_correct": true
      },
      {
        "id": "psych-sba-007-d",
        "text": "Acute panic attack with hyperventilation",
        "is_correct": false
      },
      {
        "id": "psych-sba-007-c",
        "text": "Neuroleptic Malignant Syndrome from dopamine receptor blockade",
        "is_correct": false
      },
      {
        "id": "psych-sba-007-e",
        "text": "Cerebral ischemic stroke from carotid stenosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-008",
    "stem": "What defines Dysthymia (Persistent Depressive Disorder, PDD) according to DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Persistent Depressive Disorder (PDD/Dysthymia) is a chronic depressive state lasting ≥2 years without symptom-free periods exceeding 2 months, accompanied by at least 2 of 6 secondary depressive symptoms.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-008-e",
        "text": "Depression that occurs exclusively in the winter months (Seasonal pattern)",
        "is_correct": false
      },
      {
        "id": "psych-sba-008-b",
        "text": "A single episode of severe depression lasting at least 6 months with psychotic features",
        "is_correct": false
      },
      {
        "id": "psych-sba-008-a",
        "text": "Depressed mood for most of the day, for more days than not, for at least TWO YEARS in adults (one year in children/adolescents), without symptom-free intervals of > 2 months",
        "is_correct": true
      },
      {
        "id": "psych-sba-008-c",
        "text": "Depressive symptoms occurring exclusively during the 5 days prior to menses",
        "is_correct": false
      },
      {
        "id": "psych-sba-008-d",
        "text": "A chronic fluctuating mood disturbance with hypomanic and mild depressive periods for 2 years (Cyclothymia)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-009",
    "stem": "What is the MOST common and effective indication for Electroconvulsive Therapy (ECT)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "ECT is the most rapidly effective treatment for major depressive episodes, reserved as first-line in emergencies: catatonia, psychotic depression, severe suicidality, or severe nutritional compromise from refusing food/water.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-009-e",
        "text": "Borderline personality disorder with chronic emptiness",
        "is_correct": false
      },
      {
        "id": "psych-sba-009-c",
        "text": "Social anxiety disorder refractory to psychotherapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-009-d",
        "text": "Obsessive-compulsive disorder without depression",
        "is_correct": false
      },
      {
        "id": "psych-sba-009-b",
        "text": "Mild adjustment disorder with depressed mood",
        "is_correct": false
      },
      {
        "id": "psych-sba-009-a",
        "text": "Severe, life-threatening Major Depression with psychotic features, acute suicidal intent, severe catatonia, or refusal to eat/drink",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-010",
    "stem": "What is the most frequent acute cognitive side effect associated with Electroconvulsive Therapy (ECT)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Cognitive side effects of ECT include transient post-ictal confusion and amnesia (retrograde for events close to treatment and anterograde during the course), minimized by unilateral non-dominant electrode placement and ultra-brief pulse width.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-010-d",
        "text": "Severe expressive aphasia lasting over 5 years",
        "is_correct": false
      },
      {
        "id": "psych-sba-010-b",
        "text": "Permanent progressive vascular dementia",
        "is_correct": false
      },
      {
        "id": "psych-sba-010-c",
        "text": "Irreversible visual hallucinations",
        "is_correct": false
      },
      {
        "id": "psych-sba-010-a",
        "text": "Retrograde and anterograde amnesia, typically transient and resolving within several weeks to months",
        "is_correct": true
      },
      {
        "id": "psych-sba-010-e",
        "text": "Complete loss of remote autobiographical childhood memories",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-011",
    "stem": "A 34-year-old woman presents with low mood, excessive daytime sleepiness (sleeping 12 hours/day), marked weight gain with carbohydrate craving, and a chronic heavy, leaden feeling in her arms and legs. She is hypersensitive to interpersonal rejection. What subtype of depression is this?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Atypical depression features mood reactivity (brightens in response to positive events) plus ≥2 of: hyperphagia/weight gain, hypersomnia, 'leaden paralysis' (heavy limbs), and long-standing rejection sensitivity.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-011-a",
        "text": "Major Depressive Disorder with Atypical Features",
        "is_correct": true
      },
      {
        "id": "psych-sba-011-b",
        "text": "Melancholic depression",
        "is_correct": false
      },
      {
        "id": "psych-sba-011-c",
        "text": "Psychotic depression",
        "is_correct": false
      },
      {
        "id": "psych-sba-011-e",
        "text": "Peripartum depression",
        "is_correct": false
      },
      {
        "id": "psych-sba-011-d",
        "text": "Catatonic depression",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-012",
    "stem": "What characterizes Major Depressive Disorder with Melancholic Features?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Melancholic features include near-total anhedonia, lack of mood reactivity, early morning awakening (at least 2 hours before usual), depression worse in morning, marked psychomotor retardation/agitation, significant anorexia/weight loss, and excessive guilt.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-012-a",
        "text": "Complete loss of pleasure in all activities (unresponsive to positive events), terminal (early morning) awakening, diurnal variation (worse in the morning), and profound psychomotor retardation or agitation",
        "is_correct": true
      },
      {
        "id": "psych-sba-012-b",
        "text": "Increased appetite, hypersomnia, and extreme mood reactivity",
        "is_correct": false
      },
      {
        "id": "psych-sba-012-e",
        "text": "Depression occurring only during the luteal phase of the menstrual cycle",
        "is_correct": false
      },
      {
        "id": "psych-sba-012-c",
        "text": "Presence of persecutory delusions and auditory hallucinations",
        "is_correct": false
      },
      {
        "id": "psych-sba-012-d",
        "text": "Catatonic stupor and waxy flexibility",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-013",
    "stem": "Which antidepressant has a unique dual mechanism of antagonizing presynaptic Alpha-2 adrenergic receptors and 5-HT2 / 5-HT3 receptors, frequently chosen for depressed patients with severe insomnia and anorexia due to its sedating and appetite-stimulating effects?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Mirtazapine is a noradrenergic and specific serotonergic antidepressant (NaSSA). By blocking alpha-2 autoreceptors/heteroreceptors and H1 histamine receptors, it promotes sleep and increases appetite/weight gain without causing sexual dysfunction.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-013-a",
        "text": "Mirtazapine",
        "is_correct": true
      },
      {
        "id": "psych-sba-013-b",
        "text": "Bupropion",
        "is_correct": false
      },
      {
        "id": "psych-sba-013-e",
        "text": "Sertraline",
        "is_correct": false
      },
      {
        "id": "psych-sba-013-d",
        "text": "Fluoxetine",
        "is_correct": false
      },
      {
        "id": "psych-sba-013-c",
        "text": "Venlafaxine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-014",
    "stem": "Which antidepressant is contraindicated in patients with a history of Seizures, Bulimia Nervosa, or Anorexia Nervosa due to lowering of the seizure threshold?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Bupropion (a norepinephrine-dopamine reuptake inhibitor, NDRI) lowers the seizure threshold in a dose-dependent manner and is strictly contraindicated in patients with eating disorders (electrolyte-induced seizure risk) or epilepsy.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-014-c",
        "text": "Escitalopram",
        "is_correct": false
      },
      {
        "id": "psych-sba-014-b",
        "text": "Duloxetine",
        "is_correct": false
      },
      {
        "id": "psych-sba-014-e",
        "text": "Citalopram",
        "is_correct": false
      },
      {
        "id": "psych-sba-014-d",
        "text": "Mirtazapine",
        "is_correct": false
      },
      {
        "id": "psych-sba-014-a",
        "text": "Bupropion",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-015",
    "stem": "What is the recommended duration of continuation antidepressant therapy after achieving full symptomatic remission in a FIRST episode of unipolar major depressive disorder?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Guidelines recommend continuing antidepressant therapy at the full effective dose for at least 6-9 months after remission to prevent relapse in a first episode. Long-term maintenance (years or lifelong) is reserved for recurrent MDD (≥3 episodes).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-015-c",
        "text": "2 to 4 weeks only",
        "is_correct": false
      },
      {
        "id": "psych-sba-015-d",
        "text": "Lifelong therapy regardless of recurrence risk",
        "is_correct": false
      },
      {
        "id": "psych-sba-015-e",
        "text": "Exactly 5 years",
        "is_correct": false
      },
      {
        "id": "psych-sba-015-b",
        "text": "Stop the medication immediately as soon as the patient feels normal",
        "is_correct": false
      },
      {
        "id": "psych-sba-015-a",
        "text": "6 to 9 months at the full therapeutic dose that achieved remission",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-016",
    "stem": "Postpartum Blues (Baby Blues) is differentiated from Postpartum Depression by which clinical features?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Baby blues affects up to 50-80% of mothers: starts days 2-3, peaks day 5, and resolves by day 10-14 with reassurance/support. Symptoms lasting >2 weeks or causing functional impairment represent postpartum depression.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-016-d",
        "text": "Requires immediate electroconvulsive therapy and infant removal",
        "is_correct": false
      },
      {
        "id": "psych-sba-016-b",
        "text": "Severe depressive symptoms with psychotic command hallucinations to harm the infant",
        "is_correct": false
      },
      {
        "id": "psych-sba-016-c",
        "text": "Onset 6 months postpartum that persists for years",
        "is_correct": false
      },
      {
        "id": "psych-sba-016-a",
        "text": "Onset within 2-3 days postpartum, mild tearfulness and emotional lability, resolves spontaneously within 10-14 days without functional impairment or suicidal ideation",
        "is_correct": true
      },
      {
        "id": "psych-sba-016-e",
        "text": "Occurs exclusively after surgical cesarean section deliveries",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-017",
    "stem": "Which medication used in psychiatry is associated with Ebstein's Anomaly (downward displacement of the tricuspid valve) when taken during the first trimester of pregnancy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "First-trimester lithium exposure carries a small but statistically significant risk of Ebstein's anomaly (tricuspid valve apical displacement and RV atrialization; relative risk ~10x baseline, absolute risk ~1 in 1000).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-017-e",
        "text": "Haloperidol",
        "is_correct": false
      },
      {
        "id": "psych-sba-017-c",
        "text": "Carbamazepine",
        "is_correct": false
      },
      {
        "id": "psych-sba-017-d",
        "text": "Fluoxetine",
        "is_correct": false
      },
      {
        "id": "psych-sba-017-a",
        "text": "Lithium",
        "is_correct": true
      },
      {
        "id": "psych-sba-017-b",
        "text": "Sodium Valproate (causes neural tube defects)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-018",
    "stem": "Sodium Valproate taken during pregnancy is associated with a 1-2% risk of which major congenital malformation in the fetus?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Valproate is strongly teratogenic: 1-2% risk of spina bifida/neural tube defects (folate antagonism), craniofacial dysmorphism, cardiovascular anomalies, and significant neurodevelopmental delays/autism.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-018-d",
        "text": "Renal agenesis",
        "is_correct": false
      },
      {
        "id": "psych-sba-018-e",
        "text": "Transposition of the great arteries",
        "is_correct": false
      },
      {
        "id": "psych-sba-018-c",
        "text": "Phocomelia",
        "is_correct": false
      },
      {
        "id": "psych-sba-018-b",
        "text": "Ebstein's anomaly",
        "is_correct": false
      },
      {
        "id": "psych-sba-018-a",
        "text": "Neural Tube Defects (Spina Bifida and Anencephaly)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-019",
    "stem": "Cyclothymic Disorder is defined in DSM-5-TR as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Cyclothymic disorder is a mild, chronic mood disturbance persisting for ≥2 years, featuring fluctuating subthreshold hypomanic and subthreshold depressive episodes without fulfilling full criteria for major depression or mania.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-019-d",
        "text": "Rapid mood swings occurring 4 or more times within a single day",
        "is_correct": false
      },
      {
        "id": "psych-sba-019-b",
        "text": "Alternating severe mania and severe depression over a 6-month period",
        "is_correct": false
      },
      {
        "id": "psych-sba-019-e",
        "text": "Mood swings triggered exclusively by alcohol consumption",
        "is_correct": false
      },
      {
        "id": "psych-sba-019-a",
        "text": "At least 2 years (1 year in children) of numerous periods with hypomanic symptoms that do not meet full criteria for hypomania, and depressive symptoms that do not meet full criteria for major depression",
        "is_correct": true
      },
      {
        "id": "psych-sba-019-c",
        "text": "Depression occurring only during the luteal phase of the menstrual cycle",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-020",
    "stem": "In the assessment of Suicidal Risk, which demographic and clinical factor carries the HIGHEST predictive risk for completed suicide?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "A prior suicide attempt is the single strongest clinical predictor of completed suicide. Other high-risk factors include male sex, older age, living alone/unmarried, active substance abuse, hopelessness, and access to lethal means.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-020-e",
        "text": "Active employment",
        "is_correct": false
      },
      {
        "id": "psych-sba-020-a",
        "text": "A prior history of suicide attempts",
        "is_correct": true
      },
      {
        "id": "psych-sba-020-b",
        "text": "Female gender (females attempt more often, but males complete more)",
        "is_correct": false
      },
      {
        "id": "psych-sba-020-c",
        "text": "Married marital status",
        "is_correct": false
      },
      {
        "id": "psych-sba-020-d",
        "text": "Absence of psychiatric illness",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-021",
    "stem": "A patient being treated with high-dose Venlafaxine should undergo regular clinical monitoring for which adverse physiological effect?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Venlafaxine inhibits serotonin reuptake at low doses, but at higher doses (>150-225 mg/day) it inhibits norepinephrine reuptake, which can cause dose-dependent sustained increases in blood pressure.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-021-a",
        "text": "Dose-dependent Elevation of Systemic Arterial Blood Pressure (Hypertension)",
        "is_correct": true
      },
      {
        "id": "psych-sba-021-b",
        "text": "Severe orthostatic hypotension and bradycardia",
        "is_correct": false
      },
      {
        "id": "psych-sba-021-c",
        "text": "Acute angle-closure glaucoma",
        "is_correct": false
      },
      {
        "id": "psych-sba-021-d",
        "text": "Hypokalemia and metabolic acidosis",
        "is_correct": false
      },
      {
        "id": "psych-sba-021-e",
        "text": "Aplastic anemia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-022",
    "stem": "Esketamine nasal spray and intravenous Ketamine have been introduced for treatment-resistant depression due to their rapid antidepressant effect mediated by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Mood Disorders",
    "programme": "mbchb",
    "explanation": "Ketamine and Esketamine are non-competitive NMDA receptor antagonists that trigger rapid glutamate surges, activating AMPA receptors and synaptogenesis via BDNF and mTOR pathways, producing antidepressant effects within hours.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-022-b",
        "text": "Potent selective inhibition of serotonin transporters (SERT)",
        "is_correct": false
      },
      {
        "id": "psych-sba-022-a",
        "text": "Antagonism of N-methyl-D-aspartate (NMDA) glutamate receptors and downstream stimulation of AMPA receptors and BDNF",
        "is_correct": true
      },
      {
        "id": "psych-sba-022-e",
        "text": "Blockade of GABA-A receptor chloride channels",
        "is_correct": false
      },
      {
        "id": "psych-sba-022-c",
        "text": "Irreversible inhibition of monoamine oxidase A and B",
        "is_correct": false
      },
      {
        "id": "psych-sba-022-d",
        "text": "Direct stimulation of postsynaptic dopamine D2 receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-023",
    "stem": "According to DSM-5-TR, a diagnosis of Schizophrenia requires continuous signs of disturbance for at least SIX MONTHS, including at least one month of active-phase symptoms that MUST include at least one of which three core symptoms?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "DSM-5-TR Schizophrenia requires at least 2 Criterion A symptoms for ≥1 month (active phase), and at least ONE must be a 'positive' core symptom: Delusions, Hallucinations, or Disorganized speech.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-023-c",
        "text": "Anhedonia, Avolition, or Affective flattening",
        "is_correct": false
      },
      {
        "id": "psych-sba-023-d",
        "text": "Depression, Anxiety, or Insomnia",
        "is_correct": false
      },
      {
        "id": "psych-sba-023-e",
        "text": "Cognitive impairment, Memory loss, or Tremor",
        "is_correct": false
      },
      {
        "id": "psych-sba-023-b",
        "text": "Grossly disorganized behavior, Catatonia, or Apathy",
        "is_correct": false
      },
      {
        "id": "psych-sba-023-a",
        "text": "Delusions, Hallucinations, OR Disorganized Speech",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-024",
    "stem": "Schneider's First-Rank Symptoms of Schizophrenia include all of the following EXCEPT:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Kurt Schneider's first-rank symptoms: audible thoughts (thought echo), voices arguing, voices commenting, thought insertion/withdrawal/broadcasting, delusions of control (passivity), and delusional perception. Elementary visual hallucinations are non-specific.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-024-d",
        "text": "Thought Insertion, Thought Withdrawal, and Thought Broadcasting",
        "is_correct": false
      },
      {
        "id": "psych-sba-024-a",
        "text": "Visual hallucinations of geometric flashing lights",
        "is_correct": true
      },
      {
        "id": "psych-sba-024-c",
        "text": "Running commentary auditory hallucinations",
        "is_correct": false
      },
      {
        "id": "psych-sba-024-b",
        "text": "Third-person auditory hallucinations (voices discussing or arguing about the patient)",
        "is_correct": false
      },
      {
        "id": "psych-sba-024-e",
        "text": "Passivity phenomena (delusions of being controlled in actions, impulses, or feelings)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-025",
    "stem": "What is the primary difference in duration that distinguishes Brief Psychotic Disorder, Schizophreniform Disorder, and Schizophrenia?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "The duration criterion is key: Brief Psychotic Disorder lasts between 1 day and 1 month with full return to baseline; Schizophreniform Disorder lasts from 1 month to less than 6 months; Schizophrenia requires persistent signs for ≥6 months.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-025-c",
        "text": "There is no difference in duration; they differ only by the presence of mania",
        "is_correct": false
      },
      {
        "id": "psych-sba-025-b",
        "text": "Brief Psychotic Disorder: < 24 hours; Schizophreniform: < 1 year; Schizophrenia: > 5 years",
        "is_correct": false
      },
      {
        "id": "psych-sba-025-e",
        "text": "Schizophreniform disorder requires lifetime hospitalization",
        "is_correct": false
      },
      {
        "id": "psych-sba-025-a",
        "text": "Brief Psychotic Disorder: 1 day to < 1 month; Schizophreniform Disorder: 1 month to < 6 months; Schizophrenia: >= 6 months",
        "is_correct": true
      },
      {
        "id": "psych-sba-025-d",
        "text": "Brief Psychotic Disorder is drug-induced; the others are purely genetic",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-026",
    "stem": "What defines Schizoaffective Disorder in DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Schizoaffective disorder requires: 1) concurrent mood episode and active psychotic symptoms; 2) psychotic symptoms (hallucinations/delusions) persisting for ≥2 weeks in the ABSENCE of prominent mood symptoms.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-026-e",
        "text": "Schizophrenia treated successfully with an antidepressant",
        "is_correct": false
      },
      {
        "id": "psych-sba-026-c",
        "text": "Bipolar I disorder with psychotic symptoms occurring exclusively during severe mania",
        "is_correct": false
      },
      {
        "id": "psych-sba-026-b",
        "text": "A patient with schizophrenia who occasionally feels sad for a few hours",
        "is_correct": false
      },
      {
        "id": "psych-sba-026-d",
        "text": "Major depression with mood-congruent delusions occurring only during the depressive nadir",
        "is_correct": false
      },
      {
        "id": "psych-sba-026-a",
        "text": "An uninterrupted period of illness during which there is a major mood episode concurrent with Criterion A of schizophrenia, PLUS delusions or hallucinations for at least TWO WEEKS in the ABSENCE of a major mood episode",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-027",
    "stem": "What characterizes Delusional Disorder in DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Delusional disorder features persistent, non-bizarre or bizarre delusions for ≥1 month in the absence of other schizophrenic symptoms (no prominent hallucinations, disorganized speech, or negative symptoms) with preserved daily functioning.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-027-b",
        "text": "Prominent visual and olfactory hallucinations occurring throughout the day",
        "is_correct": false
      },
      {
        "id": "psych-sba-027-a",
        "text": "The presence of one (or more) delusions with a duration of at least 1 month, where functioning is NOT markedly impaired and behavior is NOT obviously bizarre or odd (apart from the impact of the delusion)",
        "is_correct": true
      },
      {
        "id": "psych-sba-027-c",
        "text": "Severe cognitive decline with prominent disorganized speech and avolition",
        "is_correct": false
      },
      {
        "id": "psych-sba-027-d",
        "text": "Delusions that fluctuate hour by hour with marked disorientation to time and place",
        "is_correct": false
      },
      {
        "id": "psych-sba-027-e",
        "text": "Catatonic posturing and mutism lasting over 6 months",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-028",
    "stem": "Which dopamine pathway is hypothesized to be HYPERACTIVE in schizophrenia, mediating POSITIVE symptoms (hallucinations, delusions)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Positive symptoms arise from hyperactive dopamine D2 transmission in the mesolimbic pathway. Negative/cognitive symptoms relate to hypoactive dopamine transmission in the mesocortical pathway to prefrontal cortex.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-028-d",
        "text": "Tuberoinfundibular Dopamine Pathway (hypothalamus to pituitary, controls prolactin)",
        "is_correct": false
      },
      {
        "id": "psych-sba-028-a",
        "text": "Mesolimbic Dopamine Pathway (ventral tegmental area to nucleus accumbens)",
        "is_correct": true
      },
      {
        "id": "psych-sba-028-e",
        "text": "Thalamostriatal pathway",
        "is_correct": false
      },
      {
        "id": "psych-sba-028-b",
        "text": "Mesocortical Dopamine Pathway (VTA to prefrontal cortex, hypoactive mediating negative symptoms)",
        "is_correct": false
      },
      {
        "id": "psych-sba-028-c",
        "text": "Nigrostriatal Dopamine Pathway (substantia nigra to dorsal striatum, controls motor movement)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-029",
    "stem": "Blockade of dopamine D2 receptors in the Tuberoinfundibular Pathway by first-generation antipsychotics (e.g. Haloperidol) causes which endocrine adverse effect?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Dopamine tonically inhibits prolactin release. Antipsychotic D2 receptor blockade in the tuberoinfundibular pathway removes this brake, causing hyperprolactinemia, galactorrhea, amenorrhea, and gynecomastia.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-029-c",
        "text": "Secondary hypothyroidism from TSH suppression",
        "is_correct": false
      },
      {
        "id": "psych-sba-029-b",
        "text": "Hypoglycemia due to excessive insulin release",
        "is_correct": false
      },
      {
        "id": "psych-sba-029-e",
        "text": "Diabetes insipidus from vasopressin deficiency",
        "is_correct": false
      },
      {
        "id": "psych-sba-029-d",
        "text": "Adrenal insufficiency from ACTH inhibition",
        "is_correct": false
      },
      {
        "id": "psych-sba-029-a",
        "text": "Hyperprolactinemia (leading to galactorrhea, amenorrhea, gynecomastia, and sexual dysfunction)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-030",
    "stem": "Extrapyramidal Symptoms (EPS) caused by antipsychotic antagonism of D2 receptors in the Nigrostriatal pathway include all of the following EXCEPT:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "EPS results from D2 blockade in the nigrostriatal pathway: acute dystonia (hours-days), akathisia (days-weeks), pseudoparkinsonism (weeks-months), and tardive dyskinesia (months-years). Hypotension is due to alpha-1 adrenergic antagonism.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-030-d",
        "text": "Pseudoparkinsonism (bradykinesia, cogwheel rigidity, masked facies, resting tremor)",
        "is_correct": false
      },
      {
        "id": "psych-sba-030-c",
        "text": "Akathisia (subjective inner restlessness and compulsion to move legs)",
        "is_correct": false
      },
      {
        "id": "psych-sba-030-b",
        "text": "Acute Dystonia (involuntary muscle spasms, oculogyric crisis, torticollis)",
        "is_correct": false
      },
      {
        "id": "psych-sba-030-e",
        "text": "Tardive Dyskinesia (choreoathetoid movements of tongue, face, and lips after chronic use)",
        "is_correct": false
      },
      {
        "id": "psych-sba-030-a",
        "text": "Severe orthostatic hypotension and syncope (mediated by alpha-1 adrenergic blockade)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-031",
    "stem": "A 22-year-old man with schizophrenia is started on Haloperidol. Three hours after his second dose, his head is forcefully turned to the left (torticollis) and his eyes are rolled upwards and locked (oculogyric crisis). What is the immediate treatment of choice?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Acute dystonic reaction is an acute dopamine/acetylcholine imbalance caused by potent D2 antagonism. Prompt parenteral administration of an anticholinergic (benztropine 1-2 mg or diphenhydramine 50 mg IM/IV) rapidly aborts the spasm.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-031-a",
        "text": "Intravenous or Intramuscular Anticholinergic (Benztropine or Diphenhydramine)",
        "is_correct": true
      },
      {
        "id": "psych-sba-031-d",
        "text": "Subcutaneous Epinephrine",
        "is_correct": false
      },
      {
        "id": "psych-sba-031-e",
        "text": "Immediate hemodialysis",
        "is_correct": false
      },
      {
        "id": "psych-sba-031-b",
        "text": "High-dose IV Haloperidol to overcome receptor resistance",
        "is_correct": false
      },
      {
        "id": "psych-sba-031-c",
        "text": "Intravenous Dantrolene or Bromocriptine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-032",
    "stem": "A 30-year-old man treated with Fluphenazine develops high fever (40.2°C), severe 'lead-pipe' muscle rigidity, autonomic instability (fluctuating BP, tachycardia, profuse diaphoresis), altered mental status, and a serum Creatine Kinase (CK) of 45,000 U/L. What is the diagnosis and initial management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "NMS is a life-threatening reaction to D2 antagonists characterized by tetrad: hyperthermia, extreme rigidity ('lead-pipe'), autonomic instability, and altered mental state, with elevated CK. Stop neuroleptic immediately; give dantrolene (ryanodine antagonist) or bromocriptine (dopamine agonist).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-032-a",
        "text": "Neuroleptic Malignant Syndrome (NMS); immediately discontinue antipsychotic, provide aggressive supportive ICU care, and administer Dantrolene or Bromocriptine",
        "is_correct": true
      },
      {
        "id": "psych-sba-032-b",
        "text": "Serotonin Syndrome; administer Cyproheptadine and continue antipsychotic",
        "is_correct": false
      },
      {
        "id": "psych-sba-032-e",
        "text": "Acute bacterial meningitis; start IV ceftriaxone alone",
        "is_correct": false
      },
      {
        "id": "psych-sba-032-d",
        "text": "Catatonic stupor; administer high-dose haloperidol",
        "is_correct": false
      },
      {
        "id": "psych-sba-032-c",
        "text": "Malignant Hyperthermia; administer inhalational isoflurane",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-033",
    "stem": "What clinical feature reliably differentiates Serotonin Syndrome from Neuroleptic Malignant Syndrome?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Neuromuscular features distinguish them: Serotonin syndrome presents with hyperreflexia, tremor, and prominent clonus (often ocular); NMS presents with severe generalized hyporeflexic 'lead-pipe' rigidity and rhabdomyolysis.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-033-a",
        "text": "Serotonin syndrome typically exhibits Hyperreflexia, Clonus (inducible, spontaneous, or ocular), and rapid onset (hours), whereas NMS exhibits 'lead-pipe' rigidity, Hyporeflexia, and develops over days to weeks",
        "is_correct": true
      },
      {
        "id": "psych-sba-033-d",
        "text": "Serotonin syndrome occurs only in patients > 65 years old",
        "is_correct": false
      },
      {
        "id": "psych-sba-033-b",
        "text": "NMS features fever whereas Serotonin Syndrome never causes fever",
        "is_correct": false
      },
      {
        "id": "psych-sba-033-e",
        "text": "NMS causes pupil dilatation whereas Serotonin syndrome causes miosis",
        "is_correct": false
      },
      {
        "id": "psych-sba-033-c",
        "text": "Serotonin syndrome causes leukocytosis whereas NMS does not",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-034",
    "stem": "Which atypical (second-generation) antipsychotic is the MOST effective agent for Treatment-Resistant Schizophrenia and reducing suicidal behavior in schizophrenia?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Clozapine is the gold standard for treatment-resistant schizophrenia (failure of ≥2 adequate trials of other antipsychotics) and is the only antipsychotic with proven efficacy in reducing completed suicides.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-034-c",
        "text": "Risperidone",
        "is_correct": false
      },
      {
        "id": "psych-sba-034-b",
        "text": "Olanzapine",
        "is_correct": false
      },
      {
        "id": "psych-sba-034-a",
        "text": "Clozapine",
        "is_correct": true
      },
      {
        "id": "psych-sba-034-d",
        "text": "Quetiapine",
        "is_correct": false
      },
      {
        "id": "psych-sba-034-e",
        "text": "Ziprasidone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-035",
    "stem": "Clozapine requires mandatory regular Complete Blood Count (CBC) monitoring because of the risk of which potentially fatal hematological adverse effect?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Clozapine carries a 0.8-1% risk of severe agranulocytosis (ANC < 500/mcL). Strict national monitoring registries mandate weekly CBCs for the first 6 months, fortnightly for months 6-12, and monthly thereafter.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-035-d",
        "text": "Severe autoimmune hemolytic anemia",
        "is_correct": false
      },
      {
        "id": "psych-sba-035-c",
        "text": "Acute lymphoblastic leukemia",
        "is_correct": false
      },
      {
        "id": "psych-sba-035-e",
        "text": "Thrombotic thrombocytopenic purpura (TTP)",
        "is_correct": false
      },
      {
        "id": "psych-sba-035-b",
        "text": "Aplastic anemia with complete pancytopenia",
        "is_correct": false
      },
      {
        "id": "psych-sba-035-a",
        "text": "Agranulocytosis (Absolute Neutrophil Count < 500/mcL, occurring in ~1% of patients)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-036",
    "stem": "In addition to agranulocytosis, Clozapine carries black-box warnings for which serious adverse effects?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Clozapine carries black-box warnings for agranulocytosis, seizures (dose-dependent), myocarditis/cardiomyopathy (greatest risk in first month), severe constipation/ileus, and orthostatic hypotension/cardiac arrest.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-036-c",
        "text": "Acute angle-closure glaucoma and renal failure",
        "is_correct": false
      },
      {
        "id": "psych-sba-036-e",
        "text": "Aortic dissection and thyroid storm",
        "is_correct": false
      },
      {
        "id": "psych-sba-036-d",
        "text": "Severe hypercalcemia and nephrolithiasis",
        "is_correct": false
      },
      {
        "id": "psych-sba-036-b",
        "text": "Pulmonary fibrosis and hepatic failure exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-036-a",
        "text": "Myocarditis / Cardiomyopathy, Seizures, Orthostatic hypotension/syncope, and Severe gastrointestinal hypomotility (paralytic ileus)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-037",
    "stem": "Which second-generation antipsychotic has the HIGHEST risk of causing Metabolic Syndrome, profound weight gain, dyslipidemia, and new-onset Type 2 Diabetes Mellitus?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Olanzapine and Clozapine carry the greatest risk of weight gain, insulin resistance, hypertriglyceridemia, and diabetic ketoacidosis. Aripiprazole, ziprasidone, and lurasidone are metabolically weight-neutral.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-037-d",
        "text": "Lurasidone",
        "is_correct": false
      },
      {
        "id": "psych-sba-037-e",
        "text": "Haloperidol",
        "is_correct": false
      },
      {
        "id": "psych-sba-037-b",
        "text": "Aripiprazole",
        "is_correct": false
      },
      {
        "id": "psych-sba-037-a",
        "text": "Olanzapine (and Clozapine)",
        "is_correct": true
      },
      {
        "id": "psych-sba-037-c",
        "text": "Ziprasidone",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-038",
    "stem": "Aripiprazole has a unique pharmacodynamic profile compared to other antipsychotics because it functions as a:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Aripiprazole is a dopamine D2 partial agonist: in areas of dopamine excess (mesolimbic), it acts as an antagonist; in areas of low dopamine (mesocortical), it acts as an agonist, minimizing EPS and hyperprolactinemia.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-038-d",
        "text": "Direct stimulant of gamma-aminobutyric acid (GABA) release",
        "is_correct": false
      },
      {
        "id": "psych-sba-038-a",
        "text": "Partial Agonist at Dopamine D2 and Serotonin 5-HT1A receptors, and antagonist at 5-HT2A receptors",
        "is_correct": true
      },
      {
        "id": "psych-sba-038-b",
        "text": "Pure irreversible antagonist at dopamine D2 receptors",
        "is_correct": false
      },
      {
        "id": "psych-sba-038-c",
        "text": "Selective norepinephrine reuptake inhibitor",
        "is_correct": false
      },
      {
        "id": "psych-sba-038-e",
        "text": "Pure full agonist at dopamine D1 receptors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-039",
    "stem": "Which second-generation antipsychotic is available as a long-acting injectable (depot) and is notorious for causing dose-dependent Hyperprolactinemia even at modest therapeutic doses?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Risperidone and its active metabolite Paliperidone are potent D2 antagonists that poorly cross the blood-brain barrier relative to other SGAs, heavily blocking the pituitary tuberoinfundibular pathway and causing marked hyperprolactinemia.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-039-c",
        "text": "Clozapine",
        "is_correct": false
      },
      {
        "id": "psych-sba-039-b",
        "text": "Quetiapine",
        "is_correct": false
      },
      {
        "id": "psych-sba-039-a",
        "text": "Risperidone (and Paliperidone)",
        "is_correct": true
      },
      {
        "id": "psych-sba-039-d",
        "text": "Aripiprazole",
        "is_correct": false
      },
      {
        "id": "psych-sba-039-e",
        "text": "Asenapine",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-040",
    "stem": "Tardive Dyskinesia (TD) is a potentially irreversible motor complication of long-term dopamine receptor antagonist therapy, characterized by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Tardive dyskinesia results from chronic D2 receptor upregulation and hypersensitivity in the striatum. Manifests as involuntary orofacial dyskinesias (chewing, lip-smacking, tongue thrusting/fly-catching) and choreiform limb movements.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-040-d",
        "text": "Mask-like facies with a 4 Hz resting pill-rolling tremor",
        "is_correct": false
      },
      {
        "id": "psych-sba-040-b",
        "text": "Sudden sustained contractions of neck muscles",
        "is_correct": false
      },
      {
        "id": "psych-sba-040-a",
        "text": "Involuntary, repetitive, choreoathetoid movements of the tongue, lips, mouth (grimacing, lip-smacking, tongue protrusion), and extremities, caused by D2 receptor supersensitivity",
        "is_correct": true
      },
      {
        "id": "psych-sba-040-e",
        "text": "Sudden episodes of cataplexy triggered by laughter",
        "is_correct": false
      },
      {
        "id": "psych-sba-040-c",
        "text": "Subjective urge to constantly walk around the room",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-041",
    "stem": "Which novel vesicular monoamine transporter 2 (VMAT2) inhibitors are FDA-approved specifically for the treatment of Tardive Dyskinesia?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Valbenazine and deutetrabenazine inhibit presynaptic VMAT2, decreasing dopamine packaging into synaptic vesicles and reducing dopamine release, suppressing tardive dyskinesia symptoms. Anticholinergics worsen TD.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-041-a",
        "text": "Valbenazine and Deutetrabenazine",
        "is_correct": true
      },
      {
        "id": "psych-sba-041-b",
        "text": "Benztropine and Trihexyphenidyl (anticholinergics worsen tardive dyskinesia)",
        "is_correct": false
      },
      {
        "id": "psych-sba-041-e",
        "text": "Pramipexole and Ropinirole",
        "is_correct": false
      },
      {
        "id": "psych-sba-041-c",
        "text": "Haloperidol and Chlorpromazine",
        "is_correct": false
      },
      {
        "id": "psych-sba-041-d",
        "text": "Carbidopa-Levodopa",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-042",
    "stem": "Capgras Delusion (a delusional misidentification syndrome) is characterized by the fixed belief that:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Capgras syndrome involves failure to connect facial recognition with affective familiarity: the patient recognizes the person looks identical, but lacking the emotional response, concludes they are an imposter.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-042-e",
        "text": "A stranger of high social status is secretly in love with the patient (Erotomania)",
        "is_correct": false
      },
      {
        "id": "psych-sba-042-d",
        "text": "One is infected with parasites or insects crawling under the skin (Ekbom syndrome)",
        "is_correct": false
      },
      {
        "id": "psych-sba-042-c",
        "text": "One's internal organs are rotting or dead, or that one does not exist (Cotard syndrome)",
        "is_correct": false
      },
      {
        "id": "psych-sba-042-b",
        "text": "A single persecutor is adopting various physical disguises (Fregoli delusion)",
        "is_correct": false
      },
      {
        "id": "psych-sba-042-a",
        "text": "A familiar person (spouse, parent, or close friend) has been replaced by an identical imposter or clone",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-043",
    "stem": "Cotard Delusion (walking corpse syndrome) is defined by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Cotard's syndrome is a severe nihilistic delusion seen in psychotic depression or schizophrenia, in which the patient maintains that they have died, lost their blood or viscera, or that the world has ended.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-043-e",
        "text": "The belief that they possess unlimited divine power and wealth",
        "is_correct": false
      },
      {
        "id": "psych-sba-043-d",
        "text": "The conviction that body parts are misshapen or hideous (body dysmorphic)",
        "is_correct": false
      },
      {
        "id": "psych-sba-043-c",
        "text": "The delusion that their romantic partner is unfaithful without evidence (Othello syndrome)",
        "is_correct": false
      },
      {
        "id": "psych-sba-043-b",
        "text": "The belief that external forces are controlling their motor movements",
        "is_correct": false
      },
      {
        "id": "psych-sba-043-a",
        "text": "Nihilistic delusions where the patient believes that they are dead, putrefying, have lost their internal organs, or have ceased to exist",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-044",
    "stem": "Catatonia, which can occur in mood disorders, schizophrenia, or medical conditions, is characterized by which motor signs?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Psychotic Disorders",
    "programme": "mbchb",
    "explanation": "Catatonia features motor dysfunction including stupor (immobility), mutism, waxy flexibility (slight resistance to repositioning), catalepsy, negativism, and echophenomena. Lorazepam (Bush-Francis protocol) and ECT are first-line treatments.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-044-a",
        "text": "Stupor, Mutism, Catalepsy (passive induction of a posture held against gravity), Waxy Flexibility, Negativism, and Echolalia/Echopraxia",
        "is_correct": true
      },
      {
        "id": "psych-sba-044-d",
        "text": "Severe hemiballismus caused by subthalamic nucleus stroke",
        "is_correct": false
      },
      {
        "id": "psych-sba-044-b",
        "text": "Rapid choreiform jerking movements of all four limbs",
        "is_correct": false
      },
      {
        "id": "psych-sba-044-e",
        "text": "Repetitive complex motor tics preceded by premonitory urges",
        "is_correct": false
      },
      {
        "id": "psych-sba-044-c",
        "text": "Resting pill-rolling tremor with intact verbal output",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-045",
    "stem": "What is the defining clinical feature of Panic Disorder according to DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Panic disorder requires recurrent, unexpected panic attacks (abrupt surge of intense fear peaking within minutes) followed by ≥1 month of persistent worry about recurrent attacks/consequences or avoidance behavior.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-045-c",
        "text": "Panic attacks that occur exclusively in the presence of a feared specific stimulus (e.g. spiders)",
        "is_correct": false
      },
      {
        "id": "psych-sba-045-b",
        "text": "Chronic, excessive, uncontrollable worry about multiple everyday life domains for at least 6 months",
        "is_correct": false
      },
      {
        "id": "psych-sba-045-d",
        "text": "Anxiety triggered exclusively when speaking in public forums",
        "is_correct": false
      },
      {
        "id": "psych-sba-045-a",
        "text": "Recurrent UNEXPECTED Panic Attacks, followed by at least ONE MONTH of persistent concern about having additional attacks or maladaptive behavioral changes to avoid attacks",
        "is_correct": true
      },
      {
        "id": "psych-sba-045-e",
        "text": "Transient anxiety episodes lasting less than 30 seconds",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-046",
    "stem": "What characterizes Agoraphobia in DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Agoraphobia is fear/anxiety in ≥2 of 5 specific situations (public transit, open spaces, enclosed spaces, lines/crowds, outside home alone) due to fear of escape difficulty or lack of help if panic/incapacitating symptoms occur.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-046-c",
        "text": "Irrational terror of dogs, heights, or enclosed elevators alone",
        "is_correct": false
      },
      {
        "id": "psych-sba-046-b",
        "text": "Intense fear of negative evaluation and embarrassment during social interactions",
        "is_correct": false
      },
      {
        "id": "psych-sba-046-a",
        "text": "Marked, persistent fear or anxiety about TWO or more situations: using public transit, being in open spaces, being in enclosed spaces, standing in line/crowds, or being outside the home alone (due to fear that escape might be difficult or help unavailable)",
        "is_correct": true
      },
      {
        "id": "psych-sba-046-d",
        "text": "Compulsive checking of locks and appliances before leaving the residence",
        "is_correct": false
      },
      {
        "id": "psych-sba-046-e",
        "text": "Anxiety caused by remembering a past traumatic event",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-047",
    "stem": "Generalized Anxiety Disorder (GAD) is diagnosed when excessive, uncontrollable anxiety and worry about a number of events or activities occur for at least:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "GAD requires chronic, excessive, difficult-to-control worry occurring more days than not for ≥6 months about multiple domains, accompanied by ≥3 of 6 somatic symptoms (only 1 needed in children).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-047-b",
        "text": "Two weeks, accompanied by depressed mood and anhedonia",
        "is_correct": false
      },
      {
        "id": "psych-sba-047-d",
        "text": "One year, without any symptom-free days",
        "is_correct": false
      },
      {
        "id": "psych-sba-047-e",
        "text": "Three consecutive days of panic attacks",
        "is_correct": false
      },
      {
        "id": "psych-sba-047-a",
        "text": "SIX MONTHS, accompanied by at least three somatic symptoms (restlessness, fatigue, poor concentration, irritability, muscle tension, sleep disturbance)",
        "is_correct": true
      },
      {
        "id": "psych-sba-047-c",
        "text": "One month, following a specific acute psychological stressor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-048",
    "stem": "What is the FIRST-LINE pharmacological treatment for both long-term management of Generalized Anxiety Disorder and Panic Disorder?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "SSRIs (escitalopram, sertraline) and SNRIs (venlafaxine, duloxetine) are the first-line pharmacotherapies for GAD, Panic Disorder, and Social Anxiety Disorder due to proven efficacy and lack of abuse/dependence potential.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-048-e",
        "text": "Tricyclic antidepressants (e.g. Amitriptyline) exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-048-a",
        "text": "Selective Serotonin Reuptake Inhibitors (SSRIs) or Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)",
        "is_correct": true
      },
      {
        "id": "psych-sba-048-d",
        "text": "Beta-blockers (e.g. Propranolol) as continuous monotherapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-048-b",
        "text": "Long-term continuous daily Benzodiazepines (e.g. Clonazepam 2 mg TDS)",
        "is_correct": false
      },
      {
        "id": "psych-sba-048-c",
        "text": "Atypical antipsychotics (e.g. Olanzapine 10 mg)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-049",
    "stem": "What is the primary psychotherapeutic treatment modality with the strongest empirical evidence base for Panic Disorder and Specific Phobias?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "CBT is the psychological gold standard for anxiety disorders. For panic disorder, CBT utilizes interoceptive exposure (deliberately inducing panic sensations to extinguish catastrophic misinterpretation); for phobias, graded exposure is curative.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-049-c",
        "text": "Eye Movement Desensitization and Reprocessing (EMDR) exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-049-b",
        "text": "Long-term psychoanalytic psychotherapy focusing on childhood dreams",
        "is_correct": false
      },
      {
        "id": "psych-sba-049-a",
        "text": "Cognitive Behavioral Therapy (CBT), including interoceptive exposure (for panic) and graded in vivo exposure (for phobias)",
        "is_correct": true
      },
      {
        "id": "psych-sba-049-d",
        "text": "Family systems therapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-049-e",
        "text": "Hypnotherapy with age regression",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-050",
    "stem": "Social Anxiety Disorder (Social Phobia) is distinguished from Generalized Social Avoidance by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Social anxiety disorder involves intense fear of scrutiny, humiliation, or negative evaluation in social situations (conversations, meeting unfamiliar people, eating in public, giving a speech), leading to active avoidance.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-050-a",
        "text": "Marked, persistent fear of social or performance situations where the individual is exposed to potential scrutiny, embarrassment, or negative evaluation by others",
        "is_correct": true
      },
      {
        "id": "psych-sba-050-b",
        "text": "Fear of being attacked by wild animals in public parks",
        "is_correct": false
      },
      {
        "id": "psych-sba-050-d",
        "text": "Paranoid delusions that strangers are undercover police agents",
        "is_correct": false
      },
      {
        "id": "psych-sba-050-e",
        "text": "Loss of memory for past social interactions",
        "is_correct": false
      },
      {
        "id": "psych-sba-050-c",
        "text": "Severe physical pain when shaking hands with strangers",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-051",
    "stem": "Which medication is widely used on an as-needed basis for Performance-Only Social Anxiety Disorder (e.g. public speaking or stage fright) to block peripheral sympathetic autonomic manifestations?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Propranolol (10-40 mg taken 30-60 minutes before an event) blocks peripheral beta-1 and beta-2 receptors, blunting physical symptoms of sympathetic activation (tremor, palpitations, diaphoresis, voice quivering) without sedation.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-051-a",
        "text": "Propranolol (non-selective beta-adrenergic blocker, 10-40 mg taken 30-60 minutes before the performance)",
        "is_correct": true
      },
      {
        "id": "psych-sba-051-b",
        "text": "Alprazolam 2 mg",
        "is_correct": false
      },
      {
        "id": "psych-sba-051-c",
        "text": "Haloperidol 5 mg",
        "is_correct": false
      },
      {
        "id": "psych-sba-051-d",
        "text": "Lithium carbonate 300 mg",
        "is_correct": false
      },
      {
        "id": "psych-sba-051-e",
        "text": "Fluoxetine 20 mg immediately before walking on stage",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-052",
    "stem": "Buspirone is an anxiolytic indicated for Generalized Anxiety Disorder. What is its unique pharmacological mechanism and clinical advantage?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Buspirone is a 5-HT1A partial agonist effective for GAD. Unlike benzodiazepines, it lacks sedative, anticonvulsant, muscle-relaxant, or abuse properties, but requires 2-4 weeks of daily dosing for therapeutic onset.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-052-d",
        "text": "Irreversible inhibitor of monoamine oxidase B",
        "is_correct": false
      },
      {
        "id": "psych-sba-052-a",
        "text": "Partial agonist at Serotonin 5-HT1A receptors; does NOT cause sedation, motor impairment, tolerance, physical dependence, or withdrawal, and does not interact with alcohol",
        "is_correct": true
      },
      {
        "id": "psych-sba-052-e",
        "text": "Direct agonist at mu-opioid receptors",
        "is_correct": false
      },
      {
        "id": "psych-sba-052-b",
        "text": "Positive allosteric modulator of GABA-A receptors with instant onset of action",
        "is_correct": false
      },
      {
        "id": "psych-sba-052-c",
        "text": "Potent antagonist at dopamine D2 receptors preventing psychosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-053",
    "stem": "Why are Benzodiazepines restricted to short-term (2 to 4 weeks) or acute crisis use in anxiety management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Benzodiazepines enhance GABA-A chloride conductance. Chronic use leads to receptor down-regulation, tolerance, physical dependence, cognitive blunting, fall risk in elderly, and a severe withdrawal syndrome (anxiety, tremors, seizures, delirium).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-053-c",
        "text": "Permanent destruction of GABA-A receptor proteins",
        "is_correct": false
      },
      {
        "id": "psych-sba-053-d",
        "text": "Severe nephrotoxicity requiring routine hemodialysis",
        "is_correct": false
      },
      {
        "id": "psych-sba-053-b",
        "text": "High risk of inducing aplastic anemia within 48 hours",
        "is_correct": false
      },
      {
        "id": "psych-sba-053-a",
        "text": "Rapid development of tolerance, high risk of physical and psychological dependence, cognitive/motor impairment, and potentially life-threatening withdrawal seizures upon abrupt cessation",
        "is_correct": true
      },
      {
        "id": "psych-sba-053-e",
        "text": "Guaranteed transformation into bipolar disorder",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-054",
    "stem": "What is the defining distinction between Obsessions and Compulsions in Obsessive-Compulsive Disorder (OCD)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Obsessions are intrusive, distressing thoughts, urges, or images (contamination, harm, symmetry). Compulsions are repetitive physical (handwashing, checking) or mental (counting, praying) acts performed to neutralize the anxiety.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-054-a",
        "text": "Obsessions are recurrent, intrusive, unwanted thoughts, urges, or images causing marked distress; Compulsions are repetitive behaviors or mental acts performed to reduce that anxiety according to rigid rules",
        "is_correct": true
      },
      {
        "id": "psych-sba-054-b",
        "text": "Obsessions are physical actions; Compulsions are mental images",
        "is_correct": false
      },
      {
        "id": "psych-sba-054-c",
        "text": "Obsessions are ego-syntonic; Compulsions are ego-dystonic",
        "is_correct": false
      },
      {
        "id": "psych-sba-054-d",
        "text": "Obsessions are psychotic delusions; Compulsions are motor tics",
        "is_correct": false
      },
      {
        "id": "psych-sba-054-e",
        "text": "Obsessions occur only in adults; Compulsions occur only in children",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-055",
    "stem": "What is the psychotherapeutic gold standard for Obsessive-Compulsive Disorder (OCD)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Exposure and Response Prevention (ERP, a form of CBT) is the most effective psychotherapy for OCD: patients are systematically exposed to obsession triggers and prevented from performing the anxiety-reducing compulsive rituals until habituation occurs.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-055-b",
        "text": "Supportive counseling without exposure",
        "is_correct": false
      },
      {
        "id": "psych-sba-055-d",
        "text": "Interpersonal psychotherapy (IPT)",
        "is_correct": false
      },
      {
        "id": "psych-sba-055-a",
        "text": "Exposure and Response Prevention (ERP)",
        "is_correct": true
      },
      {
        "id": "psych-sba-055-c",
        "text": "Psychoanalysis focusing on free association",
        "is_correct": false
      },
      {
        "id": "psych-sba-055-e",
        "text": "Hypnotic suggestion",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-056",
    "stem": "Which pharmacological agents are first-line for Obsessive-Compulsive Disorder, and how do their required doses and trial durations compare to those used for Major Depression?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Pharmacotherapy for OCD requires high doses of SSRIs (e.g. sertraline up to 200-400 mg/day, fluoxetine up to 80 mg/day) or the potent serotonin-reuptake inhibitor TCA Clomipramine, with clinical response taking 8-12 weeks.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-056-a",
        "text": "SSRIs (or Clomipramine); requiring HIGHER doses and LONGER trial durations (10 to 12 weeks) than typical for depression",
        "is_correct": true
      },
      {
        "id": "psych-sba-056-b",
        "text": "Lower doses of SSRIs with response seen within 3 to 5 days",
        "is_correct": false
      },
      {
        "id": "psych-sba-056-d",
        "text": "First-generation antipsychotics as monotherapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-056-c",
        "text": "Benzodiazepines alone at high doses for 2 weeks",
        "is_correct": false
      },
      {
        "id": "psych-sba-056-e",
        "text": "Anticonvulsants like carbamazepine exclusively",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-057",
    "stem": "Post-Traumatic Stress Disorder (PTSD) requires exposure to actual or threatened death, serious injury, or sexual violence, with symptoms persisting for at least:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "PTSD requires symptoms across 4 clusters (intrusion, avoidance, negative alterations in cognition/mood, and hyperarousal) lasting >1 month causing functional impairment. Symptoms lasting 3 days to 1 month represent Acute Stress Disorder.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-057-a",
        "text": "ONE MONTH (symptoms lasting from 3 days to 1 month are diagnosed as Acute Stress Disorder)",
        "is_correct": true
      },
      {
        "id": "psych-sba-057-b",
        "text": "24 hours following the traumatic event",
        "is_correct": false
      },
      {
        "id": "psych-sba-057-c",
        "text": "Six consecutive months",
        "is_correct": false
      },
      {
        "id": "psych-sba-057-d",
        "text": "Two years",
        "is_correct": false
      },
      {
        "id": "psych-sba-057-e",
        "text": "Two weeks without nightmares",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-058",
    "stem": "What are the four symptom clusters of PTSD defined in DSM-5-TR?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "PTSD diagnostic criteria: 1) Intrusion (flashbacks, nightmares); 2) Avoidance (of trauma-related stimuli); 3) Negative cognitions/mood (detachment, persistent blame, guilt); 4) Arousal/reactivity (hypervigilance, exaggerated startle, irritability).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-058-c",
        "text": "Depression, Mania, Hypomania, and Euthymia",
        "is_correct": false
      },
      {
        "id": "psych-sba-058-e",
        "text": "Depersonalization, Derealization, Dissociative fugue, and Amnesia",
        "is_correct": false
      },
      {
        "id": "psych-sba-058-d",
        "text": "Anxiety, Phobia, Obsession, and Compulsion",
        "is_correct": false
      },
      {
        "id": "psych-sba-058-b",
        "text": "Hallucinations, Delusions, Disorganized speech, and Catatonia",
        "is_correct": false
      },
      {
        "id": "psych-sba-058-a",
        "text": "Intrusion symptoms, Persistent Avoidance, Negative alterations in cognitions and mood, and Marked alterations in arousal and reactivity",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-059",
    "stem": "Which medication is specifically used as an effective adjunctive treatment to reduce Trauma-Related Nightmares and sleep disruption in patients with PTSD?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Prazosin is a lipophilic alpha-1 adrenergic receptor antagonist that crosses the blood-brain barrier and suppresses excessive central noradrenergic hyperactivation during REM sleep, significantly reducing nightmares and sleep trauma in PTSD.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-059-b",
        "text": "Propranolol",
        "is_correct": false
      },
      {
        "id": "psych-sba-059-a",
        "text": "Prazosin (centrally active Alpha-1 adrenergic antagonist)",
        "is_correct": true
      },
      {
        "id": "psych-sba-059-e",
        "text": "Haloperidol",
        "is_correct": false
      },
      {
        "id": "psych-sba-059-c",
        "text": "Zolpidem",
        "is_correct": false
      },
      {
        "id": "psych-sba-059-d",
        "text": "Clonazepam",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-060",
    "stem": "Body Dysmorphic Disorder (BDD) is characterized by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "BDD involves distressing preoccupation with perceived aesthetic flaws (skin, hair, nose, symmetry) that are unnoticeable to others, associated with repetitive mirror checking, camouflaging, and compulsive cosmetic surgery seeking.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-060-d",
        "text": "Deliberate production or feigning of physical symptoms to assume the sick role (Factitious Disorder)",
        "is_correct": false
      },
      {
        "id": "psych-sba-060-c",
        "text": "Fear of having a serious undiagnosed medical illness based on misinterpretation of bodily sensations (Illness Anxiety Disorder)",
        "is_correct": false
      },
      {
        "id": "psych-sba-060-b",
        "text": "Severe distortion of body weight leading to self-starvation (Anorexia Nervosa)",
        "is_correct": false
      },
      {
        "id": "psych-sba-060-a",
        "text": "Preoccupation with one or more perceived defects or flaws in physical appearance that are NOT observable or appear slight to others, driving repetitive behaviors (mirror checking, excessive grooming, skin picking)",
        "is_correct": true
      },
      {
        "id": "psych-sba-060-e",
        "text": "A somatic delusion that an alien limb has been transplanted onto the body",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-061",
    "stem": "Trichotillomania is classified in DSM-5-TR under Obsessive-Compulsive and Related Disorders and is defined as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Trichotillomania is characterized by recurrent pulling out of one's hair (scalp, eyebrows, eyelashes), producing noticeable patchy alopecia, preceded by rising tension and followed by relief, treated with Habit Reversal Training.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-061-e",
        "text": "Cutting other individuals' hair without consent",
        "is_correct": false
      },
      {
        "id": "psych-sba-061-a",
        "text": "Recurrent pulling out of one's own hair resulting in hair loss, despite repeated attempts to decrease or stop the behavior",
        "is_correct": true
      },
      {
        "id": "psych-sba-061-b",
        "text": "Compulsive scratching of normal skin until ulcerations form (Excoriation disorder)",
        "is_correct": false
      },
      {
        "id": "psych-sba-061-c",
        "text": "An obsession with washing hair five times a day",
        "is_correct": false
      },
      {
        "id": "psych-sba-061-d",
        "text": "The delusion that hair is contaminated with parasitic lice",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-062",
    "stem": "Illness Anxiety Disorder (formerly Hypochondriasis) differs from Somatic Symptom Disorder in that Illness Anxiety Disorder:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "In Illness Anxiety Disorder, anxiety centers on the fear of having an undiagnosed life-threatening illness, but somatic symptoms are absent or mild. In Somatic Symptom Disorder, prominent distressing physical symptoms are present.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-062-c",
        "text": "Involves intentional simulation of illness for external financial gain (Malingering)",
        "is_correct": false
      },
      {
        "id": "psych-sba-062-e",
        "text": "Features complete lack of health-related anxiety",
        "is_correct": false
      },
      {
        "id": "psych-sba-062-a",
        "text": "Features preoccupation with HAVING or ACQUIRING a serious undiagnosed disease, with MINIMAL or ABSENT somatic symptoms",
        "is_correct": true
      },
      {
        "id": "psych-sba-062-d",
        "text": "Is characterized by pseudoneurological symptoms like non-epileptic seizures",
        "is_correct": false
      },
      {
        "id": "psych-sba-062-b",
        "text": "Features multiple prominent, distressing physical somatic complaints (e.g. chronic pain, fatigue)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-063",
    "stem": "Conversion Disorder (Functional Neurological Symptom Disorder) is characterized by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Conversion disorder features neurological deficits (weakness, sensory loss, blindness, functional seizures) that demonstrate positive clinical evidence of internal inconsistency (e.g. Hoover's sign, tubular visual fields, preserved pupillary light reflex).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-063-b",
        "text": "Intentional feigning of symptoms for secondary financial gain (Malingering)",
        "is_correct": false
      },
      {
        "id": "psych-sba-063-d",
        "text": "Physical symptoms resulting directly from a confirmed acute cerebral infarction",
        "is_correct": false
      },
      {
        "id": "psych-sba-063-c",
        "text": "Fabrication of symptoms on one's child to assume the sick role (Factitious disorder imposed on another)",
        "is_correct": false
      },
      {
        "id": "psych-sba-063-e",
        "text": "Preoccupation with normal laboratory findings",
        "is_correct": false
      },
      {
        "id": "psych-sba-063-a",
        "text": "One or more symptoms of altered voluntary motor or sensory function (e.g. paralysis, non-epileptic seizures, blindness) that are INCOMPATIBLE with recognized neurological or medical conditions",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-064",
    "stem": "What is the hallmark clinical finding of 'La Belle Indifférence' traditionally associated with Conversion Disorder?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "'La belle indifférence' describes a relative lack of appropriate emotional concern about a severe disabling symptom (e.g., smiling while reporting complete bilateral lower extremity paralysis), seen in some patients with conversion disorder.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-064-a",
        "text": "A paradoxical lack of emotional concern or distress displayed by the patient regarding the profound nature of their sudden physical disability",
        "is_correct": true
      },
      {
        "id": "psych-sba-064-d",
        "text": "Intense paranoia towards medical nursing staff",
        "is_correct": false
      },
      {
        "id": "psych-sba-064-c",
        "text": "Severe violent agitation requiring chemical restraint",
        "is_correct": false
      },
      {
        "id": "psych-sba-064-b",
        "text": "Uncontrollable hysterical crying and dramatic theatrical behavior",
        "is_correct": false
      },
      {
        "id": "psych-sba-064-e",
        "text": "Depressive guilt leading to immediate suicidal gestures",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-065",
    "stem": "Malingering is defined in DSM-5-TR as:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Malingering is NOT a psychiatric mental illness, but an intentional fabrication or exaggeration of symptoms for clear secondary gain: financial compensation, disability benefits, evading criminal prosecution, or obtaining narcotics.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-065-e",
        "text": "An anxiety disorder triggered by hospital settings",
        "is_correct": false
      },
      {
        "id": "psych-sba-065-d",
        "text": "A delusional disorder with grandiose bodily convictions",
        "is_correct": false
      },
      {
        "id": "psych-sba-065-c",
        "text": "A somatic symptom disorder caused by unconscious psychological conflict",
        "is_correct": false
      },
      {
        "id": "psych-sba-065-b",
        "text": "The intentional fabrication of symptoms to assume the sick role without external incentives (Factitious Disorder)",
        "is_correct": false
      },
      {
        "id": "psych-sba-065-a",
        "text": "The intentional production of false or grossly exaggerated physical or psychological symptoms motivated by EXTERNAL INCENTIVES (avoiding military duty, avoiding criminal prosecution, obtaining financial compensation, or drugs)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-066",
    "stem": "Factitious Disorder Imposed on Another (Munchausen Syndrome by Proxy) involves:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Anxiety Disorders",
    "programme": "mbchb",
    "explanation": "Factitious Disorder Imposed on Another is a severe form of abuse: a perpetrator (commonly the mother) fabricates or induces illness in a victim (e.g. poisoning with insulin, contaminating urine samples) to assume the sick role by proxy.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-066-e",
        "text": "A genetic syndrome causing multiple somatic anomalies in siblings",
        "is_correct": false
      },
      {
        "id": "psych-sba-066-c",
        "text": "A physician mistakenly ordering unnecessary surgical procedures",
        "is_correct": false
      },
      {
        "id": "psych-sba-066-b",
        "text": "A child inventing imaginary illnesses to avoid attending school",
        "is_correct": false
      },
      {
        "id": "psych-sba-066-d",
        "text": "A caregiver neglecting a dependent elderly relative without fabrication",
        "is_correct": false
      },
      {
        "id": "psych-sba-066-a",
        "text": "Falsification of physical or psychological signs or symptoms, or induction of injury or disease, in ANOTHER individual (typically a child by a parent), in the absence of obvious external rewards",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-067",
    "stem": "According to DSM-5-TR, Substance Use Disorder is diagnosed when a patient exhibits a problematic pattern of substance use leading to clinically significant impairment or distress, defined by at least two criteria across which four functional groupings?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "DSM-5-TR integrates abuse and dependence into a single continuum across 11 criteria in 4 domains: Impaired control (1-4), Social impairment (5-7), Risky use (8-9), and Pharmacological (10-11: tolerance and withdrawal). Mild: 2-3; Moderate: 4-5; Severe: ≥6.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-067-d",
        "text": "Intoxication, Overdose, Coma, and Death",
        "is_correct": false
      },
      {
        "id": "psych-sba-067-a",
        "text": "Impaired control, Social impairment, Risky use, and Pharmacological criteria (Tolerance and Withdrawal)",
        "is_correct": true
      },
      {
        "id": "psych-sba-067-b",
        "text": "Financial ruin, Incarceration, Physical violence, and Divorce",
        "is_correct": false
      },
      {
        "id": "psych-sba-067-e",
        "text": "Daily use, Morning use, Solitary use, and Weekend binging",
        "is_correct": false
      },
      {
        "id": "psych-sba-067-c",
        "text": "Genetic predisposition, Childhood trauma, Unemployment, and Homelessness",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-068",
    "stem": "At what time window following the cessation or reduction of heavy, prolonged alcohol intake does Delirium Tremens (DTs) typically peak?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Timeline of alcohol withdrawal: 6-12h: tremors, diaphoresis, nausea; 12-24h: alcoholic hallucinosis (tactile/visual, clear sensorium); 24-48h: withdrawal seizures; 48-96h: Delirium Tremens (fluctuating delirium, autonomic hyperactivity, fever, mortality up to 5-15%).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-068-d",
        "text": "24 to 48 hours post-cessation (withdrawal seizures)",
        "is_correct": false
      },
      {
        "id": "psych-sba-068-c",
        "text": "12 to 24 hours post-cessation (alcoholic hallucinosis)",
        "is_correct": false
      },
      {
        "id": "psych-sba-068-e",
        "text": "Over 2 weeks later",
        "is_correct": false
      },
      {
        "id": "psych-sba-068-b",
        "text": "6 to 12 hours post-cessation (minor tremulousness and insomnia)",
        "is_correct": false
      },
      {
        "id": "psych-sba-068-a",
        "text": "48 to 96 hours (2 to 4 days) post-cessation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-069",
    "stem": "What is the FIRST-LINE pharmacological management for severe acute Alcohol Withdrawal and Delirium Tremens?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Benzodiazepines are the gold standard for alcohol withdrawal: they act as cross-tolerant GABA-A positive allosteric modulators, suppressing autonomic hyperactivity and preventing seizures and DTs. Lorazepam is preferred in hepatic impairment.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-069-c",
        "text": "Anticonvulsants (e.g. Phenytoin) exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-069-b",
        "text": "Antipsychotics (e.g. Haloperidol) as monotherapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-069-d",
        "text": "Beta-blockers (e.g. Propranolol) alone",
        "is_correct": false
      },
      {
        "id": "psych-sba-069-a",
        "text": "Benzodiazepines (e.g. Diazepam, Chlordiazepoxide, or Lorazepam)",
        "is_correct": true
      },
      {
        "id": "psych-sba-069-e",
        "text": "Intravenous ethanol infusion",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-070",
    "stem": "Wernicke Encephalopathy is caused by a severe deficiency of Thiamine (Vitamin B1) and is classically characterized by which clinical triad?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Wernicke encephalopathy is an acute neuroemergency due to thiamine deficiency (poor nutrition and impaired absorption in chronic alcoholism). Triad: confusion, ataxia, ophthalmoplegia/nystagmus. High-dose IV thiamine must be given BEFORE IV glucose.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-070-d",
        "text": "Tremor, rigidity, and bradykinesia (Parkinsonism)",
        "is_correct": false
      },
      {
        "id": "psych-sba-070-c",
        "text": "Chorea, dementia, and psychiatric symptoms (Huntington disease)",
        "is_correct": false
      },
      {
        "id": "psych-sba-070-e",
        "text": "Fever, neck stiffness, and photophobia (Meningitis)",
        "is_correct": false
      },
      {
        "id": "psych-sba-070-b",
        "text": "Severe memory loss, confabulation, and visual agnosia (Korsakoff syndrome)",
        "is_correct": false
      },
      {
        "id": "psych-sba-070-a",
        "text": "Encephalopathy (confusion/altered mental status), Oculomotor dysfunction (nystagmus, bilateral lateral rectus palsy), and Gait Ataxia",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-071",
    "stem": "Why MUST intravenous Thiamine be administered BEFORE or CONCURRENTLY with intravenous Dextrose in a malnourished patient with suspected alcohol use disorder?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Thiamine is a cofactor for enzymes in glucose metabolism (PDH, alpha-KGDH, transketolase). Giving glucose without thiamine accelerates cellular metabolic crises in thiamine-depleted brains, precipitating acute Wernicke encephalopathy.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-071-e",
        "text": "Glucose suppresses thiamine absorption across the blood-brain barrier",
        "is_correct": false
      },
      {
        "id": "psych-sba-071-b",
        "text": "Thiamine directly binds glucose to form an active transport complex",
        "is_correct": false
      },
      {
        "id": "psych-sba-071-a",
        "text": "Glucose metabolism requires Thiamine as a mandatory cofactor (pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase); administering glucose alone rapidly depletes remaining thiamine stores, precipitating acute Wernicke encephalopathy or irreversible Korsakoff psychosis",
        "is_correct": true
      },
      {
        "id": "psych-sba-071-c",
        "text": "Dextrose degrades thiamine into a toxic neurotoxic metabolite",
        "is_correct": false
      },
      {
        "id": "psych-sba-071-d",
        "text": "Thiamine prevents the development of acute diabetic ketoacidosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-072",
    "stem": "Korsakoff Syndrome, which frequently follows untreated or inadequately treated Wernicke encephalopathy, is characterized neuropathologically by lesions in the mammillary bodies and mediodorsal thalamus, producing:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Korsakoff syndrome is a chronic amnestic disorder characterized by anterograde amnesia (inability to form new declarative memories), retrograde amnesia, and spontaneous or provoked Confabulation (unconsciously filling memory gaps with fabricated plausible stories).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-072-d",
        "text": "Profound cortical blindness with visual anosognosia (Anton syndrome)",
        "is_correct": false
      },
      {
        "id": "psych-sba-072-b",
        "text": "Severe expressive aphasia and apraxia",
        "is_correct": false
      },
      {
        "id": "psych-sba-072-a",
        "text": "Severe Anterograde Amnesia, Retrograde Amnesia, and Confabulation with preserved general intellect",
        "is_correct": true
      },
      {
        "id": "psych-sba-072-e",
        "text": "Sudden episodes of daytime cataplexy",
        "is_correct": false
      },
      {
        "id": "psych-sba-072-c",
        "text": "Complete loss of long-term procedural motor skills",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-073",
    "stem": "Which medication is an FDA-approved treatment for Alcohol Dependence that acts as an irreversible inhibitor of Aldehyde Dehydrogenase (ALDH)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Disulfiram blocks ALDH, causing toxic acetaldehyde accumulation if ethanol is consumed. This causes flushing, throbbing headache, nausea, vomiting, diaphoresis, and hypotension (disulfiram-ethanol reaction) to serve as an aversive deterrent.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-073-e",
        "text": "Methadone",
        "is_correct": false
      },
      {
        "id": "psych-sba-073-d",
        "text": "Varenicline (nicotinic partial agonist)",
        "is_correct": false
      },
      {
        "id": "psych-sba-073-c",
        "text": "Acamprosate (NMDA receptor modulator)",
        "is_correct": false
      },
      {
        "id": "psych-sba-073-b",
        "text": "Naltrexone (mu-opioid receptor antagonist)",
        "is_correct": false
      },
      {
        "id": "psych-sba-073-a",
        "text": "Disulfiram (Antabuse)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-074",
    "stem": "What is the mechanism of action of Naltrexone in treating Alcohol Use Disorder?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Naltrexone is a competitive mu-opioid receptor antagonist. By blocking endogenous opioid signaling that occurs during drinking, it decreases the euphoric 'reward' sensation and reduces heavy drinking days.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-074-a",
        "text": "Blocks Mu-Opioid Receptors, preventing endogenous endorphin-mediated dopamine release in the nucleus accumbens, thereby reducing alcohol cravings and the reinforcing 'high'",
        "is_correct": true
      },
      {
        "id": "psych-sba-074-b",
        "text": "Directly stimulates GABA-A receptors to replace alcohol",
        "is_correct": false
      },
      {
        "id": "psych-sba-074-e",
        "text": "Induces acute nausea and vomiting whenever ethanol is smelled",
        "is_correct": false
      },
      {
        "id": "psych-sba-074-c",
        "text": "Inactivates alcohol dehydrogenase in the stomach lining",
        "is_correct": false
      },
      {
        "id": "psych-sba-074-d",
        "text": "Inhibits serotonin reuptake in the raphe nuclei",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-075",
    "stem": "Acamprosate (Campral) is used for alcohol relapse prevention in detoxified patients. What is its mechanism of action and primary route of elimination?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Acamprosate restores balance between neuronal excitation (glutamate/NMDA) and inhibition (GABA) altered by chronic alcohol. Because it is cleared purely renally and undergoes zero hepatic metabolism, it is the agent of choice in cirrhotic patients.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-075-d",
        "text": "Blocks nicotinic receptors; eliminated by the lungs",
        "is_correct": false
      },
      {
        "id": "psych-sba-075-a",
        "text": "Modulates NMDA glutamate receptors and enhances GABAergic transmission, restoring baseline neurotransmitter balance; eliminated unchanged by the KIDNEYS (safe in liver failure)",
        "is_correct": true
      },
      {
        "id": "psych-sba-075-b",
        "text": "Inhibits hepatic CYP2E1 enzymes; eliminated via bile",
        "is_correct": false
      },
      {
        "id": "psych-sba-075-e",
        "text": "Binds opioid receptors; eliminated by sweat glands",
        "is_correct": false
      },
      {
        "id": "psych-sba-075-c",
        "text": "Stimulates dopamine release; metabolized by MAO-A",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-076",
    "stem": "What is the clinical Triad of Acute Opioid Overdose (Opioid Toxindrome)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "The opioid overdose toxindrome consists of the classic triad: respiratory depression (rate < 8-10/min), altered mental status/coma, and pinpoint pupils (miosis). Prompt administration of the opioid antagonist Naloxone is life-saving.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-076-a",
        "text": "Respiratory Depression, Central Nervous System Depression (Coma), and Pinpoint Pupils (Miosis)",
        "is_correct": true
      },
      {
        "id": "psych-sba-076-b",
        "text": "Hypertension, Hyperthermia, and Dilated pupils (Mydriasis)",
        "is_correct": false
      },
      {
        "id": "psych-sba-076-e",
        "text": "Severe diarrhea, Vomiting, and Piloerection",
        "is_correct": false
      },
      {
        "id": "psych-sba-076-d",
        "text": "Agitation, Hallucinations, and Hypothermia",
        "is_correct": false
      },
      {
        "id": "psych-sba-076-c",
        "text": "Tachycardia, Diaphoresis, and Hyperreflexia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-077",
    "stem": "Naloxone is the definitive antidote for acute opioid overdose. What is its mechanism and why is close clinical monitoring required following its administration?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Naloxone competitively displaces opioids from mu, kappa, and delta receptors. Because its duration of action (~30-90 min) is shorter than most ingested opioids, repeated doses or continuous IV infusion are often required to prevent fatal renarcotization.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-077-e",
        "text": "Induces immediate hepatic glucuronidation of fentanyl",
        "is_correct": false
      },
      {
        "id": "psych-sba-077-d",
        "text": "Permanently blocks GABA-A receptors; causes intractable status epilepticus",
        "is_correct": false
      },
      {
        "id": "psych-sba-077-c",
        "text": "Destroys circulating opioid molecules; causes massive hyperkalemia",
        "is_correct": false
      },
      {
        "id": "psych-sba-077-b",
        "text": "Stimulates central respiratory centers directly; causes irreversible cardiac arrest",
        "is_correct": false
      },
      {
        "id": "psych-sba-077-a",
        "text": "Competitive Opioid Receptor Antagonist; its half-life (30-90 minutes) is much SHORTER than most opioids (e.g. methadone, morphine), creating a high risk of renarcotization and fatal recurrent respiratory depression",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-078",
    "stem": "What are the clinical signs and symptoms of Opioid Withdrawal?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Opioid withdrawal features flu-like misery: dilated pupils, piloerection ('goosebumps'), rhinorrhea, yawning, abdominal cramping, and diarrhea. Unlike alcohol or benzodiazepine withdrawal, uncomplicated opioid withdrawal is not directly fatal.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-078-c",
        "text": "Hypothermia, Constipation, Urinary retention, and Miosis",
        "is_correct": false
      },
      {
        "id": "psych-sba-078-b",
        "text": "Seizures, Delirium tremens, Hyperthermia, and Cardiovascular collapse (life-threatening)",
        "is_correct": false
      },
      {
        "id": "psych-sba-078-e",
        "text": "Sudden irreversible respiratory arrest",
        "is_correct": false
      },
      {
        "id": "psych-sba-078-a",
        "text": "Lacrimation, Rhinorrhea, Yawning, Piloerection ('cold turkey'), Mydriasis, Nausea, Diarrhea, Abdominal cramps, and severe Arthralgias/Myalgias (intensely uncomfortable but NOT typically fatal in healthy adults)",
        "is_correct": true
      },
      {
        "id": "psych-sba-078-d",
        "text": "Complete paralysis, Aphasia, and Loss of consciousness",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-079",
    "stem": "Which medication is an orally administered, full Mu-Opioid Receptor Agonist with a long elimination half-life (24-36 hours), widely utilized in Opioid Maintenance Therapy to suppress withdrawal and eliminate cravings?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Methadone is a long-acting synthetic full mu-opioid agonist. Its slow onset and prolonged half-life (24-36 h) prevent withdrawal symptoms and drug cravings without producing sharp euphoria, enabling functional stability in opioid use disorder.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-079-d",
        "text": "Naloxone (pure antagonist)",
        "is_correct": false
      },
      {
        "id": "psych-sba-079-a",
        "text": "Methadone",
        "is_correct": true
      },
      {
        "id": "psych-sba-079-b",
        "text": "Buprenorphine (partial agonist)",
        "is_correct": false
      },
      {
        "id": "psych-sba-079-c",
        "text": "Naltrexone (pure antagonist)",
        "is_correct": false
      },
      {
        "id": "psych-sba-079-e",
        "text": "Fentanyl (short-acting agonist)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-080",
    "stem": "Buprenorphine is formulated in combination with Naloxone (Suboxone) in a 4:1 ratio for opioid substitution therapy. What is the pharmacological rationale for combining Buprenorphine with Naloxone?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Sublingually, naloxone has negligible oral/sublingual bioavailability (<10%) while buprenorphine is absorbed. If the tablet is melted down and injected intravenously by an abuser, naloxone has 100% IV bioavailability and precipitates instant withdrawal.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-080-c",
        "text": "Naloxone prevents buprenorphine from causing constipation",
        "is_correct": false
      },
      {
        "id": "psych-sba-080-a",
        "text": "To PREVENT INTRAVENOUS ABUSE: when taken sublingually as prescribed, naloxone has poor bioavailability (~5-10%) and exerts no effect; but if crushed and injected IV, naloxone blocks opioid receptors, precipitating severe acute withdrawal",
        "is_correct": true
      },
      {
        "id": "psych-sba-080-b",
        "text": "Naloxone enhances the sublingual absorption of buprenorphine by 500%",
        "is_correct": false
      },
      {
        "id": "psych-sba-080-e",
        "text": "The combination cures opioid dependence within 3 days",
        "is_correct": false
      },
      {
        "id": "psych-sba-080-d",
        "text": "Naloxone stimulates hepatic clearance of buprenorphine metabolites",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-081",
    "stem": "Cocaine exerts its stimulant and euphoric effects primarily by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Cocaine competitively blocks dopamine, norepinephrine, and serotonin reuptake transporters, flooding synapses with monoamines (producing euphoria and sympathetic hyperarousal), while blocking voltage-gated Na+ channels (local anesthesia and cardiac arrhythmogenesis).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-081-c",
        "text": "Reversing the vesicular monoamine transporter (VMAT2)",
        "is_correct": false
      },
      {
        "id": "psych-sba-081-d",
        "text": "Promoting the synthesis and release of acetylcholine in neuromuscular junctions",
        "is_correct": false
      },
      {
        "id": "psych-sba-081-e",
        "text": "Inactivating monoamine oxidase enzymes in the mitochondrial membrane",
        "is_correct": false
      },
      {
        "id": "psych-sba-081-b",
        "text": "Directly stimulating postsynaptic beta-1 adrenergic receptors",
        "is_correct": false
      },
      {
        "id": "psych-sba-081-a",
        "text": "Inhibiting the presynaptic reuptake transporters for Dopamine (DAT), Norepinephrine (NET), and Serotonin (SERT), and blocking voltage-gated sodium channels (local anesthetic)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-082",
    "stem": "In a patient presenting with severe Cocaine-Induced Chest Pain and acute coronary syndrome, which class of cardiovascular medications is traditionally CONTRAINDICATED as monotherapy?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Pure beta-blockers block beta-2 vasodilatory receptors while leaving alpha-1 vasoconstrictor receptors stimulated by massive circulating catecholamines, potentially worsening coronary spasm and hypertension. Benzodiazepines and nitroglycerin are first-line.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-082-a",
        "text": "Pure Beta-Blockers (such as Propranolol), due to the risk of unopposed Alpha-1 adrenergic vasoconstriction causing paradoxical coronary spasm and hypertensive crisis",
        "is_correct": true
      },
      {
        "id": "psych-sba-082-b",
        "text": "Benzodiazepines (first-line treatment for cocaine agitation and chest pain)",
        "is_correct": false
      },
      {
        "id": "psych-sba-082-c",
        "text": "Nitrates (e.g. Nitroglycerin)",
        "is_correct": false
      },
      {
        "id": "psych-sba-082-d",
        "text": "Calcium Channel Blockers (e.g. Diltiazem)",
        "is_correct": false
      },
      {
        "id": "psych-sba-082-e",
        "text": "Aspirin",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-083",
    "stem": "Amphetamines (such as methamphetamine) stimulate the central nervous system primarily by which mechanism?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Amphetamines enter dopaminergic terminals via DAT, disrupt VMAT2 to leak dopamine into the cytosol, and reverse the DAT transporter to pump large amounts of dopamine and norepinephrine out into the synapse.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-083-e",
        "text": "Inhibiting phosphodiesterase-5 enzymes",
        "is_correct": false
      },
      {
        "id": "psych-sba-083-c",
        "text": "Stimulating GABA-A receptor chloride influx",
        "is_correct": false
      },
      {
        "id": "psych-sba-083-b",
        "text": "Blocking muscarinic acetylcholine receptors exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-083-a",
        "text": "Inverting the vesicular monoamine transporter (VMAT2) and reverse-transporting Dopamine and Norepinephrine out of the presynaptic nerve terminal into the synaptic cleft",
        "is_correct": true
      },
      {
        "id": "psych-sba-083-d",
        "text": "Directly agonizing mu-opioid receptors in the ventral tegmental area",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-084",
    "stem": "Chronic Methamphetamine use is associated with which characteristic dental and cutaneous findings?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Methamphetamine causes severe bruxism, xerostomia (dry mouth), and craving for sugary drinks, destroying teeth ('meth mouth'). Tactile hallucinations (formication / 'crank bugs') prompt compulsive skin picking and ulcerations.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-084-a",
        "text": "'Meth Mouth' (severe rampant dental caries, enamel erosion, and tooth loss) and Formication ('meth bugs', delusions of insects crawling under the skin with severe excoriations)",
        "is_correct": true
      },
      {
        "id": "psych-sba-084-b",
        "text": "Gingival hyperplasia and purpuric rash",
        "is_correct": false
      },
      {
        "id": "psych-sba-084-d",
        "text": "Macroglossia and pretibial myxedema",
        "is_correct": false
      },
      {
        "id": "psych-sba-084-e",
        "text": "Dental fluorosis and vitiligo",
        "is_correct": false
      },
      {
        "id": "psych-sba-084-c",
        "text": "Oral hairy leukoplakia and Kaposi sarcoma",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-085",
    "stem": "Phencyclidine (PCP / 'Angel Dust') intoxication is characterized clinically by which distinctive physical examination sign?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "PCP (a non-competitive NMDA receptor antagonist) characteristically causes multidirectional (rotary or vertical and horizontal) nystagmus, combined with severe combativeness, superhuman strength (analgesia), amnesia, and autonomic instability.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-085-e",
        "text": "Loss of all deep tendon reflexes with clear sensorium",
        "is_correct": false
      },
      {
        "id": "psych-sba-085-d",
        "text": "Severe jaundice and flapping asterixis",
        "is_correct": false
      },
      {
        "id": "psych-sba-085-c",
        "text": "Complete flaccid paralysis with facial nerve palsy",
        "is_correct": false
      },
      {
        "id": "psych-sba-085-b",
        "text": "Bilateral pinpoint pupils with severe hypothermia",
        "is_correct": false
      },
      {
        "id": "psych-sba-085-a",
        "text": "Rotary (horizontal and vertical) Nystagmus, associated with violent unpredictable agitation, analgesia, and muscular rigidity",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-086",
    "stem": "What is the primary active psychoactive constituent of Cannabis sativa that acts as an agonist at Cannabinoid CB1 and CB2 receptors?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Delta-9-THC is the principal psychoactive cannabinoid in marijuana, binding presynaptic CB1 receptors in the central nervous system (inhibiting neurotransmitter release) to produce euphoria, altered perception, increased appetite ('munchies'), and tachycardia.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-086-d",
        "text": "Tetrahydrocannabivarin (THCV)",
        "is_correct": false
      },
      {
        "id": "psych-sba-086-e",
        "text": "Anandamide",
        "is_correct": false
      },
      {
        "id": "psych-sba-086-c",
        "text": "Cannabinol (CBN)",
        "is_correct": false
      },
      {
        "id": "psych-sba-086-b",
        "text": "Cannabidiol (CBD)",
        "is_correct": false
      },
      {
        "id": "psych-sba-086-a",
        "text": "Delta-9-Tetrahydrocannabinol (THC)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-087",
    "stem": "Cannabinoid Hyperemesis Syndrome (CHS) is characterized by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "CHS occurs in chronic heavy cannabis users: cyclic refractory nausea, intractable vomiting, and abdominal pain pathognomonically relieved by prolonged, scalding-hot showers/baths (which activate TRPV1 heat receptors).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-087-b",
        "text": "Sudden intractable vomiting relieved exclusively by cold ice packs",
        "is_correct": false
      },
      {
        "id": "psych-sba-087-a",
        "text": "Recurrent episodes of severe cyclic nausea, vomiting, and colicky abdominal pain in chronic daily cannabis users, characteristically relieved by Compulsive Hot Showers or Baths",
        "is_correct": true
      },
      {
        "id": "psych-sba-087-d",
        "text": "Persistent vomiting in first-time cannabis users that resolves with ethanol",
        "is_correct": false
      },
      {
        "id": "psych-sba-087-c",
        "text": "Chronic diarrhea accompanied by massive rectal bleeding",
        "is_correct": false
      },
      {
        "id": "psych-sba-087-e",
        "text": "Gastric dilation requiring emergency decompressive gastrostomy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-088",
    "stem": "Varenicline (Chantix) is an effective smoking cessation pharmacotherapy. What is its pharmacological mechanism?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Substance Use",
    "programme": "mbchb",
    "explanation": "Varenicline is a partial agonist at alpha-4-beta-2 nicotinic receptors: it stimulates low-level dopamine release to alleviate withdrawal/cravings, while blocking inhaled nicotine from binding and delivering its euphoric reward.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-088-c",
        "text": "Selective serotonin and norepinephrine reuptake inhibitor",
        "is_correct": false
      },
      {
        "id": "psych-sba-088-d",
        "text": "Direct inhibitor of nicotine metabolism in the liver",
        "is_correct": false
      },
      {
        "id": "psych-sba-088-e",
        "text": "Irreversible blocker of peripheral muscarinic receptors",
        "is_correct": false
      },
      {
        "id": "psych-sba-088-b",
        "text": "Full antagonist at dopamine D2 receptors",
        "is_correct": false
      },
      {
        "id": "psych-sba-088-a",
        "text": "Partial Agonist at Alpha-4-Beta-2 Nicotinic Acetylcholine Receptors, blunting nicotine cravings and reducing the reinforcing reward of smoking",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-089",
    "stem": "What are the three cardinal clinical features distinguishing Delirium from Dementia?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Delirium is an acute, fluctuating disturbance in attention, orientation, and awareness triggered by an underlying medical condition/toxicity. Dementia (Major Neurocognitive Disorder) has an insidious, progressive course with preserved alertness in early stages.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-089-a",
        "text": "Acute onset (hours to days), Fluctuating course throughout the day, and Primary disturbance in Attention and Awareness",
        "is_correct": true
      },
      {
        "id": "psych-sba-089-d",
        "text": "Permanent irreversible neuronal loss with clear sensorium",
        "is_correct": false
      },
      {
        "id": "psych-sba-089-e",
        "text": "Normal sleep-wake cycles with isolated personality change",
        "is_correct": false
      },
      {
        "id": "psych-sba-089-c",
        "text": "Presence of aphasia, apraxia, and agnosia with normal consciousness",
        "is_correct": false
      },
      {
        "id": "psych-sba-089-b",
        "text": "Insidious onset (months to years), progressive course, and preserved attention with primary memory loss",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-090",
    "stem": "What are the two core neuropathological hallmarks of Alzheimer's Disease found in the cerebral cortex?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Alzheimer's disease is pathologically defined by: 1) extracellular plaques composed of amyloid-beta (Aβ42 peptides derived from abnormal APP cleavage by beta- and gamma-secretases); 2) intracellular neurofibrillary tangles composed of hyperphosphorylated tau microtubule-associated protein.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-090-a",
        "text": "Extracellular Amyloid-Beta (Aβ42) Neuritic Plaques and Intracellular Neurofibrillary Tangles (Hyperphosphorylated Tau protein)",
        "is_correct": true
      },
      {
        "id": "psych-sba-090-b",
        "text": "Intracellular alpha-synuclein Lewy bodies and pale substantia nigra",
        "is_correct": false
      },
      {
        "id": "psych-sba-090-e",
        "text": "Extensive loss of GABAergic neurons in the caudate nucleus",
        "is_correct": false
      },
      {
        "id": "psych-sba-090-c",
        "text": "Prion protein scrapie (PrPSc) plaques with spongiform vacuolation",
        "is_correct": false
      },
      {
        "id": "psych-sba-090-d",
        "text": "Intracellular inclusions of TDP-43 and Pick bodies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-091",
    "stem": "Inheritance of which Apolipoprotein E (APOE) allele on chromosome 19 confers the highest risk for developing Sporadic Late-Onset Alzheimer's Disease?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "The APOE-ε4 allele increases the risk of sporadic late-onset AD in a gene-dose dependent manner (1 copy increases risk ~3-fold; 2 copies increase risk ~8-12-fold, shifting onset earlier). APOE-ε2 is protective.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-091-b",
        "text": "APOE epsilon-2 (APOE-ε2, which is protective)",
        "is_correct": false
      },
      {
        "id": "psych-sba-091-d",
        "text": "APOE epsilon-1",
        "is_correct": false
      },
      {
        "id": "psych-sba-091-a",
        "text": "APOE epsilon-4 (APOE-ε4)",
        "is_correct": true
      },
      {
        "id": "psych-sba-091-c",
        "text": "APOE epsilon-3 (APOE-ε3, neutral baseline allele)",
        "is_correct": false
      },
      {
        "id": "psych-sba-091-e",
        "text": "APOE epsilon-5",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-092",
    "stem": "Early-Onset Familial Alzheimer's Disease (onset < 65 years) is inherited in an autosomal dominant fashion and caused by mutations in which three genes?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Early-onset AD is caused by dominant mutations in APP (chr 21, explains early AD in Down syndrome due to trisomy 21 gene dosage), PSEN1 (chr 14, most common cause), or PSEN2 (chr 1), all shifting APP processing toward fibrillogenic Aβ42.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-092-b",
        "text": "Huntingtin (HTT), Ataxin-1, and Frataxin",
        "is_correct": false
      },
      {
        "id": "psych-sba-092-c",
        "text": "Notch3, Presenilin 1, and Tau gene",
        "is_correct": false
      },
      {
        "id": "psych-sba-092-d",
        "text": "Alpha-synuclein, Parkin, and PINK1",
        "is_correct": false
      },
      {
        "id": "psych-sba-092-a",
        "text": "Amyloid Precursor Protein (APP on chromosome 21), Presenilin 1 (PSEN1 on chromosome 14), and Presenilin 2 (PSEN2 on chromosome 1)",
        "is_correct": true
      },
      {
        "id": "psych-sba-092-e",
        "text": "SOD1, FUS, and C9orf72",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-093",
    "stem": "Which classes of medications are FDA-approved as standard symptomatic treatment for mild-to-moderate and moderate-to-severe Alzheimer's Disease, respectively?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) compensate for basal forebrain cholinergic loss (nucleus basalis of Meynert). Memantine (an uncompetitive NMDA receptor antagonist) protects against glutamate excitotoxicity in moderate-to-severe AD.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-093-d",
        "text": "Benzodiazepines and tricyclic antidepressants",
        "is_correct": false
      },
      {
        "id": "psych-sba-093-e",
        "text": "Selective serotonin reuptake inhibitors alone",
        "is_correct": false
      },
      {
        "id": "psych-sba-093-c",
        "text": "High-dose atypical antipsychotics and lithium",
        "is_correct": false
      },
      {
        "id": "psych-sba-093-b",
        "text": "Dopamine agonists (Levodopa/Carbidopa) and COMT inhibitors",
        "is_correct": false
      },
      {
        "id": "psych-sba-093-a",
        "text": "Cholinesterase Inhibitors (Donepezil, Rivastigmine, Galantamine) and NMDA Receptor Antagonist (Memantine)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-094",
    "stem": "Vascular Dementia (Major Neurocognitive Disorder due to Vascular Disease) is classically characterized clinically by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Vascular dementia (second most common dementia) exhibits a stepwise, fluctuating progression: sudden dips in cognitive performance following small vessel ischemic strokes or lacunar infarcts, accompanied by early executive dysfunction and focal neurological signs.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-094-b",
        "text": "A slow, completely continuous smooth decline in episodic memory without motor signs",
        "is_correct": false
      },
      {
        "id": "psych-sba-094-d",
        "text": "Rapidly progressive fatal dementia with prominent startle myoclonus",
        "is_correct": false
      },
      {
        "id": "psych-sba-094-a",
        "text": "A 'Stepwise' deterioration in cognitive function corresponding to discrete cerebrovascular infarcts, with early executive dysfunction and focal neurological deficits",
        "is_correct": true
      },
      {
        "id": "psych-sba-094-c",
        "text": "Early prominent visual hallucinations and REM sleep behavior disorder",
        "is_correct": false
      },
      {
        "id": "psych-sba-094-e",
        "text": "Profound hyperorality and loss of empathy with preserved memory",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-095",
    "stem": "Dementia with Lewy Bodies (DLB) is clinically diagnosed by which triad of core diagnostic features?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "DLB features: 1) fluctuating cognition; 2) recurrent, vivid, detailed visual hallucinations (people or animals); 3) spontaneous parkinsonism (rigidity, bradykinesia). It also features REM sleep behavior disorder and severe neuroleptic sensitivity.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-095-d",
        "text": "Rapid myoclonus, ataxia, and periodic sharp wave complexes on EEG",
        "is_correct": false
      },
      {
        "id": "psych-sba-095-c",
        "text": "Early prominent behavioral disinhibition, hyperorality, and loss of empathy",
        "is_correct": false
      },
      {
        "id": "psych-sba-095-b",
        "text": "Stepwise cognitive loss, focal hemiparesis, and pseudobulbar affect",
        "is_correct": false
      },
      {
        "id": "psych-sba-095-a",
        "text": "Fluctuating cognition with pronounced variations in attention, Recurrent detailed Visual Hallucinations, and Spontaneous features of Parkinsonism",
        "is_correct": true
      },
      {
        "id": "psych-sba-095-e",
        "text": "Severe retrograde amnesia with confabulation and ophthalmoplegia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-096",
    "stem": "Patients with Dementia with Lewy Bodies (DLB) exhibit a life-threatening, severe adverse reaction to which class of medications?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Patients with DLB have profound nigrostriatal D2 receptor loss and are extraordinarily sensitive to antipsychotics: up to 50% experience severe worsening of parkinsonism, acute catatonia, profound sedation, or death if given D2 blockers.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-096-a",
        "text": "Typical and Atypical Antipsychotics (Neuroleptics), causing sudden severe rigidity, autonomic collapse, or fatal neuroleptic malignant syndrome",
        "is_correct": true
      },
      {
        "id": "psych-sba-096-b",
        "text": "Cholinesterase inhibitors",
        "is_correct": false
      },
      {
        "id": "psych-sba-096-e",
        "text": "Antihistamines",
        "is_correct": false
      },
      {
        "id": "psych-sba-096-c",
        "text": "Levodopa at low doses",
        "is_correct": false
      },
      {
        "id": "psych-sba-096-d",
        "text": "Selective serotonin reuptake inhibitors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-097",
    "stem": "How is the 'One-Year Rule' applied to clinically distinguish Dementia with Lewy Bodies (DLB) from Parkinson's Disease Dementia (PDD)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "The arbitrary 'one-year rule': if dementia and visual hallucinations precede or appear within 12 months of motor parkinsonian signs -> DLB. If motor Parkinson's disease is present for >1 year (often 5-10 years) before dementia develops -> PDD.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-097-a",
        "text": "In DLB, cognitive impairment and visual hallucinations develop BEFORE or WITHIN ONE YEAR of the onset of motor parkinsonian symptoms; in PDD, well-established motor Parkinson's disease exists for YEARS before dementia develops",
        "is_correct": true
      },
      {
        "id": "psych-sba-097-b",
        "text": "DLB occurs only in children under 1 year of age",
        "is_correct": false
      },
      {
        "id": "psych-sba-097-e",
        "text": "There is no temporal rule; they are pathologically identical diseases",
        "is_correct": false
      },
      {
        "id": "psych-sba-097-c",
        "text": "PDD responds completely to levodopa within one year while DLB does not",
        "is_correct": false
      },
      {
        "id": "psych-sba-097-d",
        "text": "DLB patients survive exactly one year after diagnosis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-098",
    "stem": "What are the pathognomonic histological inclusions found in Dementia with Lewy Bodies and Parkinson's Disease?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Lewy bodies are intracytoplasmic inclusions consisting of insoluble alpha-synuclein fibrils, ubiquitin, and neurofilaments, localized to brainstem and cortical neurons (staining positively with anti-alpha-synuclein immunohistochemistry).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-098-b",
        "text": "Neurofibrillary tangles containing hyperphosphorylated tau protein",
        "is_correct": false
      },
      {
        "id": "psych-sba-098-a",
        "text": "Lewy Bodies (round, eosinophilic, concentric cytoplasmic inclusions composed of aggregated Alpha-Synuclein)",
        "is_correct": true
      },
      {
        "id": "psych-sba-098-d",
        "text": "Intranuclear polyglutamine inclusions",
        "is_correct": false
      },
      {
        "id": "psych-sba-098-e",
        "text": "Extracellular amyloid-beta plaques exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-098-c",
        "text": "Pick bodies composed of 3-repeat tau protein",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-099",
    "stem": "Behavioral-Variant Frontotemporal Dementia (bvFTD / Pick's Disease) is clinically characterized by which early presenting features?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "bvFTD (Pick disease) manifests as personality breakdown: social disinhibition (inappropriate sexual remarks, shoplifting), apathy, loss of empathy, dietary changes (hyperorality, sweet cravings), and compulsive routines. Episodic memory is spared early.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-099-b",
        "text": "Early profound episodic anterograde amnesia with preserved social manners",
        "is_correct": false
      },
      {
        "id": "psych-sba-099-d",
        "text": "Acute onset of confusion with fluctuating attention and visual field loss",
        "is_correct": false
      },
      {
        "id": "psych-sba-099-c",
        "text": "Early recurrent visual hallucinations with resting pill-rolling tremor",
        "is_correct": false
      },
      {
        "id": "psych-sba-099-e",
        "text": "Sudden choreoathetosis with rapid executive deterioration",
        "is_correct": false
      },
      {
        "id": "psych-sba-099-a",
        "text": "Early and progressive changes in personality and social conduct: Disinhibition, Loss of empathy/sympathy, Apathy, Hyperorality (compulsive overeating/sweet cravings), and Stereotyped/perseverative behaviors, with initially PRESERVED memory and visuospatial function",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-100",
    "stem": "On neuroimaging (MRI or CT) of the brain, Frontotemporal Lobar Degeneration typically displays which distinct structural pattern?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "FTD displays marked, circumscribed atrophy of the frontal and anterior temporal lobes, producing dramatic narrowing of gyri and widening of sulci resembling the thin edge of a knife ('knife-edge gyral atrophy').",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-100-c",
        "text": "Selective bilateral atrophy of the caudate nuclei with ventricular box-car dilatation",
        "is_correct": false
      },
      {
        "id": "psych-sba-100-d",
        "text": "Severe symmetric atrophy of the cerebellum and pons only",
        "is_correct": false
      },
      {
        "id": "psych-sba-100-e",
        "text": "Multiple lacunar infarcts concentrated in the internal capsule",
        "is_correct": false
      },
      {
        "id": "psych-sba-100-a",
        "text": "Circumscribed, asymmetric 'Knife-edge' lobar atrophy of the Frontal and Temporal lobes, with sparing of parietal and occipital lobes",
        "is_correct": true
      },
      {
        "id": "psych-sba-100-b",
        "text": "Diffuse, symmetrical cortical atrophy maximal in the medial temporal lobes and precuneus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-101",
    "stem": "Normal Pressure Hydrocephalus (NPH) is classically characterized by which clinical Triad ('Wet, Wobbly, and Weird')?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "NPH (Hakim-Adams triad: 'wet, wobbly, and weird') features: 1) gait apraxia (broad-based, slow, magnetic gait - feet glued to floor); 2) urinary urgency/incontinence; 3) psychomotor slowing/dementia. Ventricles are dilated out of proportion to sulcal atrophy.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-101-d",
        "text": "Aphasia, Apraxia, and Agnosia",
        "is_correct": false
      },
      {
        "id": "psych-sba-101-c",
        "text": "Resting tremor, Cogwheel rigidity, and Postural instability",
        "is_correct": false
      },
      {
        "id": "psych-sba-101-e",
        "text": "Visual hallucinations, Paranoia, and Delusions",
        "is_correct": false
      },
      {
        "id": "psych-sba-101-b",
        "text": "Severe headache, Papilledema, and Projectile vomiting",
        "is_correct": false
      },
      {
        "id": "psych-sba-101-a",
        "text": "Gait Disturbance (magnetic/apraxic gait), Urinary Incontinence, and Cognitive Impairment (Dementia)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-102",
    "stem": "What diagnostic and therapeutic procedure confirms the diagnosis of Normal Pressure Hydrocephalus (NPH) and predicts response to ventriculoperitoneal (VP) shunting?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "A high-volume CSF tap test (removing 30-50 mL CSF) is diagnostic: significant improvement in gait velocity, balance, and turning steps evaluated within hours confirms NPH and strongly predicts positive response to VP shunting.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-102-e",
        "text": "Genetic testing for huntingtin trinucleotide repeats",
        "is_correct": false
      },
      {
        "id": "psych-sba-102-c",
        "text": "Serum measurement of opening pressure > 300 mm H2O",
        "is_correct": false
      },
      {
        "id": "psych-sba-102-b",
        "text": "Transcranial Doppler ultrasound showing reversal of basilar flow",
        "is_correct": false
      },
      {
        "id": "psych-sba-102-d",
        "text": "Electroencephalogram showing periodic lateralized discharges",
        "is_correct": false
      },
      {
        "id": "psych-sba-102-a",
        "text": "High-Volume Lumbar Puncture (spinal tap removing 30-50 mL of CSF) demonstrating significant objective improvement in gait speed and stride length",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-103",
    "stem": "Creutzfeldt-Jakob Disease (CJD), the most common human Prion disease, is characterized clinically by:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "CJD is a rapidly fatal neurodegenerative prion disease: rapid cognitive decline (weeks to months), myoclonus provoked by loud sounds/startle, ataxia, cortical blindness, and diagnostic periodic sharp-wave complexes on EEG.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-103-c",
        "text": "Stepwise deterioration following multiple transient ischemic attacks",
        "is_correct": false
      },
      {
        "id": "psych-sba-103-a",
        "text": "Rapidly Progressive Dementia (progressing to death within months), prominent Startle Myoclonus, Cerebellar ataxia, and Periodic Sharp Wave Complexes (PSWCs) on EEG",
        "is_correct": true
      },
      {
        "id": "psych-sba-103-b",
        "text": "Indolent memory loss developing over 15 years with normal EEG",
        "is_correct": false
      },
      {
        "id": "psych-sba-103-d",
        "text": "Fluctuating attention with vivid animal hallucinations and parkinsonism",
        "is_correct": false
      },
      {
        "id": "psych-sba-103-e",
        "text": "Childhood onset of chorea, emotional lability, and caudate atrophy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-104",
    "stem": "What is the characteristic neuropathological finding in brain biopsy or autopsy of a patient with Creutzfeldt-Jakob Disease?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "CJD is characterized by spongiform change (fine vacuolation of the neuropil and neuronal cytoplasm), marked neuronal loss, and reactive astrogliosis caused by conformational conversion of normal PrPC to beta-sheet-rich, protease-resistant PrPSc.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-104-c",
        "text": "Round intracytoplasmic alpha-synuclein inclusions",
        "is_correct": false
      },
      {
        "id": "psych-sba-104-b",
        "text": "Dense extracellular plaques containing amyloid-beta with neurofibrillary tangles",
        "is_correct": false
      },
      {
        "id": "psych-sba-104-d",
        "text": "Perivascular cuffing of CD8+ T lymphocytes and demyelination",
        "is_correct": false
      },
      {
        "id": "psych-sba-104-e",
        "text": "Extensive caseous necrosis with multinucleated Langhans giant cells",
        "is_correct": false
      },
      {
        "id": "psych-sba-104-a",
        "text": "Spongiform encephalopathy: widespread microscopic, round, clear neuronal and neuropil vacuoles throughout the gray matter, accompanied by neuronal loss and astrocytosis (without inflammation)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-105",
    "stem": "What laboratory finding in Cerebrospinal Fluid (CSF) is highly sensitive and specific for the diagnosis of sporadic Creutzfeldt-Jakob Disease?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "The RT-QuIC assay directly detects minute quantities of misfolded prion protein (PrPSc) in CSF with >95% sensitivity and >98% specificity. Elevated 14-3-3 and total tau proteins indicate acute neuronal destruction.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-105-d",
        "text": "High levels of Tau protein with low levels of amyloid-beta",
        "is_correct": false
      },
      {
        "id": "psych-sba-105-b",
        "text": "Elevated oligoclonal IgG bands and elevated IgG index",
        "is_correct": false
      },
      {
        "id": "psych-sba-105-a",
        "text": "Positive Real-Time Quaking-Induced Conversion (RT-QuIC) assay and elevated 14-3-3 protein",
        "is_correct": true
      },
      {
        "id": "psych-sba-105-c",
        "text": "Marked reduction in CSF glucose with polymorphonuclear pleocytosis",
        "is_correct": false
      },
      {
        "id": "psych-sba-105-e",
        "text": "Presence of acid-fast bacilli on Ziehl-Neelsen stain",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-106",
    "stem": "Huntington's Disease is an autosomal dominant neurodegenerative disorder caused by which genetic mutation?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Huntington's disease is caused by an expanded CAG trinucleotide repeat (>36 repeats; fully penetrant at ≥40) in the HTT gene on 4p16, encoding mutant huntingtin. Exhibits anticipation (earlier onset and greater severity in subsequent generations, especially paternal transmission).",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-106-e",
        "text": "A point mutation in the superoxide dismutase (SOD1) gene",
        "is_correct": false
      },
      {
        "id": "psych-sba-106-c",
        "text": "A CTG repeat expansion in the DMPK gene on chromosome 19",
        "is_correct": false
      },
      {
        "id": "psych-sba-106-b",
        "text": "A CGG repeat expansion in the FMR1 gene on the X chromosome",
        "is_correct": false
      },
      {
        "id": "psych-sba-106-a",
        "text": "A CAG Trinucleotide Repeat Expansion in the HTT gene on chromosome 4p16, encoding a polyglutamine tract that exhibits Genetic Anticipation",
        "is_correct": true
      },
      {
        "id": "psych-sba-106-d",
        "text": "A GAA repeat expansion in the FXN gene on chromosome 9",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-107",
    "stem": "Neuropathologically, Huntington's Disease causes selective, profound atrophy of which brain structures?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Huntington's disease selectively destroys GABAergic, enkephalin-containing medium spiny neurons in the striatum (caudate nucleus and putamen). Caudate head atrophy flattens the lateral border of the frontal horn of the lateral ventricles.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-107-a",
        "text": "Caudate Nucleus and Putamen (the Striatum), leading to ex-vacuo dilation of the frontal horns of the lateral ventricles ('box-car' ventricles)",
        "is_correct": true
      },
      {
        "id": "psych-sba-107-e",
        "text": "Mammillary bodies and anterior thalamus",
        "is_correct": false
      },
      {
        "id": "psych-sba-107-b",
        "text": "Substantia nigra pars compacta exclusively",
        "is_correct": false
      },
      {
        "id": "psych-sba-107-d",
        "text": "Anterior horns of the spinal cord",
        "is_correct": false
      },
      {
        "id": "psych-sba-107-c",
        "text": "Hippocampus and entorhinal cortex only",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-108",
    "stem": "Which medication is FDA-approved for the treatment of Chorea in Huntington's Disease by inhibiting Vesicular Monoamine Transporter 2 (VMAT2)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Tetrabenazine and deutetrabenazine reversibly inhibit VMAT2, depleting presynaptic dopamine stores and reducing hyperkinetic choreiform movements in Huntington's disease.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-108-d",
        "text": "Memantine",
        "is_correct": false
      },
      {
        "id": "psych-sba-108-c",
        "text": "Donepezil",
        "is_correct": false
      },
      {
        "id": "psych-sba-108-b",
        "text": "Levodopa-Carbidopa",
        "is_correct": false
      },
      {
        "id": "psych-sba-108-a",
        "text": "Tetrabenazine (or Deutetrabenazine)",
        "is_correct": true
      },
      {
        "id": "psych-sba-108-e",
        "text": "Riluzole",
        "is_correct": false
      }
    ]
  },
  {
    "id": "psych-sba-109",
    "stem": "What is the primary neurochemical deficit in Alzheimer's Disease that is targeted by first-line pharmacotherapies?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "The 'cholinergic hypothesis' of AD demonstrates that progressive loss of choline acetyltransferase (ChAT) and degeneration of cholinergic projection neurons from the basal forebrain (nucleus basalis of Meynert) causes memory loss, targeted by cholinesterase inhibitors.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-109-d",
        "text": "Deficiency of GABA in the substantia nigra pars reticulata",
        "is_correct": false
      },
      {
        "id": "psych-sba-109-c",
        "text": "Complete loss of serotonin receptors in the dorsal raphe nucleus",
        "is_correct": false
      },
      {
        "id": "psych-sba-109-e",
        "text": "Hyperactivation of glycine receptors in the spinal cord",
        "is_correct": false
      },
      {
        "id": "psych-sba-109-b",
        "text": "Excessive dopamine synthesis in the ventral tegmental area",
        "is_correct": false
      },
      {
        "id": "psych-sba-109-a",
        "text": "Deficiency of Acetylcholine due to profound degeneration of cholinergic neurons in the Nucleus Basalis of Meynert",
        "is_correct": true
      }
    ]
  },
  {
    "id": "psych-sba-110",
    "stem": "In an elderly patient admitted to the hospital with acute Delirium, what is the FIRST and most essential clinical step in management?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Psychiatry",
    "section": "Neurocognitive Disorders",
    "programme": "mbchb",
    "explanation": "Delirium is a medical emergency representing brain failure secondary to systemic illness. Management requires identifying and reversing the precipitant (infection, drugs, metabolic derangement) and providing environmental support; sedatives are used only for severe agitation threatening safety.",
    "reference": "DSM-5-TR / Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed.",
    "options": [
      {
        "id": "psych-sba-110-e",
        "text": "Administer high-dose intravenous lorazepam as first-line monotherapy",
        "is_correct": false
      },
      {
        "id": "psych-sba-110-a",
        "text": "Identify and aggressively treat the underlying medical etiology (e.g. UTI, pneumonia, electrolyte disturbance, medication toxicity, hypoxia, stroke)",
        "is_correct": true
      },
      {
        "id": "psych-sba-110-b",
        "text": "Immediately administer high-dose physical and chemical restraints",
        "is_correct": false
      },
      {
        "id": "psych-sba-110-c",
        "text": "Prescribe oral donepezil 10 mg daily",
        "is_correct": false
      },
      {
        "id": "psych-sba-110-d",
        "text": "Order long-term nursing home placement",
        "is_correct": false
      }
    ]
  }
]
