import React, { useState, FormEvent, useContext, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import PageHeader from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/textarea";
import'./styles.css';
import warningIcon from "../../assets/images/icons/warning.svg";
import Select from "../../components/Select";
import api from "../../services/api";
import {AuthContext} from "../../context/Auth";
import "../../assets/styles/global.css"
import localDorImg from '../../img/localDor.jpg'
import promo1 from '../../img/promo1.jpg'
import promo2 from '../../img/promo2.jpg'
import promo3 from '../../img/promo3.jpg'
import promo4 from '../../img/promo4.jpg'
import promo5 from '../../img/promo5.jpg'

function PromoForm() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [idade, setIdade] = useState(Number);
  const [whatsapp, setWhatsapp] = useState('');
  const [endereco, setEndereco] = useState('');
  const [queixa, setQueixa] = useState('');
  const [localDor, setDor] = useState('');
  const [pacote, setPacote] = useState('');
  const [pagamento, setPagamento] = useState('');


  function handleCreateClass(e) {
    e.preventDefault();

    api.post('promo', {
      email,
      genero,
      idade,
      whatsapp,
      endereco,
      queixa,
      localDor,
      pacote,
      pagamento
    }).then(() => {
      alert('Cadastro realizado com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro')
    })

    console.log(
      email,
      genero,
      idade,
      whatsapp,
      endereco,
      queixa,
      localDor,
      pacote,
      pagamento
    );
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
       />

      <main>
        <form class="promoForm" onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Dados Pessoas</legend>  
            <Input 
              name="email" 
              label="E-mail"
              value={email} 
              onChange={(e) =>{ setEmail(e.target.value)}}
            />
            <Input 
              name="name" 
              label="Nome completo"
              value={name} 
              onChange={(e) =>{ setName(e.target.value)}}
            />
            <Input 
              name="genero" 
              label="Gênero"
              value={genero} 
              onChange={(e) =>{ setGenero(e.target.value)}}
            />
            <Input 
              name="idade" 
              label="Idade"
              value={idade} 
              onChange={(e) =>{ setIdade(e.target.value)}}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp} 
              onChange={(e) =>{ setWhatsapp(e.target.value)}}
            />
            
          </fieldset>
          
          <fieldset>
            <legend>Endereço</legend>
            <Textarea 
              name="endereco" 
              label="Endereço" 
              value={endereco} 
              onChange={(e) =>{ setEndereco(e.target.value)}}
            />
          </fieldset>

          <fieldset>
            <legend>Conte um pouco sobre sua queixa </legend>
            <Textarea 
              name="queixa" 
              label="Descrição" 
              value={queixa} 
              onChange={(e) =>{ setQueixa(e.target.value)}}
            />

          </fieldset>

          <fieldset>
            <legend>Local da dor</legend>
            <img class="localDor" src={localDorImg}></img>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">5</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">6</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">7</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">8</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">9</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">10</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">11</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">12</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label class="form-check-label" for="inlineCheckbox2">13</label>
            </div>
           
          </fieldset>
            

          <fieldset >
            <legend>Pacotes da Black Friday</legend>
            <div class="promoImgBlock">
              <img class="promo" src={promo1}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                </input>
                <label class="form-check-label" for="inlineRadio1">Xô, estresse!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo2}></img>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                <label class="form-check-label" for="inlineRadio2">Tchau, dor nos ombros</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo3}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                <label class="form-check-label" for="inlineRadio3">Adeus, dor nas costas!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo4}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                <label class="form-check-label" for="inlineRadio3">Viva sem pressão!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo5}></img>
           
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                <label class="form-check-label" for="inlineRadio3">Eventos e corporativo</label>
              </div>
            </div>
            
           
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default PromoForm;
