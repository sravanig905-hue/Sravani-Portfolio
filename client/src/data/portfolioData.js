export const personalInfo = {
  name: "Sravani Gedela",
  firstName: "Sravani",
  role: "Data Analyst | Full Stack Developer",
  roles: ["Data Analyst", "Full Stack Developer", "ML & NLP Enthusiast", "Python Programmer"],
  location: "Vijayawada, India",
  email: "sravanig905@gmail.com",
  phone: "9059971288",
  phoneFormatted: "+91 90599 71288",
  linkedin: "https://www.linkedin.com/in/sravani-gedala-115970358",
  github: "https://github.com/sravanig905-hue",
  resumeUrl: "/resume.pdf",
  bio: "I enjoy building data-driven solutions and modern web experiences using Python, machine learning, React, Django and database technologies.",
  extendedBio: "Driven by curiosity at the intersection of data science and web development, I focus on transforming complex datasets into meaningful insights and creating intuitive, robust full-stack applications. With hands-on internship experience in machine learning, cloud architectures, and data engineering, I bring an analytical mindset and strong problem-solving skills to every technical challenge."
};

export const aboutCards = [
  {
    id: "data",
    title: "Data Analysis",
    subtitle: "Insights & Modeling",
    description: "Extracting actionable insights from data, structuring analytical pipelines, and working with Python data tools.",
    accent: "pink",
    icon: "Database"
  },
  {
    id: "web",
    title: "Full Stack Development",
    subtitle: "Frontend to Backend",
    description: "Architecting modern web applications with responsive React frontends, robust Django backends, and relational MySQL data stores.",
    accent: "coral",
    icon: "Layers"
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Workflows",
    description: "Applying ML and NLP techniques for automated text extraction, skill mining, and candidate ranking workflows.",
    accent: "mustard",
    icon: "Sparkles"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    subtitle: "Collaborative Impact",
    description: "Proven hackathon finalist (Top 50 at KL University) committed to continuous learning, teamwork, and clear communication.",
    accent: "sage",
    icon: "Brain"
  }
];

export const skillsData = {
  programming: {
    category: "Programming Languages",
    color: "mustard",
    description: "Core algorithmic and systems logic",
    skills: [
      { name: "Python", highlight: true },
      { name: "C", highlight: false }
    ]
  },
  web: {
    category: "Web Technologies",
    color: "pink",
    description: "Modern, responsive, semantic web interfaces",
    skills: [
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "JavaScript", highlight: true }
    ]
  },
  frameworks: {
    category: "Frameworks & Libraries",
    color: "coral",
    description: "Component-driven frontend and robust backend frameworks",
    skills: [
      { name: "React", highlight: true },
      { name: "Django", highlight: true }
    ]
  },
  database: {
    category: "Databases",
    color: "sage",
    description: "Relational data structuring and queries",
    skills: [
      { name: "MySQL", highlight: true }
    ]
  },
  tools: {
    category: "Tools & Platforms",
    color: "burgundy",
    description: "Developer workflows and collaborative version control",
    skills: [
      { name: "VS Code", highlight: false },
      { name: "Jupyter Notebook", highlight: true },
      { name: "GitHub", highlight: true }
    ]
  },
  softSkills: {
    category: "Soft Skills",
    color: "peach",
    description: "Interpersonal strengths and leadership",
    skills: [
      { name: "Communication", highlight: false },
      { name: "Teamwork", highlight: false },
      { name: "Leadership", highlight: false },
      { name: "Problem Solving", highlight: true }
    ]
  },
  languages: {
    category: "Languages Known",
    color: "cream",
    description: "Spoken language proficiency",
    skills: [
      { name: "English (Fluent)", highlight: false },
      { name: "Telugu (Native)", highlight: false }
    ]
  }
};

