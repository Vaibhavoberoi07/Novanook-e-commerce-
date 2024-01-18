import React from 'react'
import Boxes from './Boxes'

const Featured3 = () => {
  return (
    <div className='featured'>
           <div className="feature-head">
        <h1>BEST SELLERS</h1>
      </div>
      
      <div className="feature-container">
        <div className="feature-box">
          <Boxes url={"/Images/1.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/5.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} price={"Rs:800"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/3.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/2.webp"} heading={"Huetrap"} subhead={"Printed oversized"} orignal={"Rs: 1,200"} />
          <Boxes url={"/Images/2.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/6.webp"} heading={"Roadster"} subhead={"Flex T-shirt"}  orignal={"Rs: 1,200"} />
          <Boxes url={"/Images/4.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
          <Boxes url={"/Images/1.webp"} heading={"Huetrap"} subhead={"Printed oversized"} price={"Rs:1,500"} discPrice={"Rs: 1,050"} discount={"70%OFF"} />
        </div>
      </div>

    </div>
  )
}

export default Featured3
