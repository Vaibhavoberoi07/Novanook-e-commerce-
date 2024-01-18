"use client"
import Image from 'next/image'
import React from 'react'
import filter from '../../../public/Images/filter.png'
import Line from '../components/Line';
import Boxes from '../components/Boxes';
import { useState } from 'react'

const Shop = () => {
    const [value, setvalue] = useState(1200)

    const handleOnchange = (e) => {
        setvalue(e.target.value)

    }

    const [show, setshow] = useState(false)

    const press = () => {
        setshow(!show)
    }

    return (

        <div id='shop'>
            <div className="shop-section">
                <div className="m-filter">
                    <div className="filter-sec" onClick={press}>
                        <Image src={filter} alt='Item'
                            className='filter-svg'
                        />
                    </div>

                    <h4 className='f' onClick={press}>FILTER</h4>
                </div>
                <div className={show ? "shop-sec-left width" : "shop-sec-left"}>
                    <div className="filter">
                        <div className="filter-sec">
                            <Image src={filter}  alt='Item'
                                className='filter-svg'
                            />
                        </div>

                        <h4>FILTER</h4>
                    </div>

                    <div className="gender">
                        <div className="gender-head">
                            <h3>GENDER</h3>
                        </div>
                        <div className="gselection">
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>MEN</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>WOMEN</h5>
                            </div>

                        </div>
                        <Line />
                    </div>

                    <div className="price">
                        <div className="gender-head">
                            <h3>PRICE</h3>

                        </div>
                        <div className="RANGE">
                            <input type="range" id="range" max={2500} min={0} onChange={handleOnchange} />
                            <div className="rshow">
                                <input type="text" defaultValue='0' className='inputrange' />
                                <span>To</span>
                                <input type="text" value={value} onChange={handleOnchange} className='inputrange' contentEditable={false} />

                            </div>
                        </div>
                        <Line />
                    </div>

                    <div className="price">
                        <div className="gender-head">
                            <h3>SIZES</h3>

                        </div>

                        <div className="gselection">
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>S</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>M</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>L</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>XL</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>XXL</h5>
                            </div>

                        </div>

                        <Line />
                    </div>

                    <div className="price">
                        <div className="gender-head">
                            <h3>TYPE</h3>

                        </div>

                        <div className="gselection">
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>COTTON</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>JACKET</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>DENIM</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>LEATHER</h5>
                            </div>
                            <div className="realsecection">
                                <input type="checkbox" name="men" id="checkbox" />
                                <h5>POLYMER</h5>
                            </div>

                        </div>

                        <Line />
                    </div>

                </div>


                <div className="shop-sec-right">
                    <div className="shop-r-head">
                        <h1>T-SHIRT</h1>
                        <div className="shop-r-head-2">
                            <p>780 Products</p>

                            <div className="select">
                                <label htmlFor="">Sort By:</label>
                                <select name="cars" id="cars">
                                    <option>Discount</option>
                                    <option>Top Seller</option>
                                    <option>High Prices</option>
                                    <option>Low Prices</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="display">
                        <Boxes url={"/Images/1.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/5.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} price={"Rs:800"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/3.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/2.webp"} heading={"Huetrap"} subhead={"Printed oversized"} orignal={"Rs: 1,200"} />
                        <Boxes url={"/Images/sweatshirt.png"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/6.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} orignal={"Rs: 1,200"} />
                        <Boxes url={"/Images/4.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/tshirt.png"} heading={"Huetrap"} subhead={"Printed oversized"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                        <Boxes url={"/Images/hoodie.png"} heading={"Huetrap"} subhead={"Printed oversized"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop
