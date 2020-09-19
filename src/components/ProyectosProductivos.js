import React from 'react'
import styled from 'styled-components'
import ProyectoBanner from '../img/proyectoBanner.jpg'
import ProyectoLogo from '../img/proyect.png'

export default function ProyectosProductivos() {
    return (
        <Proyects>
            <div className='conten'>
                <div className='info'>
                   <h2>PROYECTOS PRODUCTIVOS</h2>
                   <span>Potenciá tu emprendimiento con el programa de financiación del Gobierno de Salta </span>
                   <div className='btns'>
                        {/* <button className='btn1'>SUMARME</button> */}
                        <button className='btn3'>INFORMACIÓN</button>
                    </div>
                    
                </div>
                <div className='logo'>
                    <img src={ProyectoLogo} alt='cio tartagal' className='cioImg'/>
                </div>
            </div>
        </Proyects>
    )
}

const Proyects = styled.section`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(28, 142, 201, 0.25), rgba(28, 142, 201, 0.65)), url(${ProyectoBanner});
    background-size: cover;
    color: #fff;
    padding-top: 1cm;

    .conten{
        display: flex;
        padding: 5rem 15rem;
    }

    .logo{
        text-align: right;
        flex:1;
    }

    .cioImg{
        height: 170px;
    }

    .info{
        flex:1;
        text-align: left;
        width: 400px;
        white-space: initial;
        font-size: 1.5em;
        
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
    background: #FFA61A;
    box-shadow:  1px 2px 0px #d19300, 
                -1px -2px 0px #ffd300;
    
 }
 .btn3{
    margin-top: 20px;
    /* margin-left: 20px; */
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #C9303C;
    box-shadow:  1px 2px 0px #a52731, 
                -1px -2px 0px #ed3947;
    
 }

 @media screen and (max-width: 769px){
     .conten{
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
        padding: 10px;
    }
 }
`