// lib/mock-data.ts
// Central mock data store. Replace with real Supabase queries later.

export const mockUser = {
  id: "user-1",
  name: "Takudzwa Moyo",
  initials: "TM",
  programme: "MBChB",
  level: "Part V",
  institution: "University of Zimbabwe",
  streak: 12,
  xp: 3240,
  is_admin: false,
}

export const mockSubjects = [
  { id: "s1", name: "Medicine", mastery: 78, course_id: "c1" },
  { id: "s2", name: "Surgery", mastery: 65, course_id: "c2" },
  { id: "s3", name: "Pathology", mastery: 82, course_id: "c3" },
  { id: "s4", name: "Pharmacology", mastery: 71, course_id: "c4" },
  { id: "s5", name: "Paediatrics", mastery: 59, course_id: "c5" },
]

export const mockWeakAreas = [
  { id: "w1", name: "ECG Interpretation", mastery: 34, subject: "Medicine" },
  { id: "w2", name: "Acid-Base Disorders", mastery: 41, subject: "Medicine" },
  { id: "w3", name: "Antimicrobial Therapy", mastery: 48, subject: "Pharmacology" },
]

export const mockNotebooks = [
  { id: "nb1", title: "Cardiology Revision", sources: 4, lastActive: "2h ago", subject: "Medicine" },
  { id: "nb2", title: "Pharmacology Finals", sources: 12, lastActive: "1d ago", subject: "Pharmacology" },
  { id: "nb3", title: "Renal Physiology", sources: 2, lastActive: "3d ago", subject: "Medicine" },
  { id: "nb4", title: "Surgical Anatomy", sources: 7, lastActive: "5d ago", subject: "Surgery" },
]

export const mockFlashcardDecks = [
  { id: "fd1", title: "Heart Failure", cards: 28, dueToday: 12, subject: "Medicine" },
  { id: "fd2", title: "Pharmacology — Antibiotics", cards: 45, dueToday: 8, subject: "Pharmacology" },
  { id: "fd3", title: "Renal Pathology", cards: 19, dueToday: 0, subject: "Pathology" },
  { id: "fd4", title: "Neurology Signs", cards: 33, dueToday: 5, subject: "Medicine" },
]

export const mockQuestions = [
  {
    id: "q1",
    stem: "A 65-year-old man presents with progressive dyspnoea on exertion, orthopnoea, and bilateral ankle oedema. On examination, his JVP is elevated, with bibasal crackles on auscultation. Which of the following is the most likely diagnosis?",
    options: [
      { id: "a", text: "Pulmonary embolism", correct: false, explanation: "PE presents with acute dyspnoea, pleuritic chest pain and haemoptysis — not with the chronic progressive course and bilateral signs described." },
      { id: "b", text: "Congestive cardiac failure", correct: true, explanation: "The combination of progressive dyspnoea, orthopnoea, elevated JVP, and bibasal crackles is classic for CCF. The bilateral ankle oedema further supports right heart failure." },
      { id: "c", text: "Pneumonia", correct: false, explanation: "Pneumonia causes fever, productive cough and unilateral consolidation — not bilateral oedema or elevated JVP." },
      { id: "d", text: "COPD exacerbation", correct: false, explanation: "COPD may cause breathlessness but would show hyperinflation, wheeze, and no signs of fluid overload." },
    ],
    subject: "Medicine",
    topic: "Cardiovascular System",
    difficulty: "medium",
    explanation: "CCF results from the inability of the heart to pump sufficient blood to meet tissue demands. It manifests as left (dyspnoea, crackles) and right (oedema, JVP elevation) heart failure signs.",
  },
  {
    id: "q2",
    stem: "Which of the following beta-lactam antibiotics has the broadest spectrum of activity against Gram-negative organisms?",
    options: [
      { id: "a", text: "Amoxicillin", correct: false, explanation: "Amoxicillin is a broad-spectrum penicillin but does not cover resistant Gram-negative organisms or Pseudomonas." },
      { id: "b", text: "Benzylpenicillin", correct: false, explanation: "Benzylpenicillin has a narrow spectrum primarily effective against Gram-positive organisms." },
      { id: "c", text: "Meropenem", correct: true, explanation: "Meropenem is a carbapenem with extremely broad Gram-negative coverage including Pseudomonas and most ESBL producers." },
      { id: "d", text: "Cefalexin", correct: false, explanation: "Cefalexin is a first-generation cephalosporin with limited Gram-negative activity." },
    ],
    subject: "Pharmacology",
    topic: "Antimicrobial Therapy",
    difficulty: "medium",
    explanation: "Carbapenems (imipenem, meropenem, ertapenem) represent the broadest-spectrum beta-lactams, covering most Gram-negative and Gram-positive organisms including anaerobes.",
  },
]

