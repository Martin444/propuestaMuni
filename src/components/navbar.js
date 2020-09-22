import React, { useState } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../img/NoPath.png'

 function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const  handleToggle = () =>{
          setIsOpen(!isOpen);
      }


    return (
        <NavBarte>
            
                    <div className ='navbarheader'>
                         <div className="nav-center">
                                <div className="nav-header">
                                        <button type="button" 
                                        onClick={handleToggle}
                                        className="nav-btn">
                                            <FaAlignRight className="nav-icon"/>
                                        </button>
                                    <Link to="/">
                                        <img src={logo} alt="municipalidad de tartagal" className='logo' />
                                    </Link>

                                </div>
                                    {/* <div>
                                        <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                                            <button type="button"  
                                            onClick={handleToggle}
                                            className="nav-btn2">
                                                <li>
                                                    <Link to="/">INICIO</Link>
                                                </li>
                                            </button>
                                            <button type="button"  
                                            onClick={handleToggle}
                                            className="nav-btn2">
                                                <li>
                                                    <Link to="/noticias">NOTICIAS</Link>
                                                </li>
                                            </button>
                                            <button type="button"  
                                            onClick={handleToggle}
                                            className="nav-btn2">
                                                <li>
                                                    <Link to="/turnos">TURNOS</Link>
                                                </li>
                                            </button>
                                            
                                            <button type="button"  
                                            onClick={handleToggle}
                                            className="nav-btn2">
                                                <li>
                                                    <Link to='/'>
                                                            MÁS
                                                    </Link>
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                 */}
                            </div>
                        
                    </div>
                
        </NavBarte>
    )
}

const NavBarte = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 0.20rem;
    background: linear-gradient(to top, rgba(42, 58, 64, 0.2), #343a40);
    z-index: 1;

    .nav-header {
        display: flex;
        width: 100%;
        /* justify-content: space-between; */
    }
    .nav-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        display: flex;
        margin-top: 5px;
    }
    .nav-btn2 {
        display:flex;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        text-align:center;
    }
    .nav-icon {
        font-size: 1.5rem;
        color: #fff;
    }
    .nav-links {
        height: 0;
        margin:0;
        overflow: hidden;
        transition: all 0.3s linear;
        list-style-type: none;
        /* margin-right: 30px; */
    }
    
    .nav-links ul{
        display:block;
        text-align: right;
    }
    .nav-links a {
        display: block;
        text-decoration: none;
        padding: 1rem 0;
        color: #fff;
        transition: all 0.3s linear;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1px;
    }
    .nav-links a:hover {
        color: #FFBF53;
        cursor: pointer;
    }
    .show-nav {
        height: 270px;
        /* background-color: #fff; */
        padding: 0;
    }

    .logo{
            height: 45px;
            min-height: "10px";
            display: "flex" 
        }

    @media screen and (min-width: 768px){
        .nav-btn {
            display: none;
        }

        .logo{
            height: 65px;
            min-height: "10px";
            display: "flex" 
        }

            .nav-btn2 {
                background: transparent;
                border: none;
                cursor: pointer;
                outline: none;
                text-align:center;
            }
            .nav-center {
                max-width: 1170px;
                margin: 0 auto;
                display: flex;
            }
            .nav-links {
                height: auto;
                color: #fff;
                display: flex;
                margin-right: 7rem;
            }
            .nav-links a {
                margin: 10px 1rem;
                padding: 0.5rem 0;
            }
        }

`

export default withRouter(NavBar);