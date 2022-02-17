import "../LoginForm/loginform.css";
import logo from "../img/LogoAlta.png";
import background from "../img/Background.png";
import eyeflash from "../img/icon/icon-eyeflash.png";
import { Link } from "react-router-dom";

//
export const LoginForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="container-left">
        <div>
          <img src={logo} alt="Logo" className="logo"></img>
        </div>
        <form className="login-form">
          <div>
            <label>Tên đăng nhập*</label>
            <br />
            <input className="email" type="email" />
            <br />
          </div>
          <div>
            <label>Mật khẩu*</label>
            <br />
            <input className="password" type="password"></input>
          </div>
          <div>
            <img src={eyeflash} alt="Vector" className="eye-flash"></img>
          </div>
          <div>
            <Link className="text-link" to="/dashboard">
              <button className="btn-login" onChange={handleSubmit}>
                Đăng nhập
              </button>
            </Link>
          </div>
          <div>
            <Link className="text-link1" to="/forgot">
              <span className=" forgot-password">Quên mật khẩu</span>
            </Link>
          </div>
        </form>
      </div>
      <div className="container-right">
        <img src={background} alt="background" className="background"></img>
        <div className="container-Text">
          <p className="text-1">Hệ thống</p>
          <br />
          <div className="text-2">QUẢN LÝ XẾP HÀNG</div>
        </div>
      </div>
    </div>
  );
};
