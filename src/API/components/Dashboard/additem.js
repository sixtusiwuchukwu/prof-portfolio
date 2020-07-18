import React, { useState } from "react";

import "../../../styles/dashboardstyles/additems.css";

const Additem = () => {
  let [images, setImages] = useState([]);

  const Handlechange = ({ target }) => {
    setImages(target.files);
  };
  images = [...images];

  return (
    <div style={{ padding: "10px 10px" }}>
      <div className="title-container">
        <h1>AddItem To Collection</h1>
        <select className="categorylist-container">
          <option>-select Collection-</option>
          <option>Animation</option>
          <option>Cartoons</option>
        </select>
      </div>

      <div>
        <form encType="multipart/form-data">
          <label>
            <div className="hold">
              <input
                type="file"
                accept="image/*"
                className="inputfile"
                name="image"
                onChange={Handlechange}
                multiple
              />
              {!!images.length ? (
                <div className="file-container">
                  {images.map((image) => (
                    <div>
                      <p>{image.name}</p>
                      {/* <img src={image} alt="file to upload" /> */}
                    </div>
                  ))}

                  <button className="upload-btn">Upload</button>
                </div>
              ) : null}
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};
export default Additem;
