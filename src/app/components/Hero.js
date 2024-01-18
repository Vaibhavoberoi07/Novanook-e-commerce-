import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id='herocontainer'>
      <div className="heromain">
        <h1>Explore New 2024 Winter collection</h1>
        <h3>Elevate your style with timeless fashion, where comfort meets trend in every stitch.</h3>
        <div className="buttons">
        <Link href="/shop"> <button className='btn'>Shop Men</button></Link>
        <Link href="/shop">  <button className='btn'>Shop Women</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
