import React from "react";
import "./category.css";
import stalite from "../images/satellite-dish.svg";
import Plane from "../images/plane.svg";
import photo from "../images/Group.svg";
import photo2 from "../images/image 25.svg";

function category() {
  return (
    <>
      <div className="category">
        <div className="container">
          <h4 className="title">Category</h4>
          <h3>We Offer Best Services</h3>
          <div className="cards">
            <div className="card card1">
              <div className="img-icon">
                <img src={stalite} alt="" className="img-card-category" />
                <div className="icon-category card1-icon"></div>
              </div>
              <h4 className="title-card-category">Calculated Weather </h4>
              <p className="des-card-category">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
            <div className="postion">
              <div className="card card2">
                <div className="img-icon">
                  <img src={Plane} alt="" className="img-card-category" />
                  <div className="icon-category card2-icon"></div>
                </div>
                <h4 className="title-card-category">Calculated Weather </h4>
                <p className="des-card-category">
                  Engrossed listening. Park gate sell they west hard for the.
                </p>
              </div>
              <div className="back"></div>
            </div>
            <div className="card card3">
              <div className="img-icon">
                <img src={photo2} alt="" className="img-card-category" />
                <div className="icon-category card3-icon"></div>
              </div>
              <h4 className="title-card-category">Calculated Weather </h4>
              <p className="des-card-category">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
            <div className="card card4">
              <div className="img-icon">
                <img src={photo} alt="" className="img-card-category" />
                <div className="icon-category card4-icon"></div>
              </div>
              <h4 className="title-card-category">Calculated Weather </h4>
              <p className="des-card-category">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
            <div className="plus">
              <div className="one">
                <span className="red">+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="two">
                <span>+</span>
                <span>+</span>
                <span className="blue">+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="three">
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="four">
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="five">
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
