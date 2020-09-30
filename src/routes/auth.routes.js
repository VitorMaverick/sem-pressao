import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Form from '../pages/TeacherForm';
import List from '../pages/TeacherList';
import Blog from '../pages/Blog';
import Single from '../pages/Single';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/list" component={List} />
      <Route path="/blog" component={Blog} />
      <Route path="/single/:id" component={Single} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
