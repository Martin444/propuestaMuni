import React from 'react'
import styled from 'styled-components'
import Boletines from '../components/CIO/boletines'
import CovidCount from '../components/CIO/covidCount'
import CioBanner from '../img/cioban.jpg'

export default function Cio() {
    return (
        <Ciot>
            <div className='boar'>
                <section className= 'init'>
                    <h1>C.I.O TARTAGAL</h1>
                    <CovidCount/>
                    <p>SI TIENES ALGUNOS DE LOS SINTOMAS</p>
                    <a href="https://wa.me/5493873413199">

                        <button type='button' className='btn1'>
                            CONTACTA
                        </button>
                    </a>
                </section>
            </div>
            <Boletines/>
        </Ciot>
    )
}


const Ciot = styled.section`
    top: 0;
    left: 0;
    position: relative;
    text-align:center;
    /* background-size: cover no-repeat; */

    .boar{
        height:100%;
        padding-top: 1pc;
        padding:2.75rem 5.20rem;
        background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${CioBanner});
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

.btn1{
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #D90032;
    box-shadow:  1px 2px 0px #b00029, 
                -1px -2px 0px #ff003c;
    
 }

 @media screen and (max-width : 768px){
        .boar{
            height:100%;
            padding-top: 1pc;
            padding:3.75rem 0.20rem;
            background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${CioBanner});
            background-size: contain no-repeat;
        }

        .init h1{
            font-size: 2rem;
            font-weight: 1;
        }

        .init p {
            font-size: 1em;
        }
    }


`