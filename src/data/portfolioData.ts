export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  problemStatement?: string;
  features?: string[];
  architecture?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isBackendOnly?: boolean;
  isFrontendOnly?: boolean;
  status: 'Completed' | 'In Progress' | 'Experimental' | 'Hackathon';
  imagePlaceholderText: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  type: 'Hackathon' | 'Achievement' | 'Project' | 'Placeholder';
}

export interface Education {
  degree: string;
  specialization: string;
  institution: string; // Editable placeholder
  cgpa: string;
  expectedGraduation: string;
}

export interface ResearchPaper {
  title: string; // Editable placeholder if unknown
  journal: string;
  publicationDate: string;
  doi?: string;
  authors: string[];
  abstract: string;
  status: 'Published' | 'Under Review' | 'In Preparation';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yogesh S.",
    role: "Computer Science & Engineering | AI & ML",
    headline: "Building intelligent solutions for tomorrow.",
    introduction: "Hi, I'm Yogesh S.",
    bio: "An aspiring software engineer passionate about building intelligent applications and solving real-world problems through technology. Currently pursuing my Bachelor's in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning.",
    academicSummary: "Specializing in AI/ML with a solid foundation in core software engineering, data structures, and full-stack application development.",
    cgpa: "8.8",
    graduationYear: "2027",
    availability: "Open to AI/ML & Software Engineering Internships",
    socials: {
      github: "https://github.com/Yogesh98Suresh",
      linkedin: "https://www.linkedin.com/in/yogesh-suresh-li/", // Editable placeholder
      email: "	yogeshmsuresh98@gmail.com" // Editable placeholder
    }
  },

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" }
      ]
    },
    {
      category: "Frontend & Web",
      skills: [
        { name: "React" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Artificial Intelligence" },
        { name: "ML Fundamentals" },
        { name: "Python AI Dev" }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "SQL" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "autorca",
      title: "AutoRCA",
      description: "An automated root cause analysis platform designed to identify and investigate application and infrastructure failures.",
      detailedDescription: "AutoRCA provides automated log analysis, error clustering, and anomaly detection to streamline incident response for modern software deployments.",
      problemStatement: "Modern microservice and cloud infrastructures generate vast amounts of log data, making manual root-cause analysis during outages slow and error-prone.",
      features: [
        "Automated log ingestion and parsing",
        "Pattern recognition for incident clustering",
        "Failure timeline visualization",
        "Root cause probability scoring"
      ],
      architecture: "Frontend built with React/TypeScript, leveraging automated processing workflows for rapid diagnostic reporting.",
      tags: ["React", "TypeScript", "AI/ML", "Log Analysis", "Hackathon"],
      githubUrl: "https://github.com/Yogesh98Suresh/AutoRCA-Hackathon.git",
      demoUrl: "https://autorca-demo.onrender.com",
      status: "Hackathon",
      imagePlaceholderText: "AutoRCA Diagnostic Dashboard Visual"
    },
    {
      id: "why-ai",
      title: "WHY – Personal AI Assistant",
      description: "An experimental personal AI assistant project focused on privacy-centric, offline-first capabilities.",
      detailedDescription: "WHY aims to deliver an intelligent assistant capable of executing tasks, organizing context, and serving user requests locally without relying heavily on third-party cloud APIs.",
      problemStatement: "Most consumer AI assistants compromise user data privacy and require constant cloud connectivity.",
      features: [
        "Offline-first query response system",
        "Local data indexing and search",
        "Contextual memory preservation",
        "Minimalist desktop interface"
      ],
      architecture: "Local LLM integration framework with client-side state management.",
      tags: ["Python", "AI", "Local LLM", "Privacy", "Experimental"],
      githubUrl: undefined, // Placeholder until verified
      status: "Experimental",
      imagePlaceholderText: "WHY Personal AI Interface Mockup"
    },
    {
      id: "ai-image-protection",
      title: "AI Image Protection",
      description: "A security-focused research project exploring facial recognition resilience and dynamic image watermark protection.",
      detailedDescription: "Protects sensitive digital media from unauthorized AI training and scraping using adversarial noise perturbation and robust watermarking.",
      problemStatement: "Generative AI models scrape publicly shared user media without consent or attribution.",
      features: [
        "Adversarial perturbation generation",
        "Facial recognition masking",
        "Invisible watermarking system",
        "Batch media protection pipeline"
      ],
      architecture: "Computer Vision algorithms integrated with Python processing pipeline.",
      tags: ["Python", "Computer Vision", "AI Security", "Watermarking"],
      githubUrl: undefined, // Placeholder until verified
      status: "In Progress",
      imagePlaceholderText: "AI Image Protection Pipeline Concept"
    },
    {
      id: "employee-management",
      title: "Employee Management System UI",
      description: "A clean, modern frontend dashboard interface designed for managing employee records, tracking roles, and administrative tasks.",
      detailedDescription: "Built purely as a polished frontend showcase focusing on responsive layout design, form validation, and state management.",
      problemStatement: "Demonstrates frontend UI/UX engineering skills for internal enterprise portal interfaces.",
      features: [
        "Responsive grid layout for employee cards",
        "Interactive filter and search functionalities",
        "Modal-based record editing UI",
        "Clean dark/light visual theme elements"
      ],
      architecture: "Single Page Application (SPA) built with modern JavaScript/CSS frameworks.",
      tags: ["JavaScript", "HTML/CSS", "UI/UX", "Frontend"],
      githubUrl: "https://github.com/Yogesh98Suresh/Employee-Management-System-.git",
      isFrontendOnly: true,
      status: "Completed",
      
      imagePlaceholderText: "Employee Management System Interface"
    },
    {
      id: "decidewise",
      title: "DecideWise",
      description: "An evidence-assisted decision-making platform that helps users make better choices through transparent weighted scoring and research-backed comparisons.",
      detailedDescription: "DecideWise allows users to evaluate multiple alternatives using customizable criteria, adjustable weights, research evidence and transparent scoring.",
      problemStatement: "Making complex decisions can be difficult when multiple alternatives, competing priorities and scattered information must be considered.",
      features: [
        "Create decisions with multiple options and criteria",
        "Adjust criteria weights to reflect priorities",
        "Calculate weighted scores and rank alternatives",
        "Handle lower-is-better criteria such as price",
        "Research evidence with source references",
        "Compare trade-offs and finalize decisions",
        "Save decisions and restore them after refresh"
      ],
      architecture: "React and Vite frontend with a FastAPI backend, SQLite persistence and Tavily-powered research integration.",
      tags: ["React", "Vite", "FastAPI", "Python", "SQLite", "Tavily", "Decision Support"],
      githubUrl: "https://github.com/Yogesh98Suresh/DecideWise-Public",
      status: "Completed",
      imagePlaceholderText: "DecideWise Decision Comparison Dashboard"
    }
  ] as Project[],

  experience: [
    {
      id: "flip-the-switch",
      role: "Hackathon Participant / Project Lead",
      organization: "WeMakeDevs Flip the Switch Hackathon",
      period: "2024",
      type: "Hackathon",
      description: [
        "Developed and presented 'AutoRCA', an automated root cause analysis solution for IT infrastructure outages.",
        "Engineered the user interface and integrated analytical features under tight hackathon deadlines.",
        "Demonstrated real-time failure diagnosis and live demo deployment on Render."
      ]
    },
    {
      id: "academic-projects",
      role: "Student Developer",
      organization: "Academic Projects & Independent Research",
      period: "2024 - Present",
      type: "Project",
      description: [
        "Designed and implemented multiple AI/ML and web applications.",
        "Maintained a high academic standard with an overall 8.8 CGPA.",
        "Collaborated on computer vision and security-oriented machine learning experiments."
      ]
    }
  ] as Experience[],

  research: {
  title: "Phishing Detection Using Hybrid Deep Learning Models",
  journal: "IJIREICE",
  publicationDate: "2025",
  authors: ["Yogesh S."],
  abstract: "Published research on phishing detection using hybrid deep learning models.",
  status: "Published"
} as ResearchPaper, 

  
  education: {
    degree: "Bachelor of Engineering / Technology",
    specialization: "Computer Science and Engineering (AI & ML)",
    institution: "SRM University",
    cgpa: "8.8",
    expectedGraduation: "2027"
  } as Education
};
