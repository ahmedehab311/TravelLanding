import React from "react";
import "./Hero.css";

import Traveller from "../images/Traveller 1.svg";
import Play from "../images/playing.jpg"
function Hero() {
  return (
    <>
     
    {/* start landing */}
      <div className="hero">
        <div className="landing">
          <div className="container">
            <div className="content">
              <div className="info">
                <h3>Best Destinations around the world</h3>
                <h2>Travel, enjoy and live a new and full life</h2>
                <p>
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </p>
                <div className="btns-landing">
                  <button>Find out more</button>
                <div className="info-play">
                <img src={Play}   className="img-play" alt="" />
               
                <p>Play Demp</p>
                </div>
                </div>
              </div>
              <div className="img">
                <img src={Traveller} className="traveller" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
{/* end landing */}

    </>
  );
}

export default Hero;
