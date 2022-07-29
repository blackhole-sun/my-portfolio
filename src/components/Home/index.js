import React, { useEffect } from 'react'
import { useState } from 'react';
import LogoTitle  from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/index.js'
import './index.scss'
const Home = () => {
  const [letterClass,setLetterClass] = useState('text-animate');
  const nameArray = ['h','a','s','h','a','n','k'];
  const jobArray = ['f','u','l','l',' ','s','t','a','c','k',' ','d','e','v','l','o','p','e','r'];
  useEffect(()=>{
     setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000);
  },[])
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_12`}>i,</span>
            <br/>
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span>


            <img src={LogoTitle} alt="shashank_image"/>
            <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={24} />
            </h1>
            <h2>Frontend/Backend/Mobile App Developer</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home