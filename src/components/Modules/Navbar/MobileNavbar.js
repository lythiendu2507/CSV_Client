import React from 'react'
import TypeProduct from '../TypeProduct/TypeProduct'

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
            <TypeProduct/>
            <div className="toolbar-container" >
                <span className="tab">

                    <span className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill  fa-home">
                    </span>
                    <p className="text">Trang chủ</p>
                </span>
                <span className="tab">
                    <span className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-clipboard-check">
                    </span>
                    <p className="text">Đã lưu</p>
                </span>
                <span className="tab">
                    <span className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-clipboard-check">
                    </span>
                    <p className="text">Tài khoản</p>
                </span>
                <span className="tab">
                    <span className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill far fa-bell">

                    </span>
                    <p className="text">Thông báo</p>
                </span>
                <span className="tab">
                    <span className="toolbar-iconfont toolbar-icon-my toolbar-icon-home-fill fas fa-bars">
                    </span>
                    <p className="text">Thêm</p>
                </span>
            </div>
        </>
    )
}
