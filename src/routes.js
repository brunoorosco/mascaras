import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Producao from './pages/Producao';
import Saida from './pages/Saida';
import Dashboard from './pages/Dashboard';
import School from './pages/School';
import Sidebar from './components/Sidebar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path="/producao" component={Producao} exact/>
                <Route path="/saida" component={Saida} exact/>
                <Route path="/dashboard" component={Dashboard} exact/>
                <Route path="/school" component={School} exact/>
                <Route path="/sidebar" component={Sidebar} exact/>
            </Switch>
        </BrowserRouter>
    );
}