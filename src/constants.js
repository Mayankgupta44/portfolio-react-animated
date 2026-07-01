// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Experience Section Logo's
import ibmLogo from './assets/company_logo/ibm.png';
import update247Logo from './assets/company_logo/update247Logo.jpg';
import infoxenLogo from './assets/company_logo/infoxenLogo.jpg';

// Education Section Logo's
import abeslogo from './assets/education_logo/abeslogo.jpg';
import school from './assets/education_logo/school.jpeg';

// Project Section Logo's
import tradeverseLogo from "./assets/projects_logo/trade.png";
import wanderlustLogo from "./assets/projects_logo/wanderlust.png";
import movieAppLogo from "./assets/projects_logo/movie.png";
import fitnessBuddyLogo from "./assets/projects_logo/fit.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 // Import your logo at the top (example)
// import ibmLogo from "../assets/ibmLogo.png";

export const experiences = [
  {
    id: 0,
    img: update247Logo, // Replace with the actual Update247 logo variable
    role: "Developer Trainee",
    company: "Update247",
    date: "Mar 2026 - June 2026",
    desc: "Worked on live PMS and reservation system modules using PHP, jQuery, AJAX, and MySQL, contributing to backend workflows, bug fixes, and database-driven features. Built browser-side caching for a key occupancy reporting module using IndexedDB (Dexie.js) and implemented smart synchronization logic.",
    skills: [
      "PHP", 
      "jQuery", 
      "AJAX", 
      "MySQL", 
      "IndexedDB"
    ],
  },
  {
    id: 1,
    img: infoxenLogo, // Replace with the actual Infoxen logo variable
    role: "Trainee Software Developer",
    company: "Infoxen Technologies",
    date: "Nov 2025 - Feb 2026",
    desc: "Worked on a device repair booking platform using Laravel, Vue.js 2, Axios, and MySQL. Executed dynamic pricing logic and embedded location-based features using Mapbox and Google Maps for address search and service availability.",
    skills: [
      "Laravel", 
      "Vue.js 2", 
      "Axios", 
      "MySQL", 
      "Mapbox"
    ],
  },
  {
    id: 2,
    img: ibmLogo, // Replace with the actual IBM or Edunet logo variable
    role: "Front-End Web Development Intern",
    company: "IBM SkillsBuild | Edunet Foundation",
    date: "Aug 2025 - Oct 2025",
    desc: "Developed and deployed responsive web applications, improving cross-device performance by 30%. Created a Movie Review & Rating Platform using the TMDB API and optimized the UI/UX to boost user engagement and session duration.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "API Integration",
      "UI/UX Optimization",
    ],
  },
  {
    id: 3,
    img: ibmLogo, // Replace with the actual IBM or Edunet logo variable
    role: "AI & Cloud Technologies Intern",
    company: "IBM SkillsBuild | Edunet Foundation",
    date: "July 2025 - Aug 2025",
    desc: "Created 'Fitness Buddy,' a virtual assistant powered by IBM Watsonx.ai and Granite LLM. Integrated predictive AI/ML models using IBM Cloud AutoAI into a chatbot, improving model accuracy by 25% and enabling real-time user support.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "IBM Watsonx.ai",
      "IBM Cloud",
      "Data Analytics",
      "Chatbot Development",
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: abeslogo,
      school: "ABES Institiute of Technology, Ghaziabad",
      date: "Nov 2022 - July 2026",
      grade: "8.06 CGPA",
      desc: "I have completed my Bachelor's degree in Technology (BTech) from ABES Institute of Technology, Ghaziabad. During my time at ABES, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at ABES Institute of Technology has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - BTech",
    },
    {
      id: 1,
      img: school,
      school: "Renaissance School, Bulandshahr",
      date: "Apr 2021 - March 2022",
      grade: "91.4%",
      desc: "I completed my class 12 education from Renaissance School, Bulandshahr, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: school,
      school: "Renaissance School, Bulandshahr",
      date: "Apr 2019 - March 2020",
      grade: "92.6%",
      desc: "I completed my class 10 education from Renaissance School, Bulandshahr, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
// Import your project images at the top
// Example:


export const projects = [
  {
    id: 0,
    title: "AI-Powered Interview Preparation Platform",
    description:
      "Developed a full-stack AI interview preparation platform using Java 17, Spring Boot 3, React, and PostgreSQL. Applied secure JWT authentication with Spring Security and protected REST APIs. Integrated Groq AI API to generate interview questions, perform skill-gap analysis, and evaluate text/audio answers. Added PDF resume upload and text extraction using Apache PDFBox.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Groq AI", "JWT"],
    image: aiInterviewLogo, // Make sure to define/import this variable at the top of constants.js
    github: "https://github.com/Mayankgupta44/YOUR_REPO_NAME", // Update with actual repo link
    webapp: "YOUR_LIVE_DEMO_LINK", // Update with your deployed app link
  },
  {
    id: 1,
    title: "TRADEVERSE | Full-Stack Stock Trading Platform",
    description:
      "Engineered a high-performance stock trading platform featuring real-time data for over 100 symbols. The robust backend, built with Node.js and Express, flawlessly manages 1,000+ user accounts and 5,000+ daily transactions with 99.9% uptime. Deployed on Render, the platform achieves a 30% improvement in load time and dynamic data visualizations using Chart.js.",
    tags: ["Node.js", "Express.js", "MongoDB", "Jest", "Chart.js", "Render"],
    image: tradeverseLogo,
    github: "https://github.com/Mayankgupta44/tradeverse", 
    webapp: "https://tradeverse-frontend.onrender.com/", 
  },
  {
    id: 2,
    title: "WANDERLUST | Full-Stack Rental Listing Application",
    description:
      "A feature-rich rental listing platform supporting bookings, reviews, and media uploads. Its modular architecture using Node.js, EJS, and MongoDB efficiently handles 100+ active users and 500+ media files via Cloudinary. Deployed on Render with a 15% faster server response time and high availability.",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Cloudinary", "Render"],
    image: wanderlustLogo,
    github: "https://github.com/Mayankgupta44/wanderlust", 
    webapp: "https://backend-project-inks.onrender.com/listings", 
  },
  {
    id: 3,
    title: "Movie Review & Rating Platform",
    description:
      "A responsive web application leveraging the TMDB API to provide real-time search, ratings, and reviews for 500+ movies. Focused on user experience with efficient client-side data handling that boosts engagement. Fully responsive, achieving a 30% improvement in cross-device performance.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "API"],
    image: movieAppLogo,
    github: "https://github.com/Mayankgupta44/movie-review-platform", 
    webapp: "https://github.com/Mayankgupta44/movie-review-platform", 
  },
  {
    id: 4,
    title: "Fitness Buddy | AI Virtual Assistant",
    description:
      "An AI-powered virtual assistant built using IBM Watsonx.ai and Granite LLM to deliver personalized workouts and diet plans. It integrates a predictive ML model from IBM Cloud AutoAI into a chatbot interface, providing interactive and intelligent fitness guidance.",
    tags: ["AI/ML", "IBM Watsonx.ai", "IBM Cloud", "Chatbot"],
    image: fitnessBuddyLogo,
    github: "https://github.com/Mayankgupta44/fitness-buddy", 
    webapp: "https://github.com/Mayankgupta44/fitness-buddy", 
  },
];
