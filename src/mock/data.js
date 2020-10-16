import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Ben's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ben',
  subtitle: "I'm a Web Developer",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'magic-brain.jpg',
    title: 'Face Recognition Brain',
    info:
      'A face recognition app that can detect a persons face in an image using the Clarifai API.',
    info2: '',
    url: 'https://face-recognition-brain2.herokuapp.com/',
    repo: 'https://github.com/ben-redd/face-recognition-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo-friends.jpg',
    title: 'Robo-Friends',
    info: 'A simple react app with robot user cards and search functionality.',
    info2: '',
    url: 'https://ben-redd.github.io/robo-friends/',
    repo: 'https://github.com/ben-redd/robo-friends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'background-generator.jpg',
    title: 'Background Genereator',
    info:
      'An app that generates a linear-gradient background and displays the proper css representation of that gradient',
    info2: '',
    url: 'https://ben-redd.github.io/background-generator/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'codepen',
      url: 'https://codepen.io/arf65',
    },
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
