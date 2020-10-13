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
            <div class="row d-flex align-items-center">
        <div class=" col-sm-3 col-1 float-left ">
            <div class="logo  ">
             
              <h1 class="text-light text-nowrap"><a href="#intro" class="scrollto"><span>Sem Pressão</span></a></h1>
             
            </div>
        </div>
        <div class=" col-sm-9 col-11  text-right ">
          <nav class ="main-nav main-menu navbar navbar-expand-md navbar-light navbar-offcanvas float-right " role ="navigation" >

             
             <button id="navToggle" class ="navbar-toggler ml-auto" type ="button" data-toggle ="collapse"
             data-target ="#bs-example-navbar-collapse-1" aria-controls ="bs-example-navbar-collapse-1"
             aria-expanded ="false" >
            <span class ="navbar-toggler-icon"> </span>
            </button>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
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
                                <a class="dropdown-item" target="_blank" href="https://sem-pressao.000webhostapp.com/">Gerenciar posts</a>
                                
                            </div>
                        </li>
                        :      <li className="nav-item dropdown green">
                                <Link to="/login">
                                    Login
                                </Link>
                                </li>
                            }
                        
                </ul>
                </div>
          </nav>
        </div>
      </div>


                

              

            </div>

        </header>
    );
}