import React from "react";
import "./Hero.css";
import Image from "../img/Image";
const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-contand">
        <h1>YOUR FEED DESERVE THE BEST</h1>
        <p>
          YOUR FEED DESERVE THE BEST AND WE,RE HERE TO HELF YOU WITH OUR SHOES
          .YOUR FEED DESERVE THE BEST AND WE,RE HERE TO HELF YOU WITH
          OUR SHOES
        </p>
        <button className="buttonone">Shop Now</button>
        <button className="bottontow">Category</button>
        <p>Also Available On</p>
        <div className="barand-icon">
          <p><Image /></p>
        </div>
      </div>
      <div className="hero-image">
      <img
        src="https://th.bing.com/th/id/R.1069c0fdda494b50fcffc7c54f6a4be3?rik=qmh1EFunlZuUag&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcartoon-shoes-transparent%2fcartoon-shoes-transparent-9.png&ehk=S92z42u2KRTIUaioDmV%2bCYoZ%2fSHn%2bVnykWwOhIa343k%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="shoes"
      />
      </div>
    </main>
  );
};

export default Hero;
