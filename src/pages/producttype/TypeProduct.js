import React from 'react'
import Link from 'next/link'

export default function TypeProduct() {
  return (

    <>
    <p className="title-typeproduct"> Khám phá danh mục</p>
    <div className="tpm-form tp-form ">
      
      <div className="tpm-form-deep">
        <div className="tpm-form-row-m tpm-form-row-p ">
          <Link href={`/producttype/612f43a5fd81ee359c6e1e48`} className="">
            <div className="tp span-tp-m item-tp-m ">
            <div>
            <img src="/img/typeproduct/sach.jpg"  className="img-tp-m img-tp"/>
            </div>
              <span>Sách, truyện</span>
              </div>
          </Link>
          <Link href={`/producttype/6087e449d8b6ab382c93ff23`}>
          <div className="tp span-tp-m item-tp-m ">
              <div>
              <img src="/img/typeproduct/dodunghoctap.jpg" className="img-tp-m img-tp"/>
              </div>
              
              <span>Đồ dùng học tập</span>
              </div>
          </Link>
          <Link href={`/producttype/6087e828d8b6ab382c93ff2a`}>
          <div className="tp span-tp-m item-tp-m ">
          <div>
          <img src="/img/typeproduct/dodungcanhan.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span> Đồ dùng Sinh viên</span>
             </div>
          </Link>
          <Link href={`/producttype/612f4461fd81ee359c6e1e4a`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dodungdientu.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Đồ Dùng Điện Tử</span>
              </div>
          </Link>
        </div>
        <div  className="tpm-form-row-m tpm-form-row-p ">
          <Link href={`/producttype/612f438cfd81ee359c6e1e47`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/thietbigiadung.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Thiết bị gia dụng</span>
              
            </div>
          </Link>
          <Link href={`/producttype/612f438cfd81ee359c6e1e47`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/thethao.jpg" className="img-tp-m img-tp"/>
          </div>
             
              <span>Đồ thể thao</span>
              
            </div>
          </Link>
          <Link href={`/producttype/612f4479fd81ee359c6e1e4b`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/khoahoconline.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Khóa học Online</span>
              
            </div>
          </Link>
          <Link href={`/producttype/612f43effd81ee359c6e1e49`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dodunggiaitri.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Đồ dùng giải trí</span>
              
            </div>
          </Link>
          
          
        </div>
      </div>
    </div>
    </>
  )
}
