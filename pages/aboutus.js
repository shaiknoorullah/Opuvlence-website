import React from 'react'
import AboutusHero from '../components/aboutus'
import AboutUsContainer from '../components/aboutUsContainer'
import AboutUsBehind from '../components/aboutUsBehind'
import AboutUsMeet from '../components/aboutUsMeet'

const Aboutus = () => {
  return (
    <div>
        <AboutusHero />
        <AboutUsContainer left={true} />
        <AboutUsBehind />
        <AboutUsContainer left={false} />
        <AboutUsMeet />

    </div>
  )
}

export default Aboutus
