import React,{useEffect} from 'react'
import contactPic from '../Pics/contactPic.svg'
import  './gobiCss.css'
import Aos from 'aos'
import 'aos/dist/aos.css'



const ContactMe = () => {

    useEffect(()=>{
        Aos.init({duration:800})
    },[])



    return (
        <div id='contact' className='contactFull'>
            <div className='contactTitle'>Contact Me</div>
            <div  className='contactMain'>
            <div className='contactPic'>
                <img src={contactPic} alt='contact-svg' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-out" data-aos-duration="16000"/>
            </div>
            <div >
            <form className='contactForm'>
                <div className='contactInput'><input type='text' required placeholder='Name'/></div>
                <div className='contactInput'><input type='email' required placeholder='Email'/></div>
                <div className='contactInput'><input type='number'  placeholder='Phone Number'/></div>
                <div className='contactInput'><textarea placeholder='A little description'/></div>     
                <div className='contactInput'><input type="submit" value="Submit"/></div>
            </form>
            </div>
            <div>
            Email me.....
            <a href = "mailto: gobishanthan04@gmail.com">gobishanthan04@gmail.com</a>
            </div>
            <div>
                Call me.....
                (647) 299-0439
            </div>
            </div>
        </div>
    )
}

export default ContactMe
