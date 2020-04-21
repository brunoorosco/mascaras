import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'

import Header from '../../components/Header'
// import Sidebar from '../../components/Sidebar'

import api from '../../services/api';

import './styles.css';

export default function Dashboard() {

    const [stocks, setStock] = useState([])
    const [productions, setProduction] = useState([])
    const [saidas, setSaida] = useState([])

    const history = useHistory();

    useEffect(() => {
        api.get('stock', {
            headers: {
                // Authorization: ongId
            }
        }).then(response => {
            setStock(response.data)
        })

        api.get('production').then(response => {
            setProduction(response.data)
        })
    }, [])
    useEffect(() => {
        api.get('production').then(response => {
            setProduction(response.data)
            console.log(response.data)
        })
    }, [])
    useEffect(() => {
        api.get('saida').then(response => {
            setSaida(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <>
        {/* <Helmet title="Home - React Router com Helmet" /> */}
        <Header />
              
        <div className="container-dashboard">
            <div className="content">
                {/* <div className="bots">
                    <Link className="link" to="/producao" >
                        Produção
                 </ Link>
                    <Link className="link" to="/saida" >
                        Saída
                </ Link>

                    <Link className="link" to="/school" >
                        Cadastro de Escola
                </ Link>
                </div> */}
                <div className="view">


                    <div className="min-100">
                        <p className="title"> Produzido</p>
                        {productions.map(production => (
                            <p className="text" key="1">{production.q}</p>

                        ))}
                    </div>

                    <div className="min-100">
                        <p className="title"> Saída</p>
                        {saidas.map(saida => (
                            <p className="text" key="1">{saida.q}</p>

                        ))}
                    </div>

                    <div className="min-100">
                        <p className="title"> Estoque</p>
                        {stocks.map(stock => (
                            <p className="text" key="1">{stock.q}</p>

                        ))}

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}