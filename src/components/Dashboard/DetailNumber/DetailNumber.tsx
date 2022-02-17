import "../DetailNumber/detailnumber.css";
import BellandUser from "../BellAndUser/BellAndUser";
import { Link } from "react-router-dom";
import backSquare from "../img/icon/icon-backsquare.png";

export default function DetailNumber(item: any) {
  const dataReceive = item.value;
  console.log(dataReceive);

  return (
    <div className="DetailNumberLevel">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Thiết bị</span>
          <span className="Servicepointer">{">"} </span>
          <Link to="/number">
            {" "}
            <span className="ServiceTItle">Danh sách cấp số</span>{" "}
          </Link>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Chi tiết</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>
      <div className="ServiceDropdownsSearchTItle">Quản lý cấp số</div>
      <div className="DetailNumberLevel__container">
        <div className="DetailNumberLevel__container__title">
          Thông tin cấp số
        </div>
        <div className="DetailNumberLevel__container__list">
          <div className="DetailNumberLevel__container__items">
            <div className="DetailNumberLevel__container__item">
              <span>Họ tên:</span>
              <span>{dataReceive.guest}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Tên dịch vụ:</span>
              <span>{dataReceive.service}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Số thứ tự:</span>
              <span>{dataReceive.stt}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Thời gian cấp:</span>
              <span>{dataReceive.time1}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Hạn sử dụng:</span>
              <span>{dataReceive.time2}</span>
            </div>
          </div>
          <div className="DetailNumberLevel__container__items">
            <div className="DetailNumberLevel__container__item">
              <span>Nguồn cấp:</span>
              <span>{dataReceive.source}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Trạng thái:</span>
              <span>{dataReceive.state}</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Số điện thoại:</span>
              <span>0948523623</span>
            </div>
            <div className="DetailNumberLevel__container__item">
              <span>Địa chỉ Email:</span>
              <span>nguyendung@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/number">
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={backSquare} alt="" />
          </div>
          <span>Quay lại</span>
        </div>
      </Link>
    </div>
  );
}
