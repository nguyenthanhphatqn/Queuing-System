import React, { useState } from "react";
import BellandUser from "../BellAndUser/BellAndUser";
import "../DetailEquipment/detailequipment.css";
import Dropdown from "react-dropdown";
import { Link } from "react-router-dom";
import EditSquare from "../img/icon/icon-editsquare.png";

export default function DetailEquipment() {
  return (
    <div className="DetailEquiment">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Thiết bị</span>
          <span className="Servicepointer">{">"} </span>
          <Link to="/equipment">
            <span className="ServiceTItle">Danh sách thiết bị</span>
          </Link>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Chi tiết thiết bị</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>

      <div className="AddService_Title">Quản lý thiết bị</div>

      <div className="DetailEquiment__container">
        <div className="DetailEquiment__container__title">
          Thông tin thiết bị
        </div>
        <div className="DetailEquiment__container__list">
          <div className="DetailEquiment__container__item">
            <div className="DetailEquiment__container__item__spans">
              <span>Mã thiết bị:</span>
              <span>KIO_01</span>
            </div>
            <div className="DetailEquiment__container__item__spans">
              <span>Tên thiết bị:</span>
              <span>Kiosk</span>
            </div>
            <div className="DetailEquiment__container__item__spans">
              <span>Địa chỉ IP:</span>
              <span>128.172.308</span>
            </div>
          </div>
          <div className="DetailEquiment__container__item">
            <div className="DetailEquiment__container__item__spans">
              <span>Loại thiết bị:</span>
              <span>Kiosk</span>
            </div>
            <div className="DetailEquiment__container__item__spans">
              <span>Tên đăng nhập:</span>
              <span>Linhkyo011</span>
            </div>
            <div className="DetailEquiment__container__item__spans">
              <span>Mật khẩu:</span>
              <span>CMS</span>
            </div>
          </div>
        </div>

        <div className="DetailEquiment__container__service_use">
          <span>Dịch vụ sử dụng:</span>
          <span>
            Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi
            họng, Khám hô hấp, Khám tổng quát.
          </span>
        </div>
      </div>

      <Link to="/equipment/detail/updateequipment">
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={EditSquare} alt="" />
          </div>
          <span>Cập nhật thiết bị</span>
        </div>
      </Link>
    </div>
  );
}
