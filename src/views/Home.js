import React from 'react'
import styled from 'styled-components'
import Cenat from '../components/Cenat'
import CioSect from '../components/CioSect'
import ComercioDigital from '../components/ComercioDigital'
import ProyectosProductivos from '../components/ProyectosProductivos'
import Nov from '../img/banner.jpg'

export default function Home() { 
    return (
        <Homee>
            <div className = 'boar'>
                <section className= 'init'>
                    <h1>MUNICIPALIDAD DE TARTAGAL</h1>
                    <p>Gestión Mario Mimessi</p>
                    <button type='button' className='contact-btn'>
                        CONTACTO
                    </button>
                </section>
            </div>
            <CioSect/>
            <ComercioDigital/>
            <ProyectosProductivos/>
            <Cenat/>
        </Homee>
    )
}


const Homee = styled.div`

top: 0;
left: 0;
/* background-size: cover no-repeat; */

.boar{
    height:100%;
    padding-top: 1pc;
    padding:10.75rem 5.20rem;
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${Nov});
    background-size: cover;
}


.init{
    width: 100%;
    margin-top:1pc;
    display: block;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    /* height: 669px; */
    color: #fff;
}

.init h1{
    font-size: 4rem;
    font-weight: 1;
}

.init p {
    font-size: 1.5em;
}

.contact-btn{
    color: #fff;
    height: 40px;
    width: 250px;
    border: none;
    padding: 10px ;
    padding-bottom: 10px;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
    border-radius: 5px;
    background: #B38029;
    transition: all .3s ;
    box-shadow:  1px 2px 0px #684a18, 
                -1px -2px 0px #feb63a;
    

    &:hover {
        background: #343a40;
        color: #ffffff;
    }
}

    @media screen and (max-width : 768px){
        .boar{
            height:100%;
            padding-top: 1pc;
            padding:5.75rem 0.20rem;
            background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${Nov});
            background-size: contain no-repeat;
        }

        .init h1{
            font-size: 2rem;
            font-weight: 1;
        }
    }

`