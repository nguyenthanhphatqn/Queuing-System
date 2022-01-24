import React, {useState} from "react";
import '../Dashboard/dashboard.css';
import { Link  } from 'react-router-dom';
import logo from '../img/LogoAlta.png';
import iconDashboard from '../img/icon/icon-dashboard.png';
import iconEquipment from '../img/icon/icon-equipment.png';
import iconService from '../img/icon/icon-service.png';
import iconNumber from '../img/icon/icon-number.png';
import iconReport from '../img/icon/icon-report.png';
import iconSetting from '../img/icon/icon-setting.png';
import iconMore from '../img/icon/icon-more.png';
import iconLogout from '../img/icon/icon-logout.png';

    export default function Dashboard() {
        const menubars = document.querySelectorAll('.MenuBarDetailItem')
     
    menubars.forEach( menubar => {
      menubar.onclick = function () {
          document.querySelector('.MenuBarDetailItem.activeMenubar').classList.remove('activeMenubar')   
          this.classList.add('activeMenubar')                   
            }
        }
    )          
      const [show ,setShow] = useState(false) 
      const handleShow = () =>{
          setShow(!show)
      
      }
      
    return (
        <div className="MenuBar">
              <div className="MenuBarLogo">
                  <img src={logo} alt = "" width={80} height={80} />
              </div>
              <div className="MenuBarDetail">
                  <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconDashboard} alt= "" />
                      </div>
                      <Link to="/dashboard" className="text-linka">
                      <span className="MenuBarDetailItemName">
                          Dashboard
                      </span>
                      </Link>
                  </div>
                  <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconEquipment} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Thiết bị
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconService} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Dịch vụ
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconNumber} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Cấp số
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconReport} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Báo cáo
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemImage">
                          <img src={iconSetting} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                            Cài đặt hệ thống
                            <div className="settingMore" onClick={handleShow}>
                                <img src={iconMore} alt="" />
                            </div>
                      </span>
                  </div>
                  { show ?(
                    <ul className="systemDropdown">
                      <li>Quản lý vai trò</li>
                      <li>Quản lý tài khoản</li>
                      <li>Nhật ký người dùng</li>         
                    </ul>
                  )
                  : undefined
                  }  
              </div>
                <Link to="/login" className="text-linkn">
              <div className="MenuBarButton">
                      <div className="MenuBarButtonImage">
                          <img src={iconLogout} alt="" />
                      </div>
                      <span className="button-logout"> Đăng xuất</span>
                  </div>
                </Link>
                
        </div>
        
        )
//     }
}
// export default Dashboard;