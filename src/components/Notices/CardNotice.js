import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function CardNotice(props) {
    return (
        <Card >
            <div className='cover' >
                <img src={props.info.img} alt='Imagen'/>
            </div>
            <div className='conten'>
                <h1>{props.info.title}</h1>
                <span>{props.info.subtitle}
                </span>
            </div>

            <Link
                to={{
                    pathname:`/noticias/${props.info.title}`,
                    state: {...props.info}
                }}
                className='btn'
            >
                <p>VER MÁS</p>
            </Link>
            
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 300px; */
    width: 300px;
    border-radius: 20px;
    background: #ffff;
    box-shadow:  5px 5px 10px #d1d1d1, 
                -5px -5px 10px #ffffff;


    .cover{
        height: 150px;
        width: 100%;
        border-radius: 20px;
    }
    
    .cover img{
        height:100%;
        width: 100%;

    }

    .conten{
        flex: 1;
        padding: 4px;
    }
    .conten h1{
        font-size: 20px;        
    }

    .btn{
        text-align:center;
        /* display:block; */
        margin: 10px;
        /* padding-bottom:1px; */
        color: #ffff;
        outline: none;
        /* height: 30px; */
        font-size: 14px;
        font-display: block;
        border:none;
        border-radius: 20px;
        background: #D61535;
        box-shadow:  1px 2px 0px #af112b, 
                    -1px -2px 0px #fd193f;
    }

`