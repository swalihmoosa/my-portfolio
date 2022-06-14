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

    useEffect(() => {
        count !== 100 ?
            setTimeout(() => {
                setCount(count + 1)
            }, 25)
        : setCount(100)
    },[count])


    return (
        <div className='skills-main-container'>
            <div className="container skill-page">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&','','e','x','p','e','r','i','e','n','c','e']}
                        idx={10}
                    />
                </h1>
                <h1 className='responsive one' >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&',]}
                        idx={10}
                    />
                </h1>
                <h1 className='responsive two'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['e','x','p','e','r','i','e','n','c','e']}
                        idx={10}
                    />
                </h1>
                <div className="second-container">
                    <div className="text-zone">
                        <p>
                            Expert in front-end development including technologies 
                            like <b>html</b> , <b>css</b> , <b>javascript</b> , <b>jQuery</b> , <b>sass</b> , <b>bootstrap</b> , <b>reactjs</b> and 
                            also in the back-end technologies like <b>python</b> , <b>django</b>
                        </p>
                        <p>
                            I’m not a designer but I have a good sense of aesthetics, and
                            experience in responsive, mobile-first web design. I put special
                            effort into optimizing my code and providing the best user
                            experience. I would love to give you any kind of support also after
                            the project's completion. I guarantee a commitment during work on
                            your project.
                        </p>
                        <p>
                            I can use languages like <b>English</b> , <b>Hindi</b> , <b>Malayalam</b> and <b>Tamil</b>
                        </p>

                    </div>
                    <div class="skills">
                        <div className="line" >
                            <div className="round first"></div>
                            <div className="round second"></div>
                            <div className="round third"></div>
                            <div className="round fourth"></div>
                            <div className="round fifth"></div>
                            <div className="round sixth"></div>
                        </div>
                        <div class="single-card first-child">
                            <FontAwesomeIcon className='font-icon' icon={faPenRuler} color="#ffd700" />
                            <div className="description">
                                <h6>{count}</h6>
                                <p>Happy to Free Services %</p>
                            </div>
                        </div>
                        <div class="single-card second-child">
                            <div className="description">
                                <h6>{count}</h6>
                                <p>am happy to Helping Others %</p>
                            </div>
                            <FontAwesomeIcon className='font-icon' icon={faUsers} color="#ffd700" />
                        </div>
                        <div class="single-card third-child">
                            <FontAwesomeIcon className='font-icon' icon={faMedal} color="#ffd700" />
                            <div className="description">
                                <h6>{count}</h6>
                                <p>You can share any Tech related ideas with Me%</p>
                            </div>
                        </div>
                        <div class="single-card fourth-child">
                            <div className="description">
                                <h6>{count}</h6>
                                <p>Innovating New Ideas %</p>
                            </div>
                            <FontAwesomeIcon className='font-icon' icon={faLightbulb} color="#ffd700" />
                        </div>
                        <div class="single-card fifth-child">
                            <FontAwesomeIcon className='font-icon' icon={faMugHot} color="#ffd700" />
                            <div className="description">
                                <h6>{count}</h6>
                                <p>Talk with me like you'r Coffee friend</p>
                            </div>
                        </div>
                        <div class="single-card sixth-child">
                            <div className="description">
                                <h6>{count}</h6>
                                <p>Implement ideas with propor Time.</p>
                            </div>
                            <FontAwesomeIcon className='font-icon' icon={faHourglass} color="#ffd700" />
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}
