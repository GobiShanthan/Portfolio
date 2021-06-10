import React,{useEffect,useRef,useState} from 'react'
import '../index.css'
import software from '../Pics/software.svg'
import html from '../Pics/html.png'
import css3 from '../Pics/css3.png'
import js from '../Pics/js.png'
import react from '../Pics/react.png'
import redux from '../Pics/redux.png'
import jwt from '../Pics/jwt.png'
import mongoDb from '../Pics/mongoDb.png'
import nodejs from '../Pics/nodejs.png'
import mongoose from '../Pics/mongoose.png'
import express from '../Pics/express.png'
import axiosPic from '../Pics/axios.png'
import bootstrap from '../Pics/bootstrap.png'
import material from '../Pics/material.png'
import reactRouter from '../Pics/reactRouter.png'

const PortfolioMain =()=>{
const [height,setHeight] = useState()
    const stageCanvasRef = useRef(null);

    useEffect( () => {
        if(stageCanvasRef.current){
            setHeight(stageCanvasRef.current.parentElement.clientHeight)
        }

    }, [stageCanvasRef]);


    return(
        <div className='Main' ref = {stageCanvasRef} id='topmain'>
            <div className='title'>
            <div className='intro'>
                Hello, My name is Gobi 
            </div>
            <div className='intro2'>
                I am a Web Developer
            </div>
            </div>

  
                <div className='html'>
                <img src={html} alt='html'/>
                </div>

                <div className='css3'>
                <img src={css3} alt='css3' />
                </div>

                <div className='js'>
                <img src={js} alt='js' />
                </div>


                <div className='react'>
                <img src={react} alt='react'/>
                </div>
                <div className='redux'>
                <img src={redux} alt='redux'/>
                </div>


                <div className='jwt'>
                <img src={jwt} alt='jwt' />
                </div>

                <div className='nodejs'>
                <img src={nodejs} alt='nodejs' />
                </div>

                <div className='mongoDb'>
                <img src={mongoDb} alt='mongoDb' />
                </div>
                <div className='mongoose'>
                <img src={mongoose} alt='mongoose'/>
                </div>
                <div className='express'>
                <img src={express} alt='express'/>
                </div>

                <div className='material'>
                <img src={material} alt='material'/>
                </div>

                <div className='reactRouter'>
                <img src={reactRouter} alt='reactRouter'/>
                </div>

                <div className='axiosPic'>
                <img src={axiosPic} alt='axiosPic'/>
                </div>
                
                <div className='bootstrap'>
                <img src={bootstrap} alt='bootstrap'/>
                </div>


                <div className='software'>
                <img src={software} alt='software' style={{marginTop:height?height-height*1.9:'50vh'}}/>
                </div>

        </div>
    )
}


export default PortfolioMain