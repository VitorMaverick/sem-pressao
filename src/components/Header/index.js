import React, {useContext} from 'react';
import { NavHashLink as Link } from "react-router-hash-link";
import './styles.css'

import {AuthContext} from "../../context/Auth";


export default function Header(){

    const { user} = useContext(AuthContext);

    return(
        <header id="header">

            <div id="topbar">
                <div class="container">
                    <div class="social-links">
                    <a target="_blank" href="https://twitter.com/PressaoSem" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" href="https://www.facebook.com/Sem-Press%C3%A3o-101121591313827/" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com/_sem_pressao_/" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/sem-press%C3%A3o-818332199/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        
            <div class="container">

                <div class="logo float-left">
                    <h1 class="text-light"><a href="#intro" class="scrollto"><span>Sem Pressão</span></a></h1>   
                </div>
            
                <nav class="main-nav float-right d-none d-lg-block">
                    <ul>
                    <li class="active"><a href="#intro">Home</a></li>
                    <li>
                        
                    <Link
                        to = "/#about"
                        
                        
                    >
                                Sobre
                            </Link>
                        </li>
                    <li>
                    <Link
                        to = "/"
                        activeClass = "services"
                        
                    >
                                Serviços
                            </Link>
                    </li>
                    <li><a href="#team">Equipe</a></li>
                    <li><a href="#footer">Contato</a></li>
                    <li><a href="#footer">Blog</a></li>
                    <li class="green">
                        {user.id?
                            <Link to="/form">
                                DashBoard
                            </Link>
                        : 
                            <Link to="/login">
                                Login
                            </Link>
                        }
                        
                    </li>
                    </ul>
                </nav>
        
            </div>
      
        </header>
    );
}