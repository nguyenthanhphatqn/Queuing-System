import React from 'react'
import '../BellAndUser/bellanduser.css';

import bell from '../img/icon/icon-bell.png'
import avatarsmall from '../img/icon/icon-user.png';





export default function BellandUser() {
    return (
        <div className="BellandUser">
            <div className="BellandUserbell">
                    <img src={bell} alt="" />
            </div>

            <div className="BellandUseruser">
                        <div className="BellandUseruseravatar">
                            <img src={avatarsmall} alt="" />
                        </div>
                        <div className="BellandUseruserhiandinfor">
                                <span className="BellandUseruserhiandinfor_hi">Xin Chào</span>
                                <span className="BellandUseruserhiandinfor_name">Lê Quỳnh Ái Vân</span>
                        </div>
            </div>

        </div>
    )
}