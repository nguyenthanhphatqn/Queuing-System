import { useState } from "react";
import "../MenuBar/menubar.css";
import iconBell from "../img/icon/icon-bell.png";
import iconUser from "../img/icon/icon-user.png";
import iconCircle90 from "../img/icon/icon-circle90.png";
import iconCircle76 from "../img/icon/icon-circle76.png";
import iconCircle86 from "../img/icon/icon-circle86.png";
import iconEquipmentOrange from "../img/icon/icon-equipmentorange.png";
import iconServiceBlue from "../img/icon/icon-serviceblue.png";
import iconNumberGreen from "../img/icon/icon-numbergreen.png";
import { Link } from "react-router-dom";
import DatePicker from "sassy-datepicker";

export default function Menubar() {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  window.process = {
    env: {
      NODE_ENV: "development",
    },
  };

  return (
    <div className="Menubar1">
      <div className="MenubarUser">
        <div className="MenubarBell">
          <img src={iconBell} alt="" />
        </div>
        <div className="MenuBarUserImage">
          <img src={iconUser} alt="" />
        </div>
        <div className="MenuBarUserInformation">
          <Link to="/user" className="text-linkm">
            <div className="MenuBarUserDetail">
              <span className="menuBarHello">Xin Chào</span>
              <br></br>
              <span className="menuBarUsername">Lê Quỳnh Ái Vân</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="menuBarOverView">
        <span className="menuBarOverViewTitle">Tổng quan</span>
        <div className="menuBarOverViewList">
          <div className="menuBarOverViewItem">
            <div className="menuBarOverViewItemCircle">
              <img src={iconCircle90} alt="" />
            </div>

            <div className="menuBarOverViewItemFirst">
              <span className="menuBarOverViewItemFirstNumber">4.221</span>
              <div className="menuBarOverViewItemIcon">
                <div className="menuBarOverViewItemFirstIcon">
                  <img src={iconEquipmentOrange} alt="" />
                </div>
                <span className="menubarItemtextMonitor">Thiết bị</span>
              </div>
            </div>

            <div className="menuBarOverViewItemSecond">
              <div className="menuBarpointandnumber">
                <span className="pointorange"> .</span>
                <span className="menubarpointnumbertotextmonitor">
                  Đang hoạt động
                </span>
                <span className="menuBarPointtoNumber">3.799</span>
              </div>

              <div className="menuBarpointandnumber">
                <span className="pointgray"> .</span>
                <span className="menubarpointnumbertotextmonitor">
                  Ngưng hoạt động
                </span>
                <span className="menuBarPointtoNumber">422</span>
              </div>
            </div>
          </div>

          <div className="menuBarOverViewItem">
            <div className="menuBarOverViewItemCircle">
              <img src={iconCircle76} alt="" />
            </div>

            <div className="menuBarOverViewItemFirst">
              <span className="menuBarOverViewItemFirstNumber">276</span>
              <div className="menuBarOverViewItemIcon">
                <div className="menuBarOverViewItemFirstIcon">
                  <img src={iconServiceBlue} alt="" />
                </div>
                <span
                  className="menubarItemtextMonitor"
                  style={{ color: "blue" }}
                >
                  Dịch vụ
                </span>
              </div>
            </div>

            <div className="menuBarOverViewItemSecond">
              <div className="menuBarpointandnumber">
                <span
                  className="pointorange"
                  style={{ backgroundColor: "blue" }}
                >
                  {" "}
                  .
                </span>
                <span className="menubarpointnumbertotextmonitor">
                  Đang hoạt động
                </span>
                <span
                  style={{ color: "blue" }}
                  className="menuBarPointtoNumber"
                >
                  210
                </span>
              </div>

              <div className="menuBarpointandnumber">
                <span className="pointgray"> .</span>
                <span className="menubarpointnumbertotextmonitor">
                  Ngưng hoạt động
                </span>
                <span
                  style={{ color: "blue" }}
                  className="menuBarPointtoNumber"
                >
                  66
                </span>
              </div>
            </div>
          </div>

          <div className="menuBarOverViewItem">
            <div className="menuBarOverViewItemCircle">
              <img src={iconCircle86} alt="" />
            </div>

            <div className="menuBarOverViewItemFirst">
              <span className="menuBarOverViewItemFirstNumber">4.221</span>
              <div className="menuBarOverViewItemIcon">
                <div className="menuBarOverViewItemFirstIcon">
                  <img src={iconNumberGreen} alt="" />
                </div>
                <span
                  className="menubarItemtextMonitor"
                  style={{ color: "#35C75A" }}
                >
                  Cấp số
                </span>
              </div>
            </div>

            <div className="menuBarOverViewItemSecond">
              <div className="menuBarpointandnumber">
                <span
                  className="pointorange"
                  style={{ backgroundColor: "#35C75A" }}
                >
                  {" "}
                  .
                </span>
                <span className="menubarpointnumbertotextmonitor">
                  Đã sử dụng
                </span>
                <span
                  style={{ color: "#35C75A" }}
                  className="menuBarPointtoNumber"
                >
                  3.721
                </span>
              </div>

              <div className="menuBarpointandnumber">
                <span className="pointgray"> .</span>
                <span className="menubarpointnumbertotextmonitor menubarFix">
                  Đang chờ
                </span>
                <span
                  style={{ color: "#35C75A" }}
                  className="menuBarPointtoNumber"
                >
                  486
                </span>
              </div>

              <div className="menuBarpointandnumber">
                <span
                  style={{ backgroundColor: "#F178B6" }}
                  className="pointgray"
                >
                  {" "}
                  .
                </span>
                <span className="menubarpointnumbertotextmonitor menubarFix2">
                  Bỏ qua
                </span>
                <span
                  style={{ color: "#35C75A" }}
                  className="menuBarPointtoNumber"
                >
                  32
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DatePicker className="Datapicker" onChange={onChange} selected={date} />
    </div>
  );
}
