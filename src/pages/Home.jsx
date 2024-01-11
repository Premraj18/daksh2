import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Achivement from '../components/Achivement'
import SponsorCrausal from '../components/sponser/SponserCrausal'
import ClubActivity from '../components/CLubActivity/ClubActivity'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Achivement/>
      {/* <ClubActivity/> */}
      <SponsorCrausal/>
    </Layout>
  )
}

export default Home
