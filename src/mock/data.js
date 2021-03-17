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
  paragraphTwo: 'I am currently a freshman at Virginia Commonwealth University',
  paragraphThree: 'I am majoring in sociology but I also do other things like photography and some CS projects!',
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
    title: 'TBD',
    info: 'coming soon',
    
    url: '',
    repo: '', // if no repo, the button will not show up
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
      url: '',
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
