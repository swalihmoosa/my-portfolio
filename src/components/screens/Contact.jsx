import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animations/AnimatedLetters'
import './../../assets/scss/Contact.scss'


export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='main-container'>
            <div className="container contact-page">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className="second-container">
                    <div className="text-zone">
                        <p>
                            I am interested in freelance opportunities - especially ambitious or
                            large projects. However, if you have other request or question,
                            don't hesitate to contact me using below form either.
                        </p>
                        <div className="contact-form">
                            <form >
                                <ul>
                                    <li className="half">
                                        <input placeholder="Name" type="text" name="name" required />
                                    </li>
                                    <li className="half">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            name="subject"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div> 
                    <ul className='contact-link'>
                        <li class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faUsers} color="#ffd700" />
                            <h6>7458961230</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}
