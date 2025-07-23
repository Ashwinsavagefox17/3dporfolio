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

import Picture1 from "../assets/Picture1.jpg";
import TechcartImage from "../assets/Screenshot 2025-07-22 180716.png";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

import cIcon from "../assets/c++.webp";
import javaIcon from "../assets/java.webp";
import pythonIcon from "../assets/python.png";

const technologies = [
  {
    name: "C Programming",
    icon: cIcon,
  },
  {
    name: "Java",
    icon: javaIcon,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "TouchQ Software Solutions Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
      "Worked as an intern and gained experience on website documentation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SpotB",
    description:
      "Android-based bus tracking application designed to provide real-time location updates using GPS from the driver's phone.",
    tags: [
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "gps",
        color: "blue-text-gradient",
      },
    ],
    image: Picture1,
    source_code_link: "https://github.com/Ashwinsavagefox17",
  },
  {
    name: "Password Manager",
    description:
      "Secure and user-friendly password manager utilizing advanced encryption techniques to protect sensitive data.",
    tags: [
      {
        name: "encryption",
        color: "pink-text-gradient",
      },
      {
        name: "security",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ashwinsavagefox17",
  },
  {
    name: "Techcart",
    description:
      "E-commerce platform designed to provide seamless online shopping experience with modern UI and secure payment integration.",
    tags: [
      {
        name: "ecommerce",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "payment",
        color: "pink-text-gradient",
      },
    ],
    image: TechcartImage,
    source_code_link: "https://github.com/Ashwinsavagefox17/techcart",
  },
];

export { services, technologies, experiences, testimonials, projects };
