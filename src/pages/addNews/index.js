import { useState } from 'react'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Form from 'react-bootstrap/Form'
import { makeStyles } from '@material-ui/core/styles';
import { SIGN_USER } from '../../graphql/user/sign'
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import { ADD_PRODUCT } from '../../graphql/getProducts/addProduct';
import { useAppContext } from '../../context/user';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '110ch',
            height: '12ch'
        },
    },
}));

export default function AddNews() {

     const [sale_price, setSalePrice] = useState('')
     const [old_price, setOldPrice] = useState('')
     const [name, setName] = useState('')
     const [discription, setDiscription] = useState('')

    const [newProduct, setNewProduct] = useState({
        producttypeId:''
	})

	const {producttypeId } = newProduct

	const onInputChange = event => {
		setNewProduct({
			...newProduct,
			[event.target.name]: event.target.value
		})
	}

    const token = useAppContext()
    const router = useRouter()
    const onSubmit = event =>  {
        event.preventDefault()
        addproduct({
            variables: {
                ...newProduct,
                userId: token.id,
                name: name,
                old_price: old_price,
                sale_price: sale_price,
                discription: discription

            }
        })
        router.push('/')
    }
    const producttypes = [
        { name: "Đồ dùng học tập", id: "6087e449d8b6ab382c93ff23" },
        { name: "Sách,  truyện", id: "" },
        { name: "Đồ dùng vệ sinh", id: "6087e828d8b6ab382c93ff2a" },
        { name: "đồ dùng thể thao", id: "" },
        { name: "Đồ dùng điện tử", id: "" }
    ]


    const [addproduct] = useMutation(ADD_PRODUCT)



    const classes = useStyles()
    return (

        <div>
            {token ?
                (
                    <div>
                        <MainLayout />

                        <div className="form-regist ">
                            <div className="item footer__header mb-3">
                                <span >Đăng ký</span>
                            </div>
                            <div className="fa-border">
                                <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                    <div className="item text">
                                        <TextField id="outlined-basic" onChange={(event)=>setName(event.target.value)} label="Tên sản phẩm" variant="outlined" />
                                    </div>
                                    <div className="item text">
                                        <TextField id="outlined-basic"   onChange={(event)=>setSalePrice(event.target.value)} label="Giá sản phẩm" variant="outlined" />
                                    </div>
                                    <div className="item text">
                                        <TextField id="outlined-basic"   onChange={(event)=>setOldPrice(event.target.value)} label="Giá sản phẩm mới" variant="outlined" />
                                    </div>

                                    <div className="item text ">

                                        <Form.Control
                                            as='select'
                                            name='producttypeId'
                            
                                           
                                            onChange={onInputChange}
                                            value={producttypeId}
                                            required
                                        >
                                            <option value='' disabled>
                                                Chọn loại sản phẩm
                                            </option>
                                            {producttypes.map(pt => (
                                                <option key={pt.id} value={pt.id}  >
                                                    {pt.name}
                                                </option>
                                            ))}
                                        </Form.Control>

                                        {/* <Autocomplete
                                            id="combo-box-demo"
                                            options={producttypes}
                                            getOptionLabel={(option) => option.name}
                                            style={{ width: 300 }}
                                            onChange={(e) => setProducttypeId(producttypes.id)}
                                            value={producttypes.id}
                                            renderInput={(params) => <TextField {...params} label="Loại sản phẩm" variant="outlined" />}
                                        /> */}
                                    </div>
                                    <div className="item text ">
                                        <form className={classes.root} noValidate autoComplete="off">

                                            <TextField id="outlined-basic"   onChange={(event)=>setDiscription(event.target.value)} label="Mô tả sản phẩm" variant="outlined" />
                                        </form>
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
                : (<div></div>)

            }



        </div>
    )
}
