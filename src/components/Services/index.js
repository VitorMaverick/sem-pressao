import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import meditacao from "../../assets/images/meditacao.png"
import quick_massage from "../../assets/images/quik_massage.png"
import massagem from "../../assets/images/massagem.png"
import ventosa from "../../assets/images/ventosa.png"



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
                        <div class="icon" ><img src={meditacao}/></div>
                        <h4 class="title"><Link to="/list"><a href="">Meditação</a></Link></h4>
                        <p class="description">Mindfulness ou atenção plena. É um estado onde treinamos a qualidade
                        da atenção ao momento presente e autocompaixão com experiências desafiadoras.</p>
                        </div>
                    </div>
                    <div class="col-md-6  wow bounceInUp" data-wow-duration="1.4s">
                        <div class="box">
                        <div class="icon" ><img src={quick_massage}/></div>
                        <h4 class="title"><Link to="/list"><a href="">Quick Message</a></Link></h4>
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
                        <div class="icon" ><img src={massagem}/></div>
                        <h4 class="title"><Link to="/list"><a href="">Massagem realante</a></Link></h4>
                        <p class="description">É uma tecnica que aplica movimentos suaves utilizado as mãos da musculatuda 
                        do corpo, com os cotovelos, punhos, antebraços ou recursos manuais.</p>
                        </div>
                    </div>

                    <div class="col-md-6  wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" ><img src={ventosa}/></div>
                            <h4 class="title"><Link to="/list"><a href="">Ventosa</a></Link></h4>
                            <p class="description">É uma terapia a qual são criados vácuos de sucção na pele (poer meio de ventosa).</p>
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

