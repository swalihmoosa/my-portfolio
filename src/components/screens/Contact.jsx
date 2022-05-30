import { faGithub, faInstagram, faLinkedin, faStackOverflow, faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faL, faLocationDot, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animations/AnimatedLetters'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './../../assets/scss/Contact.scss'
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/arrow-lottie.json';
import validator from 'validator'


export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [subject,setSubject] = useState("")
    const [mobile,setMobile] = useState("")
    const [message,setMessage] = useState("")
    const [isLoading,setLoading] = useState(false)
    const [errorMessage,setErrorMesaage] = useState("")
    const [emailError, setEmailError] = useState('')

    // const validateEmail = (e) => {
    //   var email = e.target.value
    
    //   if (validator.isEmail(email)) {
    //     console.log(validator.isEmail(email))
    //   } else {
    //     console.log('Enter valid Email!')
    //   }
    // }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            Name: name,
            Mail:mail,
            Mobile: mobile,
            Subject: subject,
            Message:message,
        }
        if( name !== "" && validator.isEmail(mail) === true && mobile.length === 10 && subject !== "" && message !== ""){
            setLoading(true)
            setErrorMesaage("")
            setStyle({
                ...style,
                name:{border:"2px solid transparent"},
                message:{border:"2px solid transparent"},
                mail:{border:"2px solid transparent"},
                mobile:{border:"2px solid transparent"},
                subject:{border:"2px solid transparent"},
            })
            axios
                .post('https://sheet.best/api/sheets/d2be6958-4241-4b29-b41d-23e2cb1c5ea5',data)
                .then((response) => {
                    Swal.fire({
                        title: 'Success..!',
                        text: 'Successfully contacted me...I will contact you as soon as possible',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    setName("")
                    setMail("")
                    setMobile("")
                    setSubject("")
                    setMessage("")
                    setLoading(false)
                }).catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: 'Error..!',
                        text: 'An error occured...try after sometime',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    })
                });
        }
        if( message === "" ){
            setErrorMesaage("* all fields required")
            setStyle({
                ...style,
                message:{border:"2px solid red"},
                name:{border:"2px solid transparent"},
                mail:{border:"2px solid transparent"},
                mobile:{border:"2px solid transparent"},
                subject:{border:"2px solid transparent"},
            })
        }
        if( subject === "" ){
            setErrorMesaage("* all fields required")
            setStyle({
                ...style,
                subject:{border:"2px solid red"},
                name:{border:"2px solid transparent"},
                mail:{border:"2px solid transparent"},
                mobile:{border:"2px solid transparent"},
                message:{border:"2px solid transparent"},
            })
        }
        if( mobile.length < 10 || mobile.length > 10 ){
            setErrorMesaage("* Enter valid mobile..!")
            setStyle({
                ...style,
                mobile:{border:"2px solid red"},
                name:{border:"2px solid transparent"},
                mail:{border:"2px solid transparent"},
                message:{border:"2px solid transparent"},
                subject:{border:"2px solid transparent"},
            })
        }
        if(!validator.isEmail(mail)){
            setErrorMesaage("* Enter valid email..!")
            setStyle({
                ...style,
                mail:{border:"2px solid red"},
                name:{border:"2px solid transparent"},
                message:{border:"2px solid transparent"},
                mobile:{border:"2px solid transparent"},
                subject:{border:"2px solid transparent"},
            })
        }
        if( name === "" ){
            setErrorMesaage("* all fields required")
            setStyle({
                ...style,
                name:{border:"2px solid red"},
                message:{border:"2px solid transparent"},
                mail:{border:"2px solid transparent"},
                mobile:{border:"2px solid transparent"},
                subject:{border:"2px solid transparent"},
            })
        }
    }

    
    const [style, setStyle] = useState({
        name :{
            border : '2px solid transparent'
        },
        mail :{
            border : '2px solid transparent'
        },
        mobile :{
            border : '2px solid transparent'
        },
        subject :{
            border : '2px solid transparent'
        },
        message :{
            border : '2px solid transparent'
        }
    })

    const lottieStyle ={
        marginLeft: 'auto',
        marginRight:0,
    }

    return (
        <div className='contact-main-container'>
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
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <li className="half" style={style.name} >
                                        <input placeholder="Name" value={name} type="text" required onChange={(e)=>setName(e.target.value)} />
                                    </li>
                                    <li className="half" style={style.mail} >
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            value={mail}
                                            required
                                            onChange={(e)=>setMail(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.mobile} >
                                        <input
                                            placeholder="Mobile"
                                            type="number"
                                            value={mobile}
                                            required
                                            onChange={(e)=>setMobile(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.subject}>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            value={subject}
                                            required
                                            onChange={(e)=>setSubject(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.message} >
                                        <textarea
                                            placeholder="Message"
                                            value={message}
                                            required
                                            onChange={(e)=>setMessage(e.target.value)}
                                        ></textarea>
                                    </li>
                                    {
                                        errorMessage !== "" ?
                                            <p className="error-mesaage">
                                                {errorMessage}
                                            </p>
                                        : ""
                                    }
                                    <li className='submit' >
                                        {
                                            isLoading ? 
                                                <Lottie 
                                                    options={defaultOptions}
                                                    height={50}
                                                    width={100}
                                                    style={lottieStyle}
                                                />
                                            :
                                                <input type="submit" className="flat-button" value="SEND" onClick={handleSubmit} />
                                        }
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div> 
                    <div className='contact-link'>
                        <a href='geo:124.028582,-29.201930' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faLocationDot} color="#ffd700" />
                            <h6>Chembayil house Kumbalakode (PO) Punjappadam, Pazhayannur, Thrissur 680587</h6>
                        </a>
                        <a href='tel:8129133008' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faPhone} color="#ffd700" />
                            <h6>+91 8129133008</h6>
                        </a>
                        <a href='mailto:swalihmoosa72@gmail.com' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faEnvelope} color="#ffd700" />
                            <h6>swalihmoosa72@gmail.com</h6>
                        </a>
                        <hr className="line" />
                        <div className="small-links">
                            <a href='https://github.com/swalihmoosa' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faGithub} color="#ffd700" />
                            </a>
                            <a href='https://www.linkedin.com/in/swalih-moosa/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faLinkedin} color="#ffd700" />
                            </a>
                            <a href='https://stackoverflow.com/users/19142237/swalih-moosa' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faStackOverflow} color="#ffd700" />
                            </a>
                            <a href='https://wa.me/8129133008' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faWhatsapp} color="#ffd700" />
                            </a>
                            <a href='https://twitter.com/moosa_swalih' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faTwitter} color="#ffd700" />
                            </a>
                            <a href='https://www.instagram.com/junior_moosa/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faInstagram} color="#ffd700" />
                            </a>
                            <a href='https://www.facebook.com/swalih.moosa.7/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faFacebook} color="#ffd700" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}
