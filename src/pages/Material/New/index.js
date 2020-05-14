import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
// import Select from 'react-select';

import Header from '../../../components/Header'

import "react-datepicker/dist/react-datepicker.css";

import api from '../../../services/api'

import './styles.css';
import stock from './../../../assets/stock.svg'

export default function Material() {

    const history = useHistory();
    const [schools, setSchools] = useState([]);
    const [startDate, setStartDate] = useState(new (Date));

    const [material, setMaterial] = useState({
        description: "",
        uniMed: "",
        quantidade: "",
        code: "",
        name: "",
        rendimento: "",
        price: "",
        largura: "",
        prazoEntrega: "",

    })

    useEffect(() => {
        api.get('school').then(response => {
            setSchools(response.data)
        })
    }, [setSchools])

    async function handleSubmit(e) {

        e.preventDefault();
        const data = material
        console.log(data);

        try {
            await api.post('saida', data, {
                headers: {
                    //       Authorization: ongId,
                }
            }

            )
            history.push('/dashboard')
        } catch (error) {
            alert(`Erro ao cadastrar ${error}`)

        }

    }
    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setMaterial({
            ...material,
            [evt.target.name]: value
        });
        console.log(value)
    }
    function handleData(data) {

        setStartDate(data)
        setMaterial({
            ...material,
            prazoEntrega: moment(data).format("DD-MM-YYYY")
        })
        console.log(moment(data).format("DD-MM-YYYY"))
        // setStartDate(evt.target.value)
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="container-material">
                    <div className="content">
                        <header>
                            <p>Cadastro de Produto</p>
                            <img src={stock} width={125} alt="" />
                        </header>

                        <form onSubmit={handleSubmit}>

                            <div class="row form-group">
                                <div className="col-2">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Código do Prod"
                                        name="code"
                                        value={material.code}
                                        onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <input className="form-control"
                                        placeholder="Descrição"
                                        maxLength="100"
                                        name="description"
                                        value={material.description}
                                        onChange={handleChange} />
                                </div>
                                <div className="col-3">
                                    <div className="input-group">
                                        <input className="form-control"
                                            placeholder="Peso ou metros"
                                            name="tecido"
                                            value={material.uniMed}
                                            onChange={handleChange} />
                                        <div className="input-group-append select">
                                            <select name="tecido" defaultValue="malha" onChange={handleChange} autosize={true} className="btn btn-outline-secondary form-control">
                                                <option value="malha" >Kg</option>
                                                <option value="plano" >metro(s)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input className="form-control"
                                            placeholder="Largura"
                                            name="largura"
                                            value={material.largura}
                                            onChange={handleChange} />
                                        <div className="input-group-append select">
                                            <span className="input-group-text">metro(s)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div className="col-2">
                                    <select name="color" defaultValue="color" onChange={handleChange} autosize={true} className="form-control">
                                        <option value="color" disabled>Cor</option>
                                        {
                                            schools.map(school => (
                                                <option value={school.id} key={school.id} className="text">{school.name}</option>

                                            ))}
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input
                                        className="form-control"
                                        placeholder="Rend."
                                        name="rendimento"
                                        value={material.rendimento}
                                        onChange={handleChange} />
                                </div>

                                <div className="col">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Prazo de Entrega</span>
                                        </div>

                                        <DatePicker
                                            name="data"
                                            showPopperArrow={true}
                                            selected={startDate}
                                            onChange={date => handleData(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="form-control"
                                            placeholder="Prazo de Entrega"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div className="col">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Observação do Produto"
                                        name="observa"
                                        value={material.obser}
                                        onChange={handleChange} />
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