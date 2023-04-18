import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Changes from './components/changes';
import Current from './components/cureent';
import Fotter from './components/fotter';

AOS.init();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className="text-3xl font-bold  flex justify-center ">
      <div
    data-aos="fade-up" data-aos-offset="100"data-aos-delay="50"data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      EcoSystem 
  </div>
    </h1>
    <Navbar />
    <Hero />
    <Changes />
    <Current/>
    <Fotter />
    </div>

  )
}

export default App
