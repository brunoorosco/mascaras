import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

export default function Dashboard() {

    return (
        <div className="container-dashboard">
            <div className="content">

                <Link className="" to="/producao" >
                   Produção 
              
                </ Link>


                <Link className="" to="/saida" >
                   
                        Saída
                   
                </ Link>

                <div className="min-100">
                    Produzido
                    <p> {}</p>
                </div>

                <div className="min-100">
                    Saída 
                    <p> {}</p>
                </div>
                
                <div className="min-100">
                    Estoque
                    <p> {}</p>
                </div>

            </div>
        </div>
    )
}