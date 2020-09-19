import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'



export default function Boletines() {
    const [boletin, setBoletin] = useState([]);


    useEffect(()=> {
        firebase.firestore().collection("cionotice")
        .orderBy("date", "desc").get()
        .then((doc)=>{
            
            setBoletin(doc.docs)
            
            // boletin.map((items, index) =>{
            //     // console.log(moment(items.data().date.getDay))
            // })
            
        })
    });
    
    return (
        <Cio>
            <div className='conten'>
                {/* Linea vertical */}
                <div className='line'/>
                    <ul className='timeline'>
                        {

                            

                            boletin.map((items, index)=>{
                                var unix = items.data().date;
                                var date = new Date(unix * 1000);
// Hours part from the timestamp
                                var hours = date.getDate();
                                // Minutes part from the timestamp
                                var minutes = date.getMonth() + 1;
                                // Seconds part from the timestamp

                                switch (minutes) {
                                    case 1:
                                        var formattedTime = hours + ' de enero';
                                    break;
                                    case 2:
                                         formattedTime = hours + ' de febrero';
                                    break;
                                    case 3:
                                         formattedTime = hours + ' de marzo';
                                    break;
                                    case 4:
                                         formattedTime = hours + ' de abril';
                                    break;
                                    case 5:
                                         formattedTime = hours + ' de mayo';
                                    break;
                                    case 6:
                                         formattedTime = hours + ' de junio';
                                    break;
                                    case 7:
                                         formattedTime = hours + ' de julio';
                                    break;
                                    case 8:
                                         formattedTime = hours + ' de agosto';
                                    break;
                                    case 9:
                                         formattedTime = hours + ' de septiembre';
                                    break;
                                    case 10:
                                         formattedTime = hours + ' de octubre';
                                    break;
                                    case 11:
                                         formattedTime = hours + ' de noviembre';
                                    break;
                                    case 12:
                                         formattedTime = hours + ' de diciembre';
                                    break;
                                
                                    default:
                                        break;
                                }
                                

                                // Will display time in 10:30:23 format
                                console.log(formattedTime);
                                return  <li className='item' key={index}>
                                <div className='cirandtil'>
                                    {/* Circulo */}
                                    <div className='circle'>
    
                                    </div>
                                    {/* Titulo */}
                                    <div className='title'>
                                        <h1>{formattedTime} – {items.data().title}</h1>
                                    </div>
                                </div>
                                {/* Descripcion */}
                                <div className='description'>
                                    <p>{items.data().description}</p>
                                </div>
                            </li>
                        
                            })
                        }
                      
                    </ul>
            

            </div>
            
        </Cio>
    )
}

const Cio = styled.div`
    padding: 3em 18rem;
    /* height: 400px; */
    /* position: relative; */
    
    .conten{
        margin: auto;
        padding:auto;
        text-align: center;
        
        position: relative;
        /* display: block; */
    }

    .line{
        /* Border */
        border-right: 2px solid #D90032;

        /* Positioned at the left */
        left: 16px;
        position: absolute;
        top: 1.5rem;
        /* Take full height */
        height: 100%;
    }

    .item{
        margin-bottom: 8px;
        text-align:left;
        /* margin-left: 50px; */
    }

    .cirandtil{
        /* Center the content horizontally */
        align-items: center;
        display: flex;
    }

    .timeline{
           /* Reset styles */
            list-style-type: none;
            margin: 0;
            padding: 0;
    }

    .circle{
        /* Rounded border */
        background-color:  #D90032;
        border-radius: 9999px;

        /* Size */
        height: 32px;
        width: 32px;
    }

    .title{
        flex:1;
        margin-left: 8px;
    }

    .description{
        margin-left: 38px;
    }

    @media screen and (max-width: 796px){
        padding: 3em 3rem;

        .line{
            top: 5rem;
        }

    }

`