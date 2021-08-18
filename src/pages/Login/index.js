import React from 'react'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function login() {
    return (
        <div>

            <MainLayout />

            <div className="form-login ">
                <div className="item footer__header mb-3">
                    <span >Đăng nhập</span>
                </div>
                <div className="fa-border">
                <form noValidate autoComplete="off">
                    <div className="item text">
                        <TextField id="outlined-basic" label="Email hoặc số điện thoại" variant="outlined" />
                    </div>
                    <div className="item">
                        <TextField id="outlined-basic" type="password" label="Mật khẩu" variant="outlined" />
                    </div>


                </form>
                <div className="item my-5">

                    <Button className="item" variant="contained" color="primary">Đăng Nhập</Button>
                </div>
                </div>
                <div>
                    <a className=" forgot-pass" href="/Forgot-pass">
                        <span>Quên mật khẩu </span>
                    </a>
                </div>
                <div className="item">
                    <span> <a className="regist"> Đăng ký </a> nếu bạn chưa có tài khoản</span>
                </div>

            </div>
            <Footer />

        </div>
    )
}
