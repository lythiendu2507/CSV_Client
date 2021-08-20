import {useState} from 'react'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function Regist() {

    const [username, setUsername] = useState('')
    const [password, serPassword] = useState('')
    
    return (
        <div>

            <MainLayout />

            <div className="form-regist ">
                <div className="item footer__header mb-3">
                    <span >Đăng ký</span>
                </div>
                <div className="fa-border">
                <form noValidate autoComplete="off">
                <div className="item text">
                        <TextField id="outlined-basic" label="Họ Tên" variant="outlined" />
                    </div>
                    <div className="item text">
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                    <div className="item">
                        <TextField id="outlined-basic"  label="Mật khẩu" variant="outlined" />
                    </div>
                    <div className="item text">
                        <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" />
                    </div>
                    <div className="item">
                        <TextField id="outlined-basic"  label="Địa chỉ" variant="outlined" />
                    </div>


                </form>
                <div className="item my-5">

                    <Button className="item" variant="contained" color="primary">Đăng Ký</Button>
                </div>
                </div>
                
                <div className="item">
                    <span> <a className="regist"> Đăng nhập </a> nếu bạn đã có tài khoản</span>
                </div>

            </div>
            <Footer />

        </div>
    )
}
