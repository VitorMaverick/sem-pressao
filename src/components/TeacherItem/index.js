import React  from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import "../../assets/styles/global.css"
import convertHourToMinutes from "../../utils/convertHoutToMinutes";
import convertToDays from '../../utils/ConverteToDays';
import {Link} from "react-router-dom";





const TeacherItem = ({ teacher }) => {
  const number = "https://wa.me/" + teacher.whatsapp + "?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seus%20serviços.";
  return (
    <div id="item" className="teacher-item item">
      <article >
        <header>
          <div className="profile">
            <strong> { teacher.name }</strong>
            <img
              src={teacher.avatar}
              alt="profile image"
            />
            <p className="bio text-align-left">
            { teacher.bio}
            </p>
          </div>
          
          <div>
              {
                teacher.services ?
                  <div className="services">
                    {teacher.service.map((service) => {
                      return( 
                      <ul>
                        <li><span>{service.subject}</span></li>
                        <li>
                          <p>Preço/Hora</p>
                          <strong>R$ {service.cost}</strong>
                        </li>
                        
                      </ul>
                      )
    
               })}
        </div>
        :
        'warnig'
      }
          
          </div>
          
        </header>

        

        <footer>
        <p className="horario">Horarios:</p>

          {
          teacher.schedule ?
            <div>
              {teacher.schedule.map((schedules) => {
                return( 
                <ul key={ schedules.week_day }>
                  <li><span>{convertToDays(schedules.week_day)}</span></li>
                  <li><span>De{convertHourToMinutes(schedules.from)}</span></li>
                  <li><span>Até:{convertHourToMinutes(schedules.to)}</span></li>
                  
                </ul>
                
                )
      
              })}
          </div>
          :
          'warnig'
        }
          <a href= {number} target="_blank" >
          <button  type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
          </a>
        </footer>
      </article>
      </div>
  );
}

export default TeacherItem;
