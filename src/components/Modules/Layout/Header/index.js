import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Drawer, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SaveIcon from '@material-ui/icons/Save';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <header className='pc-header'>
        <div className="pc-header-menu">
            <div className="pc-header-menu-logo">
                <a className="pc-header-menu-logo-a" href="/">
                    <img className="pc-header-menu-logo-image" src="/icon/logo-home.png"/>
                </a>

            </div>
            <div className="pc-header-menu-right">
                <div className="pc-header-menu-right-item1">
                    <div>
                        <a className="pc-header-menu-right-item1-a">
                            <NotificationsIcon/>
                            <span>  Thông Báo</span>
                        </a>
                    </div>
                </div>
                <div className="pc-header-menu-right-item1">
                    <div>
                        <a className="pc-header-menu-right-item1-a">
                            <SaveIcon/>
                            <span>  Tin Đã Lưu</span>
                        </a>
                    </div>
                </div>
                <div className="pc-header-menu-right-item1">
                    <div>
                        <a className="pc-header-menu-right-item1-a">
                            <EventNoteIcon/>
                            <span>  Quản lí Tin</span>
                        </a>
                    </div>
                </div>
                <div className="pc-header-menu-right-item1">
                    <div>
                        <a className="pc-header-menu-right-item1-a">
                            <FiberNewIcon/>
                            <span>  Đăng tin mới</span>
                        </a>
                    </div>
                </div>
                <div className="pc-header-menu-right-item1">
                    <div>
                        <a className="pc-header-menu-right-item1-a">
                            <HomeIcon/>
                            <span>  Trang Chủ</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div className="pc-header-search">
            <div className="pc-header-search-item">
                <div className="pc-header-search-item1">
                    <div className="pc-header-search-item1-1 ">
                        <div className="pc-header-search-item1-2">
                            <div className="pc-header-search-item1-22">
                                <div className ="pc-header-search-item1-23">
                                    <div className="pc-header-search-item1-3">
                                        <div className="pc-header-search-item1-4">
                                            <button className="pc-header-search-item1-button ">
                                                <SearchIcon/>
                                            </button> 
                                        </div>
                                        <input autoComplete="off" placeholder="Tìm kiếm sản phẩm" className="pc-header-search-item1-search"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pc-header-search-item2">
                    <div className="pc-header-search-item2-1">
                        <a className="pc-header-search-item2-a">
                            <AccountCircleIcon className=""/>
                            <span className="pc-header-search-item2-span"> Đăng Nhập</span>
                        </a>
                    </div>
                </div>
                <div className="pc-header-search-item3">
                <div>
                <div className="pc-header-search-item2-2">
                        <a className="pc-header-search-item2-a">
                            <AddIcon className=""/>
                            <span className="pc-header-search-item2-span"> Đăng ký</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </header>
        
                );
};


 export default Header;