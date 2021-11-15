import React from "react";
import Gate from "./parallax/Gate";
import Tree from "./parallax/Tree";
import Cloud from "./parallax/Clouds";

export default function Intro() {
  return (
    <div className="intro">
      <div className="anchor" id="intro"></div>
      {/* <ParallaxProvider> */}
      <Gate />
      <Tree />
      <div className="auto__container">
        <div className="intro__inner">
          <Cloud />
          <h2>ASCEND FROM GAKIDO</h2>
          <h6 className="sm">
            lorem ipsum filler filler <br /> filler text for lore and <br />{" "}
            info about the g4k1 project
          </h6>
          <a href="/" className="button-primary">
            LEARN MORE
          </a>
        </div>
      </div>
      {/* </ParallaxProvider> */}
    </div>
  );
}
