import React, { useState, useEffect} from "react";
import classes from './Slider.module.css';


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const MINUTE_MS = 2000;
  useEffect(()=>{
    const interval = setInterval(() => {
        if(current<length){
            setCurrent(prev=> prev+1)
        } else{
            setCurrent(0)
        }
    }, MINUTE_MS);
    
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
  }, [current])

  

  return (
    <div className={classes.StyledSlider}>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <img className={classes.SlideImage} src={slide.image} alt="" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
