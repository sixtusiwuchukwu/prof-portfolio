import React from "react";

import "../../../styles/dashboardstyles/statistics.css";

const Dashboard = () => {
  return (
    <div>
      <center>
        <h1
          style={{
            paddingTop: "25px",
          }}
        >
          STATISTICS
        </h1>
      </center>
      <div className="statistic-container">
        <div
          className="statistic-container-item"
          style={{ backgroundColor: "rgb(80, 207, 68)" }}
        >
          <h2>Collections</h2>
          <p>4</p>
        </div>
        <div
          className="statistic-container-item"
          style={{ backgroundColor: "brown" }}
        >
          <h2>Total Uploads</h2>
          <p>120</p>
        </div>
        <div
          className="statistic-container-item"
          style={{ backgroundColor: "blue" }}
        >
          <h2>Last Login</h2>
          <p>{Date().slice(0, 21)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
