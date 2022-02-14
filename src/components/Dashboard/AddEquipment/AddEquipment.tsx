import React,{useState} from 'react';
import '../AddEquipment/addequipment.css'
import BellandUser from '../BellAndUser/BellAndUser'
import Dropdown from 'react-dropdown';
import {Link} from 'react-router-dom'



export default function AddEquipment() {

    const [codeEquipment , setCodeEquipment] = useState<string>()
    const [nameEquipment , setNameEquipment] = useState<string>()
    

    const [ipEquipment , setIpEquipment] = useState<string>()

    
    const [userEquipment , setUserEquipment] = useState<string>()
    const [passwordEquipment , setPassWordEquipment] = useState<string>()
    const [serviceEquipment , setServiceEquipment] = useState<string>()



    const options = [
        'Kios', 'Displaycounter'
      ];

      const handleDropdownValue = (e:any)=>{
            
        console.log(e.value);
         
   }
   





  return(
  
            <div className="AddEquipment">

                    <div className="ServiceInfor">

                    <div className="ServiceInforTitle">
                        <span className="ServiceTItle">Thiết bị</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <Link to="/equipment"><span className="ServiceTItle">Danh sách thiết bị</span> </Link>  
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ListService">Thêm thiết bị</span>   
                    </div>

                    <div className="ServiceInforUser">
                        <BellandUser/>
                    </div>


                    </div>

                    <div className="AddService_Title">
                            Quản lý thiết bị
                    </div>

                    <div className="AddEquipment__container">


                        <div className="AddService_Container">
                    <div className="AddService_Container__Title">
                        Thông tin thiết bị
                    </div>

                    <div className="AddService_Container__Inputs">
                        <div className="AddService_Container__Inputs__1">


                            <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                Mã thiết bị: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                <input type="text" value={codeEquipment} onChange={ e=> setCodeEquipment(e.target.value)} 
                                                    placeholder="Nhập mã thiết bị"
                                                />
                                            </div>
                            </div>
                            <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                Tên thiết bị: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                <input type="text" value={nameEquipment} onChange={ e=> setNameEquipment(e.target.value)}  
                                                     placeholder="Nhập tên thiết bị"
                                                />
                                            </div>
                            </div>
                            <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                Địa chỉ IP: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                <input type="text" value={ipEquipment} onChange={ e=> setIpEquipment(e.target.value)}  
                                                
                                                 placeholder="Nhập dịa chỉ IP"
                                                />
                                            </div>
                            </div>


                        </div>

                        <div className="AddService_Container__Inputs__1">


                            <div className="AddService_Container__Inputs__ServiceCode AddService_Container__Inputs__ServiceCode__Equipment_dropdown">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Loại thiết bị: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <Dropdown options={options} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                             placeholder="Chọn loại thiết bị" />
                                            </div>
                            </div>
                            <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Tên đăng nhập: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                <input type="text" value={userEquipment} onChange={ e=> setUserEquipment(e.target.value)}  
                                                    placeholder="Nhập tài khoản"
                                                />
                                            </div>
                            </div>
                            <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Mật khẩu: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                <input type="text" value={passwordEquipment} onChange={ e=> setPassWordEquipment(e.target.value)}  
                                                    placeholder="Nhập mật khẩu"
                                                
                                                />
                                            </div>
                            </div>


                        </div>
                                
                    </div>
                    

                    <div className="AddService_Container__Rules">

                             <div className="AddService_Container__Inputs__ServiceCode">
                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Dịch vụ sử dụng: <span>*</span>
                                            </div>
                                            <div className="AddService_Container__Inputs__ServiceCode__Input1">
                                                <input type="text" value={serviceEquipment} onChange={ e=> setServiceEquipment(e.target.value)} 
                                                        placeholder="Nhập dịch vụ sử dụng"
                                                />
                                            </div>
                            </div>

                    </div>


                    <div className="AddService_Container__More">
                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                        <span>*</span> <span className="AddService_Container__More_require">Là trường thông tin bắt buộc</span> 
                        </div>
                    </div>

                        </div>



                    </div>


                    <div className="AddService_Button">
                <div className="AddService_Button__cancel">
                   <Link to="/equipment"><button>Hủy bỏ</button></Link>
                </div>
                <div className="AddService_Button__addService">
                    <Link to="/equipment"><button>Thêm thiết bị</button></Link>
                </div>
                    </div>








            </div>
)}