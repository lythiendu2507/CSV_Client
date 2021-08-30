import React from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SaveIcon from '@material-ui/icons/Save';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function MobileNavbar() {

    return (
        <>
            <header class="sc-fjdhpX mobile-topnav">
                <div class="header-bd">
                    
                    <a class="placeholder">
                        <span class="text iconfont icon-search">Tìm kiếm sản phẩm</span>
                    </a>
                </div>
            </header>
            <div className="toolbar-container" >
                <a href="/">
                <span className="tab" >
                    <HomeIcon className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill  fa-home"/>                 
                    <p className="text">Trang chủ</p>
                </span>
                </a>
                <a href="/saveNews">
                <span className="tab">
                    <SaveIcon className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-clipboard-check"/>                   
                    <p className="text">Đã lưu</p>
                </span>
                </a>
                <a href="/newManagement">
                <span className="tab">
                    <AccountCircleIcon className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-clipboard-check"/>                   
                    <p className="text">Quản lí tin</p>
                </span>
                </a>
                <a href="/">
                <span className="tab">
                    <NotificationsIcon className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill far fa-bell"/>             
                    <p className="text">Thông báo</p>
                </span>
                </a>
                <span className="tab">
                    <AddIcon className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-bars"/>
                    
                    <p className="text">Thêm</p>
                </span>
            </div>
        </>
    )
}
