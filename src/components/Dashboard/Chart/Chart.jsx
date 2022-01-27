import '../Chart/chart.css';
import iconGrantedNumber from '../img/icon/icon-grantednumber.png';
import iconUsedNumber from '../img/icon/icon-usednumber.png';
import iconWaitingNumber from '../img/icon/icon-waitingnumber.png';
import iconMissedNumber from '../img/icon/icon-missednumber.png';
import iconArrowUp from '../img/icon/icon-arrowup.png';
import iconArrowDown from '../img/icon/icon-arrowdown.png';


function Chart(){
    return(
        <div className="dashboadlist">
        <div className="dashboadmiddle">
            <div className="dashboadtitle">
                Dashboard
            </div>
            <div className="levelchart">
                Biểu đồ cấp số
            </div>     
            <div className="chart">
                <div className="dashboaditem">
                    <div className="itemtop">
                        <img src={iconGrantedNumber} alt="dashboadblue" className="dashboadblue"></img>
                        <p className="itemtitle" >Số thứ tự đã cấp</p>
                    </div>
                    <div className="itembottom">
                        <h2 className="itemnumber">4.221</h2>
                        <div className="itemnprecentup">
                            <div className="goup">
                            <img src={iconArrowUp} alt="goup" ></img>
                            </div>
                            <div className="precent"pan>32.41%</div>
                        </div>
                    </div>
                </div>

                <div className="dashboaditem">
                    <div className="itemtop">
                        <img src={iconUsedNumber} alt="dashboadgreen" className="dashboadgreen"></img>
                        <p className="itemtitle">Số thứ tự đã sử dụng</p>
                    </div>
                    <div className="itembottom">
                        <h2 className="itemnumber">3.721</h2>
                        <div className="itemnprecentdown">
                            <div className="goup">
                            <img src={iconArrowDown} alt="godown" ></img>
                            </div>
                            <div className="precent"pan>32.41%</div>
                        </div>
                    </div>
                </div>


                <div className="dashboaditem">
                    <div className="itemtop">
                        <img src={iconWaitingNumber} alt="dashboadorange" className="dashboadorange"></img>
                        <p className="itemtitle" >Số thứ tự đang chờ</p>
                    </div>
                    <div className="itembottom">
                        <h2 className="itemnumber">468</h2>
                        <div className="itemnprecentup">
                            <div className="goup">
                            <img src={iconArrowUp} alt="goup" ></img>
                            </div>
                            <div className="precent"pan>56,41%</div>
                        </div>
                    </div>
                </div>


                <div className="dashboaditem">
                    <div className="itemtop">
                        <img src={iconMissedNumber} alt="dashboadred" className="dashboadred"></img>
                        <p className="itemtitle" >Số thứ tự đã bỏ qua</p>
                    </div>
                    <div className="itembottom">
                        <h2 className="itemnumber">32</h2>
                        <div className="itemnprecentdown">
                            <div className="goup">
                            <img src={iconArrowDown} ></img>
                            </div>
                            <div className="precent"pan>22,41%</div>
                        </div>
                    </div>
                </div>

            </div>     
            
        
        </div>
                   
        </div>
    )
}

export default Chart;