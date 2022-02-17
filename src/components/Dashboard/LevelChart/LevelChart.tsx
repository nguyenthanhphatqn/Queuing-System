import React from "react";
import "./levelchart.css";
import iconGrantedNumber from "../img/icon/icon-grantednumber.png";
import iconUsedNumber from "../img/icon/icon-usednumber.png";
import iconWaitingNumber from "../img/icon/icon-waitingnumber.png";
import iconMissedNumber from "../img/icon/icon-missednumber.png";
import iconArrowUp from "../img/icon/icon-arrowup.png";
import iconArrowDown from "../img/icon/icon-arrowdown.png";

export default function LevelChart() {
  return (
    <div className="LevelChart">
      <span className="LevelChartTitle">Biểu đồ cấp số</span>
      <div className="LevelChartList">
        <div className="LevelChartItem">
          <div className="LevelChartItemFirst">
            <div className="LevelChartItemFirstIMG">
              <img src={iconGrantedNumber} alt="" />
            </div>

            <span className="LevelChartItemFirstTitle">Số thứ tự đã cấp</span>
          </div>

          <div className="LevelChartItemSecond">
            <span className="LevelChartItemSecondNumber">4.221</span>
            <div className="LevelChartItemSecondPercent">
              <div className="arrowUp">
                <img src={iconArrowUp} alt="" />
              </div>

              <span>32,41%</span>
            </div>
          </div>
        </div>

        <div className="LevelChartItem">
          <div className="LevelChartItemFirst">
            <div className="LevelChartItemFirstIMG">
              <img src={iconUsedNumber} alt="" />
            </div>

            <span className="LevelChartItemFirstTitle">
              Số thứ tự đã sử dụng
            </span>
          </div>

          <div className="LevelChartItemSecond">
            <span className="LevelChartItemSecondNumber">3.721</span>
            <div className="LevelChartItemSecondPercent arrowDown">
              <div className="arrowUp">
                <img src={iconArrowDown} alt="" />
              </div>

              <span>32,41%</span>
            </div>
          </div>
        </div>

        <div className="LevelChartItem">
          <div className="LevelChartItemFirst">
            <div className="LevelChartItemFirstIMG">
              <img src={iconWaitingNumber} alt="" />
            </div>

            <span className="LevelChartItemFirstTitle">Số thứ tự đang chờ</span>
          </div>

          <div className="LevelChartItemSecond">
            <span className="LevelChartItemSecondNumber">468</span>
            <div className="LevelChartItemSecondPercent">
              <div className="arrowUp">
                <img src={iconArrowUp} alt="" />
              </div>

              <span>56,41%</span>
            </div>
          </div>
        </div>

        <div className="LevelChartItem">
          <div className="LevelChartItemFirst">
            <div className="LevelChartItemFirstIMG">
              <img src={iconMissedNumber} alt="" />
            </div>

            <span className="LevelChartItemFirstTitle">
              Số thứ tự đã bỏ qua
            </span>
          </div>

          <div className="LevelChartItemSecond">
            <span className="LevelChartItemSecondNumber">32</span>
            <div className="LevelChartItemSecondPercent arrowDown">
              <div className="arrowUp">
                <img src={iconArrowDown} alt="" />
              </div>

              <span>22,41%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
