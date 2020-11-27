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
  const [whatsapp, setWhatsapp] = useState('');
  const [queixa, setQueixa] = useState('');
  const [localDorAux, setDorAux] = useState({});
  const [pacoteAux, setPacoteAux] = useState({});
  const [localDor, setDor] = useState('');
  const [pacote, setPacote] = useState('');

  const handleLocalDorChange = (event) => {
    // updating an object instead of a Map
    setDorAux({...localDorAux, [event.target.name] : event.target.checked });

}

useEffect(() => {
  console.log("checkedItems: ", localDorAux);
  let stringLocalDor = convertJson(localDorAux);
  setDor(stringLocalDor);
}, [localDorAux]);  
const handlePacoteChange = (event) => {
  // updating an object instead of a Map
  setPacoteAux({...pacoteAux, [event.target.name] : event.target.checked });
}

useEffect(() => {
console.log("checkedItems: ", pacoteAux);
let stringPacote = convertJson(pacoteAux);
setPacote(stringPacote);
}, [pacoteAux]);  

function convertJson(item){
  let string = JSON.stringify(item);
  return string;
}
 
  function handleCreateClass(e) {
    e.preventDefault();

   api.post('costumer', {
      name,
      email,
      whatsapp,
      queixa,
      localDor,
      pacote,
    }).then(() => {
      alert('Cadastro realizado com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro')
    })
    
    
    console.log(
      name,
      email,
      whatsapp,
      queixa,
      localDor,
      pacote,
     
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
              name="name" 
              label="Nome completo"
              value={name} 
              onChange={(e) =>{ setName(e.target.value)}}
            />
            <Input 
              name="email" 
              label="E-mail"
              value={email} 
              onChange={(e) =>{ setEmail(e.target.value)}}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp} 
              onChange={(e) =>{ setWhatsapp(e.target.value)}}
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
              <input class="form-check-input" type="checkbox" id="checkDor1" value="1" name="1" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor2" value="2" name="2" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor3" value="3" name="3" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor3">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor4" value="4" name="4" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor4">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor5" value="5" name="5" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor5">5</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor6" value="6" name="6" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor6">6</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor7" value="6" name="7" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor7">7</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor8" value="8" name="8" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor8">8</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor9" value="9" name="9" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor9">9</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor10" value="10" name="10" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor10">10</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor11" value="11" name="11" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor11">11</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor12" value="12" name="12" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor12">12</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="checkDor13" value="13" name="13" onChange={handleLocalDorChange}/>
              <label class="form-check-label" for="checkDor13">13</label>
            </div>
           
          </fieldset>
            

          <fieldset >
            <legend>Pacotes da Black Friday</legend>
            <div class="promoImgBlock">
              <img class="promo" src={promo1}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="Xo, estresse" id="inlineRadio1" value="option1" onChange={handlePacoteChange}>
                  </input>
                <label class="form-check-label" for="inlineRadio1">Xô, estresse!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo2}></img>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="Tchau, dor nos ombros" id="inlineRadio2" value="option2"  onChange={handlePacoteChange}/>
                <label class="form-check-label" for="inlineRadio2">Tchau, dor nos ombros</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo3}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="Adeus, dor nas costas" id="inlineRadio3" value="option3"  onChange={handlePacoteChange}/>
                <label class="form-check-label" for="inlineRadio3">Adeus, dor nas costas!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo4}></img>
            
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="Viva sem pressao" id="inlineRadio4" value="option4"  onChange={handlePacoteChange}/>
                <label class="form-check-label" for="inlineRadio4">Viva sem pressão!</label>
              </div>
            </div>
            <div class="promoImgBlock">
              <img class="promo" src={promo5}></img>
           
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="Eventos e corporativo" id="inlineRadio5" value="option5"  onChange={handlePacoteChange}/>
                <label class="form-check-label" for="inlineRadio5">Eventos e corporativo</label>
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
