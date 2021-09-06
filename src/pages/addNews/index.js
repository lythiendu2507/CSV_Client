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
     const [image_256, setImage_256] = useState('')

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
                discription: discription,
                image_256:image_256

            }
        })
        router.push('/')
    }
    const producttypes = [
        { name: "Đồ dùng học tập", id: "6087e449d8b6ab382c93ff23" },
        { name: "Sách,  truyện", id: "612f43a5fd81ee359c6e1e48" },
        { name: "Đồ dùng vệ sinh", id: "6087e828d8b6ab382c93ff2a" },
        { name: "Đồ dùng thể thao", id: "612f438cfd81ee359c6e1e47" },
        { name: "Thiết bị giải trí", id: "612f43effd81ee359c6e1e49" },
        { name: "Thiết bị gia dụng", id: "612f438cfd81ee359c6e1e47" },
        { name: "Đồ dùng điện tử", id: "612f4461fd81ee359c6e1e4a" },
        { name: "Khóa học online", id: "612f4479fd81ee359c6e1e4b" },
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
                                <span >Đăng tin mới</span>
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
                                    <div className="item text">
                                        <TextField id="outlined-basic"   onChange={(event)=>setImage_256(event.target.value)} label="Điền đường dẫn ảnh " variant="outlined" />
                                    </div>

                                    <div className="item text add-news_combobox-m add-news_combobox-p">

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
                                        <form noValidate autoComplete="off">
                                            <span className="add-news_span add-news_span">Mô tả sản phẩm</span>
                                            <textarea className="form-control" label="Mô tả sản phẩm " onChange={(event)=>setDiscription(event.target.value)}></textarea>
                                            {/* <TextField id="outlined-basic"   onChange={(event)=>setDiscription(event.target.value)} label="Mô tả sản phẩm" variant="outlined" /> */}
                                        </form>
                                    </div>
                                    <div className="item my-5">
                                        <Button className="item" variant="contained" type="submit" color="primary">Đăng tin</Button>
                                    </div>
                                </form>
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
