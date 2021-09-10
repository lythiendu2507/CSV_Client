import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import MainLayout, { mainLayoutNamespacesRequired } from '../../components/Modules/MainLayout';
import Footer from '../../components/Modules/Layout/Footer';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Button, Container, makeStyles, createStyles, Theme, Paper, Hidden, withWidth, Typography } from '@material-ui/core/';
import { GET_PRODUCTS } from '../../graphql/getProducts/getProducts'
import { GET_PRODUCT } from '../../graphql/getProducts/getProduct.query'
import { useAppContext } from '../../context/user';


const Products = ({ product }) => {
  const token = useAppContext()
  const [user, setUser] = useState({})
  useEffect(() => {
    if (product) {
      setUser(product.user)
    }
  }, []);
  var d = new Date();
  var n = d.toISOString();


  function toDateTime(secx) // Đổi giây ra ngày tháng năm, giờ phút, giây
  {
    var sec = secx / 1000;
    if (sec < 60) {
      return Math.floor(sec / 60) + ' Giây trước'
    }
    if (sec < 3600) {
      return Math.floor(sec / 60) + ' Phút trước'
    }
    if (sec < 86400) {
      return Math.floor(sec / 3600) + ' Giờ trước'
    }
    if (sec < 2629800) {
      return Math.floor(sec / 86400) + ' Ngày trước'
    }
  }

  var dayNow = Date.parse(n) - Date.parse(product.createAt);
  const dayForDay = toDateTime(dayNow)
  return (
    <>
      <MainLayout>
        <title>WebSinhVien - {product?.name}</title>
        <div className="product container py-5">
          <div className="elevated">
            <div className="row p-3 mb-3">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product__image">
                      <div className="product-img-magnifier">
                        <img className="product-img-magnifier" alt={product.image_256} src={product.image_256} />
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-12">
                        <h1 className="h3 text-capitalize">{product.name}</h1>
                        <h2 className="h6 text-capitalize">Mô Tả: {product.discription}</h2>
                        <br />
                        {token ?
                          (<div>
                            <div className="d-flex flex-column mt-3">
                              <div className="product__price-group mb-1">
                                <span className="product__price">
                                  <span>Giá: {product.sale_price} VND</span>
                                </span>
                                <br />
                                <span className="product__old-price product-detail_sale-price">
                                  <span>Giá hàng mới: {product.old_price}</span>
                                </span>
                              </div>
                            </div>
                            <div className="col-6 px-0 mt-3">
                            </div>
                            <div className="d-flex mt-3 w-100">
                              <button className="btn btn-primary mr-2" >
                                Lưu lại
                              </button>
                            </div>
                            <div className="font-text-date">
                              <br />
                              <span>Đăng bởi: {user.name}</span>
                              <br />
                              <span>Số điện thoại: {user.phone}</span>
                              <br />
                              <span span>Thời gian: {dayForDay}</span>
                            </div>
                          </div>) : (
                            <div>
                            <br/>
                              <h2 className="h6 text-capitalize">Bạn phải <a href="/Login">đăng nhập</a> để xem các mục còn lại</h2>
                              
                            </div>
                          )}


                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>



      </MainLayout>
      <Footer />
    </>
  );
};




export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_PRODUCTS
  })
  const paths = data.products.map((product) => ({
    params: {
      id: product.id
    }
  }))
  return { paths, fallback: false }

}


export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })
  const { data } = await client.query({
    query: GET_PRODUCTS,
  })
  const dataProduct = data.products.filter((dataproduct) => dataproduct.id === params.id)
  return {
    props: {
      product: dataProduct[0]
    }
  }
}



export default Products;