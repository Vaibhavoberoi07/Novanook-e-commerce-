import React from 'react'
import Image from "next/image"
import Line from './Line'
import men from "../../../public/Images/men.png"
import women from "../../../public/Images/women.png"
import hoodie from "../../../public/Images/hoodie.png"
import tshirt from "../../../public/Images/tshirt.png"
import jacket from "../../../public/Images/jacket.png"
import sweatshirt from "../../../public/Images/sweatshirt.png"
import denim from "../../../public/Images/denim.png"
import sweater from "../../../public/Images/5.webp"
import Link from 'next/link'



const Featured4 = () => {
    return (
        <div className='featured'>
            <div className="feature-head">
                <h1>ALL CATEGORIES</h1>
            </div>

            <div className="feature-container2">
                <Link href="./shop" className='h2'> <div className="smallbox">
                    <Image alt="Item" src={men}
                        className='bg-img'
                    />
                    <h3 className='h2'>MEN</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'> <div className="smallbox">
                    <Image alt="Item" src={women}
                        className='bg-img'
                    />
                    <h3 className='h2'>WOMEN</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'>  <div className="smallbox">
                    <Image alt="Item" src={hoodie}
                        className='bg-img'
                    />
                    <h3 className='h2'>HOODIE</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'>   <div className="smallbox">
                    <Image alt="Item" src={tshirt}
                        className='bg-img'
                    />
                    <h3 className='h2'>T-SHIRT</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'>  <div className="smallbox">
                    <Image alt="Item" src={jacket}
                        className='bg-img'
                    />
                    <h3 className='h2'>T-SHIRT</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'>   <div className="smallbox">
                    <Image alt="Item" src={sweatshirt}
                        className='bg-img'
                    />
                    <h3 className='h2'>SWEATSHIRT</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'>  <div className="smallbox">
                    <Image alt="Item" src={denim}
                        className='bg-img'
                    />
                    <h3 className='h2'>DENIM</h3>
                </div>
                </Link>

                <Link href="./shop" className='h2'> <div className="smallbox">
                    <Image alt="Item" src={sweater}
                        className='bg-img'
                    />
                    <h3 className='h2'>SWEATER</h3>
                </div>
                </Link>

            </div>
            <Line />

        </div>
    )
}

export default Featured4
