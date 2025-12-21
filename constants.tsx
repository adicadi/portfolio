
import { Project, Experience, Education, SkillCategory } from './types';
import medipalImage from "./assets/Medipal.png";

export const PERSONAL_INFO = {
  name: "Aditya Chaudhary",
  role: "Machine Learning & AI Engineer",
  location: "Berlin, Germany",
  email: "adicadi158@gmail.com",
  phone: "+49-17626037388",
  linkedin: "https://linkedin.com/in/adicadi",
  github: "https://github.com/adicadi"
};

export const PROJECTS: Project[] = [
  {
    title: "MediPal - AI Health Assistant",
    subtitle: "LLM Integration | Flutter | Mobile AI",
    description: [
      "Integrated DeepSeek LLM with context-aware prompt engineering to deliver personalized symptom assessments and 24/7 health consultations.",
      "Implemented age-based content moderation using dynamic prompt engineering to ensure safe AI responses.",
      "Engineered intelligent caching layer for medication interactions, reducing API costs by 70%."
    ],
    techStack: ["DeepSeek LLM", "Flutter", "Dart", "Provider", "REST API"],
    imageUrl: medipalImage
  },
  {
    title: "Video-Based Driver Emotion Recognition",
    subtitle: "Deep Learning | Computer Vision",
    description: [
      "Achieved 98.99% accuracy in real-time facial emotion recognition using lightweight CNNs with 1D temporal convolutions.",
      "Built a SqueezeNext-based model (0.75M parameters) optimized for ADAS real-time driver monitoring.",
      "Targeted 3.9ms inference time for high-performance edge execution."
    ],
    techStack: ["PyTorch", "OpenCV", "NumPy", "Pandas", "CUDA"],
    imageUrl: "https://picsum.photos/seed/driver/800/500"
  },
  {
    title: "Plant Disease Classification System",
    subtitle: "Computer Vision | Agriculture AI",
    description: [
      "Built CNN model achieving 98.75% accuracy in classifying 39 plant diseases using TensorFlow and Keras.",
      "Integrated model into a Flutter + TFLite app with Firebase backend for real-time crop disease detection.",
      "Enabled offline capabilities using TFLite for use in rural farm environments."
    ],
    techStack: ["TensorFlow", "Keras", "Flutter", "TFLite", "Firebase", "OpenCV"],
    imageUrl: "https://picsum.photos/seed/plant/800/500"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Pixlia Tech",
    role: "Machine Learning Intern",
    period: "Mar 2024 – Sep 2024",
    location: "Remote",
    achievements: [
      "Enhanced AI-driven systems by analyzing large-scale datasets using Python, PyTorch, and SQL, reducing inconsistencies by 25%.",
      "Automated preprocessing workflows, reducing manual effort by 30% and boosting ML pipeline efficiency by 20%.",
      "Deployed real-time ML models via FastAPI on AWS, handling 1000+ API requests/min with 99.9% uptime."
    ]
  },
  {
    company: "TradeMunch",
    role: "Flutter Developer",
    period: "Jun 2021 – Dec 2021",
    location: "Delhi, India",
    achievements: [
      "Delivered cross-platform apps achieving 100% client satisfaction and completing MVPs within 45-day cycles.",
      "Optimized CI/CD pipelines, cutting deployment time by 15% and improving app delivery reliability."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Brandenburg University of Technology (BTU Cottbus)",
    degree: "M.Sc. in Artificial Intelligence",
    period: "Apr 2023 – Feb 2026 (Expected)",
    location: "Cottbus, Germany",
    coursework: "Deep Learning, Computer Vision, Neural Networks, Explainable AI"
  },
  {
    institution: "Amity University",
    degree: "B.Tech in Computer Science",
    period: "Apr 2018 – Jun 2022",
    location: "Noida, India",
    coursework: "Machine Learning, Data Structures, Algorithms, Database Systems"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Computer Vision (OpenCV, YOLO)", "NLP", "Model Deployment", "Feature Engineering"]
  },
  {
    category: "Programming",
    skills: ["Python (NumPy, Pandas)", "Java", "SQL", "FastAPI", "Flutter"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD (GitHub Actions)", "MLOps", "Model Monitoring"]
  },
  {
    category: "Data",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "ETL Pipelines", "Data Preprocessing"]
  }
];
