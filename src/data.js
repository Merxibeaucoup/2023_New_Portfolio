import news from "./images/project/desktop/news.jpg";
import news1 from "./images/project/desktop/news1.jpg";
import news2 from "./images/project/desktop/news-preview-1.jpg";
import news3 from "./images/project/desktop/news-preview-2.jpg";

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
];
