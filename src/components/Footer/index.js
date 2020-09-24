import React from 'react';
import './styles.css'



export default function Footer(){
    return(
        <footer id="footer" className="section-bg">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="footer-links">
                            <h4>Links</h4>
                            <ul>
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#about">Sobre nós</a></li>
                            <li><a href="#services">Serviços</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Entre em contato</h4>
                            <strong>Telefone:</strong>(98) 9 8275-9907<br />
                            <strong>Email:</strong>startup.sempressao@gmail.com<br />
                        </div>
                        <div className="social-links">
                            <a target="_blank" href="https://twitter.com/PressaoSem" className="twitter"><i className="fa fa-twitter" /></a>
                            <a target="_blank" href="https://www.facebook.com/Sem-Press%C3%A3o-101121591313827/" className="facebook"><i className="fa fa-facebook" /></a>
                            <a target="_blank" href="https://www.instagram.com/_sem_pressao_/" className="instagram"><i className="fa fa-instagram" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/sem-press%C3%A3o-818332199/" className="linkedin"><i className="fa fa-linkedin" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form">
                        <h4>Entre em Contato</h4>
                        <form action="salva_mensagem.php" method="POST" className="contactForm">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Seu Nome" data-rule="minlen:4" data-msg="Por favor! Digite seu nome!" />
                            <div className="validation" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" data-rule="email" data-msg="Por favor! Digite um email valido!" />
                            <div className="validation" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Objetivo" data-rule="minlen:4" data-msg="Por favor! Digite seu objetivo!" />
                            <div className="validation" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Por favor! Digite sua mensagem!" placeholder="Mensagem" defaultValue={""} />
                            <div className="validation" />
                        </div>
                        <div id="sendmessage">Sua mensagem foi enviada. Obrigado(a)!</div>
                        <div id="errormessage" />
                        <div className="text-center"><button type="submit" title="Send Message">Enviar</button></div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="copyright">
                    <p> © Copyright <strong>Sem Pressão</strong>. All Rights Reserved</p>
                </div>    
                </div>
            </div>
        </footer>

    );
}