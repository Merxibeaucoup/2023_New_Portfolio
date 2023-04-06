import news from "./images/project/desktop/news.jpg";
import news1 from "./images/project/desktop/news1.jpg";
import news2 from "./images/project/desktop/news-preview-1.jpg";
import news3 from "./images/project/desktop/news-preview-2.jpg";

import insurance from "./images/project/desktop/ins.jpg";
import insurance2 from "./images/project/desktop/ins2.jpg";

import wb1 from "./images/project/desktop/wb1.jpg";
import wb2 from "./images/project/desktop/wb2.jpg";
import wb3 from "./images/project/desktop/wb3.jpg";

import phonebook from "./images/project/desktop/phonebook.jpg";
import phonebook1 from "./images/project/desktop/pd1.jpg";
import phonebook2 from "./images/project/desktop/pb2.jpg";

export const dataProjects = [
  {
    id: 1,
    images: {
      img1: news,
      img2: news,
      img3: news3,
      img4: news1,
      img5: news2,
      img6: news3,
      img7: news1,
      img8: news2,
    },
    title: "News Home Page",
    goals: ["single-page", "responsive", "mobile menu", "CSS grid"],
    descriptionShort:
      "This project required me to build a fully responsive single-page website. I achieved this goal by using HTML5 tags and defining styles with the Sass (SCSS) preprocessor. JavaScript (ES6) is responsible for interactions.",
    descriptionLong:
      "This news homepage challenge was an excellent opportunity to practice my CSS Grid skills. There was lots of tricky decisions to make and plenty of learning opportunities!",
    siteUrl: "https://dazzling-sopapillas-ded3cb.netlify.app/",
    gitHubUrl: "https://github.com/Merxibeaucoup/Frontend_Mentor_News-homepage",
    languages: ["html5", "css", "JavaScript", "react"],
    tools: ["sass"],
  },
  {
    id: 2,
    images: {
      img1: insurance,
      img2: insurance,
      img3: insurance2,
      img4: insurance2,
      img5: insurance2,
      img6: insurance2,
      img7: insurance2,
      img8: insurance2,
    },
    title: "Insurance Home Page",
    goals: ["single-page", "Flex box", "not responsive"],
    descriptionShort:
      "This project required me to build a fully responsive single-page website. I achieved this goal by using HTML5 tags and defining styles with the Sass (SCSS) preprocessor. JavaScript (ES6) is responsible for interactions.",
    descriptionLong:
      "This insurance homepage challenge was an excellent opportunity to practice my CSS Grid skills. There was lots of tricky decisions to make and plenty of learning opportunities!",
    siteUrl: "https://singular-cajeta-991261.netlify.app/",
    gitHubUrl:
      "https://github.com/Merxibeaucoup/FrontEnd_Mentor_Challenge_inusrance_page",
    languages: ["html5", "css", "JavaScript", "react"],
    tools: ["sass"],
  },
  {
    id: 3,
    images: {
      img1: wb1,
      img2: wb1,
      img3: wb3,
      img4: wb3,
      img5: wb2,
      img6: wb1,
      img7: wb1,
      img8: wb3,
    },
    title: "FreeLance FullStack Donation web App",
    goals: ["multi-page", "Flex box", "Css grid", "Responsive", "full-stack"],
    descriptionShort:
      " With little to work with,  This project required me to build a fully responsive multi-page website with backend functionality which connects to the Stripe API. I achieved this goal by using node js (express) , react js  HTML5 tags and defining styles with the Sass (SCSS) preprocessor. JavaScript (ES6) is responsible for interactions.",
    descriptionLong:
      "This project challenge was an excellent opportunity to learn new technologies and  practice my layout skills. There was lots of tricky decisions to make and plenty of learning opportunities!",
    siteUrl: "https://wb-foundation.vercel.app/",
    gitHubUrl: "https://github.com/Merxibeaucoup/wbFoundation",
    languages: [
      "html5",
      "css",
      "JavaScript",
      "react js",
      "node js",
      "express",
      "Stripe",
    ],
    tools: ["sass"],
  },
  {
    id: 4,
    images: {
      img1: phonebook,
      img2: phonebook,
      img3: phonebook1,
      img4: phonebook2,
      img5: phonebook1,
      img6: phonebook,
      img7: phonebook,
      img8: phonebook2,
    },
    title: "Email Sender Quartz Scheduler App",
    goals: ["multi-page", "Flex box", "Css grid", "full-stack"],
    descriptionShort:
      "This is a project i built personally for myself. This project just seems like a simple CRUD contact app but under the Hood, it has a quartz scheduler which filters the contacts ,gets the contact with a birthday on that day then sends them a personalized birthday email. ",
    descriptionLong:
      "This project was an excellent opportunity to learn new technologies and  practice my layout skills. There was lots of tricky decisions to make and plenty of learning opportunities!",
    siteUrl:
      "https://github.com/Merxibeaucoup/CONTACT_EMAIL_QUARTZ_SCHEDULER-FRONTEND",
    gitHubUrl: "https://github.com/Merxibeaucoup/contact-email-task-scheduler",
    languages: [
      "html5",
      "css",
      "JavaScript",
      "react js",
      "context api",
      "Java 8+",
      "spring boot",
      "JWT",
      "spring security",
    ],
    tools: ["sass"],
  },
];
