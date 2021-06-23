// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Hassen GHNIMI",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a 29 year old Software Developer, living in Tunisia. I am currently studying Software Engineering at Gafsa Private Higher School of Engineers. I have a passion for software development and love producing results. I am currently interested in Web Development (MERN stack developer). I also love to play football, any racket sports and competitive video games.",
};

// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Covid-19",
    skills: ["Reactjs, Bootstrap"],
    url: "https://github.com/ghnimi1/Covid-19/",
    photo: 'assets/images/covid.png'
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Store Phone",
    skills: ["Reactjs, Redux"],
    url: "https://github.com/ghnimi1/store-phone",
    photo: 'assets/images/storephone.png'
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Music App",
    skills: ["Reactjs, Bootstrap"],
    url: "https://github.com/ghnimi1/Music_App",
    photo: 'assets/images/musicapp.png'
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Education";

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am always looking for new opportunities and endeavours to take on.",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/ghnimi1",
  facebook: "https://www.facebook.com/ghnimi.hassen2",
  linkedin: "https://www.linkedin.com/in/ghnimi-hassen-43882086/",
  instagram: "https://instagram.com",
  resume: "cvhassen.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
