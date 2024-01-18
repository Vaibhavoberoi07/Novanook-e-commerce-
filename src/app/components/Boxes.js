import React from 'react'
import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';


const Boxes = ({ url, heading, subhead, orignal, price, discPrice, discount }) => {
  return (
    <Link href='./product' className='textdeco'>
      <div className="feature-boxs">
        <div className="imgcontainer">
          <div className="wishlist">
            <CiHeart id='wishheart' />
          </div>
          <Image src={url}
            fill
            alt="Item" />
        </div>

        <div className="info">
          <p className='p-head'>{heading}</p>
          <p className='p-subhead'>{subhead}</p>
          <div className="prices">
            <p className='p-priceOrig'>{orignal}</p>
            <p className='p-price2'>{price}</p>
            <p className='disc-price'>{discPrice}</p>
            <p className='discount'>{discount}</p>
          </div>
        </div>
      </div>
      </Link>

  )
}

export default Boxes
