import React, { useState } from "react";
import "./Navbar.css";
import tag from "../../assets/tag.png"

function Navbar({ logoTitle, itemList }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div
        className="leftSide"
        onClick={() => {
          console.log("intro");
        //   navigate("/intro");
        }}
      >
        <img src={tag} alt="tag"/>
        <h2>Fullstack Developer</h2>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          {itemList.map((e) => (
            <a onClick={(ee) => {}} key={e.title} href={"#" + e.path}>
              {e.title.toUpperCase()}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowLinks(!showLinks)}
          className="hamurger__button"
          id={showLinks ? "hamburger__button__open" : ""}
        >
          <span onClick={() => setShowLinks(!showLinks)} className="bar"></span>
          <span onClick={() => setShowLinks(!showLinks)} className="bar"></span>
          <span onClick={() => setShowLinks(!showLinks)} className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
