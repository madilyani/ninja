import React from "react";

export default function TeamPerson() {
  const teams = [
    {
      id: "team-1",
      image: "images/nft-1.png",
      name: "Jer",
      href: "/",
      prof: "Project Lead",
    },
    {
      id: "team-2",
      image: "images/nft-2.png",
      name: "Tim",
      href: "/",
      prof: "Front end",
    },
    {
      id: "team-3",
      image: "images/nft-1.png",
      name: "Eva",
      href: "/",
      prof: "Back end",
    },
    {
      id: "team-4",
      image: "images/nft-2.png",
      name: "John",
      href: "/",
      prof: "Something",
    },
    {
      id: "team-5",
      image: "images/nft-1.png",
      name: "Jer",
      href: "/",
      prof: "Project Lead",
    },
  ];
  return (
    <div className="team__inner-meet-row">
      {teams.map((person, i) => {
        return (
          <div className="team__inner-meet-column" key={person.id}>
            <div className="team__inner-meet-column-image">
              <img src={person.image} alt={"person-" + i} />
            </div>
            <h5 className="harukaze">
              {person.name}
              <a href={person.href}>
                <img src="images/twitter.png" alt="twitter" />
              </a>
            </h5>
            <p>{person.prof}</p>
          </div>
        );
      })}
    </div>
  );
}
