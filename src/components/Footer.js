import React from 'react'
import styled from 'styled-components'
import logo from '../img/NoPath.png'


export default function Footer() {
    return (
        <Foot>
            <div className='conten'>
                <img src={logo} alt="municipalidad de tartagal" className='logo' />
            </div>
                <span>© Copyright 2019 - 2020 GESTIÓN MARIO MIMESSI   |   TODOS LOS DERECHOS RESERVADOS </span>
        </Foot>
    )
}

const Foot = styled.footer`

    background-color: #343a40;
    height: 200px;
    display: block;
    flex-direction: column;
    color: #fff;
    text-align: center;

    .conten{
        padding-top: 2rem;
    }

    .logo{
        height: 65px;
    }

`