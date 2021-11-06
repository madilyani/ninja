import React from "react";
import Parallax from "./Parallax";

export default function Clouds() {
  const clouds = [
    "images/cloud-1.png",
    "images/cloud-2.png",
    "images/cloud-3.png",
  ];
  return (
    <Parallax y={100} addClass="" vertical={true} reverse={true}>
    <div className="intro__inner-header">
      {clouds.map((cloud, i) => {
        return (
          <div className="cloud" key={"cloud-" + i}>
            <img src={cloud} alt={"cloud-" + i} />
          </div>
        );
      })}
    </div>
    </Parallax>
  );
}
