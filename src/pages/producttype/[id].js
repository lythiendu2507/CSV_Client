import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import MainLayout, { mainLayoutNamespacesRequired } from '../../components/Modules/MainLayout';
import Footer from '../../components/Modules/Layout/Footer';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { IconButton, Container, makeStyles, createStyles, Theme, Paper, Hidden, withWidth, Typography } from '@material-ui/core/';
import { GET_PRODUCTS } from '../../graphql/getProducts/getProducts'
import { GET_PRODUCT } from '../../graphql/getProducts/getProduct.query'
import {GET_PRODUCTSTYPE} from '../../graphql/getTypeProducts/getTypeProducts'
import SlickSlider from 'react-slick';

import FavoriteIcon from '@material-ui/icons/Favorite';
import TypeProduct  from './TypeProduct';


const ProductType = ({ producttypes }) => {
    
  const [product, setProduct] = useState({})
  useEffect(() => {
    if (producttypes) {
      setProduct(producttypes.products)
    }
  }, []);
  var d = new Date();
  var n = d.toISOString();
  //console.log(producttypes.products)

  const [imgBanner, setImgBanner] = useState([
    { img: "/img/meme1.jpg" },
    { img: "/img/meme4.jpg" },
    { img: "/img/beaver1.jpg" },
    { img: "/icon/logo.png" }]);


  function toDateTime(secx) // Đổi giây ra ngày tháng năm, giờ phút, giây
  {
    var sec = secx / 1000;
    if(sec < 60){
      return   Math.floor(sec/60) + ' Giây trước'
    }
    if (sec < 3600){
      return Math.floor(sec/60) + ' Phút trước'
    }
    if (sec < 86400){
      return  Math.floor(sec/3600) + ' Giờ trước'
    }
    if (sec < 2629800){
      return   Math.floor(sec/86400) + ' Ngày trước'
    }
  }

  var dayNow =  Date.parse(n) - Date.parse(product.createAt);
  const dayForDay = toDateTime(dayNow)
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



        <TypeProduct/>
        <p className="title-product"> Tin mới {producttypes.name}</p>
        <div className="products container mobile-content my-3 my-sm-5">
          <div className="d-flex flex-nowrap justify-content-between">
            <div className="flex-grow-1 w-100">
              <div className="products__products">
                <div className=" products__cards mb-3 ">
                  {producttypes.products.map((product) => (
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
  );
};




export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_PRODUCTSTYPE
  })
  const paths = data.producttypes.map((producttypes) => ({
    params: {
      id: producttypes.id
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
    query: GET_PRODUCTSTYPE,
  })
  const dataProducttypes = data.producttypes.filter((dataproducttypes) => dataproducttypes.id === params.id)
  return {
    props: {
      producttypes: dataProducttypes[0]
    }
  }
}



export default ProductType;