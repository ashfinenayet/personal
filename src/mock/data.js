import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashfin Enayet', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'This is my personal website just to show what I am doing',
  paragraphTwo: 'I am currently a sophmore at Virginia Commonwealth University',
  paragraphThree: 'I am majoring in mathematical sciences with a concentration in statistics but I also do other things like photography and some CS projects!',
  resume: 'https://www.linkedin.com/in/ashfin-enayet-59b0001b4/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Discord Bot',
    info: 'This is a simple discord bot I made that has a variety of commands',
    info2: 'It can give you the news or play music to name a few.',
    
    repo: 'https://github.com/ashfinenayet/my-bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'County and State Map of Rural and Urban States',
    info: 'Map that visualizes how rural and urban a state is',
    info2: 'It  has county level and statewide data ',
    repo: 'https://github.com/ashfinenayet/map', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ashfin.enayet@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/a.shfin/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashfin-enayet-59b0001b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashfinenayet',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
