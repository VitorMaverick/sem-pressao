import React, { useContext } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import './styles.css'

import { AuthContext } from "../../context/Auth";


export default function Header() {

    const { user } = useContext(AuthContext);

    return (
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
                        <li>

                            <Link
                                to="/#intro"
                                activeClass="intro"

                            >
                                Home
                            </Link>
                        </li>
                        <li>

                            <Link
                                to="/#about"
                                activeClass="about"

                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#services"
                                activeClass="services"

                            >
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#team"
                                activeClass="team"

                            >
                                Equipe
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#footer"
                                activeClass="footer"

                            >
                                Contato
                            </Link>
                        </li>

                        <li>
                            <Link to="/blog">
                                Blog
                    </Link>
                    
                        </li>
                        {user.id ?
                        <li className="nav-item dropdown green">
                        
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            DashBoard
                            </a>
                            
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/form">
                                        Editar perfil
                            </Link>
                            <hr/>
                                <a class="dropdown-item" target="_blank" href="http://localhost/sem_pressao_wp/wp-admin/">Gerenciar posts</a>
                                
                            </div>
                        </li>
                        :      <li className="nav-item dropdown green">
                                <Link to="/login">
                                    Login
                                </Link>
                                </li>
                            }
                        
                    </ul>
                </nav>

            </div>

        </header>
    );
}