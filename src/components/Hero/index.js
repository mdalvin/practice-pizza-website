import React from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroItems,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElement";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Yummiest Pizza Ever</HeroH1>
          <HeroP>Ready in 20 minutes</HeroP>
          <HeroBtn>Order now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
