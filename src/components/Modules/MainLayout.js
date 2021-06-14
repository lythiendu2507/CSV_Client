import Header from '../Layout/Header'
import { useMediaQuery } from '@material-ui/core';
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

export const mainLayoutNamespacesRequired = [
    'searchBar',
    'noti',
    'navbar',
    'header',
    'footer',
    'common',
    'errors',
    'login',
    'register',
    'password',
    'termPopup',
    'promotions',
    'myAccount',
    'cart'
];
