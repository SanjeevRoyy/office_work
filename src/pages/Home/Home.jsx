import React from "react";
import Section from "./components/Section";
import Banner from "./components/Banner";
import VideoPlayer from "./components/VideoPlayer";
import Brand from "./components/Brand";
import SectionAward from "./components/SectionAward";
import SectionWork from "./components/SectionWork";
import SectionProcess from "./components/SectionProcess";
import Grid from "./components/Grid";
import ImgSlider from "./components/ImgSlider";
import Cards from "../../components/Cards";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <div>
      <VideoPlayer />
      <Section />
      <Banner />
      <Brand />
      <SectionAward />
      <SectionWork />
      <SectionProcess />
      <Grid />
      <ImgSlider />
      <Blogs />
      <Cards
      
        highlight="Now"
        heading="It's Your Turn"
        leftBtnText="Work With Us"
        
        rightBtnText="See Our Work"
      />
    </div>
  );
}
