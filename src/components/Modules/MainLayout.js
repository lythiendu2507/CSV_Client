import Header from './Layout/Header'
import { useMediaQuery,Container  } from '@material-ui/core';
import MobileNavbar from './Navbar/MobileNavbar'
import React from 'react';
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

