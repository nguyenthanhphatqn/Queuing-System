import React from 'react'
import '../UserInformation/userinfor.css';
import iconbell from '../img/icon/icon-bell.png'
import iconuser from '../img/icon/icon-user.png'
import users from '../img/User.png'
import iconbellactive from '../img/icon/icon-bellactive.png'

export default function UserInfor() {

    const userData= [
        {
            name: 'Tên người dùng',
            value : 'Lê Quỳnh Ái Vân'
        },
        {
            name: 'Tên đăng nhập',
            value : 'lequynhaivan01'
        }
        ,
        {
            name: 'Số điện thoại ',
            value : '0767375921'
        }
        ,
        {
            name: 'Mật khẩu',
            value : '311940211'
        }
        ,
        {
            name: 'Email:',
            value : 'adminSSO1@domain.com'
        }
        ,
        {
            name: 'Vai trò:',
            value : 'Kế toán'
        }
    ]

    const [show , setShow] = React.useState(false)

    return (
        <div className="UserInfor">  
            <div className="userInforRight">
                <span className="userDetailMess">
                     Thông tin cá nhân
                </span>                  
            <div className="UserInforDetailandAvatar">
                <div className="UserInforbell">
                    <img src={ show ? iconbellactive : iconbell  } alt="" onClick={()=>setShow(!show)}/>
                        { show && (
                        <div className="UserInforbellList">
                            <div className="UserInforbellTitle"><span>Thông báo</span></div>
                                <ul className="UserInforbellUL">
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Nguyễn Thị Thùy Dung</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Nguyễn Thiên Chinh</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Võ Thị Kim Liên</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Hoàng Nguyễn Quốc Huy</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Võ Ngọc Lan Anh</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Nguyễn Thị Trúc Anh</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Nguyễn Thị Trúc Anh</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>
                                    <li>
                                        <div className="UserInforbell1">Người dùng: Nguyễn Thị Trúc Anh</div>
                                        <div className="UserInforbell2">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                    </li>                        
                                </ul>
                            </div>
                            )}               
                            </div>
                            <div className="UserInforDetailAvatarandInfor">
                                <div className="UserInforDetailAvatar">
                                    <img src={iconuser} alt="" />
                                    </div>
                                <div className="UserInforDetailAvatarInfor">
                                    <span className="helloUser">
                                    Xin Chào
                                    </span>
                                    <span className="UserInforName">
                                    Lê Quỳnh Ái Vân
                                    </span>
                                </div>
                            </div>
                        </div>
                  </div>
                <div className="UserMoreDetail">
                    <div className="UserMoreDetailIMGandname">
                        <div className="UserMoreDetailIMG">
                            <img src={users} alt="" />
                        </div>
                        <span className="UserMoreDetailName">
                            Lê Quỳnh Ái Vân 
                        </span>
                    </div>
                <div className="UserInforDetailItemS">     
                    {
                        userData.map( (user,index) => {
                        return (
                            <div key={index} className="UserInforDetailItem">
                                <span className="UserInforDetailItemName">
                                    {user.name}
                                </span>
                                <div className="UserInforDetailItemValue">
                                    <span>{user.value}</span>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>     
    )
}