import React from 'react'
import Boxes from './Boxes'
import Link from 'next/link'
import Image from "next/image"
import csale from "../../../public/Images/bg/wsale.jpg"


const Featured = () => {
  return (
    <div className='featured'>
      <div className="feature-head">
       <h1>NOW TRENDING</h1> 
      </div>

      <div className="feature-container">
        <div className="feature-box">
          <Boxes url={"/Images/6.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} orignal={"Rs:1,500"} />
          <Boxes url={"/Images/5.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} orignal={"Rs:800"} />
          <Boxes url={"/Images/3.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} orignal={"Rs:1,500"} />
          <Boxes url={"/Images/2.webp"} heading={"Huetrap"} subhead={"Printed oversized"} orignal={"Rs:1,500"} />
        </div>
      </div>

      <Link href="./shop"><div className="saleposter">
      <Image src={csale}
          className='csale'
          alt="Item" />

      </div>
      </Link> 
    </div>
  )
}

export default Featured 
