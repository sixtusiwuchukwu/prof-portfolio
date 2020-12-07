import React from "react";
import { Pie } from "react-chartjs-2";
import "./chart.style.css";
import { GETCOLLECTIONS } from "../../graphql/Query";
import { useQuery } from "@apollo/client";

const App = () => {
  const {
    error,
    loading,
    data: { getCollections: collections } = {},
  } = useQuery(GETCOLLECTIONS);

  const state = {
    labels: collections ? collections.map((item) => item.collectionName) : [],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#55acee",
          "#dd4b39",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#0a426d",
          "#3f1009",
        ],
        data: collections ? collections.map((item) => item.datalength) : [],
      },
    ],
  };

  return (
    <div
      style={{
        position: "relative",
        top: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
      }}
    >
      <div>
        <Pie
          data={state}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Total uploads per collection",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
          width={700}
          height={500}
        />
      </div>

      {/* <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        /> */}
    </div>
  );
};

export default App;
