import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dados from './pages/Dados';
import Landing from './pages/Landing';
import User from './pages/User';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/create" exact component={Landing} />
        <Route path="/update/:id" component={Landing} />
        <Route path="/dados" component={Dados}/>
      </Switch>
    </BrowserRouter>
  );

}