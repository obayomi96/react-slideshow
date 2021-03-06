import React from "react";
import { Zoom } from "../../../../src";
import "../../../app.css";

const ZoomExample = () => {
  const zoomOutImages = [
    "assets/images/slide_2.jpg",
    "assets/images/slide_7.jpg",
    "assets/images/slide_5.jpg"
  ];

  const fadeImages = [
    "assets/images/slide_5.jpg",
    "assets/images/slide_6.jpg",
    "assets/images/slide_7.jpg"
  ];

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    indicators: true,
    scale: 0.4,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`zoom transition finished from ${oldIndex} to ${newIndex}`);
    }
  };

  const zoomInProperties = {
    duration: 5000,
    transitionDuration: 500,
    indicators: true,
    scale: 1.4,
    pauseOnHover: true
  };

  return (
    <div>
      <h3>Zoom out Effect</h3>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {zoomOutImages.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
      <br />
      <h3>Zoom in Effect</h3>
      <div className="slide-container">
        <Zoom {...zoomInProperties}>
          {fadeImages.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
      <br />
    </div>
  );
};

export default ZoomExample;
