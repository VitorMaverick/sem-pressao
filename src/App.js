import React from 'react';
import Routes from './routes/auth.routes'
import './styles/global.css';
import {AuthProvider} from './context/Auth';


function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
