import { Experience, Education, Publication, Project, Skill } from './types';

export const PROFILE = {
  name: "Jacopo Vitale",
  title: "PhD Candidate in Bioengineering & Intelligent Systems",
  location: "Formia, Italy",
  email: "jacopo.vitale96@gmail.com",
  linkedin: "jacopo-vitale96",
  github: "Jacopo-vitale",
  scholar: "https://scholar.google.com/citations?user=HnOZ1UUAAAAJ&hl=it",
  summary: "PhD Candidate with a strong focus on Medical AI, Human-Technology Interaction, and Health Tech. Expertise in designing full stack Deep Learning architectures for clinical decision support and Clinical NLP. Experienced in EU Projects and collaborative international research."
};

export const EXPERIENCE: Experience[] = [
  {
    id: "phd-researcher",
    role: "Doctoral Researcher",
    institution: "University Campus Bio-Medico of Rome",
    location: "Rome, IT",
    period: "2022 – Present",
    description: "Joint Supervision: IHT Lab & Neurophysiology (NeXT) Lab",
    details: [
      "Robotic TMS Automation: Developed a Bayesian Gaussian Process framework to automatically localize the motor M1 hotspot.",
      "Rare Disease Diagnostics: Engineered an integrated platform for rare disease classification using multi-modal ophthalmic and cardiovascular data.",
      "Human-Technology Interaction: Designed hybrid Genetic Algorithms for feature selection in embodiment experiments.",
      "Real-time Pupillometry: Built a custom CNN-based platform (TypeScript/Vite) for real-time pupil size extraction.",
      "Oncology & Data Science: Applied ML to predict Imatinib resistance in GIST tumors and HER2 expression in colorectal cancer."
    ]
  },
  {
    id: "visiting-researcher",
    role: "Visiting PhD Researcher",
    institution: "University Medical Center (UMC) Utrecht",
    location: "Utrecht, NL",
    period: "Aug 2024 -- Nov 2024",
    description: "Research Unit of Utrecht Patient Oriented Database (UPOD)",
    details: [
      "Automatic EHR Classification: Developed NLP and Data Mining pipelines for cardiac risk management in geriatric patients (dataset of 3,482 patients)."
    ]
  },
  {
    id: "intern-aida",
    role: "Research Intern (AIDA Lab)",
    institution: "University of Cassino",
    location: "Cassino, IT",
    period: "May 2022 -- Sep 2022",
    description: "Genomic Data Analysis",
    details: [
      "Investigated genomic strategies to classify Covid-19 patient outcomes and implemented feature extraction."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "phd",
    degree: "PhD in Bioengineering & Intelligent Systems",
    institution: "University Campus Bio-Medico of Rome",
    location: "Rome, IT",
    date: "Sep 2026 (Expected)",
    details: [
      "Labs: Intelligent Health Technology (IHT) Lab & Neurophysiology (NeXT) Lab",
      "Focus: AI for Healthcare, Medical Image Analysis, Human-Technology Interaction"
    ]
  },
  {
    id: "msc",
    degree: "MSc in Computer Science Engineering",
    institution: "University of Cassino and Southern Lazio",
    location: "Cassino, IT",
    date: "Dec 2022",
    grade: "110/110 cum Laude",
    details: [
      "Thesis: Deep Learning strategies for Covid-19 prognosis based on Genomic data"
    ]
  },
  {
    id: "bsc",
    degree: "BSc in Computer Science and Telecommunications Engineering",
    institution: "University of Cassino and Southern Lazio",
    location: "Cassino, IT",
    date: "Sept 2020",
    details: [
      "Thesis: Random Vector Functional Link Network porting, from Matlab to C for MCU ESP32"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    authors: "Vitale, J., et al.",
    title: "Artificial intelligence for left ventricular hypertrophy detection and differentiation on echocardiography, cardiac magnetic resonance and cardiac computed tomography: A systematic review",
    journal: "International Journal of Cardiology",
    year: "2025",
    doi: "https://doi.org/10.1016/j.ijcard.2024.132646" 
  },
  {
    id: "2",
    authors: "Vitale, J., et al.",
    title: "Automatic Text Classification in Cardiac Risk Management: A Pilot Study",
    journal: "NBC on BME",
    year: "2025"
  },
  {
    id: "3",
    authors: "Vitale, J., et al.",
    title: "Rare Eye Diseases Automatic Classification: A Deep Learning Approach",
    journal: "EMBEC",
    year: "2024",
    doi: "https://doi.org/10.1007/978-3-031-61657-6_26"
  },
  {
    id: "4",
    authors: "Vitale, J., et al.",
    title: "A Machine Learning Approach for Predicting Electrophysiological Responses in Genetically Modified HEK Cells",
    journal: "EMBEC",
    year: "2024",
    doi: "https://doi.org/10.1007/978-3-031-61657-6_54"
  },
  {
    id: "5",
    authors: "Formica, V., ..., Vitale, J., et al.",
    title: "Clinicomics for predicting HER2 expression in metastatic colorectal cancer: a multicenter machine learning analysis on real-world data",
    journal: "Oncology",
    year: "2025"
  },
  {
    id: "6",
    authors: "Sassi, M., Vitale, J., et al.",
    title: "Genetic Algorithm for Predicting Primary Imatinib Resistance in Locally Advanced or Metastatic Gastrointestinal Stromal Tumors",
    journal: "NBC on BME",
    year: "2025",
    award: "Best Research Paper Award"
  },
  {
    id: "7",
    authors: "Pagnano, M.E., ..., Vitale, J., et al.",
    title: "Echocardiographic Image-Based Classification of Cardiac Amyloidosis: A Proof of Concept",
    journal: "NBC on BME",
    year: "2025"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ehta",
    title: "eHTA Tool",
    description: "Online automated platform for Early Health Technology Assessment.",
    tech: ["Web Platform", "Healthcare"],
    icon: "activity"
  },
  {
    id: "rare-path",
    title: "Rare Path Platform",
    description: "AI diagnostic platform for rare disease classification using multi-modal data.",
    tech: ["Deep Learning", "Diagnostics"],
    icon: "cpu"
  },
  {
    id: "pupil-extraction",
    title: "Real-time Pupillometry",
    description: "Web-based pupil size extraction tool for experimental monitoring.",
    tech: ["TypeScript", "Vite", "CNN", "Real-time"],
    icon: "eye"
  },
  {
    id: "tms-hotspot",
    title: "TMS Hotspot Automation",
    description: "ML-driven robotic localization tool using Bayesian Gaussian Processes for motor cortex mapping.",
    tech: ["Robotics", "Bayesian ML", "Python"],
    icon: "code"
  }
];

export const SKILLS: Skill[] = [
  { category: "AI & Data Science", items: ["Python", "PyTorch", "Pandas", "MATLAB", "Deep Learning", "NLP"] },
  { category: "Full Stack", items: ["TypeScript", "Node.js", "React", "Real-time Apps"] },
  { category: "Embedded / 3D", items: ["Raspberry Pi", "ESP32", "Fusion 360", "C++"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Linux", "Git"] },
  { category: "Biomedical Eng", items: ["DICOM", "Signal Processing", "Bio-statistics"] }
];

export const AWARDS = [
  "Best Research Paper Award -- 20th NBC & 24th PCBBE, Warsaw (2025)",
  "Winner, AI Application in Healthcare -- AIIC 2024, Rome",
  "Winner, Scientific Challenge -- EMBEC 2024, Slovenia",
  "Guest Lecturer -- University of Cambridge (2024)",
  "Organising Committee Member -- IEEE BHI'24 Data Challenge"
];