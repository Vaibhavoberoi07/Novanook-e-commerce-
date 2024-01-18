import React from 'react'
import Boxes from './Boxes'
import Link from 'next/link'

const Featured2 = () => {
  return (
    <div className='featured'>
      <div className="feature-head">
        <h1>WINTER SALE</h1>
      </div>

      <div className="feature-container">
        <div className="feature-box">
          <Boxes url={"/Images/6.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/5.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} price={"Rs:800"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/3.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/2.webp"} heading={"Huetrap"} subhead={"Printed oversized"} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
        </div>
      </div>

      <div className="poster2">
        <div className="poster2-details">
        <h6>Winter</h6>
        <h6>Essentials</h6>
       <Link href="./shop"><button className='btn4'>SHOP NOW</button></Link> 


        </div>
      </div>
    </div>
  )
}

export default Featured2
