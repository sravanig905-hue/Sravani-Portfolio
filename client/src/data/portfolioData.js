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
