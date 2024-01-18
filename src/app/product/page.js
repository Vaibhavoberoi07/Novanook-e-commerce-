"use client"
import React from 'react'
import Image from "next/image"
import men from "../../../public/Images/men.png"
import { CiShare2 } from "react-icons/ci";
import Line from '../components/Line';
import Boxes from '../components/Boxes';
import Footer from '../components/Footer';

const Product = () => {


    return (
        <div id='Product'>
            <div className="psections">
                <div className="prodect-sec-left">
                    <div className="show-box">
                        <Image src={men} alt="Item" className='p-img many' />
                    </div>
                    <div className="show-box">
                        <Image src={men} alt="Item" className='p-img many' />
                    </div>
                    <div className="show-box">
                        <Image src={men} alt="Item" className='p-img many' />
                    </div>
                    <div className="show-box">
                        <Image src={men} alt="Item" className='p-img many' />
                    </div>

                </div>
                <div className="prodect-sec-middle">
                    <div className="big-img">
                        <Image src={men} alt="Item" className='p-img' />
                    </div>
                </div>
                <div className="prodect-sec-right">
                    <div className="p-head">
                        <h1>Hoodie Wc</h1>
                        <div className="pshare">
                            <CiShare2 />
                        </div>
                    </div>
                    <div className="p-head2">
                        <p>Premium quality cotton</p>
                    </div>
                    <div className="p-head3">
                        <p>Rs:1,500</p>
                    </div>
                    <div className="p-head4">
                        <p>Inclusive of all taxes</p>
                    </div>
                    <Line />

                    <div className="p-head6">
                        <p>SIZE: M</p>
                        <div className="sizebox">
                            <div className="sbox">S</div>
                            <div className="sbox">M</div>
                            <div className="sbox">L</div>
                            <div className="sbox">XL</div>
                        </div>
                    </div>

                    <div className="p-head7">
                        <p>Need Help?</p>
                    </div>

                    <div className="p-head8">
                        <p>COLOR: Camel</p>
                        <div className="color">
                            <div className="imgcolor">
                                <Image src={men} alt="Item" className='p-img' />
                            </div>
                        </div>
                    </div>

                    <div className="p-head9">
                        <button className='p-btn1' >Buy Now</button>
                        <button className='p-btn2' >Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="desc">
                <div className="desc-head">
                    <div className="desc-info">
                        <div className="d-head"><p>Description</p></div>
                        <div className="d-info">
                            <h1>PRODUCT SPECIFICATION</h1>
                            <div className="d-li">
                                <li className='sp-li'><span>Size:</span> Available in M, L, XL, and 2XL, ensuring a comfortable and tailored fit for various body types, allowing you to express your style with confidence and ease.</li>
                                <li className='sp-li'><span>Weight:</span> Lightweight and easily layerable, providing warmth and flexibility for a range of weather conditions and occasions.</li>
                                <li className='sp-li'><span>Colors: </span>The reversible design features a refreshing mint shade on one side and a classic black on the other, offering versatility and two distinct looks in one stylish piece.</li>
                                <li className='sp-li'><span>Features: </span>The round neck design and reversible feature provide a seamless transition between two complementary colors, adding a touch of modern style and practicality to your wardrobe.</li>
                            </div>
                            <h1>PRODUCT CARE</h1>
                            <div className="d-li">
                                <li className="sp-li">Machine wash with similar colors on a gentle cycle to preserve the jacket's color and texture, ensuring longevity and consistent vibrancy.</li>;
                                <li className="sp-li">Use a mild detergent to maintain the fabric's softness and integrity after every wash, keeping it gentle on your skin and preserving the jacket's premium quality.</li>;
                                <li className="sp-li">Tumble dry on low heat or hang to dry to maintain the jacket's shape and structure, ensuring it retains its original form and comfort.</li>;
                                <li className="sp-li">Iron on low heat if necessary, ensuring the jacket remains wrinkle-free without compromising its reversible design and exceptional craftsmanship.</li>;
                                <li className="sp-li">Avoid using bleach or any harsh chemicals that may compromise the jacket's quality and reversible features.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-head">
                <h1>YOU MIGHT ASLO LIKE</h1>
            </div>

            <div className="feature-container">
                <div className="feature-box">
                    <Boxes url={"/Images/6.webp"} heading={"Black Hoodie WC"} subhead={"Premium quality cotton"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                    <Boxes url={"/Images/5.webp"} heading={"Roadster"} subhead={"Flex T-shirt"} price={"Rs:800"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                    <Boxes url={"/Images/3.webp"} heading={"Ranger Hoodie"} subhead={"Solid UO "} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                    <Boxes url={"/Images/2.webp"} heading={"Huetrap"} subhead={"Printed oversized"} price={"Rs:1,500"} discPrice={"Rs: 1,000"} discount={"70%OFF"} />
                </div>
            </div>
         <Line/>
         <Footer/>
        </div>
    )
}

export default Product
