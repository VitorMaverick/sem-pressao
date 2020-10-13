
import React, { useState, FormEvent, useContext, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Header  from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";
import "./styles.css";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import { AuthContext } from "../../context/Auth";
import "../../assets/styles/global.css"



function TeacherList()  {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  
  useEffect(  () => {
    const fetchData = async () => {
      const response = await api.get('list');
      setTeachers(response.data);
      console.log(teachers);
    }
    fetchData();
  } , [] )

  async function listTeachers(){
    const response = await api.get('list');
    setTeachers(response.data);
    console.log(teachers);    
  }
  


  async function searchTeachers(e){
    e.preventDefault();

    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time,
        }
    })
    setTeachers(response.data);
    } 


  return (
    <div id="page-teacher-list" className="container">
      <Header />
      <PageHeader >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
              name="subject" 
              label="Serviço"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                { value: 'Meditação', label: 'Meditação'},
                { value: 'Massagem relaxante', label: 'Massagem relaxante'},
                { value: 'Quick Message', label: 'Quick Message'},
                { value: 'Ventosa', label: 'Ventosa'}
              ]}
            />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeek_day(e.target.value) }}
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
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={(e) => { 
              setTime(e.target.value)
              }}
            />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
       
        {teachers.map((teacher) => {
          return( 
            
          <TeacherItem key= { teacher.id  } teacher={teacher}   />);
        })}
      </main>
    </div>
  );
}

export default TeacherList;
