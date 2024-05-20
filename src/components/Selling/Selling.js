import React from "react";
import "./Selling.css";
import photo1 from "../images/Rectangle 14@2x.png";
import photo2 from "../images/2.png";
import photo3 from "../images/3.png";
import photo4 from "../images/1.png";
import navigation from "../images/navigation 1.svg";

function Selling() {
  return (
    <div className="selling">
      <h4 className="title">Top Selling</h4>
      <h3 className="title-2">Top Destinations</h3>
      <div className="container">
        <div className="card ">
          <img src={photo1} alt="" className="img-card-selling" />

          <div className="info-top">
            <p >Rome, Italty</p>
            <p>$5,42k</p>
          </div>
          <div className="info-bottom-selling">
            <img src={navigation} alt="" />
            <p>10 Days Trip</p>
          </div>
        </div>
        <div className="card ">
          <img src={photo4} alt="" className="img-card-selling" />

          <div className="info-top">
            <p>London, UK</p>
            <p>$4.2k</p>
          </div>
          <div className="info-bottom-selling">
            <img src={navigation} alt="" />
            <p>10 Days Trip</p>
          </div>
        </div>
        <div className="card ">
          <img src={photo3} alt="" className="img-card-selling" />

          <div className="info-top">
            <p>Full Europe</p>
            <p>$5k</p>
          </div>
          <div className="info-bottom-selling">
            <img src={navigation} alt="" />
            <p>10 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selling;
