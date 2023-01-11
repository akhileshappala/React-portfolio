import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm S.S.Akhilesh Appala`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Developer with 4 years of experience,</strong> currently pursuing <strong> Masters in Computer Science </strong>
        at <strong className="text-stone-100">University of Colorado at Boulder.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       Actively looking for  <strong className="text-stone-100">  Summer Intenrships - 2023</strong> in Software Development related to Full Stack.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me with 111^212312 coffee cup, experimenting with <strong className="text-stone-100">photography</strong>,
        Building open source <strong className="text-stone-100">projects</strong> or touring the beautiful {' '}
        <strong className="text-stone-100">Colorado</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` I do Full stack development using JS. I really enjoy working with JS related frameworks like Angular,React,NodeJs,
  Node-red(IOT technology) and java Springboot for web applications and ElectronJs, NWJS for Desktop applications.
  Have experience with CI/CD tools like jenkins for building pipelines to automate the build and deployment process.` ,
  aboutItems: [
    {label: 'Location', text: 'Boulder, CO', Icon: MapIcon},
    {label: 'Looking for', text: 'Summer Internships - 2023', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech-Gadgets, Motorcycles, Cricket', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Colorado at Boulder', Icon: AcademicCapIcon},
    {label: 'Ex-Employment', text: 'Thermo Fisher Scientific', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java Spring Boot',
        level: 6,
      },
      {
        name: 'flask',
        level: 6,
      },
    ],
  },
  {
    name: 'Desktop and Mobile development',
    skills: [
      {
        name: 'Electron JS',
        level: 9,
      },
      {
        name: 'NWJS ',
        level: 7,
      },
      {
        name: 'Ionic ',
        level: 8,
      },
    ],
  },
  {
    name: 'DevOPS',
    skills: [
      {
        name: 'AWS',
        level: 6,
      },
      {
        name: 'Jenkisn',
        level: 9,
      },
      {
        name:'Docket and kubernetes',
        level : 7
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Angular Project',
    description: 'Angular framework based project connecting concepts with code samples.',
    url: 'https://github.com/akhileshappala/complete-Angular-project',
    image: porfolioImage7,
  },
  {
    title: 'React Project',
    description: 'React framework based project connecting concepts with code samples.',
    url: 'https://github.com/akhileshappala/React-project',
    image: porfolioImage3,
  },
  {
    title: 'NodeJs-MongoDB project',
    description: 'NodeJs framework based project connecting concepts with code samples.',
    url: 'https://github.com/akhileshappala/NodeJS-MongoDb-project',
    image: porfolioImage2,
  },
  {
    title: 'Bootstrap Project',
    description: 'Bootstrap based project connecting concepts with code samples.',
    url: 'https://github.com/akhileshappala/BootStrap4-project',
    image: porfolioImage5,
  },
  {
    title: 'US-forest fire prediction',
    description: 'Data Mining project for US forest fire prediction based on the regions wise models and classification.',
    url: 'https://github.com/akhileshappala/Masters-Datamining-project',
    image: porfolioImage6,
  },
  {
    title: 'Twitter Sentimental analysis',
    description: 'To annalyse tweets which are toxic or not, using different approaches.',
    url: 'https://github.com/akhileshappala/Twitter-sentimental-analysis',
    image: porfolioImage9,
  },

  {
    title: 'Masters Course work ',
    description: 'The course work related to the current masters program at University of Colorado at Boulder.',
    url: 'https://github.com/akhileshappala/Masters-course-work',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2022 - April 2024',
    location: 'Masters in Computer Science',
    title: 'University of Colorado at Boulder ',
    content:
    <p>Pursuing Masters in Computer Science, exploring the courses related to Design and Analysis of algorithms, Data analytics, Systems side.
     In parallel working as a <strong>Research project lead</strong> for verbNet project under <strong> Dr.Susan Brown and Dr.Martha Palmar.</strong></p>
  },
  {
    date: 'Jul 2015 -  May 2019',
    location: 'Bachelors in Computer Science',
    title: 'Amrita University',
    content:
    <p>Worked and mentored freshers in FOSS club for 2 years, worked on a research related to Digital image processing under Dr.Geetha and published it in IMTEX conference.
     lead for 8 projects in academics, Please check the github for more information.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2019 - June 2022',
    location: 'Thermo Fisher Scientific ',
    title: 'Software Engineer 2',
    content: (
      <p>
       <strong> Skills Used </strong> : Angular 8-10, ElectornJS, AWS Services, Node-red, Spring‑Boot Framework, ESF.<br></br>
   
     <strong> LabEdge</strong>:  Designed a platform for linking lab instruments to the cloud through a physical gateway. The project included cloud
      and edge components integrated with ESF to manage and operate the 250+ devices from anywhere.<br></br>
      <strong> CDD library</strong> : Presented and Developed a Configuration-driven-dynamic UI library to generate the UI pages using JSON rather
          than the regular method. while reducing the development cycle of developing UI mock-ups by nearly 60%.<br></br>
      <strong> Connect Enterprise: Serial and Network:</strong>:  Web and desktop application to display the updated values of an instrument based on
      demand/ scheduler while connected to serial / Network device including data transformation/ conversion.
      <strong>Architectured Node‑red flows</strong> to connect serial and network instruments from Thermo Fisher Scientific laboratories, lowering
      the risk of receiving stale data from 10 seconds to 2 seconds, an 80% reduction.<br></br>
      <strong>Edge-Lims Immersive POC</strong>: Edge-LIMS-Immersive POC: Lead a five-person team that uses computer vision to integrate the
      Microsoft HoloLens 2 with lab instruments. This has been chosen for the Thermo Fisher Scientific Patenting process for 2022.
      Implemented a mechanism to register devices to cloud applications by scanning the QR codes on the device.
      Features such as checking logs and status in the cloud application reduce human intervention by 70%.
      </p>
    ),
  },
  {
    date: ' May 2018 - Aug 2018 & Jan 2019 - June 2019',
    location: 'Thermo Fisher Scientific ',
    title: 'Software Developer Intern',
    content: (
      <p>
         Responsible for creating a web application and Integrating the same with a legacy instrument, which is a tissue processor.
        The web app is responsible for dynamically updating the status and usage of resources and their availability based on need.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Akhilesh Appala',
      text: 'Work, life, Balance - Peace and Happiness, these are ultimate.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The best way to get in touch with is the emailing service, you typically get response in couple of days.',
  items: [
    {
      type: ContactType.Email,
      text: 'akiakhilesh16@gmail.com',
      href: 'mailto:akiakhilesh16@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boulder, CO, USA',
      href: 'https://goo.gl/maps/B13ds45CVZWCEETq6',
    },
    {
      type: ContactType.LinkedIn,
      text: '@akhileshappala',
      href: 'https://www.linkedin.com/in/akhilesh-appala/',
    },
    {
      type: ContactType.Github,
      text: 'Akhilesh Appala',
      href: 'https://github.com/akhileshappala',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akhileshappala'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/akhilesh-appala/'},
  {label: 'Wordpress', Icon: StackOverflowIcon, href: 'https://akhileshappala.wordpress.com'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/random_shutters/'},
];
