import React from 'react'
import '../DashboardCenter/dashboardcenter.css';
import iconGrantedNumber from '../img/icon/icon-grantednumber.png';
import iconUsedNumber from '../img/icon/icon-usednumber.png';
import iconWaitingNumber from '../img/icon/icon-waitingnumber.png';
import iconMissedNumber from '../img/icon/icon-missednumber.png';
import iconArrowUp from '../img/icon/icon-arrowup.png';
import iconArrowDown from '../img/icon/icon-arrowdown.png';


export default function DashboardCenter() {
    return (
        <div className="DashboardCenter">
                <span className="DashboardCenterTitleTop">
                        Dashboard
                </span>
                <span className="DashboardCenterTitle">
                        Biểu đồ cấp số
                </span>
                <div className="DashboardCenterList">

                        <div className="DashboardCenterItem">
                            <div className="DashboardCenterItemFirst">
                                
                                <div className="DashboardCenterItemFirstIMG">
                                    <img src={iconGrantedNumber} alt="" />
                                </div>

                                <span className="DashboardCenterItemFirstTitle">
                                        Số thứ tự đã cấp
                                </span>

                            </div>

                            <div className="DashboardCenterItemSecond">
                                <span className="DashboardCenterItemSecondNumber">
                                     4.221 
                                </span>
                                <div className="DashboardCenterItemSecondPercent">
                                        <div className="arrowUp">
                                            <img src={iconArrowUp} alt="" />
                                        </div>

                                        <span>32,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="DashboardCenterItem">
                            <div className="DashboardCenterItemFirst">
                                
                                <div className="DashboardCenterItemFirstIMG">
                                    <img src={iconUsedNumber} alt="" />
                                </div>

                                <span className="DashboardCenterItemFirstTitle">
                                Số thứ tự đã sử dụng
                                </span>

                            </div>

                            <div className="DashboardCenterItemSecond">
                                <span className="DashboardCenterItemSecondNumber">
                                3.721
                                </span>
                                <div className="DashboardCenterItemSecondPercent arrowDown">
                                        <div className="arrowUp">
                                            <img src={iconArrowDown} alt="" />
                                        </div>
                                        
                                        <span>32,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="DashboardCenterItem">
                            <div className="DashboardCenterItemFirst">
                                
                                <div className="DashboardCenterItemFirstIMG">
                                    <img src={iconWaitingNumber} alt="" />
                                </div>

                                <span className="DashboardCenterItemFirstTitle">
                                Số thứ tự đang chờ
                                </span>

                            </div>

                            <div className="DashboardCenterItemSecond">
                                <span className="DashboardCenterItemSecondNumber">
                                468
                                </span>
                                <div className="DashboardCenterItemSecondPercent">
                                        <div className="arrowUp">
                                            <img src={iconArrowUp} alt="" />
                                        </div>
                                        
                                        <span>56,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="DashboardCenterItem">
                            <div className="DashboardCenterItemFirst">
                                
                                <div className="DashboardCenterItemFirstIMG">
                                    <img src={iconMissedNumber} alt="" />
                                </div>

                                <span className="DashboardCenterItemFirstTitle">
                                Số thứ tự đã bỏ qua
                                </span>

                            </div>

                            <div className="DashboardCenterItemSecond">
                                <span className="DashboardCenterItemSecondNumber">
                                     32
                                </span>
                                <div className="DashboardCenterItemSecondPercent arrowDown">
                                        <div className="arrowUp">
                                            <img src={iconArrowDown} alt="" />
                                        </div>
                                        
                                        <span>22,41%</span>
                                </div>
                            </div>


                        </div>

                </div>
                
        </div>
    )
}