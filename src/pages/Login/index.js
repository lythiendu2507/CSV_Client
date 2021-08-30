import {useState,useContext} from 'react'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LOGIN_USER, LoginData, LoginVars } from '../../graphql/user/login';
import { useAuth } from '../../context/auth';
import {useAppContext} from '../../context/user'

  
export default function login() {
    const context = useAppContext()
    console.log(context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = useAuth()

    function onSubmit(e){
        e.preventDefault()
        signIn({email, password})
    }
    return (
        <div>

            <MainLayout />

            <div className="form-login ">
                <div className="item footer__header mb-3">
                    <span >Đăng nhập</span>
                </div>
                <div className="fa-border">
                <form noValidate autoComplete="off" onSubmit={onSubmit}>
                    <div className="item text">
                        <TextField type="email" onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                    <div className="item">
                        <TextField id="outlined-basic" type="password"  onChange={(e)=> setPassword(e.target.value)} label="Mật khẩu" variant="outlined" />
                    </div>

                    <div className="item my-5">

                    <Button type="submit" className="item" variant="contained" color="primary">Đăng Nhập</Button>
                    </div>
                </form>
                
                </div>
                <div>
                    <a className=" forgot-pass" href="/Forgot-pass">
                        <span>Quên mật khẩu </span>
                    </a>
                </div>
                <div className="item">
                    <span> <a className="regist" href="/Register"> Đăng ký </a> nếu bạn chưa có tài khoản</span>
                </div>

            </div>
            <Footer />

        </div>
    )
}
