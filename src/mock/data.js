import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Ben's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Ben',
  subtitle: 'I want to be the next QA Automation engineer on your team',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: `I'm a QA Automation Engineer with a passion for building reliable test infrastructure, streamlining CI/CD pipelines, and driving quality across complex web applications. Currently at Coalesce, I design and own end-to-end automation strategies using Playwright and TypeScript — architecting everything from in-house visual regression frameworks to replace costly third-party vendors, to high-efficiency test suites built for changing monorepo environments.`,

  paragraphTwo: `Beyond traditional test automation, I've been leveraging AI and agentic workflows to solve complex engineering bottlenecks. Recently, I authored custom prompt harnesses and tool runbooks for Claude Code, creating an autonomous, AI-driven environment lifecycle system that provisions and tears down full multi-tenant organizations. Whether it's diagnosing root-cause CI flakiness or pioneering agentic QA tooling, I focus on building resilient systems that save developer time and accelerate release cycles.`,

  paragraphThree: `My path in tech began with a strong foundation at Maxwell, where I spearheaded the adoption of Playwright, brought outsourced test suites in-house, and led cross-functional manual and mobile QA efforts. Today, I combine that deep product empathy with advanced software automation and AI integration to build modern quality architectures. I'm always looking to connect with teams pushing the boundaries of automated testing, software reliability, and developer tooling.`,
  resume: 'https://www.resumemaker.online/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'magic-brain.jpg',
    title: 'Face Recognition Brain',
    info: 'A face recognition app that can detect a persons face in an image using the Clarifai API. Uses React, and has a fully functional back end with user authentication. Deployed with Heroku',
    info2: '',
    url: 'https://github.com/ben-redd/face-recognition-app-front-end/tree/main',
    repo: 'https://github.com/ben-redd/face-recognition-app-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo-friends.jpg',
    title: 'Robo-Friends',
    info: 'A simple react app with robot user cards and search functionality. Made with create-react-app.',
    info2: '',
    url: 'https://ben-redd.github.io/robo-friends/',
    repo: 'https://github.com/ben-redd/robo-friends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'background-generator.jpg',
    title: 'Background Generator',
    info: 'A vanilla JavaScript app that generates a linear-gradient background and displays the proper css representation of that gradient.',
    info2: '',
    url: 'https://ben-redd.github.io/background-generator/',
    repo: 'https://github.com/ben-redd/background-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Are you interested in working with me?',
  btn: "Let's Talk",
  email: 'bentheredd13@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/benjaminredd',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ben-redd',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/arf65',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
