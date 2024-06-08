import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import About from '../components/About'
import OurProcess from '../components/OurProcess'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <About />
            <OurProcess />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home