export const headAndNeckProject = {
  id: "head-neck-segmentation",
  title: "Head and Neck Organ Segmentation for CT-Scans Using Hybrid U-Net and Transformer-Based Deep Learning",
  shortTitle: "HEAD & NECK ORGAN SEGMENTATION",
  subtitle: "Hybrid U-Net + Transformer for CT-based multi-organ segmentation",
  year: "2026",
  category: "Deep Learning · Medical Image Segmentation · Computer Vision · AI/ML",
  categories: [
    "Deep Learning",
    "Medical Image Segmentation",
    "Computer Vision",
    "AI/ML"
  ],
  description: "Developed a deep learning-based medical image segmentation system for automatically segmenting multiple head and neck organs from CT scans using a Hybrid U-Net and Transformer architecture.",
  detailedDescription: "This project focuses on automated multi-organ segmentation from head and neck CT scans. A Hybrid U-Net architecture enhanced with Transformer-based components is used to capture both local spatial features and long-range contextual information, enabling accurate segmentation of anatomical structures in medical CT images.",
  disclaimer: "This is an AI/deep-learning research and project implementation exploring automated multi-organ segmentation. It is not intended for clinical diagnosis or medical decision-making.",
  problemStatement: "Manual delineation of anatomical structures in head and neck CT scans can be time-consuming and challenging because of the complex anatomy and varying appearance of organs. This project explores automated multi-organ segmentation using deep learning.",
  approach: "The system combines the strengths of U-Net-based encoder-decoder segmentation with Transformer-based contextual modeling. The U-Net architecture captures detailed spatial information, while Transformer components help model long-range dependencies and contextual relationships across the CT image.",
  architectureDescription: "Convolutional components capture local spatial features, while Transformer-based components model broader contextual relationships. The decoder reconstructs the spatial resolution to generate pixel-level segmentation masks.",
  workflowPipeline: [
    { step: "01", name: "CT Scan", desc: "Input volumetric head and neck CT scan series / 2D axial slices" },
    { step: "02", name: "Preprocessing", desc: "Hounsfield windowing, spatial resampling, and contrast normalization" },
    { step: "03", name: "Feature Extraction", desc: "Convolutional layers capturing fine-grained local spatial features" },
    { step: "04", name: "Hybrid U-Net + Transformer", desc: "Self-attention transformer blocks modeling long-range contextual dependencies" },
    { step: "05", name: "Multi-Organ Segmentation", desc: "Simultaneous semantic parsing of 30 anatomical organs at risk (OARs)" },
    { step: "06", name: "Predicted Segmentation Mask", desc: "High-resolution pixel-level class probability masks generated by decoder" },
    { step: "07", name: "Evaluation", desc: "Quantitative validation using standard medical segmentation metrics" }
  ],
  architectureFlow: [
    "CT Scan",
    "Preprocessing",
    "Feature Extraction",
    "Hybrid U-Net + Transformer",
    "Multi-Organ Segmentation",
    "Predicted Segmentation Mask",
    "Evaluation"
  ],
  architectureDetailedFlow: [
    "Input CT Scan",
    "Preprocessing",
    "Encoder",
    "Hybrid CNN + Transformer Feature Extraction",
    "Decoder",
    "Segmentation Mask",
    "Multi-Organ Output"
  ],
  modelSpecs: {
    model: "Hybrid U-Net + Transformer",
    framework: "PyTorch",
    language: "Python",
    task: "Multi-organ medical image segmentation",
    input: "Head and neck CT scans (3D NRRD / 2D axial slices)",
    output: "Segmentation masks for anatomical organs/structures (30 OARs + background, 31 classes)",
    dataset: "HaN-Seg benchmark dataset (42 cases: 29 train, 6 validation, 7 test)",
    weights: "hybrid_unet_transformer_multiorgan_best.pth",
    optimizer: "AdamW",
    loss: "CrossEntropyLoss + DiceLoss",
    epochs: "5 completed epochs"
  },
  cardTechnologies: [
    "Python",
    "PyTorch",
    "Deep Learning",
    "U-Net",
    "Transformer"
  ],
  technologies: [
    "Python",
    "PyTorch",
    "Deep Learning",
    "Computer Vision",
    "U-Net",
    "Transformer",
    "Medical Image Segmentation",
    "CT Scan"
  ],
  features: [
    "CT scan preprocessing and preparation",
    "Multi-organ segmentation",
    "Hybrid U-Net architecture",
    "Transformer-based feature extraction/context modeling",
    "Deep learning-based medical image segmentation",
    "Pixel-level anatomical structure segmentation",
    "Model evaluation using segmentation metrics"
  ],
  resultsEvaluation: {
    hasActualMetrics: true,
    samplesTested: 1040,
    metrics: [
      { label: "Pixel Accuracy", value: "99.79%", note: "Overall multi-class pixel classification accuracy" },
      { label: "Foreground Dice Score", value: "0.2690 (26.90%)", note: "Foreground overlap across all segmented organs" },
      { label: "Foreground IoU", value: "0.1959 (19.59%)", note: "Intersection over Union for anatomical structures" },
      { label: "Precision", value: "0.3069 (30.69%)", note: "Positive predictive value across organ masks" },
      { label: "Recall", value: "0.2986 (29.86%)", note: "Sensitivity / true positive detection rate" }
    ],
    note: "Actual test-set evaluation results of hybrid_unet_transformer_multiorgan_best.pth across 1,040 test slices from the HaN-Seg benchmark dataset."
  },
  images: {
    comparison: "/projects/final_segmentation_result.png",
    overlay: "/projects/test_overlay_output.png",
    mask: "/projects/test_mask_output.png"
  },
  githubUrl: "https://github.com/sravanig905-hue/Head-and-Neck-Organ-Segmantation",
  liveUrl: null
};

