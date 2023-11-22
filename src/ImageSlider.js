import { useState } from "react";
import { otherData } from "./data";

function ImageSlider() {
  const [photo, setPhoto] = useState(0);
  const { imageBox } = otherData[photo];
  const previousPhoto = () => {
    setPhoto((photo) => {
      photo--;
      if (photo < 0) {
        return otherData.length - 1;
      }
      return photo;
    });
  };
  const nextPhoto = () => {
    setPhoto((photo) => {
      photo++;
      if (photo > otherData.length - 1) {
        photo = 0;
      }
      return photo;
    });
  };
  return (
    <div className="slider-container">
      <div className="image-container">
        <img
          src={imageBox}
          width="300px"
          alt="my photos collection"
          className="image"
        />
      </div>
      <div className="image-btn">
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
      </div>
    </div>
  );
}
export default ImageSlider;
