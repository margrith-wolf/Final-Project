import React from 'react'
import './HomeStyles.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Faq from './Faq';
import {Contact} from './Contact';
import Footer from './Footer';
import Table from './Table';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Table />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home