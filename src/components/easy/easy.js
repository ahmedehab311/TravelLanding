import React from "react";
import "./easy.css"
import photo1 from "../images/Group 7.svg"
import photo2 from "../images/Group 11.svg"
import photo3 from "../images/Group 12.svg"
import photo4 from "../images/Rectangle 17.svg"


import photo5 from "../map icon.svg"
import photo6 from "../send.svg"

import photo7 from "../images/LEAF.svg"
import photo8 from "../Group.svg"
import photo9 from "../heart (6) 1.svg"
import photo10 from "../Mask Group.svg"
import photo11 from "../Group 3.svg"

function easy() {
  return (
    <div className="easy">
      <div className="contanier">
    <div className="content-left">
        <h4 className="title">Easy and Fast</h4>
        <h2 className="title-2">Book Your Next Trip In 3 Easy Steps</h2>
        <div className="one">
            <img src={photo1} alt="" />
        <div className="info-content-left">
            <h3>Choose Destination</h3>
       <p>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div>
        <div className="one">
            <img src={photo2} alt="" />
        <div className="info-content-left">
            <h3>Choose Destination</h3>
       <p>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div>
        <div className="one">
            <img src={photo3} alt="" />
        <div className="info-content-left">
            <h3>Choose Destination</h3>
       <p>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div>
    </div>
    <div className="content-right">
           <div className="imge">
           </div>
        <div className="card">
            <div className="smail-card">
<img src={photo10} alt="#" className="img-border" />
<div className="info-small-card">
<p>Ongoing</p>
<h3>Trip to rome</h3>
<h4><span>40%</span>completed</h4>
<img src={photo11} alt=""  />
</div>
            </div>
            <img src={photo4} className="img-top" alt="" />
        <div className="info-content-right">
            <h3>Trip To Greece</h3>
            <p>14-29 June | by Robbin joseph</p> 
        </div>
        <div className="icons">
<img src={photo5} alt="" />
<img src={photo6} alt="" />
<img src={photo7} alt="" />
        </div>
        <div className="bottom-content-right">
            <div>
            <img src={photo8} alt="" />
            <p>24 people going</p>
            </div>
            <img src={photo9} alt="" />
        </div>
        </div>
    </div>
      </div>
    </div>
  );
}

export default easy;
