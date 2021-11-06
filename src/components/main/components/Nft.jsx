import React from "react";

export default function Nft() {
  const images = [
    "images/nft-1.png",
    "images/nft-2.png",
    "images/nft-1.png",
    "images/nft-2.png",
    "images/nft-1.png",
  ];
  return (
    <section className="nft">
      <div className="auto__container">
        <div className="nft__inner">
          {images.map((image,i) => {
            return (
              <div className="nft__inner-image" key={"nft-"+i}>
                <img src={image} alt={"nft-"+i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
