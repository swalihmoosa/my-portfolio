import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animations/AnimatedLetters'
import './../../assets/scss/Skills.scss'
import './../../assets/scss/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faLightbulb, faMedal, faMugHot, faPenRuler, faUsers } from '@fortawesome/free-solid-svg-icons'


export default function Skills() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [count,setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <div className='main-container'>
            <div className="container about-page">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&','','e','x','p','e','r','i','e','n','c','e']}
                        idx={10}
                    />
                </h1>
                <div className="second-container">
                    <div className="text-zone">
                        <p>
                            Expert in front-end development including technologies like <b>html</b>,<b>css</b>,<b>javascript</b>,
                            <b>jQuery</b>,<b>sass</b>,<b>bootstrap</b>,<b>reactjs</b> and also in the back-end technologies like
                            <b>python</b>,<b>django</b>
                        </p>
                        <p align="LEFT">
                            I’m not a designer but I have a good sense of aesthetics, and
                            experience in responsive, mobile-first web design. I put special
                            effort into optimizing my code and providing the best user
                            experience. I would love to give you any kind of support also after
                            the project's completion. I guarantee a commitment during work on
                            your project.
                        </p>
                        <p>
                            If I need to define myself in one sentence that would be a family
                            person, father of a beautiful daughter, a sports fanatic,
                            photography enthusiast, and tech-obsessed!!!
                        </p>
                    </div>
        
                    <div class="skills">
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faPenRuler} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>Happy to Free Services %</p>
                        </div>
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faUsers} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>am happy to Helping Others %</p>
                        </div>
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faMedal} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>You can share any Tech related ideas with Me%</p>
                        </div>
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faLightbulb} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>Innovating New Ideas %</p>
                        </div>
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faMugHot} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>Talk with me like you'r Coffee friend</p>
                        </div>
                        <div class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faHourglass} color="#ffd700" />
                            <h6>{count}</h6>
                            <p>Implement ideas with propor Time.</p>
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}