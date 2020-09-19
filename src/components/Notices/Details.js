import React from 'react'

// Dependencias
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'



export default function Details(props) {
    console.log(props.history.location.state)
    var data = props.history.location.state;

    var unix = data.date.seconds;
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
    return (
        <Container>
            <div className="contenedor">
                <Link to="/noticias">
                <button className="Back-btn"><i class="fas fa-chevron-left"></i>Volver a Noticias</button>
                </Link>
                
                <div style={{
                    height: '100%',
                    borderRadius: '10px',
                    boxShadow:' 0 0 30px 0 rgba(0, 0, 0, 0.1)',
                    backgroundSize: 'cover',
                    padding:'20px',
                    backgroundImage:`linear-gradient(to bottom, rgba(52, 58, 64, 0.65), rgba(52, 58, 64, 0.98)), url(${data.img})`

                }}>
                    <div className="title">
                        <h1>{data.subtitle}</h1>
                        <p>{formattedTime}</p>
                    </div>

                    
                </div>
            </div>
                <Articulo >
                    <div className="article">
                        <p>{data.description}</p>
                        <h1>{data.title}</h1>
                    </div>

                    {/* <div className="share-btns">
                        <h5>Compartelo en</h5>
                        <button className="facebook"><i class="fab fa-facebook-f"></i></button>
                        <button className="twitter"><i class="fab fa-twitter"></i></button>
                        <button className="whatsapp"><i class="fab fa-whatsapp"></i></button>
                        <button className="messenger"><i class="fab fa-facebook-messenger"></i></button>
                    </div> */}
                </Articulo>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    /* height: 120vh; */
    background-color:#343a40;
    .contenedor{
        /* display: inline-block; */
        padding: 8rem 10rem;
        color:#ffffff;
        height: 300px;
    }

    .Back-btn{
        border: none;
        background: transparent;
        color:#fff;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        cursor:pointer;
    }
    
    .title{
        text-align: left;
        flex-direction: column;
        display:flex;
        height:100%;
        justify-content: space-between;
    }

@media screen and (max-width: 796px){
    .contenedor{
        padding: 4rem 1rem;
        color:#ffffff;
        justify-content: space-between;
    }
    .title h1{
        font-size: 22px;
    }

  
}
`

const Articulo = styled.div`

    display:inline-block;
    padding: 0rem 10rem;
    color: #fff;

    .article p{
        font-size: 20px;
    }

    @media screen and (max-width: 796px){
    
        padding: 0rem 1rem;
        color:#ffffff;
        /* justify-content: space-between; */
    

    .article p{
        font-size: 18px;
    }

  
}
`