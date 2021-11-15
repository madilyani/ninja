import React from "react";
import Intro from "./components/Intro";
import Nft from "./components/Nft";
import TeamPerson from "./components/TeamPerson";

export default function Main() {
  return (
    <div>
      <Intro />
      <Nft />
      <section className="mint">
        <div className="auto__container">
          <div className="mint__inner">
            <h3>MINT YOUR GAKI NOW</h3>
            <h6 className="shirin">0 of 7,777 minted</h6>
            <div className="mint__inner-info">
              <h6 className="sm shirin">0.0777 eth each</h6>
              <h6 className="sm shirin">max 5 per txn</h6>
            </div>
            <div className="mint__inner-image">
              <img src="images/nft-1.png" alt="nft" />
            </div>
            <a href="/" className="button-primary">
              MINT
            </a>
          </div>
        </div>
      </section>

      <section className="sideImage">
        <div className="anchor" id="about"></div>
        <div className="auto__container">
          <div className="sideImage__inner">
            <div className="sideImage__inner-content">
              <h4>about</h4>
              <h3 className="harukaze">SUBTITLE HEADING</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem iste nulla necessitatibus, quam laborum ducimus ea
                natus incidunt totam adipisci eum quas, cumque praesentium quos
                deserunt reiciendis. Assumenda, harum qui. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eligendi sequi temporibus a
                harum aut aperiam illo assumenda, cumque fuga soluta eos
                perferendis rerum inventore dolores id explicabo voluptatem
                tempore totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error rerum odio recusandae dolor unde nam a
                quibusdam! Veritatis assumenda tempora, dolore, hic mollitia
                voluptate maxime neque, quo eius consequuntur porro?
              </p>
            </div>
            <div className="sideImage__inner-image">
              <img src="images/image.png" alt="nft" />
            </div>
          </div>
        </div>
      </section>

      <section className="sideImage right">
        <div className="anchor" id="dao"></div>
        <div className="auto__container">
          <div className="sideImage__inner">
            <div className="sideImage__inner-image">
              <img src="images/image.png" alt="nft" />
            </div>
            <div className="sideImage__inner-content">
              <h4>DAO</h4>
              <h3 className="harukaze">SUBTITLE HEADING</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem iste nulla necessitatibus, quam laborum ducimus ea
                natus incidunt totam adipisci eum quas, cumque praesentium quos
                deserunt reiciendis. Assumenda, harum qui. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eligendi sequi temporibus a
                harum aut aperiam illo assumenda, cumque fuga soluta eos
                perferendis rerum inventore dolores id explicabo voluptatem
                tempore totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error rerum odio recusandae dolor unde nam a
                quibusdam! Veritatis assumenda tempora, dolore, hic mollitia
                voluptate maxime neque, quo eius consequuntur porro?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="anchor" id="team"></div>

        <div className="auto__container">
          <div className="team__inner">
            <h6>Find our whitepaper & infographic in our docs.</h6>
            <div className="team__inner-info">
              <h4 className="harukaze">TEAM WALLET MULTISIG:</h4>
              <h6 className="sm shirin">
                0x30BED021939788539e816cdABA805e530C4e4860
              </h6>
            </div>
            <div className="team__inner-info">
              <h4 className="harukaze">COMMUNITY VAULT MULTISIG:</h4>
              <h6 className="sm shirin">
                0x30BED021939788539e816cdABA805e530C4e4860
              </h6>
            </div>
            <div className="team__inner-meet">
              <h2>MEET THE TEAM</h2>
              <TeamPerson />
            </div>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="anchor" id="join"></div>
        <div className="auto__container">
          <div className="join__inner">
            <h2>JOIN THE COMMUNITY</h2>
            <h5 className="okashi">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              rerum iusto voluptatum pariatur. Exercitationem repudiandae quam
              eos ad et, illo accusamus aperiam excepturi, neque non doloremque
              asperiores obcaecati sit numquam!
            </h5>
            <a href="/" className="button-secondary">
              JOIN DISCORD
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
