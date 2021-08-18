import React from 'react'
import { Grid } from '@material-ui/core';

import Link from 'next/link';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container pb-2 pt-0">
                <div className="row justify-content-between web__margin">
                    <div className="col-xl-4 col-lg-4 col-md-4  col-sm-12">
                        <div className="footer__info mb-4">
                            <div className="footer__info-logo mb-3">
                                <div className="rockland-logo d-inline-block">
                                    <Link href="/">
                                        <a title="ChoSinhVien.com">
                                            <img
                                                alt="ChoSinhVien.com"
                                                className="img-fluid logo-footer"
                                                title="ChoSinhVien.com"
                                                src="/icon/logo.png"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="footer__info-title mb-3 d-none">
                                <b className="text-primary text-uppercase">copyright_by_websinhvien</b>
                            </div>
                            <p className="footer__info-company">
                                <b>Địa chỉ:</b> 97 Man Thiện, phường Hiệp Phú, quận 9,tp Hồ Chí Minh.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-4 col-sm-7">
                        <div className="mb-3 mobile__margin">
                            <div className="footer__header mb-3">Thông tin chung</div>

                            <div className="row">
                                <div className="col-12 ">
                                   <a className="footer__link" href="/about">Giới thiệu về WebSinhVien.Com</a>
                                   <br/>
                                   <a className="footer__link" href="/terms">Điều khoản sử dụng</a>
                                   <br/>
                                </div>
                                <div className="col-12 ">
                                <a className="footer__link" href="/about">Chính sách bảo mật</a>
                                   <br/>
                                   <a className="footer__link" href="/terms">Câu hỏi thường gặp</a>
                                   <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-4 col-sm-5 mobile__margin__top">
                        <Grid item sm={12}>
                            <div className="footer__header mb-3">Liện hệ</div>
                        </Grid>
                        <Grid item sm={12}>
                            <div className="mb-3">
                                <p className="d-flex align-items-center">
                                    <i className="far fa-envelope footer__icon footer__icon--email" />
                                    <a
                                        className="footer__link footer__link--email px-2 mr-2"
                                        href="mailto: thiendu2507@gmail.com">
                                        thiendu2507@gmail.com
                                    </a>
                                </p>
                                <p className="d-flex align-items-center">
                                <i className="fa fa-phone footer__icon footer__icon--email" />
                                    <a className="text-white pl-2 mr-2" href="tel:1900232436">
                                        0982111344
                                    </a>
                                </p>
                                <p className="d-flex align-items-center">
                                <i className="fas fa-mobile-alt footer__icon footer__icon--email" />
                                        <a
                                            className="text-white px-lg-2 mr-2 pl-md-5 pl-sm-5 tele__mobile-number "
                                            href="tel:0389821184">
                                            0389821184
                                        </a>
                                </p>
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className="copyright d-flex flex-column">
                <hr />
                <p className="d-flex flex-row justify-content-center mb-0">
                    <div>© Bản quyền thuộc Công ty WebSinhVien - 2021. </div>
                    <div className="copyright__version">
                        Phiên bản 0.1
                    </div>
                </p>
            </div>
            

        </div>
    )
}
