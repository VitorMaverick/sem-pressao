import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Form from '../pages/TeacherForm'
import List from '../pages/TeacherList'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/list" component={List} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
