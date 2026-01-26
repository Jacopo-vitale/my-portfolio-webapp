import { Experience, Education, Publication, Project, Skill, GalleryItem } from './types';

export const PROFILE = {
  name: "Jacopo Vitale",
  title: "AI & Robotics for Medical Applications",
  location: "Rome, Italy",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Rome,+Italy",
  hometown: "Formia, Italy",
  hometownLink: "https://www.google.com/maps/search/?api=1&query=Formia,+Italy",
  email: "jacopo.vitale96@gmail.com",
  linkedin: "jacopo-vitale96",
  github: "Jacopo-vitale",
  orcid: "https://orcid.org/0009-0006-5991-0246",
  scholar: "https://scholar.google.com/citations?user=HnOZ1UUAAAAJ&hl=it",
  instagram: "jacopo_vita", // Placeholder
  rss: "#", // Placeholder
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
    doi: "https://doi.org/10.1016/j.ijcard.2025.132979" 
  },
  {
    id: "2",
    authors: "Vitale, J., et al.",
    title: "Automatic Text Classification in Cardiac Risk Management: A Pilot Study",
    journal: "NBC on BME",
    year: "2025",
    doi: "https://doi.org/10.1007/978-3-031-96538-8_16"
  },
  {
    id: "3",
    authors: "Vitale, J., et al.",
    title: "Rare Eye Diseases Automatic Classification: A Deep Learning Approach",
    journal: "EMBEC",
    year: "2024",
    doi: "https://doi.org/10.1007/978-3-031-61628-0_27"
  },
  {
    id: "4",
    authors: "Vitale, J., et al.",
    title: "A Machine Learning Approach for Predicting Electrophysiological Responses in Genetically Modified HEK Cells",
    journal: "EMBEC",
    year: "2024",
    doi: "https://doi.org/10.1007/978-3-031-61625-9_1"
  },
  {
    id: "5",
    authors: "Formica, V., ..., Vitale, J., et al.",
    title: "Clinicomics for predicting HER2 expression in metastatic colorectal cancer: a multicenter machine learning analysis on real-world data",
    journal: "Oncology",
    year: "2025",
    doi:"https://doi.org/10.1159/000549661"
  },
  {
    id: "6",
    authors: "Sassi, M., Vitale, J., et al.",
    title: "Genetic Algorithm for Predicting Primary Imatinib Resistance in Locally Advanced or Metastatic Gastrointestinal Stromal Tumors",
    journal: "NBC on BME",
    year: "2025",
    award: "Best Research Paper Award",
    doi:"https://doi.org/10.1007/978-3-031-96538-8_17"
  },
  {
    id: "7",
    authors: "Pagnano, M.E., ..., Vitale, J., et al.",
    title: "Echocardiographic Image-Based Classification of Cardiac Amyloidosis: A Proof of Concept",
    journal: "NBC on BME",
    year: "2025",
    doi:"https://doi.org/10.1007/978-3-031-96538-8_18"
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

export const GALLERY: GalleryItem[] = [
  {
    id: "eu-project-1",
    title: "Horizon Europe - ODIN Smart Hospitals",
    category: "EU Project",
    location: "EU Consortium",
    partners: "Medtronic (Coordinator), Philips, Charité Berlin, UMC Utrecht, UCBM Rome, Scuola Sant'Anna, Uni Warwick, Robotnik, and 12 other partners across 10 countries.",
    image: "photos/odin.jpg", // Placeholder
    description: "Leveraging AI and robotics to transform hospital care delivery, disaster preparedness, and resiliency.",
    link: "https://odin-smarthospitals.eu/"
  },
  {
    id: "gatekeeper",
    title: "Horizon 2020 - GATEKEEPER",
    category: "EU Project",
    location: "EU Consortium",
    partners: "Large-scale European Pilot under Horizon 2020.",
    image: "photos/gk.webp",
    description: "Creating an open, trust-based arena utilizing smart data-driven solutions for personalized early risk detection and intervention for aging populations.",
    link: "https://www.gatekeeper-project.eu/"
  },
  {
    id: "conf-1",
    title: "EMBEC 2024 Conference",
    category: "Conference",
    location: "Portorož, Slovenia",
    image: "photos/embec.jpg", // Placeholder
    description: "Presented research on AI in Healthcare & Rare Disease Diagnostics. Covered emerging fields like Neurotechnology and Translational Research (June 9-13, 2024).",
    link: "https://www.embec2024.org/"
  },
  {
    id: "conf-2",
    title: "CMBEBIH & MEDICON 2023",
    category: "Conference",
    location: "Sarajevo, Bosnia and Herzegovina",
    image: "/photos/medicon.jpg",
    description: "Participated in the joint 5th CMBEBIH and 16th MEDICON conference, focusing on AI, Big Data, and Sustainable Healthcare innovations (Sep 14-16, 2023).",
    link: "https://cmbebih2023.cmbebih.com/"
  },
  {
    id: "trip-1",
    title: "Visiting PhD - NLP",
    category: "Travel",
    location: "University Medical Center of Utrecht, Netherlands",
    image: "/photos/utrecht.jpg", // Placeholder
    description: "Visiting scholar at UMC Utrecht, exploring EHR data mining.",
    link:"https://research.umcutrecht.nl/technologies/bioinformatics/routine-care-data-analytics/"
  },
];