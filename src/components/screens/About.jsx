import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animations/AnimatedLetters'
import './../../assets/scss/About.scss'
import './../../assets/scss/Home.scss'


export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

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
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className="second-container">
                    <div className="text-zone">
                        <p>
                            I'm very ambitious front-end developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p align="LEFT">
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p>
                            If I need to define myself in one sentence that would be a family
                            person, father of a beautiful daughter, a sports fanatic,
                            photography enthusiast, and tech-obsessed!!!
                        </p>
                    </div>
        
                    <div class="experience">
                        <div class="single-card">
                            <div class="time">2019 - PRESENT</div>
                            <h6>Freelance Web Developer</h6>
                            <p>Working happily on my own web projects</p>
                        </div>
                        <div class="single-card">
                            <div class="time">2018 - 2019</div>
                            <h6>Lead Web Developer</h6>
                            <p>Beautiful project for a major digital agency</p>
                        </div>

                        <div class="single-card">
                            <div class="time">2017 - 2018</div>
                            <h6>Senior Web Designer</h6>
                            <p>Inhouse web designer for ecommerce firm</p>
                        </div>
                        <div class="single-card">
                            <div class="time">2016 - 2017</div>
                            <h6>Junior Web Designer</h6>
                            <p>Junior web designer for small web agency</p>
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}
