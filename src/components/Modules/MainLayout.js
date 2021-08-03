import Header from './Layout/Header'
import { useMediaQuery,Container  } from '@material-ui/core';
import MobileNavbar from './Navbar/MobileNavbar'
import React from 'react';
import TypeProduct from './TypeProduct/TypeProduct';
import { GET_PRODUCTSTYPE } from '../../graphql/getTypeProducts/getTypeProducts';
import Footer from './Layout/Footer'

export default function MainLayout(props) {
    const isSmallScreen = useMediaQuery('(max-width: 575px)');
    return (
        <>
            {isSmallScreen ? (<MobileNavbar />

            ) : (<Header />
            )}
        
            
            {props.children}

            
      
        </>
    );
}

