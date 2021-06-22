import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import contactPic from '../Pics/contactPic.svg'
import  './gobiCss.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FaGithubSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {postPortfolioContactInfo} from '../action/actions'




const ContactMe = () => {
const dispatch = useDispatch()
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [phoneNumber,setPhoneNumber] = useState('')
const [comment,setComment] = useState('')


    useEffect(()=>{
        Aos.init({duration:800})
    },[])

    const contactSubmit =(e)=>{
        e.preventDefault()
        dispatch(postPortfolioContactInfo({name,email,phoneNumber,comment}))
    }

    return (
        <div id='contact' className='contactFull'>
            <div className='contactTitle'>Contact Me</div>
            <div  className='contactMain'>
            <div className='contactPic'>
                <img src={contactPic} alt='contact-svg' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="16000"/>
            </div>
            <div className='contactForm'>
            <form  onSubmit={contactSubmit}>
                <div className='contactInput'><input type='text' required placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/></div>
                <div className='contactInput'><input type='email' required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                <div className='contactInput'><input type='text'  placeholder='Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/></div>
                <div className='contactInput'><textarea placeholder='A little description' value={comment} onChange={(e)=>setComment(e.target.value)}/></div>
                <div className='contactInput'><input type="submit" value="Submit"/></div>
            </form>
            </div>
            </div>
            <div className='icons'>
            <a href = "mailto: gobishanthan04@gmail.com"><AiOutlineMail className='fontIcons'/></a>
            <a href = "https://github.com/gobishanthan"><FaGithubSquare className='fontIcons'/></a>
            </div>
        </div>
    )
}

export default ContactMe
