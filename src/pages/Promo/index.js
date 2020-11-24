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
        <form onSubmit={handleCreateClass}>
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
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
              <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
            </div>
           
          </fieldset>

          <fieldset>
            <legend>Pacotes da Black Friday</legend>
            
           
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
