import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Divider, Drawer, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SaveIcon from '@material-ui/icons/Save';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAppContext } from '../../../../context/user'

const Header = () => {

    const token = useAppContext()


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
     };

    return (
        <header className='pc-header'>
            <div className="pc-header-menu  ">
                <div className="pc-header-menu-logo">
                    <a className="pc-header-menu-logo-a" href="/">
                        <img className="pc-header-menu-logo-image" src="/icon/logo-home.png" />
                    </a>

                </div>
                <div className="pc-header-menu-right">
                    <div className="pc-header-menu-right-item1">
                        <div>
                            <Link href="/">
                            <div className="pc-header-menu-right-item1-a header__text">
                                <NotificationsIcon />
                                <span>  Thông Báo</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="pc-header-menu-right-item1">
                        <div>
                            <Link href="/saveNews" >
                            <div className="pc-header-menu-right-item1-a header__text" >
                                <SaveIcon />
                                <span>  Tin Đã Lưu</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="pc-header-menu-right-item1">
                        <div>
                            <Link href="/newManagement" >
                            <div className="pc-header-menu-right-item1-a header__text" >
                                <EventNoteIcon />
                                <span>  Quản lí Tin</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="pc-header-menu-right-item1">
                        <div>
                            <Link href="/addNews" >
                            <div className="pc-header-menu-right-item1-a header__text" >
                                <FiberNewIcon />
                                <span>  Đăng tin mới</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="pc-header-menu-right-item1">
                        <div>
                            <Link  href="/" >
                            <div className="pc-header-menu-right-item1-a header__text">
                                <HomeIcon />
                                <span>  Trang Chủ</span>
                                </div>
                            </Link>
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
                                    <div className="pc-header-search-item1-23">
                                        <div className="pc-header-search-item1-3">
                                            <div className="pc-header-search-item1-4">
                                                <button className="pc-header-search-item1-button ">
                                                    <SearchIcon />
                                                </button>
                                            </div>
                                            <input autoComplete="off" placeholder="Tìm kiếm sản phẩm" className="pc-header-search-item1-search"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {token ?
                        (
                    <div>
                     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                     <div className="pc-header-search-item2 ">
                        <div className="pc-header-search-item2-email">
                            <div className="pc-header-search-item2-a header__text pc-header-email">
                                <AccountCircleIcon className="" />
                                <span className="pc-header-search-item2-span"> {token.email}</span>
                            </div>
                        </div>
                        </div>
                    </Button>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
                            <MenuItem onClick={handleClose}>Lịch sử mua hàng</MenuItem>
                            <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
                         </Menu>
                     
                    
                    
                    </div>) :

                        (<><div className="pc-header-search-item2">
                            <div className="pc-header-search-item2-email">
                            <div className="pc-header-search-item2-a header__text pc-header-email">
                                <Link href="/Login" >
                                    <>
                                    <AccountCircleIcon className="" />
                                    <span className="pc-header-search-item2-span"> Đăng Nhập</span>
                                    </>
                                </Link>
                                </div>
                            </div>
                        </div>
                            <div className="pc-header-search-item3">
                                <div>
                                    <div className="pc-header-search-item2-2">
                                    <div className="pc-header-search-item2-a header__text pc-header-email">
                                        <Link href="/Register" >
                                        <>
                                            <AddIcon className="" />
                                            <span className="pc-header-search-item2-span"> Đăng ký</span>
                                            </>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> </>)}

                </div>
            </div>

        </header>

    );
};


export default Header;