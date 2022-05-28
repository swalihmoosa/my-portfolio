import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import '../../assets/scss/Home.scss'
import AnimatedLetters from '../animations/AnimatedLetters'
import me from '../../assets/images/me.jpg'



export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['w', 'a', 'l', 'i', 'h']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img
                        src={LogoTitle}
                        alt="JavaScript Developer Name, Web Developer Name"
                    />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={19}
                    />
                    </h1>
                    <h2>Full Stack Developer</h2>

                    <div className="button-container">
                        <Link to="/contact" className="flat-button contact">
                            <p>
                                CONTACT ME
                            </p>
                        </Link>
                        <Link to="/contact" className="flat-button">
                            <p>
                                DOWNLOAD CV
                            </p>
                        </Link>

                    </div>

                </div>
                <div className="image">
                    <div class="spin-container">
                        <div class="shape">
                            <div class="bd">
                                <img src={me} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
      </>
    )
}
