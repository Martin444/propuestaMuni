import React from 'react'
import styled from 'styled-components'
import GridNotice from '../components/Notices/gridNotice'
import NoticeBanner from '../img/banner.jpg'


export default function Notices() {
    return (
        <Notice>
            <div className = 'boar'>
                <section className= 'init'>
                    <h1>MUNICIPALIDAD DE TARTAGAL</h1>
                    <p>NOTICIAS</p>
                    {/* <button type='button' className='contact-btn'>
                        CONTACTO
                    </button> */}
                </section>
            </div>
            <GridNotice/>
        </Notice>
    )
}

const Notice = styled.div`
top: 0;
left: 0;
position: relative;
text-align:center;
/* background-size: cover no-repeat; */

.boar{
    height:100%;
    padding-top: 1pc;
    padding:6.75rem 5.20rem;
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${NoticeBanner});
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

@media screen and (max-width : 768px){
        .boar{
            height:100%;
            padding-top: 1pc;
            padding:5.75rem 0.20rem;
            background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.45), #343a40), url(${NoticeBanner});
            background-size: contain no-repeat;
        }

        .init h1{
            font-size: 2rem;
            font-weight: 1;
        }
    }
`