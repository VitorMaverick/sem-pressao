import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";


export default function Services(){
    return(
        <section id="services" class="section-bg">
            <div class="container">

                <header class="section-header">
                <h3>Serviços</h3>
                </header>

                <div class="row">

                    <div class="col-md-6  wow bounceInUp" data-wow-duration="1.4s">
                        <div class="box">
                        <div class="icon" ><i class="#" ></i></div>
                        <h4 class="title"><a href="">Meditação</a></h4>
                        <p class="description">Mindfulness é um conjunto de técnicas
                            práticas, possíveis e cientificamente
                            comprovadas que te ajudam a focar no
                            momento presente, sem deixar o passado ou
                            o futuro te afetarem, tornando sua mente
                            mais desperta e saudável, sendo sua aliada.</p>
                        </div>
                    </div>
                    <div class="col-md-6  wow bounceInUp" data-wow-duration="1.4s">
                        <div class="box">
                        <div class="icon" ><i class="#" ></i></div>
                        <h4 class="title"><a href="">Quick Message</a></h4>
                        <p class="description">A Quick Massage é uma combinação das
                            massagens orientais Shiatsu e Anmá, e sua
                            introdução às empresas foi feita por um
                            terapeuta que trabalhava para a Apple, chamado
                            David Palmer. Ele precisava lidar com o crescente
                            número de funcionários afastados por questões
                            de saúde. Os resultados foram tão positivos que a
                            técnica se espalhou por outras empresas.</p>
                        </div>
                    </div>

                    <div class="col-md-6  wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div class="box">
                        <div class="icon" ><i class="#" ></i></div>
                        <h4 class="title"><a href="">Massagem realante</a></h4>
                        <p class="description">O Atendimento Psicológico tem a finalidade de
                            ajudar e trabalhar em todas as questões emocionais,
                            comportamentais, relacionamento, carreira, profissão,
                            família, casamento, timidez, ansiedades, depressão,
                            questões psiquiátricas ou existenciais.</p>
                        </div>
                    </div>

                    <div class="col-md-6  wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" ><i class="#" ></i></div>
                            <h4 class="title"><a href="">Ventosa</a></h4>
                            <p class="description">O Atendimento Psicológico tem a finalidade de
                                ajudar e trabalhar em todas as questões emocionais,
                                comportamentais, relacionamento, carreira, profissão,
                                família, casamento, timidez, ansiedades, depressão,
                                questões psiquiátricas ou existenciais.</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <Link className="btn-services scrollto" to="/list">
                    Veja os horários disponíveis
                    </Link>
                    
                </div>

            </div>
        </section>
    );
}

