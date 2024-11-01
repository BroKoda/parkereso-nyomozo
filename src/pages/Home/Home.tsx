import { useCallback, useEffect, useState } from 'react'
import 'animate.css';
import WOW from 'wow.js'
import emailjs from '@emailjs/browser'
import './home.scss'
import Contact from '../../sections/Contact/Contact'
import Copyright from '../../sections/Copyright/Copyright'
import Footer from '../../sections/Footer/Footer'
import AboutUs from '../../sections/AboutUs/AboutUs'
import Services from '../../sections/Services/Services'
import Header from '../../sections/Header/Header'

function Home() {

  useEffect(() => {
    new WOW().init();
    emailjs.init({ publicKey: '5h6xOpkT8HrAedbJ5', });
  }, [])

  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
      <Copyright />
    </>
  )
}

export default Home
