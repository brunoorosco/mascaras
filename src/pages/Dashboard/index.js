import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import './styles.css';

export default function Dashboard() {

    const [stocks, setStock] = useState([])
    const [state, setState] = useState({
        estoque: [],
        quantidade: "",
        data: "",
    })
    const history = useHistory();

    useEffect(() => {
        api.get('stock', {
            headers: {
                // Authorization: ongId
            }
        }).then(response => {
            setStock(response.data)

        })
    }, [])

    return (
        <div className="container-dashboard">
            <div className="content">

                <Link className="link" to="/producao" >
                    Produção
                 </ Link>
                <Link className="link" to="/saida" >
                    Saída
                </ Link>

                <div className="min-100">
                    <p className="title"> Produzido</p>
                    <p> {}</p>
                </div>

                <div className="min-100">
                    <p className="title"> Saída</p>
                    <p> {}</p>
                </div>

                <div className="min-100">
                    <p className="title"> Estoque</p>
                    {stocks.map(stock => (
                        <p  className="text" key={stock.id}>{stock.quantidade}</p>

                    ))}
                  
                </div>

            </div>
        </div>
    )
}