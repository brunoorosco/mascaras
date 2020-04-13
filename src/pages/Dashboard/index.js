import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

export default function Dashboard() {
    
    const [startDate, setStartDate] = useState(new Date());

    const [state, setState] = useState({
       estoque: 200,
        quantidade: "",
        data: "",
    })

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
                    <p className="text"> {state.estoque}</p>
                </div>

            </div>
        </div>
    )
}