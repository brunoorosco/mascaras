import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Container, Col, Row, InputGroup, FormControl, Form } from 'react-bootstrap'
import Header from '../../components/Header'
import Alert from '../../components/Alert'

import api from '../../services/api';


import './styles.css';

export default function Fornecedor() {

    const history = useHistory();

    const [messageAlert, messageAlertSet] = useState([]);
    const [alert, alertSet] = useState("none");
    const [vars, setVars] = useState({
        cnpj: "",
        nome: "",
        email: "",
        number: "",
        contato: "",
        street: "",
        city: "",
        uf: "",
        telefone: "",
        celular: ""
    })

    async function handleCnpj() {
        const data = {
            cnpj: vars.cnpj
        }
        console.log(data);

        try {
            await api.get('cnpj/' + data.cnpj).then(response => {
                console.log(response.data)
                setVars({
                    ...vars,
                    nome: response.data.nome,
                    number: response.data.numero,
                    telefone: response.data.telefone,
                    street: response.data.logradouro,
                    city: response.data.municipio,
                    uf: response.data.uf,
                   
                })

            })

            // history.push('/dashboard')
        } catch (error) {
            messageAlertSet(`Erro ao cadastrar ${error}`)
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();
        const data = vars;
        
        console.log(data);

        try {
            await api.get('fornecedor', data, {
                headers: {
                    //       Authorization: ongId,
                }
            }).then(response => {
                console.log(response.data)
            })
             history.push('/fornecedor')
        } catch (error) {
            messageAlertSet(`Erro ao cadastrar ${error}`)
        }
    }

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setVars({
            ...vars,
            [evt.target.name]: value
        });
        console.log(value)
    }

    return (
        <>
            <Header />
            <Alert color="info" text={messageAlert} view={alert} />
            <div className="container">
                <div className="container-fornecedor">
                    <div className="content">
                        <header>
                            <p>Cadastro de Fornecedor </p>
                        </header>

                        <form onSubmit={handleSubmit}>

                            <div class="row form-group">
                                <div class="col-3 input-group">

                                    <div className="input-group">
                                        <input
                                            placeholder="CNPJ"
                                            maxLength="14"
                                            name="cnpj"
                                            value={vars.cnpj}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                onClick={handleCnpj}>
                                                <FiSearch size={17} className="icons" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        placeholder="Razão Social"
                                        name="nome"
                                        value={vars.nome}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div className="col">
                                    <input
                                        type="text"
                                        placeholder="Rua/Avenida/Praça"
                                        name="street"
                                        value={vars.street}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-2">
                                    <input
                                        type="text"
                                        placeholder="Número"
                                        maxLength="5"
                                        name="number"
                                        value={vars.number}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        placeholder="Cidade"
                                        name="city"
                                        value={vars.city}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-1">
                                    <input
                                        type="text"
                                        placeholder="UF"
                                        name="uf"
                                        value={vars.uf}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div class="row form-group">

                                <div className="col-2">
                                    <input type="text"
                                        placeholder="Telefone"
                                        name="telefone"
                                        value={vars.telefone}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-2">
                                    <input type="text"
                                        placeholder="Celular"
                                        name="celular"
                                        value={vars.celular}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-3">
                                    <input 
                                       type="text"
                                        placeholder="Contato"
                                        name="contato"
                                        value={vars.contato}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <input 
                                        type="text"
                                        placeholder="E-mail"
                                        name="email"
                                        value={vars.email}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>



                            <button className="button" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}