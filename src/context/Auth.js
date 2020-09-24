import React, { createContext, useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from "../services/api";



export const AuthContext = createContext({});




export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    async function signIn( email, password){
        try{
            const  {data}   = await api.post('/authentication', {
              email,
              password
              
            });
           
           // setStore(email);
           setUser(data);
            console.log(data);
            
            console.log(user);
            
          }catch(err){
            console.log('erro de autenticação' + err);
            
          }
    }
    

    return(
        <AuthContext.Provider value={{signed: !!user, user , signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

/*
export const useStore = () => {
    const [ store, setStore ] = useContext(AuthContext);
    return [store, setStore];
}
*/