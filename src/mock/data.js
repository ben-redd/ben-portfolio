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
  subtitle: 'I want to be the next QA engineer on your team',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: `I'm currently working as a Quality Assurance Engineer at Maxwell, a fintech company specializing in the mortgage industry. In this role, my responsibilities have included manual QA testing, creating end-to-end tests, maintaining and updating our test suite, and some basic front-end development.
`,
  paragraphTwo: `One of my most significant contributions at Maxwell was the the role I played in evaluating and adopting the Playwright framework for our end-to-end testing. This decision led to the successful in-housing of our end-to-end testing suite, which had previously been outsourced to a third-party contractor. This change improved our efficiency and showcased my ability to help drive impactful change at Maxwell.
`,
  paragraphThree: `My journey at Maxwell has been marked by my adaptability and commitment to delivering quality while testing complex programs across a number of different teams. This dedication eventually led to a promotion to QA Engineer II, where I've taken on additional responsibilities, such as mentoring new QA engineers and leading our bi-weekly QA guild meetings.
  While I've enjoyed my time here and gained invaluable experience, I'm now seeking a role that allows me to focus more on test automation and less on manual QA. My current goal is to find a place where I can share my experience while continuing to learn, so that I can ultimately become an automation expert who can help others learn as well.
`,
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
