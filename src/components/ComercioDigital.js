import React from 'react'
import styled from 'styled-components'
import ComercioBanner from '../img/comercioBanner.jpg'
import ComercioLogo from '../img/comercio.png'

export default function ComercioDigital() {
    return (
        <ComercioD>
            {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg> */}
            <div className='conten'>
                <div className='info'>
                   <h2>ADHERITE A COMERCIO DIGITAL</h2>
                   <span>Completa los datos para que te sumemos a nuestro directorio. </span>
                   <div className='btns'>
                        <button className='btn1'>SUMARME</button>
                        <button className='btn3'>INFORMACIÓN</button>
                    </div>
                    
                </div>
                <div className='logo'>
                    <img src={ComercioLogo} alt='cio tartagal' className='cioImg'/>
                </div>
            </div>
                   
        </ComercioD>
    )
}

const ComercioD = styled.section`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(192, 22, 255, 0.25), rgba(192, 22, 255, 0.65)), url(${ComercioBanner});
    background-size: cover;
    color: #fff;
    padding-top: 1cm;

svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 73px;
}

.shape-fill {
    fill: rgba(22, 162, 217, 0.70);
}


    .conten{
        display: flex;
        padding: 5rem 15rem;
    }

    .logo{
        text-align: right;
        flex:1;
    }

    .cioImg{
        height: 190px;
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
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #C019FF;
    box-shadow:  1px 2px 0px #9d15d1, 
                -1px -2px 0px #e31eff;
    
 }

 @media screen and (max-width: 769px){
    background-size: contain no-repeat;
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