import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATECOLLECTION } from "../../../graphql/Mutation";
import "./createCollection.style.css";

const Createcollection = () => {
  const [collectionname, Setcollectionname] = useState("");
  const [createCollection, { data, error, loading }] = useMutation(
    CREATECOLLECTION
  );

  const HandleChange = (e) => {
    Setcollectionname(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    createCollection({ variables: { collectionName: collectionname } });
    Setcollectionname("");
  };
  if (data) {
    console.log(data, "datataaaa");
  }
  if (error) {
    console.log(error, "error");
  }

  return (
    <div>
      <h1 className="createCollection-head">Create New collection</h1>
      <div>
        <form onSubmit={HandleSubmit}>
          <input
            className="collectionname"
            type="text"
            placeholder="Collection Name"
            value={collectionname}
            onChange={HandleChange}
            autoFocus
          />
          <button className="collectionname-submit">CreateCollection</button>
        </form>
      </div>
    </div>
  );
};

export default Createcollection;
