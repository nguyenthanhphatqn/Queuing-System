import { useState } from "react";
import "../AddService/addservice.css";
import BellandUser from "../BellAndUser/BellAndUser";
import { Link } from "react-router-dom";

export default function AddService() {
  const [codeService, setCodeService] = useState("201");
  const [nameService, setNameService] = useState("Khám tim mạch");
  const [desService, setDesService] = useState("");

  return (
    <div className="AddService">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Dịch vụ</span>
          <span className="Servicepointer">{">"} </span>
          <Link to="/service">
            <span className="ServiceTItle">Danh sách dịch vụ</span>
          </Link>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Thêm dịch vụ</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>

      <div className="AddService_Title">Quản lý dịch vụ</div>

      <div className="AddService_Container">
        <div className="AddService_Container__Title">Thông tin dịch vụ</div>

        <div className="AddService_Container__Inputs">
          <div className="AddService_Container__Inputs__1">
            <div className="AddService_Container__Inputs__ServiceCode">
              <div className="AddService_Container__Inputs__ServiceCode__Title">
                Mã dịch vụ: <span>*</span>
              </div>
              <div className="AddService_Container__Inputs__ServiceCode__Input">
                <input
                  type="text"
                  value={codeService}
                  onChange={(e) => setCodeService(e.target.value)}
                />
              </div>
            </div>
            <div className="AddService_Container__Inputs__ServiceCode">
              <div className="AddService_Container__Inputs__ServiceCode__Title">
                Tên dịch vụ: <span>*</span>
              </div>
              <div className="AddService_Container__Inputs__ServiceCode__Input">
                <input
                  type="text"
                  value={nameService}
                  onChange={(e) => setNameService(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="AddService_Container__Inputs__2">
            <div className="AddService_Container__Inputs__ServiceCode__Title">
              Mô tả: <span>*</span>
            </div>
            <div className="AddService_Container__Inputs__ServiceCode__Input">
              <textarea
                rows={4}
                cols={50}
                placeholder="Mô tả dịch vụ"
                value={desService}
                onChange={(e) => setDesService(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="AddService_Container__Rules">
          <div className="AddService_Container__Rules_Title">
            Quy tắc cấp số
          </div>

          <div className="AddService_Container__Rules__Checkboxs-Inputs">
            <div className="AddService_Container__Rules__Checkboxs__Items">
              <div className="AddService_Container__Rules__Checkboxs__Item">
                <input type="checkbox" />
                <span>Tăng tự động từ:</span>
              </div>
              <div className="AddService_Container__Rules__Checkboxs__Item">
                <input type="checkbox" />
                <span>Prefix:</span>
              </div>
              <div className="AddService_Container__Rules__Checkboxs__Item">
                <input type="checkbox" />
                <span>Surfix:</span>
              </div>
              <div className="AddService_Container__Rules__Checkboxs__Item">
                <input type="checkbox" />
                <span>Reset mỗi ngày</span>
              </div>
            </div>

            <div className="AddService_Container__Rules__Inputs_Items">
              <div className="AddService_Container__Rules__Inputs_Item">
                <input type="text" value="0001" onChange={(e) => "value"} />
                <span>đến</span>
                <input type="text" value="9999" onChange={(e) => "value"} />
              </div>
              <div className="AddService_Container__Rules__Inputs_Item">
                <input type="text" value="0001" onChange={(e) => "value"} />
              </div>
              <div className="AddService_Container__Rules__Inputs_Item">
                <input type="text" value="0001" onChange={(e) => "value"} />
              </div>
            </div>
          </div>
        </div>

        <div className="AddService_Container__More">
          <div className="AddService_Container__Inputs__ServiceCode__Title">
            <span>*</span>{" "}
            <span className="AddService_Container__More_require">
              Là trường thông tin bắt buộc
            </span>
          </div>
        </div>
      </div>

      <div className="AddService_Button">
        <div className="AddService_Button__cancel">
          <Link to="/service">
            <button>Hủy bỏ</button>
          </Link>
        </div>
        <div className="AddService_Button__addService">
          <Link to="/service">
            <button>Thêm dịch vụ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
