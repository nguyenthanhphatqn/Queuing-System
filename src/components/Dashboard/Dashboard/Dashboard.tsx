import React from "react";
import "./dashboard.css";
import LevelChart from "../LevelChart/LevelChart";
import Chart from "../Chart/Chart";

export default function DashBoard() {
  return (
    <div className="DashBoard">
      <div className="DashBoardTitle">DashBoard</div>
      <LevelChart />
      <Chart />
    </div>
  );
}
