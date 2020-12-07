import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GETCOLLECTIONS } from "../../../graphql/Query";
import { ADD_TO_COLLECTION } from "../../../graphql/Mutation";
import "./additem.style.css";

const Additem = () => {
  let [images, setImages] = useState("");
  let [collectionName, setcollectionName] = useState("");
  const [Error, SetError] = useState(false);

  // getcollection query
  const {
    error,
    loading,
    data: { getCollections: collections } = {},
  } = useQuery(GETCOLLECTIONS);

  // addToCollection Mutation
  const [
    addItemToCollection,
    {
      error: error2,
      loading: loading2,
      data: { addItemToCollection: result } = {},
    },
  ] = useMutation(ADD_TO_COLLECTION);

  if (error) {
    console.log("error", error.message);
  }

  if (result) {
    console.log(result, "response");
    document.querySelector(".upload-btn").innerHTML = "Uploaded!";
  }

  // image input handller
  const Handlechange = ({ target }) => {
    let input = target;
    let reader = new FileReader();
    reader.onload = function () {
      let dataURL = reader.result;
      setImages(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };

  // select option input handller
  const HandlechangeSelect = (e) => {
    e.preventDefault();
    setcollectionName(e.target.value);
  };

  // image upload hanldller
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (Error === true) {
      SetError(false);
    }
    document.querySelector(".upload-btn").innerHTML = "Uploading...";
    if (collectionName === "") {
      SetError(true);
      document.querySelector(".upload-btn").innerHTML = "Upload";
      return false;
    }
    addItemToCollection({ variables: { collectionName, url: images } });
  };

  return (
    <div style={{ padding: "10px 10px" }}>
      <div className="title-container">
        <h1 className="additem-head">AddItem To Collection</h1>

        <select
          className="categorylist-container"
          defaultValue="select collection"
          value={collectionName}
          onChange={HandlechangeSelect}
        >
          <option>--select collection--</option>
          {collections
            ? collections.map((item, key) => (
                <option key={key}>{item.collectionName}</option>
              ))
            : "--select collection--"}
        </select>
      </div>

      <div>
        {Error ? (
          <h4 style={{ color: "red", fontfamily: "sari" }}>
            please select a collection Name
          </h4>
        ) : (
          ""
        )}
        <form encType="multipart/form-data">
          <label>
            <div className="hold">
              <input
                type="file"
                accept="image/*"
                className="inputfile"
                name="image"
                onChange={Handlechange}
                // multiple
              />

              {images ? (
                <div>
                  <img
                    src={images}
                    alt="file to upload"
                    width="40%"
                    height="400px"
                  />
                  <br />
                  <button onClick={HandleSubmit} className="upload-btn">
                    Upload
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};
export default Additem;
