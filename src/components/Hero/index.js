import React from "react";
import HeroImgDesktop from "../../images/homepage/desktop/image-homepage-hero.jpg";
import HeroImgTablet from "../../images/homepage/tablet/image-homepage-hero.jpg";
import HeroImgMobile from "../../images/homepage/mobile/image-homepage-hero.jpg";

import {
  HeroWrapper,
  HeroBgImg,
  HeroHeading,
  HeroHeadingWrapper,
} from "./HeroElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import ChevronsIcon from "../../images/homepage/chevrons-down.svg";
import { MainButton } from "../Button";

const Hero = ({ heroText }) => {
  return (
    <HeroWrapper>
      <WrapperEl>
        <HeroBgImg
          heroImgDesktop={HeroImgDesktop}
          heroImgTablet={HeroImgTablet}
          heroImgMobile={HeroImgMobile}
        />
        <HeroHeadingWrapper>
          <HeroHeading>{heroText}</HeroHeading>
          <MainButton href="#about" src={ChevronsIcon} text="About me" />
        </HeroHeadingWrapper>
      </WrapperEl>
    </HeroWrapper>
  );
};

export default Hero;
