import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import Dashboard from '../../pages/Dashboard';
import Saida from '../../pages/Saida'
import Producao from '../../pages/Producao';
import School from '../../pages/School';
import Product from '../../pages/Produtos/Cadastro';
import Material from '../../pages/Material/New';
import Fornecedor from '../../pages/Fornecedor';
import newFornecedor from '../../pages/Fornecedor/New';
import Estoque from '../../pages/EstoqueGeral';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => <div>{ Dashboard() }</div>} />
      <Route exact path="/about/teste" component={() => "About"} />
      <Route exact path="/consulta" component={() => "Consulta"} />
      <Route exact path="/faq" component={() => "FAQ"} />
      <Route exact path="/contact" component={() => "Contact"} />
      <Route exact path="/fornecedor"     component={() => <div>{Fornecedor()}</div>} />
      <Route exact path="/fornecedor/new" component={() => <div>{newFornecedor()}</div>} />
      <Route exact path="/estoque"     component={() => <div>{Estoque()}</div>} />
      <Route exact path="/material/new" component={() => <div>{Material()}</div>} />
      <Route exact path="/material/:id" component={() => <div>{Material(`{$id}`)}</div>} />
      <Route exact path="/Home-2" component={() => "Home-2"} />
      <Route exact path="/Home-3" component={() => "Home-3"} />
      <Route exact path="/teste" component={() => "Page-1"} />
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
    </Switch>
  </Container>
);

export default Content;
