
import React, { useState, FormEvent, useContext, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Header  from "../../components/Header";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import "./styles.css";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import api_wp from "../../services/api_wp";
import { AuthContext } from "../../context/Auth";
import "../../assets/styles/global.css"



function PostList()  {
  const [posts, setPosts] = useState([]);
  
  

  

  
  useEffect(  () => {
    const fetchData = async () => {
      const response = await api.get('list');
      setPosts(response.data);
      console.log(posts);
    }
    fetchData();
  } , [] )

  async function listPosts(){
    const response = await api.get('list');
    setPosts(response.data);
    console.log(teachers);    
  }
  


  async function searchTeachers(e){
    e.preventDefault();

    const response = await api_wp.get('posts')
    setPosts(response.data);
    } 


  return (
    <div id="page-teacher-list" className="container">
      <Header />
      <PageHeader >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                { value: 'Informatica', label: 'Informatica'},
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

export default PostList;
