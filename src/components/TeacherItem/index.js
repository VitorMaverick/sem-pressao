import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import "../../assets/styles/global.css"
import convertHourToMinutes from "../../utils/convertHoutToMinutes";
import convertToDays from '../../utils/ConverteToDays';






const TeacherItem = ({ teacher }) => {
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
          </div>
          
          <div>
              {
                teacher.service ?
                  <div className="services">
                    {teacher.service.map((services) => {
                      return( 
                      <ul>
                        <li><span>{services.subject}</span></li>
                        <li>
                          <p>Preço/Hora</p>
                          <strong>R$ {services.cost}</strong>
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

        <p className="bio">
        { teacher.bio}
        </p>

        <footer>
        Horarios:

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
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
      </div>
  );
}

export default TeacherItem;