export const mockAnnouncements = [
  {
    id: "a1",
    title: "Medicine OSCE — Timetable Released",
    body: "The Part V Medicine OSCE timetable has been published. Students are advised to check their allocated station times. Preparation sessions will be held in the Clinical Skills Lab from Monday.",
    type: "academic",
    date: "2026-09-01",
    pinned: true,
    author: "Faculty of Medicine & Health Sciences",
  },
  {
    id: "a2",
    title: "PodGuide Quiz Arena — Pharmacology Championship",
    body: "The weekly Pharmacology Championship begins tonight at 19:00. All registered MBChB Part III–V students are eligible to participate. Top 3 students win XP and exclusive badges.",
    type: "podguide",
    date: "2026-09-02",
    pinned: false,
    author: "PodGuide Team",
  },
  {
    id: "a3",
    title: "Research Mentorship Circle — Applications Open",
    body: "Applications for the 2026 Research Mentorship Circle are now open. Students interested in medical research are encouraged to apply. Deadline: 15 September.",
    type: "opportunity",
    date: "2026-09-02",
    pinned: false,
    author: "PodGuide Mentorship",
  },
]

export const mockPosts = [
  {
    id: "p1",
    author: { name: "Simba Chikwanda", initials: "SC", programme: "MBChB Part IV" },
    content: "Anyone else finding the renal physiology lectures overwhelming? I created a quick comparison table for GFR regulation — happy to share if people want it.",
    time: "2h ago",
    likes: 34,
    comments: 12,
    type: "question",
    liked: false,
  },
  {
    id: "p2",
    author: { name: "Rudo Matsika", initials: "RM", programme: "MBChB Part III" },
    content: "Just completed my first emergency on-call. Managed my first acute MI presentation under supervision. These clinical years are something else entirely.",
    time: "5h ago",
    likes: 87,
    comments: 21,
    type: "post",
    liked: true,
  },
  {
    id: "p3",
    author: { name: "James Ndhlovu", initials: "JN", programme: "MBChB Part II" },
    content: "Best resources for Pharmacology Part II? Currently using Katzung but struggling with the volume before exams.",
    time: "1d ago",
    likes: 19,
    comments: 8,
    type: "question",
    liked: false,
  },
]

export const mockGroups = [
  { id: "g1", name: "MBChB Part V 2026", members: 142, type: "programme", icon: "🎓", description: "Official group for all Part V MBChB students." },
  { id: "g2", name: "Pharmacology", members: 318, type: "subject", icon: "💊", description: "Discussion, questions and resources for Pharmacology across all parts." },
  { id: "g3", name: "Medical AI", members: 87, type: "interest", icon: "⚡", description: "Exploring AI tools for medical students." },
  { id: "g4", name: "Finals 2027", members: 230, type: "study", icon: "📚", description: "Study group for students preparing for finals in 2027." },
  { id: "g5", name: "Cardiology Interest Group", members: 55, type: "interest", icon: "❤️", description: "For students passionate about cardiology and cardiac surgery." },
  { id: "g6", name: "Research Circle", members: 41, type: "research", icon: "🔬", description: "Student research network — sharing papers, methods and opportunities." },
]

