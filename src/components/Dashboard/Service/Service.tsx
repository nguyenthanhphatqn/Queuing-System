import "../Service/service.css";
import BellandUser from "../BellAndUser/BellAndUser";
import searchlogo from "../img/icon/icon-search.png";
import { Link } from "react-router-dom";
import Dropdown, { Option } from "react-dropdown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from "../img/icon/icon-arrowright.png";
import addSquare from "../img/icon/icon-addsquare.png";
import ChoosePage from "../ChoosePage/ChoosePage";

import "react-datepicker/dist/react-datepicker.css";

export default function Service() {
  const ServiceActivePoint = () => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span>Hoạt động</span>
      </>
    );
  };
  const ServiceUnactivePoint = () => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>Ngưng hoạt động</span>
      </>
    );
  };
  const data = [
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Mô tả dịch vụ 1",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceUnactivePoint />,
      stateFilter: "Ngưng hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: " Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceUnactivePoint />,
      stateFilter: "Ngưng hoạt động",
    },
    {
      codeService: "KIO_01",
      nameService: "Kiosk",
      desService: "Hoạt động",
      stateService: <ServiceActivePoint />,
      stateFilter: "Hoạt động",
    },
  ];
  const [dataServiceTable, setDataServiceTable] = useState(data);
  const options = ["Tất cả", "Hoạt động", "Ngưng hoạt động"];
  const defaultOption = options[0];
  const handleDropdownValue = (e: any) => {
    if (e.value == "Hoạt động") {
      const filterdata = data.filter((item) => item.stateFilter == "Hoạt động");
      setDataServiceTable(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (item) => item.stateFilter == "Ngưng hoạt động"
      );
      setDataServiceTable(filterdata);
    } else {
      setDataServiceTable(data);
    }
  };
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [search, setSeatch] = useState("");
  return (
    <div className="Service">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Dịch vụ</span>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Danh sách dịch vụ</span>
        </div>
        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>
      <div className="ServiceCOntainer">
        <div className="ServiceDropdownsSearchTItle">Quản lý dịch vụ</div>
        <div className="ServiceDropdownsSearch">
          <div className="ServiceDropdownsItem1">
            <div className="ServiceDropdownsSearchFirst">
              <div className="ServiceDropdownsSearchFirstName">
                Trạng thái hoạt động
              </div>
              <div className="ServiceDropdowns_1">
                <Dropdown
                  options={options}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
            <div className="ServiceDropdownsSearchFirst">
              <div className="ServiceDropdownsSearchFirstName chooseTime">
                Chọn thời gian
              </div>
              <div className="ServiceDropdowns_1">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />

                <img src={Vector} alt="" />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="ServiceDropdownsSearchFirst  ServiceDropdownsSearchFirst_input">
            <div className="ServiceDropdownsSearchFirstName choseKey">
              Từ khóa
            </div>
            <div className="ServiceDropdowns_input">
              <input
                placeholder="Nhập từ khóa"
                value={search}
                onChange={(e) => setSeatch(e.target.value)}
              />
              <div className="seacrchlogo">
                <img src={searchlogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="ServiceTableDetail">
          <div className="ServiceTableDetailTitles">
            <div className="ServiceTableDetailTitles_Item">
              <span> Mã dịch vụ </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Tên dịch vụ </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Mô tả </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Trạng thái hoạt động </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> </span>
            </div>
          </div>
          {dataServiceTable.map((item, index) => (
            <div className="ServiceTableDetailItem" key={index}>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.codeService}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.nameService} </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.desService} </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.stateService}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>
                  {" "}
                  <Link to="/service/detailservice">Chi tiết</Link>{" "}
                </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>
                  {" "}
                  <Link to="/service/detailservice/updateservice">
                    Cập nhật
                  </Link>{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/service/addservice">
        {" "}
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={addSquare} alt="" />
          </div>
          <span>Thêm dịch vụ</span>
        </div>
      </Link>

      <div className="ServiceChosePage">
        <ChoosePage />
      </div>
    </div>
  );
}
