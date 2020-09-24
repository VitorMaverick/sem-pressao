import React from 'react';
import './styles.css'
import img from '../../img/about-img.jpg'


export default function About(){
    return(
        <section id="about">
            <div class="container">
                <div class="row">

                    <div class="col-lg-5 col-md-6">
                    <div class="about-img">
                        <img src={img} alt="" />
                    </div>
                    </div>

                    <div class="col-lg-7 col-md-6">
                    <div class="about-content">
                        <h2>Sobre nós</h2>
                        <p>A Sem Pressão trata de uma equipe multidisciplinar, com o objetivo <br />minimizar os riscos que comprometem o bem estar que resultam <br />
                        em doenças ocupacionais e na baixa produtividade dos colaboradores.<br />
                        Utilizando recursos alternativos e de baixo custo, como Quick Massage,<br /> Mindfulness e Atendimento Psicológico. Entre contato conosco e conheça<br /> nossos serviços! </p>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

