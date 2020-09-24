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




function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }]);

  const [serviceItems, setServiceItems] = useState([
    { subject: '', cost: 0}]);
  
  function addNewServiceItem(){
    setServiceItems([
      ...serviceItems,
      { subject: '', cost: 0 }
    ]);
  }  

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }
  

  const { user} = useContext(AuthContext);
  const userId = user?.id;
  console.log('user_id', userId);
  
  useEffect(  () => {
    const fetchData = async () => {
      const response = await api.get('listId', {
        params: 
         {
           id: userId
         }
          });
      
      setName(response.data.name);
      setAvatar(response.data.avatar);
      setBio(response.data.bio);
      setWhatsapp(response.data.whatsapp)

      
    }
    fetchData();
  } , [] )

  function setServiceItemValue(position, field, value){
    const updatedServiceItem = serviceItems.map((serviceItem, index)=>{
      if(index === position){
        return {...serviceItem, [field]: value}
      }

      return serviceItem;
    });

    setServiceItems(updatedServiceItem);
  }

  function setScheduleItemValue(position, field, value){
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index)=>{
      if(index === position){
        return {...scheduleItem, [field]: value}
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItem);
  }


  function handleCreateClass(e) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      login_id: user?.id,
      schedule: scheduleItems,
      service: serviceItems
    }).then(() => {
      alert('Cadastro realizado com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro')
    })

    console.log(
      name,
      avatar,
      whatsapp,
      bio,
      user?.id,
      serviceItems,
      scheduleItems
    );
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
       />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>  
            <Input 
              name="name" 
              label="Nome completo"
              value={name} 
              onChange={(e) =>{ setName(e.target.value)}}
            />
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar} 
              onChange={(e) =>{ setAvatar(e.target.value)}}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp} 
              onChange={(e) =>{ setWhatsapp(e.target.value)}}
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(e) =>{ setBio(e.target.value)}}
            />
          </fieldset>
          

          <fieldset>
            <legend>Horários disponíveis
              <button 
              type="button"
              onClick={addNewScheduleItem}>
                + Novo horario
              </button>
            </legend>
            
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                name="week_day" 
                label="Dia da semana"
                value={scheduleItem.week_day}
                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                options={[
                  { value: '0', label: 'domingo'},
                  { value: '1', label: 'segunda'},
                  { value: '2', label: 'terça'},
                  { value: '3', label: 'quarta'},
                  { value: '4', label: 'quinta'},
                  { value: '5', label: 'sexta'},
                  { value: '6', label: 'sabado'}
                ]}
                />
                <Input 
                  name="from" 
                  label="Das" 
                  type="time" 
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                />
                <Input 
                  name="to" 
                  label="Até" 
                  type="time" 
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </div>
              );
            })}
          </fieldset>

          <fieldset>
            <legend>Serviços
              <button 
              type="button"
              onClick={addNewServiceItem}>
                + Novo serviço
              </button>
            </legend>
            
            {serviceItems.map((serviceItem, index) => {
              return (
                <div key={serviceItem.id} className="service-item">
                <Select 
                name="service" 
                label="Serviço"
                value={serviceItem.subject}
                onChange={e => setServiceItemValue(index, 'subject', e.target.value)}
                options={[
                  { value: 'Meditação', label: 'Meditação'},
                  { value: 'Massagem relaxante', label: 'Massagem relaxante'},
                  { value: 'Quick Message', label: 'Quick Message'},
                  { value: 'Ventosa', label: 'Ventosa'},
                  
                ]}
                />
                <Input 
                  name="cost" 
                  label="Custo da dua hora aula"  
                  value={Number(serviceItem.cost)}
                  onChange={e => setServiceItemValue(index, 'cost', e.target.value)}
                />
              </div>
              );
            })}
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

export default TeacherForm;
