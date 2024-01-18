import Image from 'next/image'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Featured2 from './components/Featured2'
import Section from './components/Section'
import Featured3 from './components/Featured3'
import Featured4 from './components/Featured4'
import Footer from './components/Footer'



export default function Home() {
  return (
    <>

    <div className="landingpage">
     <video autoPlay loop muted className="video">
            <source
              src="homepage/clip.mp4"
              type="video/mp4"
            />
          </video>
      <Hero />
      <Featured/>
      <Featured2/>
      <Section/>
      <Featured3/>
      <Featured4/>
      <Footer/>
      </div>
    </>
  )
}
