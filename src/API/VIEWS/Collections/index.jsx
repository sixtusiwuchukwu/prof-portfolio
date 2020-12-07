import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { GETCOLLECTION } from "../../graphql/Query";
import "./collections.styles.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
function Collection() {
  const history = useHistory();

  let { collectionName } = useParams();

  const {
    error,
    loading,
    data: { getcollection: collections } = {},
  } = useQuery(GETCOLLECTION, {
    variables: { collectionName },
  });

  const HandleDelete = (id) => {
    console.log(id, "item id to be deleted");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="collection-backdrop">
      <div
        className="collection-header"
        style={{
          backgroundImage: `url(${
            collections ? collections.collectionData[0].url : ""
          })`,
        }}
      >
        <div className="collection-header-shade">
          <h1 className="collection-header-h1 ">{`${
            collections ? collections.collectionName : " "
          } COLLECTION`}</h1>
        </div>
      </div>
      <center>
        <div className="collection-details">
          <div onClick={() => history.push("/")} className="arrowback">
            {" "}
            <MdKeyboardBackspace color="black" width={60} height={20} />
            back
          </div>
          {collections &&
            collections.collectionData.map((item, key) => (
              <div className="collection-item" key={item.id}>
                <div
                  onClick={() => HandleDelete(item.id)}
                  className="delete-btn-div"
                >
                  <MdDeleteForever className="delete-btn" />
                </div>
                <a
                  key={key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.url} alt="" className="sample-image" />
                </a>
              </div>
            ))}
        </div>
      </center>
    </div>
  );
}

export default Collection;
