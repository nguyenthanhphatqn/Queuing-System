import "./rolemanagement.css";
import BellandUser from "../BellAndUser/BellAndUser";
import searchlogo from "../img/icon/icon-search.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import addSquare from "../img/icon/icon-addsquare.png";

export default function RoleManagement(props: any) {
  const dataRoleTableDetail = [
    {
      nameRole: "Kế toán",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
      nameRole: "Bác sĩ",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },

    {
      nameRole: "Lễ tân",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },

    {
      nameRole: "Quản lý",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },

    {
      nameRole: "Admin",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },

    {
      nameRole: "Superadmin",
      users: 6,
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
  ];
  const [search, setSeatch] = useState("");

  const handleSend = (data: any) => {
    props.parentCallback(data);
  };

  return (
    <div className="RoleManagement">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Cài đặt hệ thống</span>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Quản lý vai trò</span>
        </div>
        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>
      <div className="RoleManagement__Talbe">
        <div className="ServiceDropdownsSearchTItle">Danh sách vai trò</div>
        <div className="ServiceDropdownsSearchFirst  ">
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

        <div className="RoleManagement__Talbe__data">
          <div className="DetailService__container__table__detail">
            <div className="DetailService__container__table__detail__title">
              <div className="DetailService__container__table__detail__title__item">
                <span>Tên vai trò</span>
              </div>
              <div className="DetailService__container__table__detail__title__item">
                <span>Số người dùng</span>
              </div>
              <div className="DetailService__container__table__detail__title__item">
                <span>Mô tả</span>
              </div>
              <div className="DetailService__container__table__detail__title__item">
                <span>Số thứ tự</span>
              </div>
            </div>

            {dataRoleTableDetail.map((item, index) => (
              <div
                className="DetailService__container__table__detail__infor"
                key={index}
              >
                <div className="DetailService__container__table__detail__title__item">
                  <span>{item.nameRole}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                  <span>{item.users}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                  <span>{item.des}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                  <Link to="/rolemanagement/updaterole">
                    <span onClick={() => handleSend(item)}>Cập nhập</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/rolemanagement/addrole">
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={addSquare} alt="" />
          </div>
          <span>Thêm vai trò</span>
        </div>
      </Link>
    </div>
  );
}
