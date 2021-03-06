import React from "react";
import "../style/Home.css";
import Background from "../images/EuSensorialSite.jpg";
import NavBar from '../components/NavBar';
import CarouselComponent from '../components/Carousel';

function Home() {
  return (
    <div className="BodyHome">
      <img src={Background} alt="Home Background" className="BackgroundImg" />
      <NavBar />
      <CarouselComponent />
    </div>
  );
}

export default Home;
