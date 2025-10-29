/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set too false to use static SVG
};

const greeting = {
  username: "Donald NGUIMFACK",
  title: "Hi all, I'm Donald NGUIMFACK",
  subTitle: emoji(
    "A passionate Senior Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / PHP / JavaScript / Reactjs / Angular / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink: "https://cvdesignr.com/p/688370681b165?hl=en_GB", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lebigdonald",
  linkedin: "https://www.linkedin.com/in/donald-nkengfack/",
  gmail: "nkengfack96@gmail.com",
  gitlab: "https://gitlab.com/lebigdonald",
  stackoverflow: "https://stackoverflow.com/users/9929689/lebigdonald",
  whatsapp: "https://wa.me/237697657064",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build robust and scalable Backend systems / APIs to power your web and mobile applications"
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as SMS/ Payment / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "VPS",
      fontAwesomeClassname: "fab fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Institute of the Coasts (UIC)",
      logo: require("./assets/images/IUC.png"),
      subHeader:
        "Bachelor of Technology (BTech) in Software Engineering and Computing",
      duration: "October 2018 to August 2019",
      desc: "Diploma supervised by the College of Technology (COT) of the University of Buea (UB)",
      descBullets: [
        "Development of a TEACHER EFFECTIVENESS RATING SYSTEM (TERS)",
        "Design of a STUDENT TRACKING AND RATING SYSTEM (STRS)"
      ]
    },
    {
      schoolName: "University Institute of the Coasts (UIC)",
      logo: require("./assets/images/IUC.png"),
      subHeader:
        "Higher National Diploma (HND) in Software Engineering and Computing",
      duration: "October 2016 to June 2018",
      desc: "",
      descBullets: [
        "Development of an ONLINE TELEPHONE DIRECTORY for the final HND project.",
        "Mentorship of numerous Level I and II students.",
        "Part-time lecturer for Level I and II ICT students."
      ]
    },
    {
      schoolName: "University of Dschang (UDs)",
      logo: require("./assets/images/UDs.png"),
      subHeader: "Mathematics and Computer Science",
      duration: "October 2016 to June 2018",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Mobile",
      progressPercentage: "70%"
    },
    {
      Stack: "Database Administration",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure/DevOPS",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Manager",
      company: "SUNSHINE Advisory",
      companylogo: require("./assets/images/sunshine_advisory.png"),
      date: "March 2022 – Present",
      desc: "Bonanjo, Douala - Cameroun",
      descBullets: [
        "SUNSHINECare – In Progress : Supervising a team of 5 people (4 developers, 1 PO) to built a distributed system based on microservices with ReactJS (NextJS).",
        "IAP (Atlantique Assurance AFG) : Migrated the old version (BACM) to Java 21 and Spring Security 6, ensuring enhanced compatibility and security to more than 80%.",
        "CAMWATER – Water Meter Reading : Supervised a team of 6 people (4 developers, 2 POs) to built a distributed system based on microservices with Java (SpringBoot) for the API and ReactJS (NextJS) on the client side and React Native for mobile.",
        "SISEPCAM-FINEX (Integrated System for Monitoring and Evaluation of Externally Funded Projects) : Led a team of 5 developers + 1 PO, to built a modular application based on Angular 17 and Spring Boot microservices.",
        "'Eau De Vie Lounge' Website : Developed a showcase website with a reservation and secure payment module.",
        "IAP (Banque Atlantique du Cameroun – BACM) : Developed a payroll interfacing application with access control, from analysis to deployment."
      ]
    },
    {
      role: "Software Development Consultant",
      company: "Evolv IZSoftwares Group Ltd.",
      companylogo: require("./assets/images/izsoftwares.jpeg"),
      date: "December 2022 – Present",
      desc: "Nairobi - Kenya",
      descBullets: [
        "PayZen – Payment Integration : Diagnosed and fixed critical bugs related to the integration of the PayZen payment gateway on multiple client platforms. Proposed and tested various solutions, with systematic implementation of error handling mechanisms using try-catch and logs to improve traceability by 60%.",
        "Nucleus – Migration and Microservices Development : Led the complete migration of the Hospital, Notification, and Storage services from Kotlin to Java, improving maintainability and application performance by over 40%.",
        "Conducted code reviews and provided technical mentorship, sharing best practices in clean code and modular design, reducing PR ticket resolution time by 30%."
      ]
    },
    {
      role: "Software Development Consultant",
      company: "TAMCO Technologies",
      companylogo: require("./assets/images/tamco-tech.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Deido, Douala - Cameroun",
      descBullets: [
        "ERP OmegaMFI & O-Collect (OC-Classic, OC-Benskin) : Led the full development of two key solutions (ERP OmegaMFI and O-Collect) for financial management, significantly boosting the company's processing capacity and performance by over 65%.",
        "Managed the development team throughout all phases: requirements analysis, soft ware design, back-end/front-end development, testing, and deployment.",
        "Collected client requirements and designed customized soft ware solutions aligned with their business processes.",
        "Provided training and technical support to end users, facilitating tool adoption and increasing customer satisfaction by over 45%.",
        "Authored and maintained comprehensive documentation, including user guides and technical specifications, ensuring soft ware sustainability and maintainability by over 75%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using GitHub, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS AND PLATFORMES THAT I HELPED TO CREATE",
  projects: [
    {
      image: require("./assets/images/oc-classic.png"),
      projectName: "OC-Classic",
      projectDesc:
        "OC-Classic is a Laravel based application for managing daily collections and payments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://test.oc-classic.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/KiloTrade.png"),
      projectName: "KiloTrade",
      projectDesc:
        "The platform that connects travelers and shippers for reassuring and cost-effective shipping experiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kilotrade.de/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Donald NGUIMFACK Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+237697657064",
  email_address: "nkengfack96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "lebigdonald", //Replace "twitter" with your Twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
