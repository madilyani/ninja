import React, { useState, useEffect } from "react";

export default function Parallax(props) {
  const [offsetTop, setOffsetTop] = useState(props.start);
  const [style, setStyle] = useState({});
  const max = props.max ?? 500;
  const start = props.start ?? 10;
  const vertical = props.vertical ? true : false;
  const reverse = props.reverse ? '-' : '';
  const onscroll = () => {
    if (window.scrollY < max && window.scrollY > start) {
      setOffsetTop(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
  }, []);
  useEffect(() => {
    let x = vertical ? `0` : `${reverse}${offsetTop / 10}%`;
    let y = vertical ? `${reverse}${offsetTop / 10}%` : `${offsetTop / -40}%`;
    let newStyle = {
      transform: `translate3d(${x},${y}, 0 )`,
      opacity: `calc(1 - ${offsetTop * 0.002})`,
    };
    setStyle(newStyle);
  }, [offsetTop]);

  return (
    <div className={props.addClass} style={style}>
      {props.children}
    </div>
  );
}
