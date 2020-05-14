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
        numero: "",
        contato: "",
        logradouro: "",
        municipio: "",
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
                    numero: response.data.numero,
                    contato: response.data.contato,
                    telefone: response.data.telefone,
                    logradouro: response.data.logradouro,
                    municipio: response.data.municipio,
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
        const data = {
            cnpj: vars.cnpj
        }
        console.log(data);

        try {
            await api.get('cnpj/' + data.cnpj).then(response => {
                console.log(response.data)


            })

            // history.push('/dashboard')
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
            <Container>
                <div className="container-fornecedor">
                    <div className="content">
                        <header>
                            <p>Cadastro de Fornecedor </p>
                        </header>

                        <form onSubmit={handleSubmit}>
                                          <div className="line">
                                        <input type="text"
                                            placeholder="Razão Social"
                                            name="nome"
                                            value={vars.nome}
                                            onChange={handleChange}
                                        />
                                        <input type="text"
                                            placeholder="CNPJ"
                                            maxLength="14"
                                            name="cnpj"
                                            value={vars.cnpj}
                                            onChange={handleChange}
                                        />
                                        <button className="button" type="button" onClick={handleCnpj}><FiSearch size={20} className="icons" /></button>
                                    </div>



                                    <div className="line">
                                        <input type="text"
                                            placeholder="Telefone"
                                            name="telefone"
                                            value={vars.telefone}
                                            onChange={handleChange}
                                        />
                                        <input type="text"
                                            placeholder="Celular"
                                            name="celular"
                                            value={vars.celular}
                                            onChange={handleChange}
                                        />
                                    </div>



                                    <button className="button" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}