export const mockMentors = [
  {
    id: "m1",
    name: "Dr. Chiedza Mutasa",
    role: "Internal Medicine Specialist",
    programme: "MBChB Graduate — Class of 2019",
    speciality: ["Internal Medicine", "Cardiology", "Medical Education"],
    availableFor: ["Career Mentorship", "Clinical Mentorship", "Research"],
    verified: true,
    sessions: 24,
    rating: 4.9,
  },
  {
    id: "m2",
    name: "Dr. Kudzai Makoni",
    role: "Intern Doctor",
    programme: "MBChB Graduate — Class of 2025",
    speciality: ["Finals Preparation", "OSCE", "Clinical Years"],
    availableFor: ["Peer Mentorship", "OSCE Practice", "Finals Prep"],
    verified: true,
    sessions: 8,
    rating: 4.7,
  },
  {
    id: "m3",
    name: "Prof. N. Chikwanda",
    role: "Professor of Pharmacology",
    programme: "PhD Pharmacology",
    speciality: ["Pharmacology", "Research", "Teaching"],
    availableFor: ["Academic Mentorship", "Research Mentorship"],
    verified: true,
    sessions: 61,
    rating: 5.0,
  },
]

export const mockOpportunities = [
  {
    id: "op1",
    title: "SAMRC Student Research Grant 2026",
    type: "Research",
    deadline: "2026-10-15",
    description: "The South African Medical Research Council offers research grants to undergraduate medical students. Awards up to ZWL 50,000.",
    org: "SAMRC",
    saved: false,
  },
  {
    id: "op2",
    title: "WHO Africa Internship Programme",
    type: "Internship",
    deadline: "2026-11-01",
    description: "World Health Organization internship open to final-year health sciences students. Based in Brazzaville, Congo.",
    org: "World Health Organization",
    saved: true,
  },
  {
    id: "op3",
    title: "Africa Health Agenda Conference 2027",
    type: "Conference",
    deadline: "2026-12-31",
    description: "Abstract submissions are open for the 2027 Africa Health Agenda International Conference. Student category available.",
    org: "AHA",
    saved: false,
  },
  {
    id: "op4",
    title: "Wellcome Trust Studentship in Global Health",
    type: "Fellowship",
    deadline: "2027-01-15",
    description: "Competitive fellowship for health sciences students with an interest in global health research.",
    org: "Wellcome Trust",
    saved: false,
  },
]

export const mockNotifications = [
  { id: "n1", title: "Flashcards Due", body: "You have 12 flashcards due in Heart Failure.", type: "flashcard", time: "now", read: false },
  { id: "n2", title: "Quiz Arena Tonight", body: "Pharmacology Championship starts at 19:00.", type: "quiz", time: "2h ago", read: false },
  { id: "n3", title: "Mentorship Accepted", body: "Dr. Chiedza Mutasa accepted your mentorship request.", type: "mentorship", time: "4h ago", read: false },
  { id: "n4", title: "New Announcement", body: "Part V Medicine OSCE timetable released.", type: "announcement", time: "1d ago", read: true },
  { id: "n5", title: "Study Streak", body: "You are on a 12-day study streak. Keep going!", type: "streak", time: "1d ago", read: true },
]

export const mockCircles = [
  { id: "c1", name: "Finals Preparation Circle", type: "finals", mentor: "Dr. Kudzai Makoni", members: 8, maxMembers: 12, sessions: 4, active: true },
  { id: "c2", name: "Research Mentorship", type: "research", mentor: "Prof. N. Chikwanda", members: 5, maxMembers: 8, sessions: 2, active: true },
  { id: "c3", name: "Clinical Transition Circle", type: "clinical_transition", mentor: "Dr. Chiedza Mutasa", members: 10, maxMembers: 10, sessions: 6, active: false },
]