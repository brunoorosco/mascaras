
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
    }
]

const Sidebar = () => (
    <div className="sidebar-container">
        <Router>
            <div className="sidebar">
                <header className="header">
                    <h2>PCP Máscaras</h2>
                </header>
                <ul>
                    <Link className="link" to="/" ><FaChartLine size={20}className="icons"/> Dashboard</Link>
                    <Link className="link" to="/school" ><FaChartLine size={20}className="icons"/>Cadastro de Escola</Link>
                    <Link className="link" to="/producao"><FaChartLine size={20}className="icons"/>Producao</Link>
                    <Link className="link" to="/saida"><FaChartLine size={20}className="icons"/>Saída</Link>


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

