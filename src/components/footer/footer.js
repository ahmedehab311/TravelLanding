import React from "react";
import "./footer.css";
import photo1 from "../images/Social1.svg";
import photo2 from "../images/Social2.svg";
import photo3 from "../images/Social.svg";
import photo4 from "../images/Play Store.svg";
import photo5 from "../images/Google Play.svg";
function footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box box1">
          <h3>Jadoo.</h3>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="box box2">
          <div className="box-content">
            <h3>Company</h3>
            <div>
              <h4>About</h4>
              <h4>Careers</h4>
              <h4>Mobile</h4>
            </div>
          </div>
          <div className="box-content">
            <h3>Contact</h3>
            <div>
              <h4>Help/FAQ</h4>
              <h4>Press</h4>
              <h4>Affilates</h4>
            </div>
          </div>
          <div className="box-content">
            <h3>More</h3>
            <div>
              {" "}
              <h4>Airlinefees</h4>
              <h4>Airline</h4>
              <h4>Low fare tips</h4>
            </div>
          </div>
        </div>
        <div className="box box3">
          <div className="icons-box">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <h4>Discover our app</h4>
          <div>
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
