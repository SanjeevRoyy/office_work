import React from "react";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import AboutBanner from "./componenets/Banner";
import Founder from "./componenets/Founder";
import Process from "./componenets/Process";
import Team from "./componenets/Team";
import Client from "./componenets/Client";
const About = () => {
  return (
    <>
      <AboutBanner />
      <Founder />
      <Process />
      <Team />
      <Client />
      <Cards
        highlight="Now"
        heading="It's Your Turn"
        leftBtnText="Work With Us"
        content="select excited below package dark same identity smallest accurate lesson window protection arrangement feet mail base familiar happen carried period fox noted grandmother longer"
        rightBtnText="See Our Work"
      />
    </>
  );
};

export default About;
