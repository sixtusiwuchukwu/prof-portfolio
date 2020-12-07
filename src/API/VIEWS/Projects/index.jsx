import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./projects.styles.css";

import { GETCOLLECTIONS } from "../../graphql/Query/index";
import { MdDeleteForever } from "react-icons/md";

const Projects = () => {
  const {
    error,
    loading,
    data: { getCollections: collections } = {},
  } = useQuery(GETCOLLECTIONS);

  return (
    <div className="test">
      <center>
        <div className="project-title">
          <h2 id="project-head">PROJECTS</h2>
        </div>
        <div className="sample-container">
          {collections
            ? collections.map((collection, key) => (
                <div className="sample" key={key}>
                  {}
                  <div className="sample-description" key={key}>
                    <h2>{collection.collectionName}</h2>
                    <Link
                      to={`/projects/collections/${collection.collectionName.toLowerCase()}`}
                    >
                      <button>view</button>
                    </Link>
                  </div>
                  <img
                    src={
                      collection.collectionData.length > 0
                        ? collection.collectionData[0].url
                        : ""
                    }
                    alt={" "}
                    className="sample-image"
                  />
                </div>
              ))
            : " "}
        </div>
      </center>
    </div>
  );
};

export default Projects;
