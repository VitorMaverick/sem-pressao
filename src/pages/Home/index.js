import React from 'react';
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Services from '../../components/Services'
import Team from '../../components/Team'
import Footer from '../../components/Footer'



export default function Home(){
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <Services />
            <Team />
            <Footer />
        </div>
        
    );
}