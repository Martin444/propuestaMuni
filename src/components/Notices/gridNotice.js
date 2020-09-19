import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import CardNotice from './CardNotice'
import firebase from '../../firebase'


export default function GridNotice() {

    const [notice, setNotice] = useState([]);


    useEffect(()=> {
        firebase.firestore().collection("notices")
        .orderBy("date", "desc").get()
        .then((doc)=>{
            
            setNotice(doc.docs)
            
            // notice.map((items, index) =>{
            //     console.log(items.data())
            // })
            
        })
    });

    

    return (
        <Grid>
           {
               notice.map((items, index)=> {
                   return <div className='cards'>
                            <CardNotice info={items.data()} key={`info-${index}`}/>
                        </div>
               })
           }
                    

              
                
            {/* <div className='cards'>
                <CardNotice/>
            </div>
            <div className='cards'>
                <CardNotice/>
            </div>
            <div className='cards'>
                <CardNotice/>
            </div>
            <div className='cards'>
                <CardNotice/>
            </div>
            <div className='cards'>
                <CardNotice/>
            </div> */}
        </Grid>
    )
}

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: auto;
    padding: 3rem 5rem;
    background: #ffd6;

    .cards{
        width:100%;
        flex-basis: 20%;
        padding-left: 10px;
        padding-right: 1rem;
        padding-bottom: 38px;
        margin:auto;
        /* padding:auto; */
    }


    @media screen and (max-width: 769px){
        padding: 2rem 0rem;
    }
`