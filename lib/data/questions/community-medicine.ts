import type { MCQQuestion } from "../mcq-bank"

export const COMMUNITY_MEDICINE_QUESTIONS: MCQQuestion[] = [
  {
    "id": "comm-sba-001",
    "stem": "What is the key epidemiological distinction between Incidence and Prevalence?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Incidence is the rate of new disease onsets per unit time in a susceptible population (measures risk/etiology). Prevalence = Incidence × Average Disease Duration (measures burden of disease for health planning).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-001-d",
        "text": "Incidence includes disease duration; Prevalence is independent of duration",
        "is_correct": false
      },
      {
        "id": "comm-sba-001-c",
        "text": "Incidence is expressed as a proportion; Prevalence is always a true rate with time units",
        "is_correct": false
      },
      {
        "id": "comm-sba-001-b",
        "text": "Incidence measures existing cases; Prevalence measures new cases",
        "is_correct": false
      },
      {
        "id": "comm-sba-001-e",
        "text": "Incidence only applies to chronic non-communicable diseases",
        "is_correct": false
      },
      {
        "id": "comm-sba-001-a",
        "text": "Incidence measures the number of NEW cases occurring in a population at risk during a specified time period; Prevalence measures the TOTAL number of existing cases at a given point or period in time",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-002",
    "stem": "In an analytical epidemiological study, which study design is BEST suited for investigating rare diseases or conditions with long latency periods?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Case-control studies start with diseased subjects (cases) and non-diseased subjects (controls) and look backward for past exposures, making them highly efficient and cost-effective for rare diseases (e.g. rare cancers) and long-latency diseases.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-002-c",
        "text": "Cross-Sectional (Prevalence) Survey",
        "is_correct": false
      },
      {
        "id": "comm-sba-002-e",
        "text": "Randomized Controlled Trial",
        "is_correct": false
      },
      {
        "id": "comm-sba-002-b",
        "text": "Prospective Cohort Study (calculates Relative Risk)",
        "is_correct": false
      },
      {
        "id": "comm-sba-002-a",
        "text": "Case-Control Study (calculates Odds Ratio)",
        "is_correct": true
      },
      {
        "id": "comm-sba-002-d",
        "text": "Ecological / Correlational Study",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-003",
    "stem": "What is the primary measure of association calculated directly from a Prospective Cohort Study?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Because a cohort study tracks exposed and unexposed populations forward in time, it directly measures true incidence rates, allowing direct calculation of the Relative Risk (RR).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-003-a",
        "text": "Relative Risk (Risk Ratio, RR = Incidence in exposed / Incidence in unexposed)",
        "is_correct": true
      },
      {
        "id": "comm-sba-003-d",
        "text": "Attributable Fraction in the population alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-003-e",
        "text": "Correlation coefficient (r)",
        "is_correct": false
      },
      {
        "id": "comm-sba-003-b",
        "text": "Odds Ratio (OR)",
        "is_correct": false
      },
      {
        "id": "comm-sba-003-c",
        "text": "Prevalence Ratio",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-004",
    "stem": "Selection Bias in a case-control study where hospitalized controls do not represent the general population exposure rate is known as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Berkson's bias occurs when hospitalized patients are chosen as controls, leading to spurious associations because hospitalization rates differ based on combinations of exposures and illnesses.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-004-a",
        "text": "Berkson's Bias (Berkson's fallacy / admission rate bias)",
        "is_correct": true
      },
      {
        "id": "comm-sba-004-b",
        "text": "Hawthorne effect (observer bias)",
        "is_correct": false
      },
      {
        "id": "comm-sba-004-e",
        "text": "Healthy worker effect",
        "is_correct": false
      },
      {
        "id": "comm-sba-004-c",
        "text": "Recall bias",
        "is_correct": false
      },
      {
        "id": "comm-sba-004-d",
        "text": "Lead time bias",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-005",
    "stem": "What is Confounding in epidemiological research?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "A confounder is an extraneous variable that is: 1) associated with the exposure; 2) an independent cause of the disease outcome; 3) not an intermediate step in the causal chain between exposure and outcome.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-005-a",
        "text": "A distortion of an association between an exposure and an outcome caused by a third variable that is independently associated with the exposure and is a risk factor for the outcome (not on the causal pathway)",
        "is_correct": true
      },
      {
        "id": "comm-sba-005-d",
        "text": "Random misclassification of disease status across all groups",
        "is_correct": false
      },
      {
        "id": "comm-sba-005-b",
        "text": "An error in measuring exposure due to faulty equipment",
        "is_correct": false
      },
      {
        "id": "comm-sba-005-c",
        "text": "Selective loss of high-risk patients to follow-up in a clinical trial",
        "is_correct": false
      },
      {
        "id": "comm-sba-005-e",
        "text": "The conscious falsification of survey responses by study participants",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-006",
    "stem": "Which method can be used at the DESIGN stage of an epidemiological study to control for confounding?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Confounding can be controlled in the design phase via Randomization (in trials), Restriction (limiting study to one subgroup), or Matching. In the analysis phase, it is controlled via Stratification or Multivariable Regression modeling.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-006-a",
        "text": "Randomization, Restriction (matching criteria), and Matching",
        "is_correct": true
      },
      {
        "id": "comm-sba-006-b",
        "text": "Stratification and multivariable regression analysis (done at analysis stage)",
        "is_correct": false
      },
      {
        "id": "comm-sba-006-e",
        "text": "Post-hoc power calculation",
        "is_correct": false
      },
      {
        "id": "comm-sba-006-c",
        "text": "Increasing the sample size tenfold",
        "is_correct": false
      },
      {
        "id": "comm-sba-006-d",
        "text": "Blinding of outcome assessors",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-007",
    "stem": "What is Attributable Risk (Risk Difference, AR)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Attributable Risk (AR = Ie - Iu) quantifies the absolute excess disease incidence directly attributable to the exposure, indicating the public health impact of eliminating the exposure.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-007-b",
        "text": "The ratio of incidence in exposed to unexposed",
        "is_correct": false
      },
      {
        "id": "comm-sba-007-d",
        "text": "The percentage of healthy subjects who remain disease-free over five years",
        "is_correct": false
      },
      {
        "id": "comm-sba-007-a",
        "text": "The difference in incidence of disease between the exposed group and the unexposed group (AR = I_exposed - I_unexposed), representing the excess disease risk attributable to the exposure",
        "is_correct": true
      },
      {
        "id": "comm-sba-007-c",
        "text": "The probability of developing disease given a positive screening test",
        "is_correct": false
      },
      {
        "id": "comm-sba-007-e",
        "text": "The number of patients needed to treat to prevent one death",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-008",
    "stem": "Bradford Hill criteria for assessing causality in epidemiology include all of the following EXCEPT:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Bradford Hill criteria evaluate whether an association is causal: Temporality (essential), Strength, Dose-response, Consistency, Plausibility, Coherence, Specificity, Experiment, and Analogy. P-values assess chance, not causality.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-008-e",
        "text": "Biological plausibility and Coherence",
        "is_correct": false
      },
      {
        "id": "comm-sba-008-d",
        "text": "Biological gradient (dose-response relationship)",
        "is_correct": false
      },
      {
        "id": "comm-sba-008-c",
        "text": "Temporality (exposure precedes the outcome)",
        "is_correct": false
      },
      {
        "id": "comm-sba-008-b",
        "text": "Strength of association and Consistency across studies",
        "is_correct": false
      },
      {
        "id": "comm-sba-008-a",
        "text": "Statistical significance with p-value < 0.001",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-009",
    "stem": "What is Herd Immunity in communicable disease epidemiology?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Herd immunity occurs when a large proportion of a population is immune (via vaccination or past infection), lowering the likelihood that a susceptible individual will contact an infected person, protecting those who cannot be vaccinated.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-009-a",
        "text": "The indirect protection of susceptible individuals in a population when a sufficiently high proportion of individuals are immune, reducing pathogen transmission chains",
        "is_correct": true
      },
      {
        "id": "comm-sba-009-b",
        "text": "The immunity acquired by ingesting colostrum within 24 hours of birth",
        "is_correct": false
      },
      {
        "id": "comm-sba-009-e",
        "text": "The genetic resistance of an entire species to zoonotic pathogens",
        "is_correct": false
      },
      {
        "id": "comm-sba-009-c",
        "text": "Passive immunity conferred by intravenous immunoglobulin administration",
        "is_correct": false
      },
      {
        "id": "comm-sba-009-d",
        "text": "Lifelong immunity acquired after suffering a severe wild-type infection",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-010",
    "stem": "The Herd Immunity Threshold (HIT) is mathematically related to the Basic Reproduction Number (R0) by which formula?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "The herd immunity threshold required to stop sustained transmission is given by HIT = 1 - (1/R0). For measles with R0 = 12-18, the threshold is 92-95%.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-010-b",
        "text": "HIT = R0 / (1 + R0)",
        "is_correct": false
      },
      {
        "id": "comm-sba-010-a",
        "text": "HIT = 1 - (1 / R0)",
        "is_correct": true
      },
      {
        "id": "comm-sba-010-d",
        "text": "HIT = 1 / (R0)^2",
        "is_correct": false
      },
      {
        "id": "comm-sba-010-e",
        "text": "HIT = (R0 - 1) × 100",
        "is_correct": false
      },
      {
        "id": "comm-sba-010-c",
        "text": "HIT = R0 × Attack Rate",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-011",
    "stem": "The Basic Reproduction Number (R0) of an infectious disease is defined as:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "R0 represents the transmission potential of an infectious agent: the expected number of secondary infections generated by an index case in a wholly susceptible population in the absence of control interventions.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-011-d",
        "text": "The time interval between infection and onset of symptoms",
        "is_correct": false
      },
      {
        "id": "comm-sba-011-c",
        "text": "The number of new cases diagnosed per 100,000 population per year",
        "is_correct": false
      },
      {
        "id": "comm-sba-011-e",
        "text": "The number of days an infected individual remains contagious",
        "is_correct": false
      },
      {
        "id": "comm-sba-011-b",
        "text": "The percentage of infected individuals who die from the disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-011-a",
        "text": "The average number of secondary cases produced by one infected individual in a COMPLETELY SUSCEPTIBLE population",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-012",
    "stem": "What constitutes an Endemic disease in epidemiology?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Endemic refers to the constant, typical baseline level of disease occurrence in a defined geographical area (e.g. malaria in sub-Saharan Africa). Epidemic is an unusual excess above baseline; pandemic is global spread.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-012-d",
        "text": "A disease transmitted exclusively from animals to humans",
        "is_correct": false
      },
      {
        "id": "comm-sba-012-c",
        "text": "A global disease outbreak affecting multiple continents simultaneously",
        "is_correct": false
      },
      {
        "id": "comm-sba-012-b",
        "text": "A sudden, unexpected increase in cases above what is normally expected",
        "is_correct": false
      },
      {
        "id": "comm-sba-012-a",
        "text": "The constant, habitual, or expected baseline presence of a disease or infectious agent within a given geographic area or population group",
        "is_correct": true
      },
      {
        "id": "comm-sba-012-e",
        "text": "An infection that is completely eradicated from the human population",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-013",
    "stem": "An Epidemic Curve characterized by a sharp, rapid rise to a single prominent peak followed by a relatively rapid decline indicates which type of outbreak?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "A point source epidemic involves exposure of a susceptible cohort to a single shared vehicle/source over a brief period (<1 incubation period), producing a steep, unimodal curve with clustered onset (e.g. Staphylococcal food poisoning).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-013-d",
        "text": "Intermittent common source outbreak",
        "is_correct": false
      },
      {
        "id": "comm-sba-013-c",
        "text": "Continuous common source outbreak",
        "is_correct": false
      },
      {
        "id": "comm-sba-013-b",
        "text": "Propagated (person-to-person) outbreak (such as seasonal influenza or measles)",
        "is_correct": false
      },
      {
        "id": "comm-sba-013-a",
        "text": "Point Source (Common Source) outbreak (such as food poisoning from a single contaminated catered meal)",
        "is_correct": true
      },
      {
        "id": "comm-sba-013-e",
        "text": "Endemic stable transmission",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-014",
    "stem": "In an outbreak investigation, what is the Attack Rate?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Attack rate is an incidence proportion applied to a narrowly defined population observed over a short, specific time interval during an epidemic (e.g., foodborne outbreaks).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-014-d",
        "text": "The speed at which a pathogen multiplies within the bloodstream",
        "is_correct": false
      },
      {
        "id": "comm-sba-014-e",
        "text": "The percentage of cultures that grow pathogenic organisms",
        "is_correct": false
      },
      {
        "id": "comm-sba-014-c",
        "text": "The ratio of secondary cases to primary index cases",
        "is_correct": false
      },
      {
        "id": "comm-sba-014-b",
        "text": "The proportion of diseased individuals who die from the disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-014-a",
        "text": "The cumulative incidence of new cases during a defined outbreak period, calculated as: (Number of new cases / Total population at risk) × 100",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-015",
    "stem": "Case Fatality Rate (CFR) measures:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Case Fatality Rate (CFR = Deaths from disease / Diagnosed cases of disease) reflects the virulence and severity of the condition and the efficacy of medical management.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-015-a",
        "text": "The proportion of individuals diagnosed with a specific disease who DIE from that disease within a designated time period, reflecting disease virulence",
        "is_correct": true
      },
      {
        "id": "comm-sba-015-d",
        "text": "The number of infant deaths per 1,000 live births",
        "is_correct": false
      },
      {
        "id": "comm-sba-015-e",
        "text": "The expected lifespan of a patient after contracting an infection",
        "is_correct": false
      },
      {
        "id": "comm-sba-015-b",
        "text": "The total number of deaths from a disease per 100,000 general population per year (Cause-specific mortality rate)",
        "is_correct": false
      },
      {
        "id": "comm-sba-015-c",
        "text": "The proportion of all deaths in a community attributable to that disease (Proportional mortality rate)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-016",
    "stem": "What is Surveillance in public health, and what distinguishes Active Surveillance from Passive Surveillance?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Public health surveillance is the ongoing systematic collection, analysis, and interpretation of health data. Passive surveillance is cheap but suffers from underreporting; active surveillance is resource-intensive but yields high completeness.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-016-e",
        "text": "Active surveillance relies entirely on citizen mobile phone apps",
        "is_correct": false
      },
      {
        "id": "comm-sba-016-a",
        "text": "Active surveillance involves health department staff proactively contacting clinics/labs to solicit disease reports; Passive surveillance relies on routine voluntary reporting by healthcare providers",
        "is_correct": true
      },
      {
        "id": "comm-sba-016-d",
        "text": "Active surveillance uses only electronic death certificates; Passive surveillance uses surveys",
        "is_correct": false
      },
      {
        "id": "comm-sba-016-c",
        "text": "Active surveillance is illegal under WHO regulations; Passive surveillance is mandatory",
        "is_correct": false
      },
      {
        "id": "comm-sba-016-b",
        "text": "Active surveillance is continuous; Passive surveillance is only conducted during wars",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-017",
    "stem": "What type of epidemiological error is introduced when subjects who are sick with a disease remember past exposures in far greater detail than healthy controls?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Recall bias occurs in retrospective case-control studies when cases (motivated by having a disease) recall, dwell on, or over-report past potential risk factors much more thoroughly than unaffected healthy controls.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-017-b",
        "text": "Selection bias",
        "is_correct": false
      },
      {
        "id": "comm-sba-017-c",
        "text": "Lead time bias",
        "is_correct": false
      },
      {
        "id": "comm-sba-017-a",
        "text": "Recall Bias (a form of Information / Measurement Bias)",
        "is_correct": true
      },
      {
        "id": "comm-sba-017-d",
        "text": "Length time bias",
        "is_correct": false
      },
      {
        "id": "comm-sba-017-e",
        "text": "Confounding by indication",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-018",
    "stem": "In the evaluation of screening tests, Lead Time Bias refers to:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Epidemiology",
    "programme": "both",
    "explanation": "Lead time bias occurs when screening detects disease earlier in its preclinical natural history, advancing the diagnosis date and making survival appear longer from diagnosis, even though death occurs at the exact same chronological time.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-018-a",
        "text": "An artificial inflation of apparent survival time due to diagnosing a disease earlier in its preclinical course without actually altering the ultimate clinical outcome or life expectancy",
        "is_correct": true
      },
      {
        "id": "comm-sba-018-e",
        "text": "The psychological relief experienced by patients with false-positive results",
        "is_correct": false
      },
      {
        "id": "comm-sba-018-d",
        "text": "The delay between ordering a test and receiving results from the laboratory",
        "is_correct": false
      },
      {
        "id": "comm-sba-018-b",
        "text": "The tendency of screening to detect slowly progressive, indolent cases (Length time bias)",
        "is_correct": false
      },
      {
        "id": "comm-sba-018-c",
        "text": "The failure of laboratory technicians to calibrate diagnostic equipment on time",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-019",
    "stem": "In a medical diagnostic test, Sensitivity is defined as:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Sensitivity is the True Positive rate (TP / [TP + FN]). Highly sensitive tests (SNOUT) rarely miss people with disease, making them ideal for initial screening tests.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-019-d",
        "text": "The probability that a patient with a negative test is disease-free [NPV]",
        "is_correct": false
      },
      {
        "id": "comm-sba-019-c",
        "text": "The probability that a patient with a positive test actually has the disease [PPV]",
        "is_correct": false
      },
      {
        "id": "comm-sba-019-b",
        "text": "The probability that the test is negative in a patient without disease [Specificity]",
        "is_correct": false
      },
      {
        "id": "comm-sba-019-a",
        "text": "The probability that the test is positive in a patient who HAS the disease [True Positives / (True Positives + False Negatives)]",
        "is_correct": true
      },
      {
        "id": "comm-sba-019-e",
        "text": "The proportion of all test results that are correct [Accuracy]",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-020",
    "stem": "In a clinical screening test, Specificity is defined as:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Specificity is the True Negative rate (TN / [TN + FP]). Highly specific tests (SPIN) rarely generate false positives, making them ideal for confirmatory testing.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-020-c",
        "text": "The likelihood of having a complication from the screening procedure",
        "is_correct": false
      },
      {
        "id": "comm-sba-020-e",
        "text": "The stability of the test result upon repeat testing",
        "is_correct": false
      },
      {
        "id": "comm-sba-020-a",
        "text": "The probability that the test is negative in a person who DOES NOT have the disease [True Negatives / (True Negatives + False Positives)]",
        "is_correct": true
      },
      {
        "id": "comm-sba-020-b",
        "text": "The percentage of diseased individuals identified by the test",
        "is_correct": false
      },
      {
        "id": "comm-sba-020-d",
        "text": "The ratio of false positives to true positives",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-021",
    "stem": "How do Positive Predictive Value (PPV) and Negative Predictive Value (NPV) change when the Prevalence of a disease INCREASES in the tested population?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Predictive values depend heavily on disease prevalence. As prevalence rises, a positive result is more likely to be a true positive (PPV rises), while a negative result is slightly less certain to exclude disease (NPV falls).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-021-a",
        "text": "PPV increases; NPV decreases (while Sensitivity and Specificity remain unchanged as intrinsic test properties)",
        "is_correct": true
      },
      {
        "id": "comm-sba-021-b",
        "text": "PPV decreases; NPV increases",
        "is_correct": false
      },
      {
        "id": "comm-sba-021-d",
        "text": "Both PPV and NPV decrease simultaneously",
        "is_correct": false
      },
      {
        "id": "comm-sba-021-c",
        "text": "Both PPV and NPV increase simultaneously",
        "is_correct": false
      },
      {
        "id": "comm-sba-021-e",
        "text": "PPV and NPV remain constant regardless of disease prevalence",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-022",
    "stem": "A Type I Error (Alpha error) in statistical hypothesis testing occurs when:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Type I error (alpha, conventionally set at 0.05) is the probability of concluding that a significant difference or treatment effect exists when, in reality, there is no true effect (rejecting a true null hypothesis).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-022-d",
        "text": "The p-value is calculated using an incorrect degrees of freedom",
        "is_correct": false
      },
      {
        "id": "comm-sba-022-a",
        "text": "The researcher rejects the null hypothesis (H0) when the null hypothesis is actually true (False Positive conclusion)",
        "is_correct": true
      },
      {
        "id": "comm-sba-022-b",
        "text": "The researcher fails to reject the null hypothesis when the alternative hypothesis is true (False Negative conclusion / Beta error)",
        "is_correct": false
      },
      {
        "id": "comm-sba-022-e",
        "text": "The standard deviation exceeds the sample mean",
        "is_correct": false
      },
      {
        "id": "comm-sba-022-c",
        "text": "The sample size is too large to detect a true difference",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-023",
    "stem": "A Type II Error (Beta error) in hypothesis testing occurs when:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Type II error (beta, conventionally 0.20 or 0.10) occurs when a study fails to detect a true treatment effect or difference that genuinely exists (failing to reject a false null hypothesis).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-023-c",
        "text": "The alpha level is set to 0.01 instead of 0.05",
        "is_correct": false
      },
      {
        "id": "comm-sba-023-b",
        "text": "The null hypothesis is rejected when it is true (Type I error)",
        "is_correct": false
      },
      {
        "id": "comm-sba-023-e",
        "text": "The study achieves statistical significance by pure chance",
        "is_correct": false
      },
      {
        "id": "comm-sba-023-d",
        "text": "The confidence interval excludes zero",
        "is_correct": false
      },
      {
        "id": "comm-sba-023-a",
        "text": "The researcher fails to reject the null hypothesis when the null hypothesis is false (False Negative conclusion)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-024",
    "stem": "Statistical Power of a clinical trial is mathematically defined as:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Power = 1 - beta (typically targeted at 80% or 90%). It represents the study's capacity to detect a true difference of a specified magnitude, increased by larger sample size, larger effect size, or lower variance.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-024-c",
        "text": "Alpha / Beta",
        "is_correct": false
      },
      {
        "id": "comm-sba-024-d",
        "text": "The p-value multiplied by the sample size",
        "is_correct": false
      },
      {
        "id": "comm-sba-024-e",
        "text": "The width of the 95% confidence interval",
        "is_correct": false
      },
      {
        "id": "comm-sba-024-b",
        "text": "1 - Alpha",
        "is_correct": false
      },
      {
        "id": "comm-sba-024-a",
        "text": "1 - Beta (the probability of correctly rejecting the null hypothesis when a true effect exists)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-025",
    "stem": "In a positively skewed (right-skewed) distribution of continuous data, what is the mathematical relationship between the Mean, Median, and Mode?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "In a right-skewed distribution (e.g. serum triglycerides, healthcare costs), extreme high values pull the mean to the right: Mode (peak) < Median (50th percentile) < Mean.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-025-d",
        "text": "Median > Mean > Mode",
        "is_correct": false
      },
      {
        "id": "comm-sba-025-b",
        "text": "Mode > Median > Mean",
        "is_correct": false
      },
      {
        "id": "comm-sba-025-e",
        "text": "The mean and mode are identical while the median is zero",
        "is_correct": false
      },
      {
        "id": "comm-sba-025-c",
        "text": "Mean = Median = Mode (normal distribution)",
        "is_correct": false
      },
      {
        "id": "comm-sba-025-a",
        "text": "Mean > Median > Mode (the mean is pulled toward the long right tail)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-026",
    "stem": "Which measure of central tendency and measure of dispersion are MOST appropriate for describing non-normally distributed (skewed) continuous data?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "The median and IQR are non-parametric and resistant to outliers, making them the gold-standard descriptive statistics for skewed data. Mean and SD are used for normally distributed data.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-026-a",
        "text": "Median and Interquartile Range (IQR = 75th percentile - 25th percentile)",
        "is_correct": true
      },
      {
        "id": "comm-sba-026-e",
        "text": "Range alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-026-d",
        "text": "Geometric mean and standard error of the mean (SEM)",
        "is_correct": false
      },
      {
        "id": "comm-sba-026-b",
        "text": "Mean and Standard Deviation (SD)",
        "is_correct": false
      },
      {
        "id": "comm-sba-026-c",
        "text": "Mode and Variance",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-027",
    "stem": "In a standard Normal (Gaussian) Distribution, what percentage of observations lie within plus or minus TWO Standard Deviations (±2 SD) of the mean?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "In an empirical Gaussian distribution: ~68.2% of data fall within ±1 SD, ~95.4% (or 95% within ±1.96 SD), and ~99.7% fall within ±3 SD of the mean.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-027-c",
        "text": "99.7% (±3 SD)",
        "is_correct": false
      },
      {
        "id": "comm-sba-027-b",
        "text": "68.2% (±1 SD)",
        "is_correct": false
      },
      {
        "id": "comm-sba-027-e",
        "text": "80.0%",
        "is_correct": false
      },
      {
        "id": "comm-sba-027-d",
        "text": "50.0%",
        "is_correct": false
      },
      {
        "id": "comm-sba-027-a",
        "text": "Approximately 95.4% (95%)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-028",
    "stem": "What is the difference between Standard Deviation (SD) and Standard Error of the Mean (SEM)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "SD reflects the biological variability of individual measurements. SEM estimates how closely the sample mean approximates the population mean; because SEM = SD / √n, it shrinks as sample size increases.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-028-e",
        "text": "There is no mathematical difference; the terms are completely interchangeable",
        "is_correct": false
      },
      {
        "id": "comm-sba-028-d",
        "text": "SD is only used for categorical data; SEM is for continuous data",
        "is_correct": false
      },
      {
        "id": "comm-sba-028-c",
        "text": "SEM is always larger than SD",
        "is_correct": false
      },
      {
        "id": "comm-sba-028-b",
        "text": "SD measures sample size; SEM measures test sensitivity",
        "is_correct": false
      },
      {
        "id": "comm-sba-028-a",
        "text": "SD quantifies the variability/dispersion of individual data values within a sample; SEM quantifies the precision of the sample mean estimating the true population mean (SEM = SD / sqrt(n))",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-029",
    "stem": "What statistical hypothesis test is used to compare the difference between the MEANS of TWO independent continuous groups (e.g. blood pressure in treated vs placebo)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Student's two-sample independent t-test compares the means of a normally distributed continuous variable between two independent groups. Paired t-test is for matched/repeated measures.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-029-e",
        "text": "Mann-Whitney U test (non-parametric alternative)",
        "is_correct": false
      },
      {
        "id": "comm-sba-029-d",
        "text": "Chi-Square (χ²) test of independence (for categorical variables)",
        "is_correct": false
      },
      {
        "id": "comm-sba-029-c",
        "text": "One-way ANOVA (for comparing means across 3 or more independent groups)",
        "is_correct": false
      },
      {
        "id": "comm-sba-029-b",
        "text": "Paired t-test (for paired pre- and post-intervention measurements in the same group)",
        "is_correct": false
      },
      {
        "id": "comm-sba-029-a",
        "text": "Independent Samples Student's t-test",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-030",
    "stem": "To compare the means of a continuous variable across THREE OR MORE independent groups (e.g. comparing HbA1c across 3 different drug regimens), what test is used?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "One-way ANOVA evaluates whether at least one group mean differs from the others without inflating Type I error, which occurs if multiple pairwise t-tests are run.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-030-b",
        "text": "Multiple independent Student's t-tests without correction",
        "is_correct": false
      },
      {
        "id": "comm-sba-030-c",
        "text": "Chi-square test of homogeneity",
        "is_correct": false
      },
      {
        "id": "comm-sba-030-a",
        "text": "One-Way Analysis of Variance (ANOVA)",
        "is_correct": true
      },
      {
        "id": "comm-sba-030-e",
        "text": "Wilcoxon signed-rank test",
        "is_correct": false
      },
      {
        "id": "comm-sba-030-d",
        "text": "Fisher's exact test",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-031",
    "stem": "Which statistical test is used to evaluate the association between TWO Categorical variables presented in a contingency table (e.g. smoking [yes/no] vs lung cancer [yes/no])?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "The Pearson Chi-Square (χ²) test compares observed frequencies in contingency tables to expected frequencies under the null hypothesis. When any expected cell count is <5, Fisher's exact test is preferred.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-031-c",
        "text": "Pearson correlation coefficient",
        "is_correct": false
      },
      {
        "id": "comm-sba-031-e",
        "text": "Kruskal-Wallis test",
        "is_correct": false
      },
      {
        "id": "comm-sba-031-b",
        "text": "Student's t-test",
        "is_correct": false
      },
      {
        "id": "comm-sba-031-a",
        "text": "Chi-Square (χ²) Test of Independence (or Fisher's Exact Test if expected cell counts are < 5)",
        "is_correct": true
      },
      {
        "id": "comm-sba-031-d",
        "text": "Linear regression analysis",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-032",
    "stem": "If the 95% Confidence Interval for a Relative Risk (RR) or Odds Ratio (OR) includes the number 1.0 (e.g. 95% CI: 0.85 to 1.45), what does this indicate?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "For ratio measures (RR, OR, Hazard Ratio), the null value is 1.0 (indicating equal odds/risk). If the 95% confidence interval spans across 1.0, the finding is not statistically significant at alpha = 0.05.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-032-b",
        "text": "The association is highly statistically significant (p < 0.001)",
        "is_correct": false
      },
      {
        "id": "comm-sba-032-a",
        "text": "The association is NOT statistically significant at the p < 0.05 level (fails to reject the null hypothesis of no difference)",
        "is_correct": true
      },
      {
        "id": "comm-sba-032-c",
        "text": "The study had excessive statistical power",
        "is_correct": false
      },
      {
        "id": "comm-sba-032-d",
        "text": "The exposure causes complete protection from disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-032-e",
        "text": "The relative risk is exactly 1.0 in all sub-populations",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-033",
    "stem": "If the 95% Confidence Interval for the DIFFERENCE between two means includes ZERO (e.g. 95% CI: -1.2 to +3.4 mmHg), what does this indicate?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "For difference measures (e.g. Mean Difference, Risk Difference), the null value is 0 (no difference). If the 95% CI includes zero, the observed difference is not statistically significant at alpha = 0.05.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-033-a",
        "text": "The difference between the two group means is NOT statistically significant at the p < 0.05 level",
        "is_correct": true
      },
      {
        "id": "comm-sba-033-b",
        "text": "The treatment was proven to be 100% effective",
        "is_correct": false
      },
      {
        "id": "comm-sba-033-d",
        "text": "The p-value is less than 0.01",
        "is_correct": false
      },
      {
        "id": "comm-sba-033-c",
        "text": "The two group means are perfectly identical",
        "is_correct": false
      },
      {
        "id": "comm-sba-033-e",
        "text": "The test statistic must be recalculated using ANOVA",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-034",
    "stem": "What does the Pearson Correlation Coefficient (r) measure?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Pearson's r measures the direction and linear association between two continuous variables: +1 indicates perfect positive correlation, -1 indicates perfect negative correlation, and 0 indicates no linear correlation.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-034-a",
        "text": "The strength and direction of a LINEAR relationship between two continuous variables (ranging from -1.0 to +1.0)",
        "is_correct": true
      },
      {
        "id": "comm-sba-034-e",
        "text": "The probability of a Type I error",
        "is_correct": false
      },
      {
        "id": "comm-sba-034-b",
        "text": "The exact causal effect of one variable on another",
        "is_correct": false
      },
      {
        "id": "comm-sba-034-c",
        "text": "The difference between two population medians",
        "is_correct": false
      },
      {
        "id": "comm-sba-034-d",
        "text": "The proportion of total variance explained by the model (R-squared)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-035",
    "stem": "In survival analysis, what statistical model is widely used to calculate Hazard Ratios while controlling for multiple continuous and categorical covariates?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "Cox proportional hazards regression allows analysis of time-to-event (survival) data with censoring, yielding Hazard Ratios (HR) for exposures while adjusting for multiple confounders.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-035-c",
        "text": "Kaplan-Meier product limit estimator alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-035-b",
        "text": "Simple linear regression",
        "is_correct": false
      },
      {
        "id": "comm-sba-035-a",
        "text": "Cox Proportional Hazards Regression model",
        "is_correct": true
      },
      {
        "id": "comm-sba-035-d",
        "text": "Log-rank test without covariates",
        "is_correct": false
      },
      {
        "id": "comm-sba-035-e",
        "text": "Logistic regression for binary endpoints without time-to-event data",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-036",
    "stem": "What is Number Needed to Treat (NNT)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Biostatistics",
    "programme": "both",
    "explanation": "NNT = 1 / ARR (where ARR = Risk_control - Risk_intervention). It represents the clinical effort required to prevent one bad outcome; lower NNT values reflect more effective therapies.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-036-a",
        "text": "The number of patients who need to receive an intervention to prevent ONE additional adverse outcome, calculated as: NNT = 1 / Absolute Risk Reduction (ARR)",
        "is_correct": true
      },
      {
        "id": "comm-sba-036-e",
        "text": "The reciprocal of the Odds Ratio",
        "is_correct": false
      },
      {
        "id": "comm-sba-036-d",
        "text": "The number of patients who suffer an adverse drug reaction",
        "is_correct": false
      },
      {
        "id": "comm-sba-036-b",
        "text": "The total number of patients enrolled in a phase III randomized trial",
        "is_correct": false
      },
      {
        "id": "comm-sba-036-c",
        "text": "1 / Relative Risk Reduction",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-037",
    "stem": "According to the Ottawa Charter for Health Promotion (WHO 1986), what are the five key action areas for health promotion?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "The Ottawa Charter established five foundational health promotion strategies: 1) Build healthy public policy; 2) Create supportive environments; 3) Strengthen community action; 4) Develop personal skills; 5) Reorient health services.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-037-b",
        "text": "Vaccination, Quarantine, Hospital expansion, Drug subsidization, and Medical education",
        "is_correct": false
      },
      {
        "id": "comm-sba-037-a",
        "text": "Building healthy public policy, Creating supportive environments, Strengthening community actions, Developing personal skills, and Reorienting health services",
        "is_correct": true
      },
      {
        "id": "comm-sba-037-c",
        "text": "Screening, Diagnosis, Treatment, Rehabilitation, and Palliative care",
        "is_correct": false
      },
      {
        "id": "comm-sba-037-d",
        "text": "Legislation, Taxation, Incarceration, Rationing, and Isolation",
        "is_correct": false
      },
      {
        "id": "comm-sba-037-e",
        "text": "Nutrition, Hygiene, Sanitation, Clean water, and Insect control only",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-038",
    "stem": "What are the three core levels of disease prevention defined in public health?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Primary: stops disease before it occurs (immunization, health diet, tobacco cessation); Secondary: detects early preclinical disease to arrest progression (mammography, Pap smears); Tertiary: manages established disease to minimize disability (cardiac rehab, stroke therapy).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-038-d",
        "text": "Biological prevention, Chemical prevention, and Physical prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-038-c",
        "text": "Individual prevention, Family prevention, and National prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-038-b",
        "text": "Inpatient prevention, Outpatient prevention, and Home health prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-038-e",
        "text": "Acute prevention, Subacute prevention, and Chronic prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-038-a",
        "text": "Primary prevention (preventing disease onset), Secondary prevention (early detection/screening), and Tertiary prevention (reducing disability/rehabilitation)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-039",
    "stem": "What is Primordial Prevention?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Primordial prevention operates upstream at the population level: eliminating or inhibiting the emergence of social, economic, environmental, and behavioral patterns known to increase disease risk across generations.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-039-a",
        "text": "Preventing the emergence and establishment of social, economic, and environmental risk factors (e.g. national legislation banning trans-fats, urban planning promoting walking)",
        "is_correct": true
      },
      {
        "id": "comm-sba-039-b",
        "text": "Treating patients in intensive care units with mechanical ventilation",
        "is_correct": false
      },
      {
        "id": "comm-sba-039-c",
        "text": "Screening neonates for phenylketonuria",
        "is_correct": false
      },
      {
        "id": "comm-sba-039-e",
        "text": "Performing coronary artery bypass graft surgery",
        "is_correct": false
      },
      {
        "id": "comm-sba-039-d",
        "text": "Administering antibiotics to contacts of meningococcal disease",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-040",
    "stem": "Under Wilson and Jungner's WHO screening criteria, which requirement must be met for a disease screening program to be ethically justified?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Wilson-Jungner criteria require: 1) important health problem; 2) accepted treatment available; 3) facilities for diagnosis/treatment; 4) recognizable latent/early stage; 5) suitable test; 6) acceptable to population; 7) natural history understood; 8) agreed policy on who to treat; 9) cost-effective.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-040-e",
        "text": "The screening program must generate commercial revenue for the hospital",
        "is_correct": false
      },
      {
        "id": "comm-sba-040-b",
        "text": "The screening test should have 100% sensitivity and 100% specificity with zero cost",
        "is_correct": false
      },
      {
        "id": "comm-sba-040-a",
        "text": "The condition should be an important health problem, have a recognizable latent or early asymptomatic stage, and an acceptable, effective treatment must be available",
        "is_correct": true
      },
      {
        "id": "comm-sba-040-c",
        "text": "The disease must be an infectious illness caused by an airborne virus",
        "is_correct": false
      },
      {
        "id": "comm-sba-040-d",
        "text": "Every positive screen must be immediately treated with surgical excision",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-041",
    "stem": "In the Transtheoretical Model (Stages of Change) of health behavior modification, which stage describes an individual who is not considering changing their unhealthy behavior in the foreseeable future (next 6 months)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "In the precontemplation stage, individuals are unaware or in denial of their problem and have no intention to change behavior in the next 6 months. Healthcare workers should focus on raising awareness and providing information.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-041-c",
        "text": "Preparation stage (planning action within 30 days)",
        "is_correct": false
      },
      {
        "id": "comm-sba-041-d",
        "text": "Action stage (actively modifying behavior for <6 months)",
        "is_correct": false
      },
      {
        "id": "comm-sba-041-b",
        "text": "Contemplation stage (considering change within the next 6 months)",
        "is_correct": false
      },
      {
        "id": "comm-sba-041-e",
        "text": "Maintenance stage (sustaining change for >6 months)",
        "is_correct": false
      },
      {
        "id": "comm-sba-041-a",
        "text": "Precontemplation stage",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-042",
    "stem": "The 'High-Risk Strategy' vs 'Population Strategy' of prevention, formulated by Geoffrey Rose, states that:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Rose's Prevention Paradox demonstrates that a preventive measure providing large benefits to the community often offers little apparent benefit to each individual, and shifting the whole population curve saves more lives than targeting high-risk outliers alone.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-042-a",
        "text": "A large number of people exposed to a small risk may generate more total cases of disease than a small number of people exposed to a high risk (the Prevention Paradox)",
        "is_correct": true
      },
      {
        "id": "comm-sba-042-e",
        "text": "Universal vaccination is inferior to treating hospitalized patients",
        "is_correct": false
      },
      {
        "id": "comm-sba-042-b",
        "text": "Screening should be restricted only to millionaires who can afford private therapy",
        "is_correct": false
      },
      {
        "id": "comm-sba-042-d",
        "text": "Population-wide interventions always have higher individual motivation",
        "is_correct": false
      },
      {
        "id": "comm-sba-042-c",
        "text": "Targeting high-risk individuals eliminates all disease in a community",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-043",
    "stem": "What is Health Literacy as defined by public health organizations?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Health literacy encompasses the cognitive and social skills that determine an individual's motivation and ability to gain access to, comprehend, and utilize health information to promote and maintain good health.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-043-a",
        "text": "The degree to which individuals have the capacity to obtain, process, understand, and apply basic health information and services needed to make appropriate health decisions",
        "is_correct": true
      },
      {
        "id": "comm-sba-043-b",
        "text": "The ability to speak more than three official national languages fluently",
        "is_correct": false
      },
      {
        "id": "comm-sba-043-c",
        "text": "Holding a university degree in biology or clinical medicine",
        "is_correct": false
      },
      {
        "id": "comm-sba-043-d",
        "text": "The percentage of citizens with personal internet access",
        "is_correct": false
      },
      {
        "id": "comm-sba-043-e",
        "text": "Knowledge of pharmaceutical patent expiration dates",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-044",
    "stem": "The Social Determinants of Health (SDOH) identified by the WHO Commission include:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Social determinants of health are the non-medical factors that influence health outcomes: the conditions in which people are born, grow, live, work, and age, accounting for up to 50% of health inequities.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-044-a",
        "text": "Socioeconomic status, education level, physical environment, employment, social support networks, and access to healthcare services",
        "is_correct": true
      },
      {
        "id": "comm-sba-044-b",
        "text": "Single nucleotide polymorphisms exclusively",
        "is_correct": false
      },
      {
        "id": "comm-sba-044-e",
        "text": "Hospital bed occupancy rates on weekends alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-044-d",
        "text": "The brand of pharmaceutical drugs stocked in private clinics",
        "is_correct": false
      },
      {
        "id": "comm-sba-044-c",
        "text": "Mitochondrial DNA mutations inherited from the maternal lineage",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-045",
    "stem": "What is the primary objective of Harm Reduction strategies in public health (such as needle exchange programs or methadone maintenance)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Harm reduction is an evidence-based approach that seeks to reduce the adverse health and social consequences of dangerous behaviors (e.g., providing clean syringes to prevent HIV/HCV transmission, naloxone distribution for overdoses) meeting people 'where they are'.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-045-e",
        "text": "To prosecute medical staff who administer naloxone",
        "is_correct": false
      },
      {
        "id": "comm-sba-045-c",
        "text": "To completely eliminate the global production of illicit substances within 30 days",
        "is_correct": false
      },
      {
        "id": "comm-sba-045-d",
        "text": "To encourage the initiation of drug use among non-users",
        "is_correct": false
      },
      {
        "id": "comm-sba-045-b",
        "text": "To incarcerate substance users in compulsory rehabilitation camps",
        "is_correct": false
      },
      {
        "id": "comm-sba-045-a",
        "text": "To minimize the negative health, social, and legal impacts associated with high-risk behaviors without necessarily requiring immediate total abstinence",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-046",
    "stem": "In health economics, what is a Quality-Adjusted Life Year (QALY)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "A QALY combines years of life gained with health-related quality of life (utility score from 0 = death to 1 = perfect health), used in Cost-Utility Analysis to evaluate the cost-effectiveness of medical interventions.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-046-a",
        "text": "A measure of disease burden and health outcomes that combines both the QUANTITY (length) and QUALITY of life lived, where 1 QALY equals one year in perfect health",
        "is_correct": true
      },
      {
        "id": "comm-sba-046-d",
        "text": "The monetary value of an individual's future economic tax contributions",
        "is_correct": false
      },
      {
        "id": "comm-sba-046-b",
        "text": "The total financial cost of hospitalization divided by patient age",
        "is_correct": false
      },
      {
        "id": "comm-sba-046-c",
        "text": "The number of calendar years a patient survives with metastatic cancer",
        "is_correct": false
      },
      {
        "id": "comm-sba-046-e",
        "text": "The average retirement age mandated by national pension legislation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-047",
    "stem": "What is the WHO 'MPOWER' package designed to combat?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "MPOWER is a WHO framework of six cost-effective tobacco control measures to assist countries in implementing the Framework Convention on Tobacco Control (FCTC) to reduce tobacco use and save lives.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-047-a",
        "text": "The global Tobacco epidemic (Monitor, Protect from smoke, Offer help to quit, Warn about dangers, Enforce advertising bans, Raise taxes)",
        "is_correct": true
      },
      {
        "id": "comm-sba-047-b",
        "text": "Maternal mortality in sub-Saharan Africa",
        "is_correct": false
      },
      {
        "id": "comm-sba-047-c",
        "text": "Malaria drug resistance in Southeast Asia",
        "is_correct": false
      },
      {
        "id": "comm-sba-047-e",
        "text": "Multidrug-resistant tuberculosis in prisons",
        "is_correct": false
      },
      {
        "id": "comm-sba-047-d",
        "text": "Childhood obesity and type 2 diabetes",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-048",
    "stem": "What is Motivational Interviewing in health promotion?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Motivational interviewing (Rollnick and Miller) is a directive, person-centered counseling method that helps patients explore and resolve ambivalence about behavior change (smoking, alcohol, diet) by eliciting 'change talk'.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-048-d",
        "text": "A legal deposition taken prior to enrolling in addiction treatment",
        "is_correct": false
      },
      {
        "id": "comm-sba-048-c",
        "text": "A standardized lecture delivering dietary instructions without discussion",
        "is_correct": false
      },
      {
        "id": "comm-sba-048-b",
        "text": "A confrontational disciplinary interrogation used to shame non-compliant patients",
        "is_correct": false
      },
      {
        "id": "comm-sba-048-e",
        "text": "Hypnotherapy performed while the patient is asleep",
        "is_correct": false
      },
      {
        "id": "comm-sba-048-a",
        "text": "A collaborative, client-centered counseling style for eliciting and strengthening an individual's OWN intrinsic motivation and commitment to change unhealthy behaviors",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-049",
    "stem": "Fluoridation of public water supplies to a concentration of 0.7 mg/L is an example of which level of prevention?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Community water fluoridation is a classic primary prevention population strategy: it reaches all residents regardless of socioeconomic status, preventing dental decay by incorporating fluoride into enamel crystals before cavitation occurs.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-049-d",
        "text": "Quaternary prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-049-a",
        "text": "Primary prevention (population-level intervention preventing dental caries)",
        "is_correct": true
      },
      {
        "id": "comm-sba-049-e",
        "text": "Rehabilitative prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-049-b",
        "text": "Secondary prevention",
        "is_correct": false
      },
      {
        "id": "comm-sba-049-c",
        "text": "Tertiary prevention",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-050",
    "stem": "What is Quaternary Prevention in modern healthcare?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Quaternary prevention (Marc Jamoulle) identifies patients at risk of over-medicalization, protects them from unnecessary invasive diagnostic testing and treatment ('do no harm'), and suggests ethically acceptable alternatives.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-050-a",
        "text": "Action taken to protect patients from medical over-intervention, over-medicalization, over-diagnosis, and unnecessary iatrogenic harm",
        "is_correct": true
      },
      {
        "id": "comm-sba-050-b",
        "text": "Prevention of catastrophic global nuclear conflicts",
        "is_correct": false
      },
      {
        "id": "comm-sba-050-c",
        "text": "Terminal hospice care during the final 48 hours of life",
        "is_correct": false
      },
      {
        "id": "comm-sba-050-d",
        "text": "Sterilization of surgical instruments using high-pressure autoclaves",
        "is_correct": false
      },
      {
        "id": "comm-sba-050-e",
        "text": "Universal quarantine during infectious disease emergencies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-051",
    "stem": "What is the primary purpose of an Occupational Health Pre-placement (pre-employment) Medical Examination?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Pre-placement evaluations assess fitness for a specific job, identify preexisting health conditions requiring reasonable workplace accommodations, establish a baseline health status, and ensure the work environment will not exacerbate prior injuries.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-051-d",
        "text": "To determine the employee's political and trade union affiliations",
        "is_correct": false
      },
      {
        "id": "comm-sba-051-a",
        "text": "To ensure that a prospective worker is physically and mentally fit to perform the specific essential duties of the job safely without endangering themselves or coworkers",
        "is_correct": true
      },
      {
        "id": "comm-sba-051-e",
        "text": "To guarantee that the worker will never take sick leave",
        "is_correct": false
      },
      {
        "id": "comm-sba-051-b",
        "text": "To disqualify all candidates who carry recessive genetic traits",
        "is_correct": false
      },
      {
        "id": "comm-sba-051-c",
        "text": "To test workers for non-work-related chronic illnesses to deny health insurance",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-052",
    "stem": "The concept of 'Health In All Policies' (HiAP) means that:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Health in All Policies (HiAP) is an intersectoral approach to public policy that systematically takes into account the health consequences of decisions made outside the healthcare sector (e.g. bike lanes in urban transit, taxation on sugar-sweetened beverages).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-052-a",
        "text": "Public policies across all government sectors (transport, housing, agriculture, education) systematically consider health implications and avoid unintended health harms",
        "is_correct": true
      },
      {
        "id": "comm-sba-052-b",
        "text": "The Ministry of Health must control all federal spending and taxation",
        "is_correct": false
      },
      {
        "id": "comm-sba-052-c",
        "text": "Every citizen must purchase private commercial health insurance",
        "is_correct": false
      },
      {
        "id": "comm-sba-052-e",
        "text": "Hospitals must be constructed in every municipal neighborhood",
        "is_correct": false
      },
      {
        "id": "comm-sba-052-d",
        "text": "All clinical trials must be funded by international charities",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-053",
    "stem": "Which health promotion initiative has proven to be the MOST cost-effective single measure for reducing the global burden of Non-Communicable Diseases?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "Taxation of tobacco, alcohol, and sugary drinks is recognized by the WHO as a 'Best Buy': it reduces consumption, prevents chronic NCDs, and generates public revenues that can be reinvested in health services.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-053-d",
        "text": "Publishing full-page dietary advice in print newspapers",
        "is_correct": false
      },
      {
        "id": "comm-sba-053-b",
        "text": "Distributing free fitness tracking watches to all citizens",
        "is_correct": false
      },
      {
        "id": "comm-sba-053-c",
        "text": "Building specialized tertiary cardiac surgical centers",
        "is_correct": false
      },
      {
        "id": "comm-sba-053-e",
        "text": "Conducting annual whole-body MRI scans for healthy adults",
        "is_correct": false
      },
      {
        "id": "comm-sba-053-a",
        "text": "Raising excise taxes and prices on tobacco, alcohol, and sugar-sweetened beverages ('sin taxes')",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-054",
    "stem": "The 'Precautionary Principle' in environmental and public health states that:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Health Promotion",
    "programme": "both",
    "explanation": "The Precautionary Principle mandates taking preventive action in the face of scientific uncertainty; shifting the burden of proof to proponents of an activity; exploring a wide range of alternatives; and increasing public participation.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-054-a",
        "text": "When an activity raises threats of harm to human health or the environment, precautionary measures should be taken even if some cause-and-effect relationships are not fully established scientifically",
        "is_correct": true
      },
      {
        "id": "comm-sba-054-b",
        "text": "No public health regulation should ever be enacted without 100% scientific certainty",
        "is_correct": false
      },
      {
        "id": "comm-sba-054-c",
        "text": "Industrial chemicals are presumed completely safe until dozens of human fatalities occur",
        "is_correct": false
      },
      {
        "id": "comm-sba-054-d",
        "text": "Public health officers must obtain judicial warrants before inspecting restaurants",
        "is_correct": false
      },
      {
        "id": "comm-sba-054-e",
        "text": "Quarantine can only be imposed after an epidemic has infected >50% of the population",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-055",
    "stem": "What are the six links in the Epidemiological 'Chain of Infection'?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "The chain of infection consists of: 1) Infectious Agent; 2) Reservoir; 3) Portal of Exit; 4) Mode of Transmission; 5) Portal of Entry; 6) Susceptible Host. Public health control breaks any one of these links.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-055-d",
        "text": "Fever, Rash, Cough, Diarrhea, Vomiting, and Sepsis",
        "is_correct": false
      },
      {
        "id": "comm-sba-055-b",
        "text": "Bacteria, Virus, Fungus, Protozoa, Prion, and Helminth",
        "is_correct": false
      },
      {
        "id": "comm-sba-055-a",
        "text": "Infectious Agent, Reservoir, Portal of Exit, Mode of Transmission, Portal of Entry, and Susceptible Host",
        "is_correct": true
      },
      {
        "id": "comm-sba-055-c",
        "text": "Incubation, Prodrome, Illness, Decline, Convalescence, and Resolution",
        "is_correct": false
      },
      {
        "id": "comm-sba-055-e",
        "text": "Isolation, Quarantine, Treatment, Vaccination, Contact tracing, and Vector control",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-056",
    "stem": "What is the key epidemiological distinction between Isolation and Quarantine?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Isolation applies to individuals known to be infected and contagious, preventing transmission. Quarantine applies to asymptomatic individuals exposed to a contagious agent for the duration of the maximum incubation period.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-056-a",
        "text": "Isolation separates SICK, infected individuals from others; Quarantine restricts the movement of WELL individuals who were EXPOSED to an infection during the incubation period",
        "is_correct": true
      },
      {
        "id": "comm-sba-056-d",
        "text": "Isolation lasts 40 days; Quarantine lasts 7 days",
        "is_correct": false
      },
      {
        "id": "comm-sba-056-e",
        "text": "Isolation applies only to airborne viruses; Quarantine is for foodborne toxins",
        "is_correct": false
      },
      {
        "id": "comm-sba-056-b",
        "text": "Isolation is for animals; Quarantine is for humans",
        "is_correct": false
      },
      {
        "id": "comm-sba-056-c",
        "text": "Isolation is voluntary; Quarantine is always forced by armed forces",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-057",
    "stem": "Which disease is the ONLY infectious human disease to be officially declared completely Eradicated from the globe by the World Health Assembly (in 1980)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Smallpox was officially certified eradicated in 1980 following a global ring vaccination campaign led by WHO. (Rinderpest, a bovine disease, was eradicated in 2011; polio and dracunculiasis are close to eradication).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-057-c",
        "text": "Measles",
        "is_correct": false
      },
      {
        "id": "comm-sba-057-a",
        "text": "Smallpox (Variola virus)",
        "is_correct": true
      },
      {
        "id": "comm-sba-057-b",
        "text": "Poliomyelitis",
        "is_correct": false
      },
      {
        "id": "comm-sba-057-d",
        "text": "Dracunculiasis (Guinea worm disease)",
        "is_correct": false
      },
      {
        "id": "comm-sba-057-e",
        "text": "Yellow Fever",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-058",
    "stem": "Why was Smallpox amenable to complete biological eradication, unlike influenza or rabies?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Eradication is feasible when: 1) humans are essential for transmission (no animal reservoir); 2) diagnostic tools are sensitive and specific; 3) effective intervention exists (vaccine); 4) no long-term asymptomatic carriage.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-058-a",
        "text": "Exclusive human reservoir (no animal host), obvious clinical presentation (no subclinical carrier state), stable virus with no antigenic drift, and an effective, thermostable vaccine providing lifelong immunity",
        "is_correct": true
      },
      {
        "id": "comm-sba-058-d",
        "text": "Treatment with penicillin cured all cases within 24 hours",
        "is_correct": false
      },
      {
        "id": "comm-sba-058-e",
        "text": "It was transmitted by a single mosquito vector that was eradicated",
        "is_correct": false
      },
      {
        "id": "comm-sba-058-b",
        "text": "Transmission occurred exclusively via contaminated drinking water",
        "is_correct": false
      },
      {
        "id": "comm-sba-058-c",
        "text": "It had an exceptionally low R0 of less than 0.5",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-059",
    "stem": "Directly Observed Therapy, Short-course (DOTS) is the internationally recommended strategy for controlling which major infectious disease?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "DOTS is the WHO strategy for TB control: 1) political commitment; 2) microscopy diagnosis; 3) standardized supervised treatment (direct observation of ingestion); 4) uninterrupted drug supply; 5) standardized recording and reporting.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-059-e",
        "text": "Leprosy",
        "is_correct": false
      },
      {
        "id": "comm-sba-059-d",
        "text": "Schistosomiasis",
        "is_correct": false
      },
      {
        "id": "comm-sba-059-b",
        "text": "Human Immunodeficiency Virus (HIV)",
        "is_correct": false
      },
      {
        "id": "comm-sba-059-c",
        "text": "Hepatitis C",
        "is_correct": false
      },
      {
        "id": "comm-sba-059-a",
        "text": "Tuberculosis (Mycobacterium tuberculosis)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-060",
    "stem": "What is the primary biological vector responsible for transmitting Human Malaria (Plasmodium falciparum)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Human malaria is transmitted exclusively by the bite of an infective female Anopheles mosquito, which bites primarily between dusk and dawn. Vector control includes ITNs and indoor residual spraying (IRS).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-060-d",
        "text": "Glossina species (Tsetse fly, transmits African trypanosomiasis)",
        "is_correct": false
      },
      {
        "id": "comm-sba-060-e",
        "text": "Phlebotomus sandfly (transmits Leishmaniasis)",
        "is_correct": false
      },
      {
        "id": "comm-sba-060-b",
        "text": "Aedes aegypti mosquito (transmits Dengue, Zika, Yellow Fever, Chikungunya)",
        "is_correct": false
      },
      {
        "id": "comm-sba-060-c",
        "text": "Culex pipiens mosquito (transmits West Nile virus, lymphatic filariasis)",
        "is_correct": false
      },
      {
        "id": "comm-sba-060-a",
        "text": "Female Anopheles mosquito",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-061",
    "stem": "Long-Lasting Insecticidal Nets (LLINs) protect against malaria through which two mechanisms?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "LLINs treated with pyrethroid insecticides provide a physical barrier while sleeping and kill mosquitoes that land on the netting, providing personal protection and a community-wide mosquito population reduction.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-061-e",
        "text": "Vaccinating sleeping individuals through transdermal absorption",
        "is_correct": false
      },
      {
        "id": "comm-sba-061-a",
        "text": "Physical barrier preventing mosquito contact, and chemical killing/repelling of mosquitoes with pyrethroid insecticides",
        "is_correct": true
      },
      {
        "id": "comm-sba-061-b",
        "text": "Purifying ambient bedroom air via ionic discharge",
        "is_correct": false
      },
      {
        "id": "comm-sba-061-c",
        "text": "Attracting mosquitoes into a lethal electrical grid",
        "is_correct": false
      },
      {
        "id": "comm-sba-061-d",
        "text": "Releasing sterile male mosquitoes into the household",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-062",
    "stem": "The Expanded Programme on Immunization (EPI), launched by WHO in 1974, initially targeted which six childhood infectious diseases?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "The original EPI six target diseases were: TB (BCG), Diphtheria, Pertussis, Tetanus (DTP), Polio (OPV), and Measles. Additional vaccines (HepB, Hib, PCV, Rotavirus, HPV) have since been integrated.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-062-c",
        "text": "Smallpox, Rabies, Rubella, Mumps, Varicella, and Meningitis",
        "is_correct": false
      },
      {
        "id": "comm-sba-062-b",
        "text": "HIV, Hepatitis B, Rotavirus, Malaria, Cholera, and Typhoid",
        "is_correct": false
      },
      {
        "id": "comm-sba-062-e",
        "text": "Pneumococcal pneumonia, HPV, Influenza, COVID-19, RSV, and Hepatitis A",
        "is_correct": false
      },
      {
        "id": "comm-sba-062-a",
        "text": "Tuberculosis, Diphtheria, Pertussis, Tetanus, Poliomyelitis, and Measles",
        "is_correct": true
      },
      {
        "id": "comm-sba-062-d",
        "text": "Yellow fever, Dengue, Japanese encephalitis, Plague, Anthrax, and Typhus",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-063",
    "stem": "Cold Chain in immunization logistics is defined as:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "The vaccine cold chain is a continuous network of refrigerators, cold boxes, and temperature monitors maintaining vaccines at recommended temperatures (+2°C to +8°C for most; -20°C for OPV/yellow fever) to preserve immunogenicity.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-063-e",
        "text": "Shipping vaccines exclusively by refrigerated cargo submarines",
        "is_correct": false
      },
      {
        "id": "comm-sba-063-d",
        "text": "Freezing reconstituted live viral vaccines overnight before use",
        "is_correct": false
      },
      {
        "id": "comm-sba-063-c",
        "text": "Administering ice packs to infants prior to intramuscular injection",
        "is_correct": false
      },
      {
        "id": "comm-sba-063-b",
        "text": "Storing vaccines in liquid nitrogen at -196°C indefinitely",
        "is_correct": false
      },
      {
        "id": "comm-sba-063-a",
        "text": "A temperature-controlled supply chain (typically +2°C to +8°C) that maintains vaccine potency from manufacturing to administration",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-064",
    "stem": "Which childhood vaccine is a LIVE ATTENUATED bacterial vaccine administered intradermally at birth?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "BCG is a live attenuated strain of Mycobacterium bovis administered intradermally at birth over the left deltoid, protecting infants against disseminated TB and tuberculous meningitis.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-064-c",
        "text": "Hepatitis B vaccine",
        "is_correct": false
      },
      {
        "id": "comm-sba-064-b",
        "text": "DTP (Diphtheria-Tetanus-Pertussis)",
        "is_correct": false
      },
      {
        "id": "comm-sba-064-e",
        "text": "Pneumococcal Conjugate Vaccine (PCV)",
        "is_correct": false
      },
      {
        "id": "comm-sba-064-d",
        "text": "Haemophilus influenzae type b (Hib) vaccine",
        "is_correct": false
      },
      {
        "id": "comm-sba-064-a",
        "text": "BCG (Bacille Calmette-Guérin for Tuberculosis prevention)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-065",
    "stem": "Measles is one of the most contagious human pathogens known, possessing an estimated Basic Reproduction Number (R0) of:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Measles is transmitted via fine airborne droplet nuclei that linger in room air for up to 2 hours, resulting in an R0 of 12-18 and requiring a herd immunity threshold of 92-95%.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-065-c",
        "text": "0.8 to 1.0",
        "is_correct": false
      },
      {
        "id": "comm-sba-065-b",
        "text": "1.5 to 2.5 (similar to seasonal influenza)",
        "is_correct": false
      },
      {
        "id": "comm-sba-065-d",
        "text": "3.0 to 4.0",
        "is_correct": false
      },
      {
        "id": "comm-sba-065-a",
        "text": "12 to 18",
        "is_correct": true
      },
      {
        "id": "comm-sba-065-e",
        "text": "Over 50",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-066",
    "stem": "Post-Exposure Prophylaxis (PEP) for Rabies after a Category III animal bite (transdermal bite or scratch) requires:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Category III rabies exposure requires: 1) vigorous washing with soap/running water for 15 minutes; 2) Rabies Immunoglobulin (RIG) infiltrated into/around the wound; 3) full active rabies vaccine series (days 0, 3, 7, 14).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-066-b",
        "text": "Oral amoxicillin-clavulanate alone for 7 days",
        "is_correct": false
      },
      {
        "id": "comm-sba-066-c",
        "text": "Immediate cauterization of the wound with silver nitrate without vaccination",
        "is_correct": false
      },
      {
        "id": "comm-sba-066-e",
        "text": "Administering intravenous acyclovir within 4 hours",
        "is_correct": false
      },
      {
        "id": "comm-sba-066-a",
        "text": "Immediate thorough wound washing with soap and water for 15 minutes, administration of Rabies Immunoglobulin (RIG) infiltrated around the wound, and a complete course of Rabies Vaccine",
        "is_correct": true
      },
      {
        "id": "comm-sba-066-d",
        "text": "Suturing the wound tightly immediately and observation for 10 days",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-067",
    "stem": "In cholera epidemics (Vibrio cholerae), what is the single most important life-saving emergency intervention?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Over 80% of cholera cases can be successfully treated with simple Oral Rehydration Salts (ORS); severe shock requires rapid IV crystalloid (Ringer's lactate). Antibiotics (doxycycline/azithromycin) are adjunctive.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-067-d",
        "text": "Total closure of all agricultural produce markets",
        "is_correct": false
      },
      {
        "id": "comm-sba-067-c",
        "text": "Mass parenteral vaccination with whole-cell killed vaccines",
        "is_correct": false
      },
      {
        "id": "comm-sba-067-e",
        "text": "Surgical diversion of sewage into nearby river channels",
        "is_correct": false
      },
      {
        "id": "comm-sba-067-b",
        "text": "Immediate administration of broad-spectrum cephalosporins to every resident",
        "is_correct": false
      },
      {
        "id": "comm-sba-067-a",
        "text": "Prompt and vigorous rehydration therapy using Oral Rehydration Salts (ORS) and IV Ringer's Lactate for severe dehydration",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-068",
    "stem": "How is Trachoma (the leading infectious cause of blindness worldwide, caused by Chlamydia trachomatis) controlled using the WHO 'SAFE' strategy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "The WHO SAFE strategy for trachoma elimination: S = Surgery (for in-turned eyelashes/trichiasis); A = Antibiotics (mass distribution of oral azithromycin); F = Facial cleanliness; E = Environmental improvements (water and latrines).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-068-a",
        "text": "Surgery for trichiasis, Antibiotics (azithromycin), Facial cleanliness, and Environmental improvement (sanitation)",
        "is_correct": true
      },
      {
        "id": "comm-sba-068-b",
        "text": "Screening, Antivirals, Fumigation, and Education",
        "is_correct": false
      },
      {
        "id": "comm-sba-068-c",
        "text": "Sanitation, Anthelminthics, Fogging, and Eye drops",
        "is_correct": false
      },
      {
        "id": "comm-sba-068-d",
        "text": "Supplements, Air filtration, Fly catching, and Enucleation",
        "is_correct": false
      },
      {
        "id": "comm-sba-068-e",
        "text": "Sterilization, Antibiotics, Face masks, and Evacuation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-069",
    "stem": "Mass Drug Administration (MDA) of Ivermectin is the cornerstone of the global campaign to eliminate which Neglected Tropical Disease (NTD)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Annual or biannual community-directed treatment with Ivermectin (Mectizan) paralyzes and kills Onchocerca volvulus microfilariae, halting transmission and preventing severe skin disease and irreversible blindness.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-069-e",
        "text": "Dracunculiasis",
        "is_correct": false
      },
      {
        "id": "comm-sba-069-d",
        "text": "Chagas Disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-069-c",
        "text": "Visceral Leishmaniasis",
        "is_correct": false
      },
      {
        "id": "comm-sba-069-b",
        "text": "African Trypanosomiasis",
        "is_correct": false
      },
      {
        "id": "comm-sba-069-a",
        "text": "Onchocerciasis (River Blindness, transmitted by Simulium blackflies)",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-070",
    "stem": "Antimicrobial Stewardship programs in healthcare facilities are designed to:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "Antimicrobial stewardship promotes the appropriate use of antimicrobials (right drug, right dose, right route, right duration) to improve patient outcomes, reduce adverse events, and combat bacterial drug resistance.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-070-c",
        "text": "Require laboratory culture confirmation before administering any empirical therapy in septic shock",
        "is_correct": false
      },
      {
        "id": "comm-sba-070-a",
        "text": "Optimize the selection, dosing, duration, and route of antimicrobial therapy to cure infections, minimize toxicity, and prevent the emergence of antimicrobial resistance (AMR)",
        "is_correct": true
      },
      {
        "id": "comm-sba-070-e",
        "text": "Substitute homeopathic preparations for all surgical prophylaxis",
        "is_correct": false
      },
      {
        "id": "comm-sba-070-d",
        "text": "Ensure that pharmaceutical sales representatives select inpatient regimens",
        "is_correct": false
      },
      {
        "id": "comm-sba-070-b",
        "text": "Completely ban the use of all antibiotics in intensive care units",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-071",
    "stem": "The '95-95-95' global targets established by UNAIDS for HIV control by 2025 aim for:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "UNAIDS fast-track targets: 95% of all people living with HIV diagnosed; 95% of diagnosed on sustained ART; 95% of people on ART virally suppressed (undetectable = untransmittable, U=U).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-071-a",
        "text": "95% of people living with HIV know their status; 95% of diagnosed individuals receive antiretroviral therapy (ART); 95% of those on ART achieve viral suppression",
        "is_correct": true
      },
      {
        "id": "comm-sba-071-d",
        "text": "95% of patients tested monthly, 95% compliance with vitamins, 95% survival to age 95",
        "is_correct": false
      },
      {
        "id": "comm-sba-071-c",
        "text": "95% abstinence rate among adolescents, 95% marriage rate, 95% circumcision",
        "is_correct": false
      },
      {
        "id": "comm-sba-071-e",
        "text": "95% of funding from domestic sources, 95% generic drugs, 95% rural clinics",
        "is_correct": false
      },
      {
        "id": "comm-sba-071-b",
        "text": "95% reduction in condom costs, 95% clinic attendance, 95% cure rate",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-072",
    "stem": "Which international legal agreement establishes binding obligations on 196 countries to detect, assess, and report Public Health Emergencies of International Concern (PHEIC)?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Communicable Disease Control",
    "programme": "both",
    "explanation": "The International Health Regulations (IHR 2005) is an overarching legal framework coordinated by the WHO requiring states to maintain core surveillance and response capacities and notify events that may constitute a PHEIC.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-072-a",
        "text": "International Health Regulations (IHR 2005)",
        "is_correct": true
      },
      {
        "id": "comm-sba-072-b",
        "text": "Geneva Convention on Medical Neutrality",
        "is_correct": false
      },
      {
        "id": "comm-sba-072-c",
        "text": "Declaration of Helsinki on Bioethics",
        "is_correct": false
      },
      {
        "id": "comm-sba-072-d",
        "text": "Nuremberg Code on Human Experimentation",
        "is_correct": false
      },
      {
        "id": "comm-sba-072-e",
        "text": "Kyoto Protocol on Environmental Emissions",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-073",
    "stem": "According to the World Health Organization, what four disease groups account for over 80% of all premature Non-Communicable Disease (NCD) deaths globally?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "The four main NCD groups are Cardiovascular diseases (heart attacks/stroke), Cancers, Chronic respiratory diseases (COPD/asthma), and Diabetes, sharing four behavioral risk factors (tobacco, unhealthy diet, physical inactivity, alcohol).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-073-d",
        "text": "Obesity, Gout, Gallstones, and Peptic ulcer disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-073-a",
        "text": "Cardiovascular Diseases, Cancers, Chronic Respiratory Diseases, and Diabetes",
        "is_correct": true
      },
      {
        "id": "comm-sba-073-b",
        "text": "Alzheimer's disease, Osteoarthritis, Cirrhosis, and Renal failure",
        "is_correct": false
      },
      {
        "id": "comm-sba-073-e",
        "text": "Cataracts, Glaucoma, Hearing loss, and Macular degeneration",
        "is_correct": false
      },
      {
        "id": "comm-sba-073-c",
        "text": "Depression, Schizophrenia, Bipolar disorder, and Anxiety",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-074",
    "stem": "What are the four shared, modifiable behavioral risk factors that drive the global pandemic of Non-Communicable Diseases?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "The WHO '4x4 framework' targets the 4 major NCDs driven by 4 key modifiable behaviors: tobacco use, physical inactivity, harmful alcohol use, and unhealthy diets (high sodium, saturated/trans fats, and refined sugars).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-074-c",
        "text": "Air travel, Urban living, Use of cellular phones, and Shift work",
        "is_correct": false
      },
      {
        "id": "comm-sba-074-b",
        "text": "Poor dental hygiene, Lack of sleep, Stress, and Sun exposure",
        "is_correct": false
      },
      {
        "id": "comm-sba-074-e",
        "text": "Vitamin deficiency, Bacterial carriage, Inadequate healthcare, and Low income",
        "is_correct": false
      },
      {
        "id": "comm-sba-074-a",
        "text": "Tobacco use, Unhealthy diet, Physical inactivity, and Harmful use of alcohol",
        "is_correct": true
      },
      {
        "id": "comm-sba-074-d",
        "text": "Caffeine consumption, High salt intake, Obesity, and Low water intake",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-075",
    "stem": "The diagnosis of Essential Hypertension in an adult (according to WHO/ISH guidelines) is established when clinic blood pressure on repeat visits is:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Hypertension is defined as persistent office SBP ≥ 140 mmHg and/or DBP ≥ 90 mmHg on at least 2 occasions, or daytime ambulatory/home average ≥ 135/85 mmHg.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-075-e",
        "text": "Mean arterial pressure >= 90 mmHg",
        "is_correct": false
      },
      {
        "id": "comm-sba-075-b",
        "text": "Systolic >= 120 mmHg and/or Diastolic >= 80 mmHg",
        "is_correct": false
      },
      {
        "id": "comm-sba-075-a",
        "text": "Systolic Blood Pressure >= 140 mmHg and/or Diastolic Blood Pressure >= 90 mmHg",
        "is_correct": true
      },
      {
        "id": "comm-sba-075-d",
        "text": "Systolic >= 180 mmHg and/or Diastolic >= 110 mmHg on a single emergency measurement",
        "is_correct": false
      },
      {
        "id": "comm-sba-075-c",
        "text": "Systolic >= 160 mmHg and/or Diastolic >= 100 mmHg",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-076",
    "stem": "What dietary intervention has been proven in randomized trials to lower systolic blood pressure by up to 11 mmHg in hypertensive individuals?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "The DASH diet (rich in potassium, calcium, magnesium, and dietary fiber, combined with dietary sodium restriction <2,300 mg/day) produces substantial blood pressure reductions comparable to single-drug pharmacotherapy.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-076-a",
        "text": "DASH Diet (Dietary Approaches to Stop Hypertension: rich in fruits, vegetables, whole grains, low-fat dairy; low in saturated fat and sodium < 2g/day)",
        "is_correct": true
      },
      {
        "id": "comm-sba-076-d",
        "text": "High-protein Atkins diet with unrestricted red meat",
        "is_correct": false
      },
      {
        "id": "comm-sba-076-e",
        "text": "Intermittent fasting without sodium restriction",
        "is_correct": false
      },
      {
        "id": "comm-sba-076-b",
        "text": "Strict ketogenic diet (high fat, low carbohydrate)",
        "is_correct": false
      },
      {
        "id": "comm-sba-076-c",
        "text": "Pure carnivore diet",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-077",
    "stem": "According to WHO criteria, what fasting plasma glucose (FPG) and glycated hemoglobin (HbA1c) thresholds define Diabetes Mellitus?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Diagnostic criteria for diabetes: 1) Fasting plasma glucose ≥ 7.0 mmol/L (126 mg/dL); OR 2) 2-hour post-75g oral glucose tolerance test ≥ 11.1 mmol/L (200 mg/dL); OR 3) HbA1c ≥ 6.5% (48 mmol/mol); OR 4) random glucose ≥ 11.1 mmol/L with symptoms.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-077-c",
        "text": "FPG >= 11.1 mmol/L or HbA1c >= 8.0%",
        "is_correct": false
      },
      {
        "id": "comm-sba-077-b",
        "text": "FPG >= 6.1 mmol/L or HbA1c >= 6.0%",
        "is_correct": false
      },
      {
        "id": "comm-sba-077-a",
        "text": "Fasting Plasma Glucose >= 7.0 mmol/L (126 mg/dL) or HbA1c >= 6.5% (48 mmol/mol)",
        "is_correct": true
      },
      {
        "id": "comm-sba-077-e",
        "text": "2-hour post-load glucose >= 7.8 mmol/L",
        "is_correct": false
      },
      {
        "id": "comm-sba-077-d",
        "text": "FPG >= 5.6 mmol/L or HbA1c >= 5.7%",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-078",
    "stem": "Metabolic Syndrome, which confers a five-fold increased risk of type 2 diabetes and a three-fold increased risk of cardiovascular disease, is characterized by:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Metabolic syndrome requires at least 3 of 5 criteria: 1) central obesity (waist circumference); 2) triglycerides ≥1.7 mmol/L (150 mg/dL); 3) low HDL (<1.0 mmol/L men, <1.3 women); 4) BP ≥130/85 mmHg; 5) fasting glucose ≥5.6 mmol/L.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-078-c",
        "text": "Elevated LDL cholesterol and elevated total cholesterol alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-078-a",
        "text": "Abdominal (central) obesity, Elevated triglycerides, Reduced HDL cholesterol, Elevated blood pressure, and Elevated fasting blood glucose",
        "is_correct": true
      },
      {
        "id": "comm-sba-078-e",
        "text": "Elevated serum uric acid and recurrent renal calculi",
        "is_correct": false
      },
      {
        "id": "comm-sba-078-d",
        "text": "Hypotension with recurrent hypoglycemia and weight loss",
        "is_correct": false
      },
      {
        "id": "comm-sba-078-b",
        "text": "Generalized subcutaneous obesity with normal lipid profiles",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-079",
    "stem": "What is the leading cause of preventable Cancer deaths worldwide, accounting for over 85% of all lung cancer cases?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Tobacco smoking is the single greatest preventable cause of cancer deaths globally, causing ~85% of lung cancers as well as oral, laryngeal, esophageal, bladder, pancreatic, and cervical malignancies.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-079-d",
        "text": "Occupational asbestos inhalation alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-079-a",
        "text": "Cigarette smoking (and secondhand tobacco smoke exposure)",
        "is_correct": true
      },
      {
        "id": "comm-sba-079-b",
        "text": "Radon gas exposure in basements",
        "is_correct": false
      },
      {
        "id": "comm-sba-079-e",
        "text": "Air pollution and fine particulate matter (PM2.5)",
        "is_correct": false
      },
      {
        "id": "comm-sba-079-c",
        "text": "Dietary consumption of processed red meat",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-080",
    "stem": "Which human virus is the primary causative agent of Cervical Cancer, and what preventive measure has revolutionized its global control?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "High-risk HPV oncotypes 16 and 18 cause >70% of cervical cancers via E6 and E7 oncoproteins (inactivating p53 and Rb). Routine vaccination of girls aged 9-14 prior to sexual debut and screening prevent virtually all cervical cancers.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-080-c",
        "text": "Human T-cell Lymphotropic Virus (HTLV-1); prevented by avoiding breastfeeding",
        "is_correct": false
      },
      {
        "id": "comm-sba-080-a",
        "text": "Human Papillomavirus (HPV types 16 and 18); prevented by prophylactic HPV Vaccination of adolescent girls (and boys)",
        "is_correct": true
      },
      {
        "id": "comm-sba-080-e",
        "text": "Hepatitis C Virus; prevented by interferon injections",
        "is_correct": false
      },
      {
        "id": "comm-sba-080-b",
        "text": "Herpes Simplex Virus type 2; prevented by oral valacyclovir",
        "is_correct": false
      },
      {
        "id": "comm-sba-080-d",
        "text": "Epstein-Barr Virus (EBV); prevented by childhood tonsillectomy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-081",
    "stem": "What is the recommended screening method for Breast Cancer that has been demonstrated to reduce breast cancer mortality in women aged 50 to 69?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Biennial screening mammography in women aged 50-69 reduces breast cancer mortality by ~20-25% through detecting small, non-palpable early invasive cancers and ductal carcinomas in situ (DCIS).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-081-a",
        "text": "Biennial (every 2 years) Screening Mammography",
        "is_correct": true
      },
      {
        "id": "comm-sba-081-d",
        "text": "Annual screening breast MRI for all average-risk women",
        "is_correct": false
      },
      {
        "id": "comm-sba-081-b",
        "text": "Monthly routine clinical breast examination by a physician alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-081-e",
        "text": "Routine serum measurement of CA 15-3 and CEA",
        "is_correct": false
      },
      {
        "id": "comm-sba-081-c",
        "text": "Daily self-breast examination in the shower",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-082",
    "stem": "Colorectal cancer screening in average-risk individuals beginning at age 45-50 can be achieved using:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Screening modalities with proven mortality benefit: stool-based tests (annual FIT detecting human hemoglobin) or structural exams (colonoscopy every 10 years or sigmoidoscopy every 5 years), enabling removal of premalignant adenomatous polyps.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-082-d",
        "text": "Digital rectal examination alone once every 5 years",
        "is_correct": false
      },
      {
        "id": "comm-sba-082-a",
        "text": "Annual or biennial Fecal Immunochemical Testing (FIT) or Screening Colonoscopy every 10 years",
        "is_correct": true
      },
      {
        "id": "comm-sba-082-b",
        "text": "Annual abdominal ultrasound examinations",
        "is_correct": false
      },
      {
        "id": "comm-sba-082-e",
        "text": "Barium enema radiography annually",
        "is_correct": false
      },
      {
        "id": "comm-sba-082-c",
        "text": "Serum Carcinoembryonic Antigen (CEA) testing every 6 months",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-083",
    "stem": "Chronic Obstructive Pulmonary Disease (COPD) is characterized spirometrically by:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Post-bronchodilator FEV1/FVC < 0.70 confirms persistent, non-fully reversible airflow limitation diagnostic of COPD. Cigarette smoking is the predominant etiology in developed nations; biomass smoke exposure is major in developing nations.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-083-a",
        "text": "A persistent, post-bronchodilator FEV1/FVC ratio < 0.70 (70%)",
        "is_correct": true
      },
      {
        "id": "comm-sba-083-b",
        "text": "An increase in FEV1 > 12% and > 200 mL following inhaled salbutamol",
        "is_correct": false
      },
      {
        "id": "comm-sba-083-e",
        "text": "A diffusing capacity (DLCO) of greater than 120% of predicted",
        "is_correct": false
      },
      {
        "id": "comm-sba-083-c",
        "text": "A marked reduction in Vital Capacity with normal FEV1/FVC > 80%",
        "is_correct": false
      },
      {
        "id": "comm-sba-083-d",
        "text": "Isolated reduction in peak expiratory flow rate with normal spirometry",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-084",
    "stem": "In developing countries, exposure to Household Air Pollution (HAP) from burning solid fuels (wood, dung, charcoal) in unvented indoor cookstoves is a major risk factor for:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Over 3 billion people rely on solid biomass fuels for indoor cooking. Inhaled carbon monoxide, fine particulates (PM2.5), and polycyclic hydrocarbons cause ~3-4 million premature deaths annually from COPD, childhood pneumonia, and stroke.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-084-d",
        "text": "Malignant melanoma of the skin",
        "is_correct": false
      },
      {
        "id": "comm-sba-084-c",
        "text": "Colorectal adenocarcinoma",
        "is_correct": false
      },
      {
        "id": "comm-sba-084-b",
        "text": "Rheumatoid arthritis and systemic lupus erythematosus",
        "is_correct": false
      },
      {
        "id": "comm-sba-084-e",
        "text": "Appendicitis in young adults",
        "is_correct": false
      },
      {
        "id": "comm-sba-084-a",
        "text": "Chronic Obstructive Pulmonary Disease, acute lower respiratory infections in children, cataracts, and low birth weight",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-085",
    "stem": "What is the primary intervention proven to slow the accelerated decline of lung function (FEV1) in patients with COPD?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Smoking cessation is the ONLY intervention unequivocally demonstrated to alter the natural history of COPD, returning the annual rate of FEV1 decline from ~60-80 mL/year back toward the normal non-smoker rate (~25-30 mL/year).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-085-d",
        "text": "Long-term home oxygen therapy for 15 hours daily",
        "is_correct": false
      },
      {
        "id": "comm-sba-085-c",
        "text": "Inhaled corticosteroids",
        "is_correct": false
      },
      {
        "id": "comm-sba-085-e",
        "text": "Oral theophylline maintenance therapy",
        "is_correct": false
      },
      {
        "id": "comm-sba-085-b",
        "text": "Daily long-acting beta-agonist (LABA) therapy",
        "is_correct": false
      },
      {
        "id": "comm-sba-085-a",
        "text": "Smoking Cessation",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-086",
    "stem": "What is the leading cause of preventable adult Chronic Kidney Disease (CKD) worldwide?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Diabetes mellitus (~40%) and hypertension (~30%) together account for over two-thirds of all end-stage renal disease cases globally, requiring public health focus on early screening (eGFR and urine albumin-to-creatinine ratio).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-086-a",
        "text": "Diabetic Nephropathy and Hypertensive Nephrosclerosis",
        "is_correct": true
      },
      {
        "id": "comm-sba-086-c",
        "text": "Recurrent nephrolithiasis with staghorn calculi",
        "is_correct": false
      },
      {
        "id": "comm-sba-086-d",
        "text": "Drug-induced acute interstitial nephritis",
        "is_correct": false
      },
      {
        "id": "comm-sba-086-b",
        "text": "Autosomal dominant polycystic kidney disease",
        "is_correct": false
      },
      {
        "id": "comm-sba-086-e",
        "text": "Congenital posterior urethral valves",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-087",
    "stem": "The Global Burden of Disease (GBD) study measures overall disease burden using Disability-Adjusted Life Years (DALYs). A DALY is calculated as:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "One DALY represents the loss of the equivalent of one year of full health. DALY = YLL (number of deaths × remaining life expectancy) + YLD (incident cases × duration × disability weight from 0 to 1).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-087-a",
        "text": "Years of Life Lost due to premature mortality (YLL) + Years Lived with Disability (YLD)",
        "is_correct": true
      },
      {
        "id": "comm-sba-087-c",
        "text": "Life expectancy at birth minus current age",
        "is_correct": false
      },
      {
        "id": "comm-sba-087-b",
        "text": "Quality-Adjusted Life Years (QALY) divided by GDP per capita",
        "is_correct": false
      },
      {
        "id": "comm-sba-087-d",
        "text": "The total healthcare expenditures spent during a patient's final year of life",
        "is_correct": false
      },
      {
        "id": "comm-sba-087-e",
        "text": "The hospital readmission rate multiplied by average length of stay",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-088",
    "stem": "What is the primary public health strategy to combat Iodine Deficiency Disorders (IDD) globally?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Universal Salt Iodization (USI) is the most cost-effective and sustainable intervention to eliminate iodine deficiency, preventing endemic goitre, spontaneous abortion, stillbirth, and irreversible mental impairment (cretinism).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-088-a",
        "text": "Universal Salt Iodization (potassium iodate added to all edible salt at 20-40 mg/kg)",
        "is_correct": true
      },
      {
        "id": "comm-sba-088-e",
        "text": "Injecting iodized poppy seed oil to all pregnant women intramuscularly",
        "is_correct": false
      },
      {
        "id": "comm-sba-088-c",
        "text": "Iodinating communal water reservoirs annually",
        "is_correct": false
      },
      {
        "id": "comm-sba-088-b",
        "text": "Distributing daily multivitamin tablets to schoolchildren",
        "is_correct": false
      },
      {
        "id": "comm-sba-088-d",
        "text": "Promoting exclusive consumption of marine seafood",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-089",
    "stem": "What public health measure has successfully reduced the incidence of Neural Tube Defects (NTDs) at the population level in over 80 countries?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Mandatory folic acid fortification of enriched cereal grain products (flour, cornmeal) ensures periconceptional folate availability before women even know they are pregnant, reducing spina bifida and anencephaly by 30-50%.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-089-d",
        "text": "Encouraging pregnant women to avoid sunlight",
        "is_correct": false
      },
      {
        "id": "comm-sba-089-c",
        "text": "Screening all pregnant women with amniocentesis at 8 weeks",
        "is_correct": false
      },
      {
        "id": "comm-sba-089-b",
        "text": "Adding vitamin B12 to public drinking water",
        "is_correct": false
      },
      {
        "id": "comm-sba-089-e",
        "text": "Banning the use of paracetamol during the first trimester",
        "is_correct": false
      },
      {
        "id": "comm-sba-089-a",
        "text": "Mandatory fortification of staple wheat flour and cereal grains with Folic Acid",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-090",
    "stem": "The 'Cardiovascular Risk Score' approach (such as WHO/ISH risk charts or Framingham Risk Score) estimates:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Non-communicable Diseases",
    "programme": "both",
    "explanation": "Total cardiovascular risk assessment models integrate age, sex, smoking, systolic BP, total cholesterol (or BMI), and diabetes status to calculate 10-year risk, guiding cost-effective allocation of statin and antihypertensive therapy.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-090-d",
        "text": "The likelihood of surviving sudden cardiac arrest without CPR",
        "is_correct": false
      },
      {
        "id": "comm-sba-090-e",
        "text": "The exact age at which a patient will require a pacemaker",
        "is_correct": false
      },
      {
        "id": "comm-sba-090-c",
        "text": "The probability of finding coronary artery stenosis > 70% on cardiac catheterization",
        "is_correct": false
      },
      {
        "id": "comm-sba-090-b",
        "text": "The lifetime risk of developing essential hypertension alone",
        "is_correct": false
      },
      {
        "id": "comm-sba-090-a",
        "text": "The 10-year probability of experiencing a fatal or non-fatal major cardiovascular event (myocardial infarction or stroke) based on combined risk factors",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-091",
    "stem": "What is the official WHO definition of Maternal Mortality Ratio (MMR)?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "MMR = (Maternal deaths / Total live births) × 100,000. It measures the obstetric risk of death per pregnancy. Maternal Mortality Rate = (Maternal deaths / Women of reproductive age 15-49) × 1,000.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-091-b",
        "text": "The number of maternal deaths per 1,000 women of reproductive age (15-49 years)",
        "is_correct": false
      },
      {
        "id": "comm-sba-091-c",
        "text": "The proportion of all deaths in women caused by pregnancy complications",
        "is_correct": false
      },
      {
        "id": "comm-sba-091-a",
        "text": "The number of maternal deaths per 100,000 Live Births during a given time period",
        "is_correct": true
      },
      {
        "id": "comm-sba-091-e",
        "text": "The number of maternal deaths per 10,000 hospital deliveries",
        "is_correct": false
      },
      {
        "id": "comm-sba-091-d",
        "text": "The number of stillbirths per 1,000 total births",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-092",
    "stem": "According to the ICD, a Maternal Death is defined as:",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Maternal death is death during pregnancy or up to 42 days post-pregnancy from obstetric causes (direct like hemorrhage, preeclampsia; indirect like cardiac disease aggravated by pregnancy), excluding accidental/incidental causes (trauma).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-092-e",
        "text": "The death of a fetus before complete expulsion from the mother",
        "is_correct": false
      },
      {
        "id": "comm-sba-092-d",
        "text": "The death of a mother occurring between 43 days and 1 year post-partum",
        "is_correct": false
      },
      {
        "id": "comm-sba-092-c",
        "text": "The death of a pregnant woman in a motor vehicle collision",
        "is_correct": false
      },
      {
        "id": "comm-sba-092-b",
        "text": "The death of any woman of reproductive age regardless of cause",
        "is_correct": false
      },
      {
        "id": "comm-sba-092-a",
        "text": "The death of a woman while pregnant or within 42 days of termination of pregnancy, from any cause related to or aggravated by pregnancy or its management, but NOT from accidental or incidental causes",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-093",
    "stem": "What is the SINGLE leading direct medical cause of maternal mortality worldwide, particularly in low-income countries?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Postpartum hemorrhage (PPH, blood loss ≥500 mL following vaginal delivery or ≥1000 mL following cesarean) accounts for ~27% of global maternal deaths, primarily due to uterine atony.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-093-d",
        "text": "Complications of unsafe abortion",
        "is_correct": false
      },
      {
        "id": "comm-sba-093-a",
        "text": "Postpartum Hemorrhage (PPH)",
        "is_correct": true
      },
      {
        "id": "comm-sba-093-b",
        "text": "Eclampsia and severe preeclampsia",
        "is_correct": false
      },
      {
        "id": "comm-sba-093-e",
        "text": "Obstructed labor and uterine rupture",
        "is_correct": false
      },
      {
        "id": "comm-sba-093-c",
        "text": "Puerperal sepsis (systemic infection)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-094",
    "stem": "What routine prophylactic intervention is the gold standard for Active Management of the Third Stage of Labor (AMTSL) to prevent postpartum hemorrhage?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Prophylactic administration of oxytocin (10 IU IM or IV) immediately after delivery of the infant is the single most effective intervention to promote uterine contraction and prevent atonic PPH.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-094-d",
        "text": "Continuous intravenous infusion of heparin",
        "is_correct": false
      },
      {
        "id": "comm-sba-094-e",
        "text": "Application of high-force fundal pressure (Kristeller maneuver)",
        "is_correct": false
      },
      {
        "id": "comm-sba-094-a",
        "text": "Administration of a prophylactic uterotonic drug (Oxytocin 10 IU IM or IV) immediately following the birth of the baby",
        "is_correct": true
      },
      {
        "id": "comm-sba-094-b",
        "text": "Routine manual exploration of the uterine cavity",
        "is_correct": false
      },
      {
        "id": "comm-sba-094-c",
        "text": "Immediate clamping and cutting of the umbilical cord within 5 seconds",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-095",
    "stem": "Under WHO guidelines (2016), what is the minimum recommended number of Antenatal Care (ANC) contacts during pregnancy?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "The 2016 WHO ANC model recommends a minimum of 8 contacts: 1st contact in first trimester (up to 12 weeks), two in second trimester (at 20 and 26 weeks), and five in third trimester (at 30, 34, 36, 38, and 40 weeks).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-095-d",
        "text": "Monthly visits after delivery only",
        "is_correct": false
      },
      {
        "id": "comm-sba-095-c",
        "text": "Weekly visits beginning from the 4th week of gestation",
        "is_correct": false
      },
      {
        "id": "comm-sba-095-b",
        "text": "At least 2 visits",
        "is_correct": false
      },
      {
        "id": "comm-sba-095-a",
        "text": "At least 8 contacts (previously 4 visits in the Focused Antenatal Care model)",
        "is_correct": true
      },
      {
        "id": "comm-sba-095-e",
        "text": "One comprehensive visit at the time of onset of labor",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-096",
    "stem": "Infant Mortality Rate (IMR) is defined as:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "IMR = (Deaths of children < 1 year / Total live births) × 1,000. It is a sensitive indicator of general community health, socioeconomic development, maternal education, and environmental sanitation.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-096-b",
        "text": "The number of deaths between 1 and 5 years of age per 1,000 children",
        "is_correct": false
      },
      {
        "id": "comm-sba-096-d",
        "text": "The number of fetal deaths weighing > 500 grams per 1,000 total births",
        "is_correct": false
      },
      {
        "id": "comm-sba-096-a",
        "text": "The number of deaths of infants under 1 year of age per 1,000 Live Births in a given year",
        "is_correct": true
      },
      {
        "id": "comm-sba-096-e",
        "text": "The percentage of infants who die from infectious pneumonia",
        "is_correct": false
      },
      {
        "id": "comm-sba-096-c",
        "text": "The number of deaths within the first 28 days of life per 1,000 live births (Neonatal Mortality Rate)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-097",
    "stem": "Neonatal Mortality refers to infant deaths occurring during which specific critical time window?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Neonatal mortality covers the first 28 days of life. Early neonatal = days 0-6; Late neonatal = days 7-27. Neonatal deaths account for ~47% of all under-5 child deaths globally, primarily from prematurity, birth asphyxia, and sepsis.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-097-e",
        "text": "Exclusively during the first 24 hours after birth",
        "is_correct": false
      },
      {
        "id": "comm-sba-097-a",
        "text": "Within the first 28 days of life (days 0 to 27)",
        "is_correct": true
      },
      {
        "id": "comm-sba-097-d",
        "text": "During the second year of life",
        "is_correct": false
      },
      {
        "id": "comm-sba-097-b",
        "text": "Within the first 7 days of life only (Early neonatal mortality)",
        "is_correct": false
      },
      {
        "id": "comm-sba-097-c",
        "text": "Between 28 days and 1 year of age (Post-neonatal mortality)",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-098",
    "stem": "What are the three leading causes of Neonatal Death worldwide?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Nearly 80% of all neonatal deaths result from three preventable conditions: complications of prematurity (~35%), intrapartum-related complications/asphyxia (~24%), and neonatal sepsis/infections (~15%).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-098-b",
        "text": "Congenital heart disease, Leukemia, and Sudden infant death syndrome",
        "is_correct": false
      },
      {
        "id": "comm-sba-098-e",
        "text": "Protein-energy malnutrition, Scurvy, and Rickets",
        "is_correct": false
      },
      {
        "id": "comm-sba-098-a",
        "text": "Preterm birth complications, Intrapartum-related events (Birth Asphyxia), and Severe neonatal infections (sepsis/pneumonia)",
        "is_correct": true
      },
      {
        "id": "comm-sba-098-c",
        "text": "Gastroenteritis, Malaria, and Measles",
        "is_correct": false
      },
      {
        "id": "comm-sba-098-d",
        "text": "Accidental trauma, Poisoning, and Drowning",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-099",
    "stem": "What is the WHO recommendation for Exclusive Breastfeeding?",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Exclusive breastfeeding for 6 months provides optimal infant nutrition, delivers maternal antibodies (sIgA) that protect against diarrhea and respiratory infections, and reduces infant mortality.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-099-d",
        "text": "Introducing solid cereal porridge at 2 months of age",
        "is_correct": false
      },
      {
        "id": "comm-sba-099-c",
        "text": "Alternating breast milk and formula from day 1 to increase caloric intake",
        "is_correct": false
      },
      {
        "id": "comm-sba-099-e",
        "text": "Stopping all breastfeeding immediately when the infant cuts their first tooth",
        "is_correct": false
      },
      {
        "id": "comm-sba-099-b",
        "text": "Exclusive breastfeeding for 2 weeks followed by immediate transition to cow's milk",
        "is_correct": false
      },
      {
        "id": "comm-sba-099-a",
        "text": "Exclusive breastfeeding for the first 6 months of life (no other foods or liquids, not even water), followed by continued breastfeeding with complementary foods up to 2 years or beyond",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-100",
    "stem": "Kangaroo Mother Care (KMC) for low-birth-weight (<2,000g) and preterm infants consists of:",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Kangaroo Mother Care (KMC) promotes thermal regulation (preventing hypothermia), encourages exclusive breastfeeding, decreases severe infections, improves bonding, and significantly reduces mortality in preterm/LBW infants.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-100-e",
        "text": "Swaddling the infant in multiple wool blankets inside a darkened nursery",
        "is_correct": false
      },
      {
        "id": "comm-sba-100-a",
        "text": "Continuous skin-to-skin contact between mother and infant, exclusive breastfeeding, and early hospital discharge with supportive follow-up",
        "is_correct": true
      },
      {
        "id": "comm-sba-100-b",
        "text": "Placing the infant in a closed radiant warmer incubator for 30 consecutive days",
        "is_correct": false
      },
      {
        "id": "comm-sba-100-c",
        "text": "Administering high-dose intravenous amino acids without enteral feeds",
        "is_correct": false
      },
      {
        "id": "comm-sba-100-d",
        "text": "Immediate transfer to a tertiary neonatal ICU in a foreign country",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-101",
    "stem": "What is the Partograph (or Partogram) used for in intrapartum obstetric care?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "The partograph tracks active labor progress. When the cervical dilatation curve crosses the 'Alert Line' (normal rate 1 cm/hr), it warns of prolonged labor; reaching the 'Action Line' mandates obstetric intervention to prevent rupture.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-101-b",
        "text": "A genetic pedigree chart tracking inherited maternal disorders",
        "is_correct": false
      },
      {
        "id": "comm-sba-101-d",
        "text": "A financial ledger itemizing hospital delivery charges",
        "is_correct": false
      },
      {
        "id": "comm-sba-101-c",
        "text": "An ultrasound report documenting fetal biparietal diameter",
        "is_correct": false
      },
      {
        "id": "comm-sba-101-a",
        "text": "A standardized graphical record of cervical dilatation, fetal head descent, uterine contractions, and maternal/fetal vital signs against time during active labor, featuring 'Alert' and 'Action' lines to detect obstructed labor",
        "is_correct": true
      },
      {
        "id": "comm-sba-101-e",
        "text": "An electronic prescription tracking antibiotic usage on the labor ward",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-102",
    "stem": "Integrated Management of Childhood Illness (IMCI) is a holistic strategy developed by WHO and UNICEF that focuses on:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "IMCI is an integrated evidence-based syndromic approach for first-level health facilities: it focuses on assessment of general danger signs and integrated management of acute respiratory infections, diarrhea, malaria, measles, and malnutrition.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-102-a",
        "text": "Assessing, classifying, and treating the most common childhood killers (pneumonia, diarrhea, malaria, measles, and malnutrition) combined with promoting immunization and nutrition",
        "is_correct": true
      },
      {
        "id": "comm-sba-102-b",
        "text": "Treating pediatric rare genetic metabolic syndromes in tertiary referral centers",
        "is_correct": false
      },
      {
        "id": "comm-sba-102-c",
        "text": "Providing free pediatric open-heart surgery for all congenital heart defects",
        "is_correct": false
      },
      {
        "id": "comm-sba-102-e",
        "text": "Inpatient admission of all children with mild upper respiratory viral symptoms",
        "is_correct": false
      },
      {
        "id": "comm-sba-102-d",
        "text": "Conducting genetic screening of all healthy newborns for chromosomal trisomies",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-103",
    "stem": "Mid-Upper Arm Circumference (MUAC) is an anthropometric screening tool used to detect Severe Acute Malnutrition (SAM) in children aged 6 to 59 months. What cut-off defines SAM?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "In children 6-59 months, MUAC < 115 mm (red zone on tape) or bilateral pitting pedal edema indicates Severe Acute Malnutrition (SAM), carrying a high risk of mortality requiring therapeutic feeding (F-75, F-100, RUTF).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-103-b",
        "text": "MUAC < 125 mm (indicates Moderate Acute Malnutrition, MAM)",
        "is_correct": false
      },
      {
        "id": "comm-sba-103-e",
        "text": "MUAC < 150 mm in female infants",
        "is_correct": false
      },
      {
        "id": "comm-sba-103-c",
        "text": "MUAC < 135 mm",
        "is_correct": false
      },
      {
        "id": "comm-sba-103-d",
        "text": "MUAC < 100 mm with normal weight-for-height",
        "is_correct": false
      },
      {
        "id": "comm-sba-103-a",
        "text": "MUAC < 115 mm (11.5 cm) or the presence of bilateral nutritional edema",
        "is_correct": true
      }
    ]
  },
  {
    "id": "comm-sba-104",
    "stem": "What is the primary intervention for preventing Mother-to-Child Transmission (PMTCT) of HIV during pregnancy, labor, and breastfeeding?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Option B+ provides lifelong combination ART to all pregnant and breastfeeding women living with HIV. By maintaining viral suppression (<50 copies/mL), mother-to-child transmission is reduced from ~30-45% to <1-2%.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-104-a",
        "text": "Lifelong combination Antiretroviral Therapy (ART) for all pregnant and breastfeeding women living with HIV, regardless of CD4 count or clinical stage (Option B+)",
        "is_correct": true
      },
      {
        "id": "comm-sba-104-b",
        "text": "Elective cesarean section alone without maternal antiretroviral drugs",
        "is_correct": false
      },
      {
        "id": "comm-sba-104-e",
        "text": "Inducing labor at 34 weeks of gestation",
        "is_correct": false
      },
      {
        "id": "comm-sba-104-c",
        "text": "Stopping breastfeeding immediately at birth without infant prophylaxis",
        "is_correct": false
      },
      {
        "id": "comm-sba-104-d",
        "text": "Single-dose nevirapine given only at the time of delivery",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-105",
    "stem": "The Emergency Obstetric and Newborn Care (EmONC) 'Signal Functions' that distinguish Comprehensive EmONC (CEmONC) from Basic EmONC (BEmONC) are:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "BEmONC includes 7 signal functions: IV antibiotics, uterotonics, IV anticonvulsants, manual placenta removal, removal of retained products, assisted vaginal delivery, neonatal resuscitation. CEmONC adds: 8) Cesarean section and 9) Blood transfusion.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-105-a",
        "text": "Cesarean Delivery (surgical capability) and Blood Transfusion services",
        "is_correct": true
      },
      {
        "id": "comm-sba-105-b",
        "text": "Parenteral antibiotics and parenteral uterotonics",
        "is_correct": false
      },
      {
        "id": "comm-sba-105-d",
        "text": "Manual removal of the placenta and removal of retained products",
        "is_correct": false
      },
      {
        "id": "comm-sba-105-e",
        "text": "Assisted vaginal delivery (vacuum extraction) and neonatal resuscitation",
        "is_correct": false
      },
      {
        "id": "comm-sba-105-c",
        "text": "Parenteral anticonvulsants (magnesium sulfate) for preeclampsia",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-106",
    "stem": "Administration of Magnesium Sulfate (MgSO4) is the anticonvulsant of choice for which obstetric emergency?",
    "question_type": "sba",
    "difficulty": "hard",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Magnesium sulfate (Pritchard or Zuspan regimen: 4g IV loading dose + IM/IV maintenance) is the gold standard anticonvulsant for preventing and arresting eclamptic convulsions, far superior to diazepam or phenytoin.",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-106-a",
        "text": "Prevention and treatment of Eclamptic seizures in women with severe preeclampsia and eclampsia",
        "is_correct": true
      },
      {
        "id": "comm-sba-106-d",
        "text": "Relaxing uterine tetanic contractions during precipitous labor",
        "is_correct": false
      },
      {
        "id": "comm-sba-106-c",
        "text": "Controlling essential tremors during active labor",
        "is_correct": false
      },
      {
        "id": "comm-sba-106-e",
        "text": "Treating postpartum depression with psychotic features",
        "is_correct": false
      },
      {
        "id": "comm-sba-106-b",
        "text": "Termination of status epilepticus in idiopathic generalized epilepsy",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-107",
    "stem": "What are the 'Three Delays' in the Three Delays Model of maternal mortality (Thaddeus and Maine)?",
    "question_type": "sba",
    "difficulty": "easy",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "The Three Delays model analyzes barriers to obstetric care: 1) Phase 1: Delay in deciding to seek care (lack of recognition, cost, cultural factors); 2) Phase 2: Delay in reaching care (distance, transport); 3) Phase 3: Delay in receiving adequate care at the facility (shortages, delays).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-107-c",
        "text": "Delay in ambulance dispatch, Delay in surgery, and Delay in autopsy",
        "is_correct": false
      },
      {
        "id": "comm-sba-107-a",
        "text": "Delay in deciding to seek care, Delay in reaching an adequate healthcare facility, and Delay in receiving adequate and appropriate care at the facility",
        "is_correct": true
      },
      {
        "id": "comm-sba-107-e",
        "text": "Delay in paying hospital bills, Delay in discharge, and Delay in registration",
        "is_correct": false
      },
      {
        "id": "comm-sba-107-b",
        "text": "Delay in marriage, Delay in conception, and Delay in delivery",
        "is_correct": false
      },
      {
        "id": "comm-sba-107-d",
        "text": "Delay in ovulation, Delay in implantation, and Delay in placentation",
        "is_correct": false
      }
    ]
  },
  {
    "id": "comm-sba-108",
    "stem": "Tetanus Toxoid (TT / Td) vaccination of pregnant women is a vital antenatal intervention specifically designed to eliminate:",
    "question_type": "sba",
    "difficulty": "medium",
    "subject": "Community Medicine",
    "section": "Maternal & Child Health",
    "programme": "both",
    "explanation": "Maternal immunization with tetanus toxoid (at least 2 doses during pregnancy) stimulates IgG anti-tetanus antibodies that cross the placenta to provide passive immunity to the newborn, eliminating neonatal tetanus (tetanus neonatorum).",
    "reference": "Park's Textbook of Preventive and Social Medicine, 26th Ed. / WHO Guidelines",
    "options": [
      {
        "id": "comm-sba-108-c",
        "text": "Neonatal gonococcal ophthalmia neonatorum",
        "is_correct": false
      },
      {
        "id": "comm-sba-108-a",
        "text": "Maternal and Neonatal Tetanus (caused by contamination of the umbilical cord stump during non-sterile home deliveries)",
        "is_correct": true
      },
      {
        "id": "comm-sba-108-e",
        "text": "Maternal puerperal mastitis",
        "is_correct": false
      },
      {
        "id": "comm-sba-108-b",
        "text": "Congenital syphilis infection",
        "is_correct": false
      },
      {
        "id": "comm-sba-108-d",
        "text": "Streptococcus agalactiae (Group B strep) sepsis",
        "is_correct": false
      }
    ]
  }
]
