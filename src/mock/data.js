import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Ben's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ben',
  subtitle: 'I want to be the next developer on your team',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: `I am a fairly simple person who loves to learn new things. I enjoy the beauty of the outdoors, spending time with family and friends, listening to and playing music, and building interesting things.
`,
  paragraphTwo: `I have been developing web applications on my own for over two years. For part of this time I was just learning in my freetime, but during the Covid-19 pandemic I had the opportunity to leave my day job and focus all of my efforts on improving my skills as a developer. I have most recently been taking various courses through an online school called Zero to Mastery Academy. I have completed courses such as “Complete Web Developer in 2021,” “JavaScript: The Advanced Concepts,” and “Data Structures and Algorithms.” Through these courses, working on my own projects, and other sources, I’ve gained experience in HTML, CSS, JavaScript, ReactJS, NodeJS, Express, SQL, and more.
`,
  paragraphThree: `At this point, I want to take the next step in my journey and obtain full time work as a developer. I know I’m not the most experienced or knowledgable developer, but I know that I have the skills, desire, and work ethic necessary to be beneficial to any team. Put simply, if you hire me, I promise that with time I will become one of the most valuable developers on your team. 
`,
  resume: 'https://www.resumemaker.online/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'magic-brain.jpg',
    title: 'Face Recognition Brain',
    info:
      'A face recognition app that can detect a persons face in an image using the Clarifai API. Uses React, and has a fully functional back end with user authentication. Deployed with Heroku',
    info2: '',
    url: 'https://face-recognition-app-frontend1.herokuapp.com/',
    repo: 'https://github.com/ben-redd/face-recognition-app-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo-friends.jpg',
    title: 'Robo-Friends',
    info:
      'A simple react app with robot user cards and search functionality. Made with create-react-app.',
    info2: '',
    url: 'https://ben-redd.github.io/robo-friends/',
    repo: 'https://github.com/ben-redd/robo-friends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'background-generator.jpg',
    title: 'Background Generator',
    info:
      'A vanilla JavaScript app that generates a linear-gradient background and displays the proper css representation of that gradient.',
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
