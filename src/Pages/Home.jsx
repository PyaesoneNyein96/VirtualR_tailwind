import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection from '../components/Features/FeatureSection'
import Workflow from '../components/Workflow/Workflow'
import Pricing from '../components/Pricing/Pricing'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'



const Home = () => {


    return (
        <>
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
        </>
    )

}

export default Home