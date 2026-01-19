import { FaJava,FaGitlab, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango, SiFlask, SiMysql, SiVercel } from "react-icons/si";


export const Bio = {
  name: "Laxman Sunkari",
  roles: [
    "Frontend Developer",
    "AR/VR Developer ",
    " JAVA Devloper ",
    "AI Enthusiast",
  ],
  description:
    "I am a B.Tech Data Science student passionate about building modern web applications, AI-driven solutions, and immersive digital experiences. I enjoy solving real-world problems using clean, scalable, and user-focused software.",
  github: "https://github.com/LAXMANSHELBY",
  resume:"/Laxman_CV.pdf",

  linkedin: "https://linkedin.com/in/laxman-s-5447a5327",
  twitter: "https://x.com/ShelbyLaxman",
  insta: "https://www.instagram.com/laxman.balu_7?igsh=MXR1ejlycnl2bnkyMg==",
  facebook: "",
};
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JAVA CORE", icon: FaJava },
      { name: "PYTHON", icon: FaPython },
      { name: "SQL", icon: SiMysql },
      { name: "R-PROGRAMING", icon: FaReact }, // change if needed
    ],
  },
 {
  title: "Frontend",
  skills: [
    { name: "React.js", icon: FaReact },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
},

   {
    title: "Backend",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
  title: "DevOps & Tools",
  skills: [
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "GITLAB", icon: FaGitlab },
    { name: "Vercel", icon: SiVercel },
  ],
}
,
    {
    title: "Java Developer | Algorithmic Problem-Solving & DSA",
    skills: [
      { name: "Arrays", icon: FaJava },
      { name: "Recursion & Backtracking", icon: FaJava },
      { name: "Sorting & Searching", icon: FaJava },
      { name: "Linked Lists", icon: FaJava },
      { name: "Graph & Network Algorithms", icon: FaJava },
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
    title: "3D Furniture Placement Android App",
    date: "2024",
    description:
      "An AR-based Android application that allows users to place 3D furniture models in real-world environments.",
    image: "",
    tags: ["Unity", "AR Foundation", "C#", "Android"],
    category: "android app",
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Social Media Feed Analyzer",
    date: "2023",
    description:
      "A Python tool to scrape and analyze social media feeds using Pandas and BeautifulSoup.",
    image: "",
    tags: ["Python", "Pandas", "BeautifulSoup"],
    category: "data science",
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    date: "2024",
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
