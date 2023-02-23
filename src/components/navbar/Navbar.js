import React, { useEffect, useState } from "react";
import "./Navbar.css";
import tag from "../../assets/tag.png"
const listOfTexts = ["Fullstack Developer", "AI Specialist", "Data Analyst"]
function Navbar({ logoTitle, itemList }) {
  const [selectedText, setSelectedText] = useState(0)
  const [showLinks, setShowLinks] = useState(false);
  const [className, setClassName] = useState("runAnimation")


  const MINUTE_MS = 10000;
    useEffect(() => {
        const interval1 = setInterval(()=>{
          setClassName("none")
        }, MINUTE_MS*0.99)
        const interval = setInterval(() => {
          // console.log(selectedText)
            if(selectedText>=listOfTexts.length-1){
              setSelectedText((pr)=>{
                return 0
              })
            } else {
              setSelectedText(prev=> {
                return (prev+1)
              })
            }
            setClassName("runAnimation")
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
    }, [selectedText])

  return (
    <div className="Navbar">
      <div
        className={`leftSide ${className}`}
        onClick={() => {
          console.log("intro");
        //   navigate("/intro");
        }}
      >
        <img src={tag} alt="tag"/>
        <h2>{listOfTexts[selectedText]}</h2>
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
