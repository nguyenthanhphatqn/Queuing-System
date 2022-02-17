import React, { Component } from "react";
import "../ResetPass/resetpass.css";
import logo from "../img/LogoAlta.png";
import frame from "../img/Frame.png";
import eyeflash from "../img/icon/icon-eyeflash.png";
import { Link } from "react-router-dom";

export const ResetPass = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="reset-pass">
      <div className="container-left">
        <div>
          <img src={logo} alt="Logo" className="logo"></img>
        </div>
        <form className="reset-form">
          <div className="title">
            <p>Đặt lại mật khẩu mới</p>
          </div>
          <div>
            <label>Mật khẩu</label>
            <br />
            <input className="password" type="password"></input>
          </div>
          <div>
            <img src={eyeflash} alt="" className="eye-flash-1"></img>
          </div>
          <div>
            <label>Nhập lại mật khẩu</label>
            <br />
            <input className="password-retype" type="password"></input>
          </div>
          <div>
            <img src={eyeflash} alt="" className="eye-flash-2"></img>
          </div>
          <div>
            <Link className="text-link8" to="/login">
              <button className="confirm" onChange={handleSubmit}>
                Xác nhận
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="container-right">
        <img src={frame} alt="background"></img>
      </div>
    </div>
  );
};
