import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

export default function Dashboard() {

    return (
        <div className="container-dashboard">
            <div className="content">

                <Link className="back-link" to="/producao" >
                    <div className="min-100">
                        Produção
                </div>
                </ Link>


                <Link className="back-link" to="/saida" >
                    <div className="min-100">
                        Saída
                    </div>
                </ Link>

                <div className="min-100">
                    Produzido =  {}
                </div>

                <div className="min-100">
                    Saída = {}
                </div>
                
                <div className="min-100">
                    Estoque {}
                </div>

            </div>
        </div>
    )
}