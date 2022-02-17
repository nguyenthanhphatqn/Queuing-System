import "../Report/report.css";
import BellandUser from "../BellAndUser/BellAndUser";
import Dropdown from "react-dropdown";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Vector from "../img/icon/icon-arrowright.png";
import ChoosePage from "../ChoosePage/ChoosePage";
import SaveSquare from "../img/icon/icon-download.png";

export default function Report() {
  const ServiceActivePoint = ({ value }) => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span>{value}</span>
      </>
    );
  };

  const ServiceWaitPoint = ({ value }) => {
    return (
      <>
        <span className="WaitPoint"></span>
        <span>{value}</span>
      </>
    );
  };

  const ServiceUsedPoint = ({ value }) => {
    return (
      <>
        <span className="UsedPoint"></span>
        <span>{value}</span>
      </>
    );
  };

  const ServiceUnactivePoint = ({ value }) => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>{value}</span>
      </>
    );
  };
  const dataReport = [
    {
      stt: "2010001",

      service: "Khám tim mạch",
      time1: "14:35 - 07/11/2021",

      state: <ServiceWaitPoint value={"Đang chờ"} />,
      source: "Kiosk",
    },
    {
      stt: "2010002",

      service: "Răng hàm mặt",
      time1: "14:35 - 07/11/2021",

      state: <ServiceUsedPoint value={"Đã sử dụng"} />,
      source: "Hệ thống",
    },
    {
      stt: "2010003",

      service: "Khám sản - phụ khoa",
      time1: "14:35 - 07/11/2021",

      state: <ServiceUnactivePoint value={"Bỏ qua"} />,
      source: "Kiosk",
    },
    {
      stt: "2010004",

      service: "Răng hàm mặt",
      time1: "14:35 - 07/11/2021",

      state: <ServiceWaitPoint value={"Đang chờ"} />,
      source: "Hệ thống",
    },
    {
      stt: "2010005",

      service: "Tai mũi họng",
      time1: "14:35 - 07/11/2021",

      state: <ServiceWaitPoint value={"Đang chờ"} />,
      source: "Kiosk",
    },
    {
      stt: "2010006",

      service: "Khám tổng quát",
      time1: "14:35 - 07/11/2021",

      state: <ServiceUnactivePoint value={"Bỏ qua"} />,
      source: "Hệ thống",
    },
    {
      stt: "2010007",

      service: "Khám hô hấp",
      time1: "14:35 - 07/11/2021",

      state: <ServiceWaitPoint value={"Đang chờ"} />,
      source: "Kiosk",
    },
    {
      stt: "2010008",

      service: "Khám hô hấp",
      time1: "14:35 - 07/11/2021",

      state: <ServiceUsedPoint value={"Đã sử dụng"} />,
      source: "Hệ thống",
    },

    {
      stt: "2010009",

      service: "Tai mũi họng",
      time1: "14:35 - 07/11/2021",

      state: <ServiceUnactivePoint value={"Bỏ qua"} />,
      source: "Hệ thống",
    },
    {
      stt: "20100010",

      service: "Tai mũi họng",
      time1: "14:35 - 07/11/2021",

      state: <ServiceWaitPoint value={"Đang chờ"} />,
      source: "Hệ thống",
    },
  ];

  const options = ["Tất cả", "2040001", "2060001", "2050002"];

  const handleDropdownValue = (e) => {};
  const defaultOption = options[0];
  const optionsServiceName = [
    "Tất cả",
    "Khám tim mạch",
    "Khám mắt",
    "Khám tổng quát",
  ];
  const optionsTime1 = [
    "Tất cả",
    "07:10  01/10/2021",
    "07:15  01/10/2021",
    "07:28  01/10/2021",
  ];

  const optionsState = ["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"];

  const optionsProduct = ["Tất cả", "Kiosk", "Hệ thống"];

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="Report">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Báo cáo</span>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Lập báo cáo</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>
      <div className="ServiceDropdownsSearchFirstName chooseTime1">
        Chọn thời gian
      </div>
      <div className="Report__DatePicker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <div className="Report__DatePicker__icon">
          <img src={Vector} alt="" />{" "}
        </div>

        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      <div className="Report__container">
        <div className="ServiceTableDetail">
          <div className="ServiceTableDetailTitles">
            <div className="ServiceTableDetailTitles_Item">
              <div className="Report__container__dropdown">
                <Dropdown
                  options={options}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />

                <span>Số thứ tự</span>
              </div>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <div className="Report__container__dropdown Report__container__dropdown--service">
                <Dropdown
                  options={optionsServiceName}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />

                <span>Tên dịch vụ</span>
              </div>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <div className="Report__container__dropdown">
                <Dropdown
                  options={optionsTime1}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />

                <span>Thời gian cấp</span>
              </div>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <div className="Report__container__dropdown">
                <Dropdown
                  options={optionsState}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />

                <span>Tình trạng</span>
              </div>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <div className="Report__container__dropdown">
                <Dropdown
                  options={optionsProduct}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />

                <span>Nguồn cấp</span>
              </div>
            </div>
          </div>

          {dataReport.map((item, index) => (
            <div className="ServiceTableDetailItem" key={index}>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.stt}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.service}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.time1}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.state}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>{item.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ServiceChosePage">
        <ChoosePage />
      </div>

      <div className="ServiceAdd">
        <div className="ServiceAddIMG">
          <img src={SaveSquare} alt="" />
        </div>
        <span>Tải về</span>
      </div>
    </div>
  );
}
