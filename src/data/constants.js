import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaBrain,
  FaGitAlt,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiVercel,
  SiR,
  SiLangchain,
  SiOpenai,
  SiFlutter,
  SiKotlin,
  SiTensorflow,
  SiAmazondynamodb,
  SiRender,
} from "react-icons/si";


export const Bio = {
  name: "Laxman Sunkari",
  roles: [
    "AI Engineer",
    "AI Application Developer ",
    " JAVA Devloper ",
    "AI Enthusiast",
  ],
  description:
    "I am a B.Tech Data Science student passionate about building modern web applications, AI-driven solutions, and immersive digital experiences. I enjoy solving real-world problems using clean, scalable, and user-focused software.",
  github: "https://github.com/LAXMANSHELBY",
  resume:"/RenderCV_EngineeringResumes_Theme (6).pdf",

  linkedin: "https://linkedin.com/in/laxman-s-5447a5327",
  twitter: "https://x.com/ShelbyLaxman",
  insta: "https://www.instagram.com/laxman.balu_7?igsh=MXR1ejlycnl2bnkyMg==",
  facebook: "",
};
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: SiMysql },
      { name: "JavaScript", icon: SiJavascript },
      { name: "R", icon: SiR },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "AI / Data Science",
    skills: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Generative AI", icon: SiOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "CrewAI", icon: FaRobot },
    ],
  },
  {
    title: "Mobile / Cloud",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
      { name: "TensorFlow Lite", icon: SiTensorflow },
      { name: "AWS DynamoDB", icon: SiAmazondynamodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: FaCode },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];
export const experiences = [
  {
    id: 0,
    img: "",
    role: "AI Intern",
    company: "Summer of AI – Government of India & Swecha.org",
    date: "2024",
    desc: "Worked on AI-driven problem solving, data analysis, and open-source initiatives under a government-backed AI internship program.",
    skills: ["Python", "AI", "Data Analysis", "Open Source"],
  },
];
export const education = [
  {
    id: 0,
    img: "",
    school: "Vignana Bharathi Institute of Technology, Hyderabad",
    date: "2023 – 2027",
    grade: "CGPA: 7.7",
    desc: "B.Tech in Data Science with focus on software development, machine learning, and data analytics.",
    degree: "Bachelor of Technology – Data Science",
  },
  {
    id: 1,
    img: "",
    school: "Narayana IIT Academy, Koheda",
    date: "2021 – 2023",
    grade: "Grade: 9.0",
    desc: "Intermediate education with strong foundation in mathematics and science.",
    degree: "Intermediate",
  },
  {
    id: 2,
    img: "",
    school: "Vani Secondary School",
    date: "2021",
    grade: "Grade: 9.8",
    desc: "Secondary School education.",
    degree: "SSC",
  },
];
export const projects = [
  {
    id: 0,
    title: "Audio Format Converter",
    date: "2024",
    description:
      "A Python-based audio format converter using PyDub and FFmpeg with a simple web interface.",
    image: "",
    tags: ["Python", "PyDub", "FFmpeg", "HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/LAXMANSHELBY/grace-audio-converter.git",
    webapp: "",
  },
  {
    id: 1,
    title: "Grace – Offline AI Voice Assistant",
    date: "2025",
    description:
      "Built an offline AI voice assistant using Python, Vosk, LangChain, Ollama, and CrewAI capable of executing system commands, automating desktop tasks, and handling multi-agent workflows with wake-word detection and local LLM integration.",
    image: "",
    tags: ["Python", "Vosk", "LangChain", "Ollama", "CrewAI", "Automation"],
    category: "ai assistant",
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "P2PRescueNet – AI Driven Disaster Communication App",
    date: "2026",
    description:
      "Developed a decentralized disaster communication mobile app in Flutter and Kotlin that works without internet via Wi-Fi Direct mesh networking, uses reinforcement learning for routing, and integrates AWS DynamoDB for SOS message persistence.",
    image: "",
    tags: ["Flutter", "Kotlin", "Reinforcement Learning", "Mesh", "AWS DynamoDB"],
    category: "mobile app",
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    date: "2025",
    description:
      "A modern personal portfolio built using React.js, Tailwind CSS, and 3D visuals.",
    image: "",
    tags: ["React.js", "Tailwind CSS", "Spline"],
    category: "web app",
    github: "https://github.com/LAXMANSUNKARI7",
    webapp: "",
  },{
  id: 4,
title: "Snake Game",
date: "2024",
description:
  "A classic Snake Game implemented in Java using Swing for GUI, featuring smooth controls, score tracking, and dynamic gameplay.",
image: "",
tags: ["Java", "Swing", "OOP"],
category: "game app",
github: "https://github.com/LAXMANSHELBY/snake-game-java/blob/main/Main.java",
webapp: "",
},
];
