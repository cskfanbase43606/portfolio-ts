import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

// export const experiencesData = [
//   {
//     title: 'Trustsoft s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Providing services in the field of information technology services, including administration servers, cloud services, information systems and software development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'Granton s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'WhirrCrew s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Jun 2024 - Present',
//   },
//   {
//     title: 'NAU',
//     location: 'Kyiv, Ukraine',
//     description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
//     icon: React.createElement(BookIcon),
//     date: 'Sep 2022 - Jun 2024',
//   },
// ] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Pizza Time',
    description: `Designed & developed an e-commerce food delivery app platform for a pizza restaurant, utilizing technologies like React icons, React Router DOM, React Alice Carousel, Leaflet Maps, React Paginate, UUID, React Lazy Load, Framer Motion & Turso.`,
    tags: ['Reactjs', 'Leaflet Maps', 'Turso'],
    imageUrl: auditMasterImg,
    link: 'https://pizza-time-with-react-rana.vercel.app/',
  },
  {
    title: 'Rana Cart',
    description:
      'Designed & developed an interactive shopping E-commerce app platform having wide range of products & services using Typescript, React, React-Redux, Redux-Toolkit, Redux-Thunk, Axios, React Router, Framer Motion & Swiperjs.',
    tags: ['TypeScript', 'React', 'Axios', 'Framer Motion'],
    imageUrl: accountingImg,
    link: 'https://rana-ecom-react.vercel.app/',
  },
  {
    title: 'Xbeat App',
    description:
      `Developed an audio E-store website using Reactjs & state management done using Context API.It has various features such add & remove product from the cart, increment/decrement of the product quantity, product's total price/discount calculations, filters-sort by/filter by options, custom hooks, local storage, fully responsive, dark theme, multi-pages & much more .`,
    tags: [
      'Reactjs',
      'ReactRoutee',
      'SASS',
    ],
    imageUrl: filedriveImg,
    link: 'https://xbeat-rana.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://portfolio-ts-rana.vercel.app/',
  },
  
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  // ['Node.js', '/svgs/node-js.svg'],
  // ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  // ['MongoDB', '/svgs/mongodb-original.svg'],
  // ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
