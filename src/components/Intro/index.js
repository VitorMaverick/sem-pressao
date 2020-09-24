import React from 'react';
import './styles.css'


export default function Header(){
    return(
        <section id="intro" class="clearfix">
            <div class="container d-flex h-100">
            <div class="row justify-content-center align-self-center">
                <div class="col-md-6 intro-info order-md-first order-last">
                <h2>Sua saúde importa!</h2>
                <div>
                    <a href="#about" class="btn-get-started">Saiba mais</a>
                </div>
                </div>
            </div>

            </div>
        </section>
    );
}

