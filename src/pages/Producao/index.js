import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../components/Header'

import api from '../../services/api'

import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import producao from '../../assets/producao.png'

export default function Producao() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());

    const [state, setState] = useState({
        material: "",
        quantidade: "",
        data: moment(new Date()).format("DD-MM-YYYY"),
    })

    async function handleSubmit(e) {

        e.preventDefault();
        const data = state
        //  startDate

        console.log(data);
        try {
            await api.post('production', data, {
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
    function handleData(data) {

        setStartDate(data)
        setState({
            ...state,
            data: moment(data).format("DD-MM-YYYY")
        })
        console.log(moment(data).format("DD-MM-YYYY"))
        // setStartDate(evt.target.value)
    }

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log(value)
    }
    return (
        <>
        <Header />
        <div className="producao-container">
            <div className="content">
                <header>
                    <p>Produção</p>
                    <img src={producao} width={250} />
                </header>
                <form onSubmit={handleSubmit}>
                    <select name="material" defaultValue="Tipo de Corte" onChange={handleChange}>
                        <option disabled>Tipo de Corte</option>
                        <option>Mascara</option>
                        <option>Tira</option>
                    </select>
                    <input type="text"
                        name="quantidade"
                        placeholder="Quantidade"
                        value={state.quantidade}
                        onChange={handleChange} />

                    <DatePicker
                        name="data"
                        showPopperArrow={false}
                        selected={startDate}
                        onChange={date => handleData(date)}
                        dateFormat="dd/MM/yyyy"
                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>
    )

}