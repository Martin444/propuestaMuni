import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cioImage from '../img/cio.png'
import CioBanner from '../img/cioban.jpg'

export default function CioSect() {
    return (
        <CioSecte>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            <h1>AUTOGESTIÓN</h1>
            
            <div className='cio'>
                <div className='info'>
                   <h2>C.I.O Tartagal</h2>
                   <span>Consultá las últimas novedades con los 
                       partes del Centro de Informaciones Operativas de Tartagal, <strong>si tenés sintomas</strong>.</span>
                    <div className='btns'>
                        <button className='btn1'>CONTACTÁCTANOS</button>
                        <Link to='/cio' >
                            <button className='btn3'>
                                    NOVEDADES
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='logo'>
                    <img src={cioImage} alt='cio tartagal' className='cioImg'/>
                </div>
            </div>
                    

        </CioSecte>
    )
}

const CioSecte = styled.section`

    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(22, 162, 217, 0.25), rgba(22, 162, 217, 0.65)), url(${CioBanner});
    background-size: cover;
    color: #fff;

    .cio{
        display:flex;
        padding: 5rem 15rem;
    }

    .btns{
        display: block;
    }

    .logo{
        text-align: right;
    }

    .cioImg{
        height: 190px;
    }

    .info{
        flex:1;
        text-align: left;
        width: 400px;
        
    }

    .info span{
        /* overflow: hidden; */
        white-space: initial;
        font-size: 1.5em;
    }

    .logo{
        flex:1;
    }

    h1{
        font-size: 40px;
        font-weight: 499;
    }

svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 73px;
}

.shape-fill {
    fill: #343a40;
}

 .btn1{
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 130px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #D90032;
    box-shadow:  1px 2px 0px #b00029, 
                -1px -2px 0px #ff003c;
    
 }
 .btn3{
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 130px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #07698C;
    box-shadow:  1px 2px 0px #065571, 
                -1px -2px 0px #087da7;
    
 }

 @media screen and (max-width: 769px){
     .cio{
         display: block;
         padding: 0rem 1rem;
         text-align: center;
     }
     .info{
        flex:1;
        text-align: center;
        width: 100%;
    }
    .logo{
        text-align: center;
    }
 }

`