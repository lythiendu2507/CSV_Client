import Head from 'next/head'
import React, { useState, useEffect,useContext } from 'react';
import Footer from '../components/Modules/Layout/Footer';
import Link from 'next/link'
import { Card, Typography, Container, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import MainLayout from '../components/Modules/MainLayout'
import { ApolloClient, InMemoryCache, ApolloProvider, useApolloClient, defaultOptions, useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../graphql/getProducts/getProducts';
import TypeProduct from './producttype/TypeProduct'
import SlickSlider from 'react-slick';
import {useAppContext} from '../context/user'


export default function Home({ products }) {
  const token = useAppContext()

  const [imgBanner, setImgBanner] = useState([
    { img: "/img/meme1.jpg" },
    { img: "/img/meme4.jpg" },
    { img: "/img/beaver1.jpg" },
    { img: "/icon/logo.png" }]);

  var d = new Date();
  var n = d.toISOString();


  function toDateTime(secx) {
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
  
  return (

    <>

      <MainLayout className=" all-all-m" />



      <Container>
        <div className="product__cards mb-3 my-4 container-main">

          <SlickSlider
            arrows={false}
            autoplay
            dots={true}

            dotsClass="slick__dots bullet slick-dots"
            className="align-items-center mb-0 slick-dotted img-slider-m img-slider">
            {imgBanner?.map(image => (
              <div className="banner__slide" key={image.img}>
                <div className="banner__img img-slider__m">
                  <div className="banner-wrapper ">
                    <img alt={image.img} src={image.img} className="banner--image " />
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>



          <TypeProduct />
          <p className="title-product"> Tin mới đăng</p>
          <div className="products container mobile-content my-3 my-sm-5">
            <div className="d-flex flex-nowrap justify-content-between">
              <div className="flex-grow-1 w-100">
                <div className="products__products">
                  <div className=" products__cards mb-3 ">
                    {products.products.map((product) => (
                      <div>
                      
                      
                        <div className="product-card-container">
                          <article className="product-card card mx-auto">
                            <div className="product-card__main">
                              <div className="product-card__description mb-3">
                              
                                <Link  href={`/products/${product.id}`}>
                                  <div className="product-card__image mb-3 lozad">
                                    <div className="banner-wrapper">
                                      <img className="banner--image" alt={product.image_256} src={product.image_256} />
                                    </div>
                                  </div>
                                </Link>
                                
                                <Link  href={`/products/${product.id}`} className="text-decoration-none">

                                  <h6 className="product-card__name">{product.name}</h6>

                                </Link>
                                <Link  href={`/products/${product.id}`}>
                                <div>
                                <Typography component="h2">
                                  <div className="color-price-product mt-1">
                                    {product.sale_price} đ
                                  </div>
                                </Typography>
                                <br/>
                                <br/>
                                <br/>
                                  <Typography component="h2">
                                    <div className="font-text-date">
                                      Ngày đăng: {toDateTime(Date.parse(n) - Date.parse(product.createAt))}
                                    </div>
                                  </Typography>
                                  <Typography component="h2">
                                    <div className="font-text-date ">
                                      Đăng bởi: {product.user.name}
                                    </div>
                                  </Typography>
                                  </div>
                                  </Link>

                                  <div className="add-to-cart" >
                                  <IconButton aria-label="add to favorites ">
                                    <FavoriteIcon />
                                  </IconButton>
                              </div>
                              </div>
                            </div>
                            {/* <div className="text-center">
                        <Button variant="contained" color="secondary" >
                            Xem Thêm
                        </Button> 
                         
                        </div> */}
                            
                          </article>
                        </div>
                      
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_PRODUCTS
  })


  return {
    props: {
      products: data
    }
  }
}
