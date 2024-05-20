import React from "react";
import "./header.css";

import logo from "../images/Logo.svg";
import bottom from "../images/Vector 1.svg";

function header() {
  return (
    <>
      {/* start header */}
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-bar">
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Desitnations
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Hotels
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Flights
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Bookings
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <button className="button" href="#">
                    Sign up
                  </button>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  EN
                </a>
                <img className="bottom" src={bottom} alt="" />
              </li>
            </ul>
          </div>
                {/* <img className="bottom-hover" src={bottom} alt="" /> */}
        </div>
      </div>
      {/* end header */}
    </>
  );
}

export default header;
