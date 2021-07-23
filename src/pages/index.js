import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link'
import { Card, Typography, Container } from '@material-ui/core';
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Modules/MainLayout'
import { ApolloClient, InMemoryCache, ApolloProvider, useApolloClient, defaultOptions, useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../graphql/getProducts/getProducts';
import TypeProduct from '../components/Modules/TypeProduct/TypeProduct'
import SlickSlider from 'react-slick';
import Slider from "react-slick";
export default function Home({ products }) {

  const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions

  })
  const [imgBanner, setImgBanner] = useState([
    { img: "/img/meme1.jpg" },
    { img: "/img/meme4.jpg" },
    { img: "/img/meme5.jpg" },
    { img: "/img/beaver1.jpg" },
    { img: "/img/meme2.jpg" },
    { img: "/img/meme3.jpg" }]);
 
  return (

    <ApolloProvider client={apolloClient}>
      
          <MainLayout  className="products__products all-all-m" />


          
          <Container>
        <div className="product__cards mb-3 my-4 container-main">

          <SlickSlider
            arrows={false}
            autoplay
            dots ={true}

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
              {/* <div className="products__sidebar pr-4 d-none d-sm-block">
            <div>Sản phẩm</div>
          </div> */}
              <div className="flex-grow-1 w-100">
                <div className="px-2 px-sm-0 mb-2"></div>
                <div className=" products__cards mb-3 text-center pb-5 pt-5">
                  {products.products.map((product) => (
                    <Link href={`/products/${product.id}`}>
                      <Card key={product.id}>
                        <img alt="/img/meme1.jpg" src="/img/meme1.jpg"/>
                        <Typography component="h2" className="mt-1">
                          {product.name}
                        </Typography>
                        <Typography component="h2">
                          <div className="color-price-product mt-1">
                            {product.price} đ
                          </div>
                          
                        </Typography>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>


    </ApolloProvider>
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
