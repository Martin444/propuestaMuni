import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'

export default function CovidCount() {

    const [counts, serCounts] = useState([]);

    useEffect(()=> {
        firebase.firestore().collection('covidcount').get()
        .then((doc)=>{
            
            
            doc.docs.map((items, index) =>
                serCounts(items.data())
            )
            
        })
    });

    return (
        <Count>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.newconfirmados}</p>
                </div>
                <h2>Nuevos confirmados</h2>
            </div>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.positivos}</p>
                </div>
                <h2>Total positivos</h2>
            </div>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.total}</p>
                </div>
                <h2>Total acumulados</h2>
            </div>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.totalaltas}</p>
                </div>
                <h2>Altas acumuladas</h2>
            </div>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.newaltas}</p>
                </div>
                <h2>Nuevas altas</h2>
            </div>
            <div className='conten'>
                <div className='cubo'>
                    <p>{counts.fallecidos}</p>
                </div>
                <h2>Fallecimientos</h2>
            </div>
        </Count>
    )
}

const Count = styled.div`
    margin: 0;
    /* padding:0 1rem; */
    width: 100%;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    .conten{
        display: inline-block;
        justify-content: center;
        text-align:center;
        margin: 0rem 0rem;
        padding: 0;
    }
    
    .cubo{
        margin:0rem 4rem;
        display:flex;
        justify-content: center;
  align-items: center;
        color: #fff;
        font-size: 30px;
        text-align:center;
        height: 80px;
        width: 130px;
        border-radius: 5px;
        background: #D90032;
        box-shadow:  1px 2px 0px #b00029, 
                    -1px -2px 0px #ff003c;
    }

    @media screen and (max-width: 796px){
        .cubo{
        margin:0rem 3rem;
        display:flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        text-align:center;
        height: 50px;
        width: 70px;
        border-radius: 5px;
        background: #D90032;
        box-shadow:  1px 2px 0px #b00029, 
                    -1px -2px 0px #ff003c;
    }

    .conten h2{
        font-size: 15px;
    }
    }
`