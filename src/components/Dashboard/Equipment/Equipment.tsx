import "../Equipment/equipment.css";
import searchlogo from "../img/icon/icon-search.png";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import React, { useState } from "react";
import addSquare from "../img/icon/icon-addsquare.png";
import BellandUser from "../BellAndUser/BellAndUser";
import ChoosePage from "../ChoosePage/ChoosePage";

export default function Equipment() {
  const ServiceActivePoint = (value: any) => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span> Hoạt động</span>
      </>
    );
  };
  const ServiceUnactivePoint = (value: any) => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>Ngưng hoạt động</span>
      </>
    );
  };
  const ServiceActivePoint1 = (value: any) => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span> Kết nối</span>
      </>
    );
  };
  const ServiceUnactivePoint1 = (value: any) => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>Mất kết nối</span>
      </>
    );
  };
  const data = [
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceUnactivePoint />,
      stateFilter: "Ngưng hoạt động",
      connectFilter: "Mất kết nối",
      connect: <ServiceUnactivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceActivePoint1 />,
      stateFilter: "Hoạt động",
      connectFilter: "Kết nối",
      serviceUse: "Khám tim mạch, Khám mắt...",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceUnactivePoint1 />,
      stateFilter: "Hoạt động",
      connectFilter: "Mất kết nối",
      serviceUse: "Khám tim mạch, Khám mắt...",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceUnactivePoint />,
      connect: <ServiceActivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Ngưng hoạt động",
      connectFilter: "Kết nối",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceUnactivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Hoạt động",
      connectFilter: "Mất kết nối",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceActivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Hoạt động",
      connectFilter: "Kết nối",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceUnactivePoint />,
      connect: <ServiceActivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Ngưng hoạt động",
      connectFilter: "Kết nối",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceActivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Hoạt động",
      connectFilter: "Kết nối",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      state: <ServiceActivePoint />,
      connect: <ServiceUnactivePoint1 />,
      serviceUse: "Khám tim mạch, Khám mắt...",
      stateFilter: "Hoạt động",
      connectFilter: "Mất kết nối",
    },
  ];
  const [dataEquipment, setDataEquipment] = useState(data);

  const options = ["Tất cả", "Hoạt động", "Ngưng hoạt động"];
  const defaultOption = options[0];
  const optionsConnect = ["Tất cả", "Kết nối", "Mất kết nối"];

  const handleDropdownValue = (e: any) => {
    if (e.value == "Hoạt động") {
      const filterdata = data.filter((item) => item.stateFilter == "Hoạt động");
      setDataEquipment(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (item) => item.stateFilter == "Ngưng hoạt động"
      );
      setDataEquipment(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (item) => item.stateFilter == "Ngưng hoạt động"
      );
      setDataEquipment(filterdata);
    } else if (e.value == "Kết nối") {
      const filterdata = data.filter((item) => item.connectFilter == "Kết nối");
      setDataEquipment(filterdata);
    } else if (e.value == "Mất kết nối") {
      const filterdata = data.filter(
        (item) => item.connectFilter == "Mất kết nối"
      );
      setDataEquipment(filterdata);
    } else {
      setDataEquipment(data);
    }
  };
  const [showMore, setShowMore] = useState(false);

  const [search, setSearch] = useState("");
  return (
    <div className="Equipment">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Thiết bị</span>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Danh sách thiết bị</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>
      <div className="Equipment__container">
        <div className="ServiceDropdownsSearchTItle">Danh sách thiết bị</div>
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
              <div className="ServiceDropdownsSearchFirstName">
                Trạng thái kết nối
              </div>
              <div className="ServiceDropdowns_1">
                <Dropdown
                  options={optionsConnect}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
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
                onChange={(e) => setSearch(e.target.value)}
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
              <span> Mã thiết bị </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Tên thiết bị </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Địa chỉ IP</span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Trạng thái hoạt động</span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Trạng thái kết nối </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Dịch vụ sử dụng </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> </span>
            </div>
          </div>
          {dataEquipment.map((item, index) => (
            <div className="ServiceTableDetailItem" key={index}>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.code}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.name}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.ip}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span> {item.state}</span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>{item.connect} </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>
                  {" "}
                  {item.serviceUse}
                  {showMore && (
                    <span>
                      {" "}
                      Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng,
                      Khám hô hấp, Khám tổng quát
                    </span>
                  )}
                  {!showMore && (
                    <>
                      <br />
                      <a href="" onClick={() => setShowMore(!showMore)}>
                        {" "}
                        Xem thêm
                      </a>
                    </>
                  )}
                </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>
                  {" "}
                  <Link to="/equipment/detail">Chi tiết</Link>{" "}
                </span>
              </div>
              <div className="ServiceTableDetailTitles_Item">
                <span>
                  {" "}
                  <Link to="/equipment/detail/updateequipment">
                    Cập nhật
                  </Link>{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/equipment/addequipment">
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={addSquare} alt="" />
          </div>
          <span>Thêm thiết bị</span>
        </div>
      </Link>
      <div className="ServiceChosePage">
        <ChoosePage />
      </div>
    </div>
  );
}
