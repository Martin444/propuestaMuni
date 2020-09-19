import React from 'react'
import styled from 'styled-components'

export default function CardNotice({image, title, description}) {
    return (
        <Card>
            <div className='cover'>
                <img src={image} alt='Imagen'/>
            </div>
            <div className='conten'>
                <h1>{title}</h1>
                <span>{description}
                </span>
            </div>

            <button className='btn'>VER MÁS</button>
            
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
        margin: 10px;
        color: #ffff;
        height: 30px;
        font-size: 14px;
        border:none;
        border-radius: 20px;
        background: #D61535;
        box-shadow:  1px 2px 0px #af112b, 
                    -1px -2px 0px #fd193f;
    }

`