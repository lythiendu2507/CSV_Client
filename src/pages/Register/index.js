import { useState } from 'react'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SIGN_USER } from '../../graphql/user/sign'
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router'


export default function Regist() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const router = useRouter()
    function onSubmit(e) {
        e.preventDefault()
        sign({
            variables: {
                email: email,
                name: name,
                password: password,
                phone: phone
            }
        })
        router.push('/Login')
    }

    const [sign]= useMutation(SIGN_USER)

    return (
        <div>

            <MainLayout />
            <title>WebSinhVien - Đăng ký</title>
            <div className="form-regist ">
                <div className="item footer__header mb-3">
                    <span >Đăng ký</span>
                </div>
                <div className="fa-border">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
                        <div className="item text">
                            <TextField id="outlined-basic" onChange={(e) => setName(e.target.value)} label="Họ Tên" variant="outlined" />
                        </div>
                        <div className="item text">
                            <TextField id="outlined-basic" onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                        </div>
                        <div className="item">
                            <TextField id="outlined-basic" onChange={(e) => setPassword(e.target.value)} label="Mật khẩu" variant="outlined" />
                        </div>
                        <div className="item text">
                            <TextField id="outlined-basic" onChange={(e) => setPhone(e.target.value)} label="Số điện thoại" variant="outlined" />
                        </div>
                        <div className="item">
                            <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" />
                        </div>
                        <div className="item my-5">
                            <Button className="item" variant="contained" type="submit" color="primary">Đăng Ký</Button>
                        </div>
                    </form>
                </div>

                <div className="item">
                    <span> <a className="regist" href="/Login"> Đăng nhập </a> nếu bạn đã có tài khoản</span>
                </div>

            </div>
            <Footer />

        </div>
    )
}
