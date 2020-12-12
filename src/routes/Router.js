import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyled from '../styles/Global';

// Routes home
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';
import Header from '../components/Header/Header';

import CreateCompetidores from '../pages/Competidores/CreateCompetidor';
import ShowCompetidor from '../pages/Competidores/ShowCompetidor';
import EditCompetidor from '../pages/Competidores/EditCompetidor';

import ShowPista from '../pages/Pistas/ShowPista';
import CreatePistas from '../pages/Pistas/CreatePistas';
import EditPista from '../pages/Pistas/EditPistas';

import Historicos from '../pages/Historicos/Historicos';
import CreateHistoricos from '../pages/Historicos/CreateHistoricos';
import ShowHistorico from '../pages/Historicos/ShowHistoricos';
import EditHistorico from '../pages/Historicos/EditHistorico';

const Router = () => {
  return (
    <BrowserRouter>
    <GlobalStyled />
      <Header />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/competidor/criar" component={CreateCompetidores} />
        <Route path="/competidor/:id/edit" component={EditCompetidor} />
        <Route path="/competidor/:id" component={ShowCompetidor} />

        <Route path="/pista/criar" component={CreatePistas} />
        <Route path="/pista/:id/edit" component={EditPista} />
        <Route path="/pista/:id" component={ShowPista} />

        <Route path="/historicos" component={Historicos} />
        <Route path="/historico/criar" component={CreateHistoricos} />
        <Route path="/historico/:id/edit" component={EditHistorico} />
        <Route path="/historico/:id" component={ShowHistorico} />
        <Route exact path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;