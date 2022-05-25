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
        <div className='about-main-container'>
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
                            I'm very ambitious full-stack developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p>
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p>
                            If I need to define myself in one sentence that would be a family
                            person,son of a loving father and mother,younger brother of three and 
                            elder brother of one.A sports fanatic, a good reader, music lover,
                            photography enthusiast, and tech-obsessed..!!!
                        </p>
                    </div>
        
                    <div class="experience">
                        <div class="single-card">
                            <div class="time">2021 - PRESENT</div>
                            <h6>Software Engineer</h6>
                            <p>Works as a Software Engineer in Steyp Private Limited</p>
                        </div>
                        <div class="single-card">
                            <div class="time">2020 - 2021</div>
                            <h6>Software Intern</h6>
                            <p>Completed my FullStack development internship from Network Academy, Ernakulam</p>
                        </div>

                        <div class="single-card">
                            <div class="time">2017 - 2020</div>
                            <h6>Bsc Computer Science</h6>
                            <p>Completed my Bsc in computer science from DonBosco College Mannuthy, Thrissur</p>
                        </div>
                        <div class="single-card">
                            <div class="time">2015 - 2017</div>
                            <h6>Higher Secondary</h6>
                            <p>Completed my requirements for higher secondary from St. Mary's HSS Arakulam</p>
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}