export const featuredProject = {
  title: "Resume Screening Using ML & NLP",
  year: "2023",
  category: "Machine Learning & Natural Language Processing",
  description: "Developed an automated resume screening system using Machine Learning and Natural Language Processing to extract skills, analyze resumes, and rank candidates.",
  highlights: [
    "Automates high-volume resume parsing and textual information extraction",
    "Performs intelligent skill extraction and taxonomy matching",
    "Applies Natural Language Processing algorithms to analyze candidate profiles",
    "Generates structured candidate rankings to accelerate talent shortlisting"
  ],
  techStack: [
    "Python",
    "Machine Learning",
    "Natural Language Processing",
    "Text Extraction",
    "Data Analysis"
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Resume Input",
      desc: "Raw resume documents ingested for automated processing",
      tag: "Ingestion"
    },
    {
      step: "02",
      title: "Text Extraction",
      desc: "Parsing raw text, sanitizing formats, and tokenizing content",
      tag: "Preprocessing"
    },
    {
      step: "03",
      title: "Skill Extraction",
      desc: "Identifying technical competencies, domain keywords, and toolsets",
      tag: "NLP Feature Mining"
    },
    {
      step: "04",
      title: "Resume Analysis",
      desc: "Evaluating candidate experience, skill depth, and profile alignment",
      tag: "ML Scoring"
    },
    {
      step: "05",
      title: "Candidate Ranking",
      desc: "Generating structured, fair candidate rankings for recruiters",
      tag: "Final Output"
    }
  ]
};

export const experiences = [
  {
    role: "Machine Learning and Deep Learning Intern",
    organization: "AOTMS",
    period: "2026",
    type: "Internship",
    location: "On-site · Vijayawada, India",
    color: "pink",
    description: "Gained hands-on experience in Machine Learning and Deep Learning using Python.",
    tags: ["Machine Learning", "Deep Learning", "Python", "Model Training"]
  },
  {
    role: "Cloud Virtual Internship",
    organization: "AWS",
    period: "2023",
    type: "Virtual Internship",
    location: "Remote",
    color: "coral",
    description: "Gained experience in cloud computing and related technologies.",
    tags: ["AWS Cloud", "Cloud Architecture", "Virtualization"]
  },
  {
    role: "Data Engineering Virtual Internship",
    organization: "AWS",
    period: "2023",
    type: "Virtual Internship",
    location: "Remote",
    color: "mustard",
    description: "Participated in Data Engineering projects focusing on cloud technologies.",
    tags: ["Data Engineering", "Cloud Pipelines", "Data Processing"]
  }
];

export const educationList = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Usha Rama College of Engineering and Technology",
    location: "Vijayawada, India",
    period: "2023 – 2027",
    cgpa: "8.70",
    status: "Currently Pursuing",
    accent: "pink",
    highlights: "Artificial Intelligence & Data Science specialization coursework, hands-on programming labs, and active tech club leadership."
  },
  {
    degree: "Intermediate Education",
    institution: "Narayana Junior College",
    location: "Vuyyuru, India",
    period: "2021 – 2023",
    cgpa: "9.38",
    status: "Completed",
    accent: "coral",
    highlights: "Rigorous academic training with strong emphasis on Mathematics and Sciences."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "V.R.K.M High School",
    location: "Vuyyuru, India",
    period: "2020 – 2021",
    cgpa: "9.80",
    status: "Completed",
    accent: "mustard",
    highlights: "Graduated with top academic standing (9.80 CGPA) with broad foundational excellence."
  }
];

export const certifications = [
  {
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    category: "IoT & Emerging Technologies",
    accent: "pink"
  },
  {
    title: "Python Programming Certification",
    category: "Core Programming",
    accent: "mustard"
  },
  {
    title: "Machine Learning Certification",
    category: "AI & Data Science",
    accent: "coral"
  },
  {
    title: "Web Development Certification",
    category: "Full Stack & Web Technologies",
    accent: "sage"
  }
];

export const achievements = [
  {
    id: 1,
    title: "KL University Hackathon Finalist",
    description: "Participated in a high-intensity hackathon at KL University and was shortlisted among the Top 50 teams for the next round.",
    icon: "Trophy",
    accent: "mustard",
    badge: "Top 50 Finalist"
  },
  {
    id: 2,
    title: "Technical Workshops & Webinars",
    description: "Actively participated in technical workshops and webinars covering modern programming practices, cloud computing, and emerging technologies.",
    icon: "Lightbulb",
    accent: "coral",
    badge: "Knowledge Expansion"
  },
  {
    id: 3,
    title: "College Technical Fests & Coding Events",
    description: "Actively involved in organizing and competing in campus coding events, hackathons, and technical symposia.",
    icon: "Code",
    accent: "pink",
    badge: "Campus Coding"
  },
  {
    id: 4,
    title: "Academic Mini-Projects & Team Collaboration",
    description: "Led and contributed to diverse academic mini-projects and group projects, honing real-world communication and cross-functional team skills.",
    icon: "Rocket",
    accent: "sage",
    badge: "Practical Implementation"
  },
  {
    id: 5,
    title: "Industry Seminars & Guest Lectures",
    description: "Attended guest lectures and technology seminars led by industry professionals to stay abreast of current data science and web trends.",
    icon: "Compass",
    accent: "burgundy",
    badge: "Industry Trends"
  },
  {
    id: 6,
    title: "Technical & Cultural Club Member",
    description: "Active member of college technical clubs and cultural societies, fostering student peer learning, mentorship, and creative initiatives.",
    icon: "Users",
    accent: "peach",
    badge: "Community & Leadership"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
