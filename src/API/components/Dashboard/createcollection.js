import React from "react";

import "../../../styles/dashboardstyles/createcollection.css";

const Createcollection = () => {
  return (
    <div style={{ padding: "10px 10px" }}>
      <h1>Create New collection</h1>
      <div>
        <form>
          <input
            className="collectionname"
            type="text"
            placeholder="collection Name"
          />
          <button className="collectionname-submit">CreateCollection</button>
        </form>
      </div>
    </div>
  );
};

export default Createcollection;
