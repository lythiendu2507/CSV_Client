import React from 'react'
import Link from 'next/link'

export default function TypeProduct() {
  return (

    <>
    <p className="title-typeproduct"> Khám phá danh mục</p>
    <div className="tpm-form tp-form ">
      
      <div className="tpm-form-deep">
        <div className="tpm-form-row">
          <Link href={`/products/`} className="">
            <div className="tp span-tp-m item-tp-m ">
            <div>
            <img src="/img/typeproduct/sach.jpg"  className="img-tp-m img-tp"/>
            </div>
              

              <span>Sách</span>
              </div>
          </Link>
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m ">
              <div>
              <img src="/img/typeproduct/dodunghoctap.jpg" className="img-tp-m img-tp"/>
              </div>
              
              <span>Đồ dùng học tập</span>
              </div>
          </Link>
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m ">
          <div>
          <img src="/img/typeproduct/dodungsinhvien.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span> Đồ dùng Sinh viên</span>
             </div>
          </Link>
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dodungdientu.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Đồ Dùng Điện Tử</span>
              </div>
          </Link>
        </div>
        <div className="tpm-form-row">
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/thietbigiadung.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Thiết bị gia dụng</span>
              
            </div>
          </Link>
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dungcuthethao.jpg" className="img-tp-m img-tp"/>
          </div>
             
              <span>Đồ thể thao</span>
              
            </div>
          </Link>
          <Link href={`/products/`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dungcuthethao.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Đồ thể thao</span>
              
            </div>
          </Link>
          <Link href={`/producttype/6087e449d8b6ab382c93ff23`}>
          <div className="tp span-tp-m item-tp-m">
          <div>
          <img src="/img/typeproduct/dungcuthethao.jpg" className="img-tp-m img-tp"/>
          </div>
              
              <span>Đồ thể thao</span>
              
            </div>
          </Link>
          
          
        </div>
      </div>
    </div>
    </>
  )
}
