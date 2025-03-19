import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection from '../components/Features/FeatureSection'
import Workflow from '../components/Workflow/Workflow'
import Pricing from '../components/Pricing/Pricing'



const Home = () => {


    return (
        <>
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
        </>
    )

}

export default Home