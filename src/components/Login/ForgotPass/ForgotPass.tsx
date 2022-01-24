
import '../ForgotPass/forgotpass.css';
import logo from '../img/LogoAlta.png';
import frame from '../img/Frame.png';
import { Link } from 'react-router-dom';

export const ForgotPass = () => {
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
    }
    return (
        <div className="forgot-pass">
            <div className='container-left'>
                <div><img src={logo} alt='Logo' className='logo'></img></div>
                <form className='email-form'>
                    <div className='container-text'>
                        <div className='text'>
                            <div className='title'><p>Đặt lại mật khẩu</p></div><br />
                            <div><p className='sentence'>Vui lòng nhập lại mật email đặt lại mật khẩu của bạn*</p></div>
                            <input className='email' type="text"/>
                        </div>
                        <div>
                            <Link className="text-link6" to="/login">
                                <button className='cancel' onChange={handleSubmit}><p>Hủy</p></button>
                            </Link>
                            <Link className="text-link7" to="/reset">
                                <button className='continue'onChange={handleSubmit}><p>Tiếp tục</p></button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={frame} alt='background'></img>
            </div>                
        </div>
    );
 }


