import Fylo1 from "./images/portfolio/desktop/image-portfolio-fylo.jpg";
import Fylo2 from "./images/portfolio/tablet/image-portfolio-fylo.jpg";
import Fylo3 from "./images/portfolio/mobile/image-portfolio-fylo.jpg";
import Fylo4 from "./images/project/desktop/image-fylo-hero.jpg";
import Fylo5 from "./images/project/desktop/image-fylo-preview-1.jpg";
import Fylo6 from "./images/project/desktop/image-fylo-preview-2.jpg";
import Fylo7 from "./images/project/tablet/image-fylo-hero.jpg";
import Fylo8 from "./images/project/mobile/image-fylo-hero.jpg";

import Photosnap1 from "./images/portfolio/desktop/image-portfolio-photosnap.jpg";
import Photosnap2 from "./images/portfolio/tablet/image-portfolio-photosnap.jpg";
import Photosnap3 from "./images/portfolio/mobile/image-portfolio-photosnap.jpg";
import Photosnap4 from "./images/project/desktop/image-photosnap-hero.jpg";
import Photosnap5 from "./images/project/desktop/image-photosnap-preview-1.jpg";
import Photosnap6 from "./images/project/desktop/image-photosnap-preview-2.jpg";
import Photosnap7 from "./images/project/tablet/image-photosnap-hero.jpg";
import Photosnap8 from "./images/project/mobile/image-photosnap-hero.jpg";

export const dataProjects = [
  {
    id: 4,
    images: {
      img1: Fylo1,
      img2: Fylo2,
      img3: Fylo3,
      img4: Fylo4,
      img5: Fylo5,
      img6: Fylo6,
      img7: Fylo7,
      img8: Fylo8,
    },
    title: "Fylo",
    goals: [
      "responsywność",
      "mobilne menu",
      "walidacja formularza",
      "animacja podczas scrollowania",
    ],
    descriptionShort:
      "Projekt wymagał ode mnie zbudowania w pełni resposywnej strony typu landing-page. Cel ten osiągnąłem dzięki użyciu znaczników HTML5 oraz definiowaniu styli z preprocesorem Sass (SCSS). Za interakcje odpowiada JavaScript (ES6).",
    descriptionLong:
      "Projekt jest jednym z wyzwań z platformy Frontend Mentor. Zbudowana strona jest w pełni responsywna, posiada przejrzysty układ, popularne obecnie ilustracje oraz ikony SVG oraz wysuwane menu dla telefonów. Tym co ją wyróżnia jest animacja pojawiania się poszczególnych elementów podczas scrollowania. Pole na adres email posiada podstawową walidację po stronie przeglądarki. Całość dopełnia użycie preprocesora Sass wespół z metodologią BEM.",
    siteUrl: "https://fylo-landing-page-terejko.netlify.app",
    gitHubUrl: "https://github.com/jarekTerejko/fylo-dark-theme-landing-page",
    languages: ["html", "css", "JavaScript"],
    tools: ["sass"],
  },
  {
    id: 5,
    images: {
      img1: Photosnap1,
      img2: Photosnap2,
      img3: Photosnap3,
      img4: Photosnap4,
      img5: Photosnap5,
      img6: Photosnap6,
      img7: Photosnap7,
      img8: Photosnap8,
    },
    title: "Photosnap",
    goals: [
      "multi-page",
      "responsywność",
      "animowany loader",
      "mobilne menu",
      "dynamiczna zmiana treści",
    ],
    descriptionShort:
      "Projekt wymagał ode mnie zbudowania w pełni resposywnej witryny typu multi-page. Cel ten osiągnąłem dzięki użyciu znaczników HTML5 oraz definiowaniu styli z preprocesorem Sass (SCSS). Za interakcje odpowiada JavaScript (ES6).",
    descriptionLong:
      "Projekt jest jednym z wyzwań z platformy Frontend Mentor. Zbudowana witryna typu multi-page składa sie z czterech stron i jest w pełni responsywna. Widok dla telefonów posiada wysuwane menu. Tym co wyróżnia ten projekt jest piękny design z wieloma zdjęciami. Niektóre z elementów powtarzają się na różnych stronach. Hołdując zasadzie DRY, raz zdefiniowane dla nich klasy są następnie reużywane. JavaScript odpowiada za dynamiczną zmianę treści w zależności od stanu chexboxa na stronie PRICING. Całość dopełnia użycie preprocesora Sass wespół z metodologią BEM.",
    siteUrl: "https://photosnap-terejko.netlify.app",
    gitHubUrl: "https://github.com/jarekTerejko/fem-photosnap",
    languages: ["html", "css", "JavaScript"],
    tools: ["sass"],
  },
];
