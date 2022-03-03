import { useState, useEffect, useRef } from "react";
import "../SlideBar/slidebar.css";
import { Link } from "react-router-dom";
import logo from "../img/LogoAltaSmall.png";
import iconDashboard from "../img/icon/icon-dashboard.png";
import iconEquipment from "../img/icon/icon-equipment.png";
import iconService from "../img/icon/icon-service.png";
import iconNumber from "../img/icon/icon-number.png";
import iconReport from "../img/icon/icon-report.png";
import iconSetting from "../img/icon/icon-setting.png";
import iconMore from "../img/icon/icon-more.png";
import iconLogout from "../img/icon/icon-logout.png";

export default function SlideBar() {
  const slidebars = document.querySelectorAll(".slibarDetailItem");
  slidebars.forEach((slidebar: any) => {
    slidebar.onclick = function () {
      let items = document.querySelector<HTMLElement>(
        ".slibarDetailItem.activeSlidebar"
      )!;
      items.classList.remove("activeSlidebar");
      this.classList.add("activeSlidebar");
    };
  });
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="SlideBar">
      <div className="SlidebarIMG">
        <img src={logo} />
      </div>
      <div className="slibarDetail">
        <Link to="/dashboard">
          <div className="slibarDetailItem activeSlidebar">
            <div className="slibarDetailItemimg">
              <img src={iconDashboard} alt="" />
            </div>
            <span className="slibarDetailItemName">Dashboard</span>
          </div>
        </Link>

        <Link to="/equipment">
          <div className="slibarDetailItem">
            <div className="slibarDetailItemimg">
              <img src={iconEquipment} alt="" />
            </div>
            <span className="slibarDetailItemName">Thiết bị</span>
          </div>
        </Link>

        <Link to="/service">
          <div className="slibarDetailItem">
            <div className="slibarDetailItemimg">
              <img src={iconService} alt="" />
            </div>
            <span className="slibarDetailItemName">Dịch vụ</span>
          </div>
        </Link>
        <Link to="/number">
          <div className="slibarDetailItem">
            <div className="slibarDetailItemimg">
              <img src={iconNumber} alt="" />
            </div>
            <span className="slibarDetailItemName">Cấp số</span>
          </div>{" "}
        </Link>

        <Link to="/report">
          <div className="slibarDetailItem">
            <div className="slibarDetailItemimg">
              <img src={iconReport} alt="" />
            </div>
            <span className="slibarDetailItemName">Báo cáo</span>
          </div>{" "}
        </Link>

        <div className="slibarDetailItem  ">
          <div className="slibarDetailItemimg">
            <img src={iconSetting} alt="" />
          </div>
          <span className="slibarDetailItemName">
            Cài đặt hệ thống
            <div className="settingMore " onClick={handleShow}>
              <img src={iconMore} alt="" />
            </div>
          </span>
        </div>

        {show ? (
          <ul className="systemDropdown">
            <Link to="/rolemanagement">
              <li>Quản lý vai trò</li>
            </Link>
            <Link to="/userlist">
              <li>Quản lý tài khoản</li>
            </Link>
            <Link to="/userdiary">
              <li>Nhật ký người dùng</li>
            </Link>
          </ul>
        ) : undefined}
      </div>
      <Link to="/login">
        <div className="slidebarButton">
          <div className="slidebarButtonimg">
            <img src={iconLogout} alt="" />
          </div>
          <span> Đăng xuất</span>
        </div>
      </Link>
    </div>
  );
}
