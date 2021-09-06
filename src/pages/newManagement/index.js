import { useQuery, useReactiveVar } from '@apollo/client'
import { TokenKind } from 'graphql'
import { InvalidTokenError } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/user'
import { GET_USERBYID } from '../../graphql/user/getUserById'
import Link from 'next/link'
import MainLayout from '../../components/Modules/MainLayout'
import Footer from '../../components/Modules/Layout/Footer'

export default function saveNews() {
    const token = useAppContext()
    const [userId, setUserId] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        if (token) {
            setUserId(token.id)
        }

    }, [token])
    const { loading, error, data } = useQuery(GET_USERBYID, {
        variables: { id: userId },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    //console.log(data.user.products)

    return (
        <div>
            <MainLayout />

           {token ?
            (
            <div className="container py-5 quickOrder">
                <div className="cart">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h1 className="h3">Sản phẩm đã đăng</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-9">

                            <div className="elevated cart__items mb-3">
                                {user.products == null ? (
                                    <div>
                                        {data.user.products.map((user) => (
                                            <div>
                                                

                                                    <div className="cart-item " >
                                                        <Link href={'products/' + user.id}>
                                                            <div className="row align-items-center px-2 ">
                                                                <div
                                                                    className="cart-item__image lozadloaded flex-shrink-0 discount__quick-order"
                                                                    style={{
                                                                        backgroundImage: `url("/icon/logo.png")`
                                                                    }}>

                                                                </div>

                                                                <div className="flex-1 pl-2 pr-2 ">
                                                                    <div className="d-flex align-items-center ">
                                                                        <div>
                                                                            <Link href={'products/' + user.id}>
                                                                                <a className="cart-item__name" title={user.name}>
                                                                                    {user.name}
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                                                        <div className="flex-1 flex-column">
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div>
                                                                                    <div className="product__price-group mb-1">
                                                                                        <span className="product__price">
                                                                                            <span>Giá: {user.sale_price}</span>
                                                                                        </span>


                                                                                        <span className="product__old-price ml-3">
                                                                                            <span>Giá hàng mới: {user.old_price}</span>
                                                                                        </span>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                
                                            </div>
                                        )
                                        )
                                        }
                                    </div>) :
                                    (<div>
                                        <span>Bạn chưa đăng sản phẩm nào lên !!</span>
                                    </div>)}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            ) :
            (<div>
                <span>Bạn phải  <a href="/Login">đăng nhập</a> để xem mục này</span>
            </div>)}



            <Footer />
        </div>
    )
}

