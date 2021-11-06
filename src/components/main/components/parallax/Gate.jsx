import React from "react";
import Parallax from "./Parallax";
// import { Parallax } from "react-scroll-parallax";

export default function Gate() {
  return (
    <Parallax addClass="intro__gate"  >
        <img src="images/Gate.png" alt="gate" />
    </Parallax>
  );
}
