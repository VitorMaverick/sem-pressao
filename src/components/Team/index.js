import React from 'react';
import './styles.css';
import deise from '../../img/team-1.jpg'
import deborah from '../../img/team-2.jpg'
import aline from '../../img/team-3.jpg'
import hilha from '../../img/team-4.jpg'


export default function Team(){
    return(
        <section id="team" class="section-bg">
            <div class="container">
                <div class="section-header">
                <h3>Equipe</h3>
                </div>

                <div class="row">

                    <div class="col-lg-3 col-md-6 wow fadeInUp">
                        <div class="member">
                        <img src={deise} class="img-fluid" alt="" />
                        <div class="member-info">
                            <div class="member-info-content">
                            <h4>Deise Rodrigues</h4>
                            <span>Chief Executive Officer</span>
                            <div class="social">
                                <a href="https://www.linkedin.com/in/deise-rodrigues-bbba16179/"><i class="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="member">
                        <img src={deborah} class="img-fluid" alt="" />
                        <div class="member-info">
                            <div class="member-info-content">
                            <h4>Déborah Rodrigues</h4>
                            <span>CO-Chief Executive Officer</span>
                            <div class="social">
                                <a href="https://www.linkedin.com/in/d%C3%A9borah-rodrigues-598792a9"><i class="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="member">
                        <img src={aline} class="img-fluid" alt="" />
                        <div class="member-info">
                            <div class="member-info-content">
                            <h4>Aline Fonseca</h4>
                            <span>Socia Colaboradora</span>
                            <div class="social">
                                <a href="https://www.linkedin.com/in/aline-fonseca-a101b419a"><i class="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="member">
                        <img src={hilha} class="img-fluid" alt="" />
                        <div class="member-info">
                            <div class="member-info-content">
                            <h4>Hilha Maia</h4>
                            <span>Socia Colaboradora</span>
                            <div class="social">
                                <a href="https://www.linkedin.com/in/h%C3%ADlia-maia-7480a019a"><i class="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>
            </section>
    );
}


