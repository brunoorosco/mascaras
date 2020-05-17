
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import {FaChartLine} from 'react-icons/fa'

import Dashboard from '../../pages/Dashboard';
import Saida from '../../pages/Saida'
import Producao from '../../pages/Producao';
import School from '../../pages/School';
import Product from '../../pages/Produtos/Cadastro';
import Material from '../../pages/Material/New';
import Fornecedor from '../../pages/Fornecedor';
import newFornecedor from '../../pages/Fornecedor/New';
import Estoque from '../../pages/EstoqueGeral';

import './styles.css'


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <div>{Dashboard()}</div>
    },
    {
        path: '/saida',
        sidebar: () => <div>dashboard!</div>,
        main: () => <div>{Saida()}</div>
    },
    {
        path: '/producao',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <div>{Producao()}</div>
    },
    {
        path: '/school',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <div>{School()}</div>
    },
    {
        path: '/product',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <div>{Product()}</div>,
        exact: true
    },
    {
        path: '/material',
        sidebar: () => <div>dashboard!</div>,
        main: () => <div>{Material()}</div>,
        exact: true
    },
    {
        path: '/fornecedor',
        sidebar: () => <div>dashboard!</div>,
        main: () => <div>{Fornecedor()}</div>,
        exact: true
    },
    {
        path: '/fornecedor/new',
        sidebar: () => <div>dashboard!</div>,
        main: () => <div>{newFornecedor()}</div>,
        exact: true
    },
    {
        path: '/estoque',
        sidebar: () => <div>dashboard!</div>,
        main: () => <div>{Estoque()}</div>,
        exact: true
    }
]

const Sidebar = () => (
    <div className="sidebar-container">
        <Router>
            <div className="sidebar">
                <header className="header">
                    <h2>IST</h2>
                </header>
                <ul>
                    <Link className="link" to="/" ><FaChartLine size={20}className="icons"/> Dashboard</Link>
                    <Link className="link" to="/school" ><FaChartLine size={20}className="icons"/>Cadastro de Escola</Link>
                    <Link className="link" to="/producao"><FaChartLine size={20}className="icons"/>Producao</Link>
                    <Link className="link" to="/saida"><FaChartLine size={20}className="icons"/>Saída</Link>
                    <Link className="link" to="/product"><FaChartLine size={20}className="icons"/>Produto</Link>
                    <Link className="link" to="/material"><FaChartLine size={20}className="icons"/>Material</Link>
                    <Link className="link" to="/estoque"><FaChartLine size={20}className="icons"/>Estoque</Link>
                    <Link className="link" to="/fornecedor" ><FaChartLine size={20}className="icons"/>Fornecedor</Link>
                    <Link className="link" to="/fornecedor/new"><FaChartLine size={20}className="icons"/>Novo Fornecedor</Link>


                </ul>
            </div>

            <div className="content" >
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </Router>
    </div >
)

export default Sidebar

