import React from "react";

import "./statistic.style.css";

import { useQuery } from "@apollo/client";

import { GETSTAT } from "../../../graphql/Query";

import Chart from "../../../components/Chart";

const Dashboard = () => {
  const { error, loading, data: { getStatistics } = {} } = useQuery(GETSTAT);

  if (error) {
    console.log("error", error);
  }

  let Statistics = {};
  if (!loading && getStatistics) {
    Statistics = getStatistics;
  }

  return (
    <div>
      <center>
        <h1 className="statistic-head">STATISTICS</h1>
      </center>
      {Statistics ? (
        <div className="statistic-container">
          <div
            className="statistic-container-item"
            style={{ backgroundColor: "rgb(80, 207, 68)" }}
          >
            <h2 className="statistic-container-item-h2">Total Collections</h2>
            <p className="statistic-container-item-p">
              {Statistics.totalCollection}
            </p>
          </div>
          <div
            className="statistic-container-item"
            style={{ backgroundColor: "brown" }}
          >
            <h2 className="statistic-container-item-h2">Total Uploads</h2>
            <p className="statistic-container-item-p">
              {Statistics.totalUploads}
            </p>
          </div>
          <div
            className="statistic-container-item"
            style={{ backgroundColor: "blue" }}
          >
            <h2 className="statistic-container-item-h2">Last Login</h2>
            <p className="statistic-container-item-p">{Date().slice(0, 21)}</p>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
      <Chart />
    </div>
  );
};

export default Dashboard;
