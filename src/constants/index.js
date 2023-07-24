import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "NLP Specialist",
    icon: mobile,
  },
  {
    title: "DJANGO React Stack",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Interns Pakistan",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "Fiverr",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Data Science Instructor (NLP)",
    company_name: "GDSC Students Club",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Utilizing data science tools and technologies to analyze and interpret data.",
      "Collaborating with data scientists, analysts, and stakeholders to develop data-driven solutions.",
      "Implementing machine learning algorithms and models for predictive analysis.",
      "Performing data preprocessing, cleaning, and transformation for analysis.",
      ],
  },
  {
    title: "NLP Internship",
    company_name: "Suven Consultants & Technology Pvt Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points : [
      "Employing state-of-the-art Natural Language Processing (NLP) methodologies for the development and upkeep of web applications leveraging React.js and associated technologies.",
      "Facilitating seamless collaboration among diverse teams, including designers, product managers, and fellow developers, through NLP-driven strategies to deliver superior, high-quality products.",
      "Applying NLP-powered insights to implement responsive design principles, ensuring exceptional user experiences across various browsers.",
      "Leveraging NLP algorithms for engaging in code reviews, actively participating, and offering constructive feedback to enhance the proficiency of fellow developers and promote continuous improvement."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Highly recommend M. Umer Wasi for any professional opportunity. A dedicated and exceptional intern with a strong work ethic and passion for learning. ",
    name: "Bilal Ahmer",
    designation: "CEO",
    company: "Sayabidevs",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Umer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Carpool Management System",
    description:
      "The Carpool Management System: Where convenience meets sustainability. Connect with fellow commuters, share rides, and reduce traffic congestion. Say goodbye to solo drives and hello to cost-effective, eco-friendly transportation. Join the carpool revolution today!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "blue-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/Muhammad-Umer-Wasi/Carpool-Management-System",
  },
  
  {
    name: "Resume Recommendation",
    description:
    "The goal of this project is to use natural language processing (NLP) techniques to assist recruiters in quickly processing resumes and identifying top candidates for job openings. The motivation behind the project is to help reduce the time and effort needed to screen resumes and provide a more efficient recruitment process.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "spacy",
        color: "green-text-gradient",
      },
      {
        name: "text-preprocessing",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Muhammad-Umer-Wasi/AI-Resume-Recommendation-System",
  },
  {
    name: "Google Docs Clone",
    description:
    "Discover a dynamic Google Docs clone built with MERN stack. Experience real-time collaboration, rich text editing, and secure user authentication. Seamlessly share and manage documents with varying permissions. An innovative project empowering efficient and collaborative document editing",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Muhammad-Umer-Wasi/Google-Docs-Clone-React-/tree/main",
  },
  {
    name: "Feast Express",
    description:
    "FeastExpress is a revolutionary Online Food Ordering and Delivery System that brings gourmet meals to your doorstep. Indulge in a world of flavors and convenience with our user-friendly platform",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Muhammad-Umer-Wasi/OOP-Feast-Express",
  },  
];

export { services, technologies, experiences, testimonials, projects };
