import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Drawer, IconButton } from '@material-ui/core';


const Header = () => {
    return (
        <header className='header bg-white'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">ChoSinhVien</Navbar.Brand>
                <Nav className="mr-auto">

                <Form inline>
                    <FormControl type="text" placeholder="Tìm kiếm sản phẩm" className="mr-sm-2" />
                    <Button variant="outline-info">Tìm Kiếm</Button>
                </Form>
                    <Nav.Link href="/products">Sản Phẩm</Nav.Link>
                    <Nav.Link href="/" >Loại Sản Phẩm</Nav.Link>

                </Nav>
                
            </Navbar>
            
        </header>
    );
};

export default Header;