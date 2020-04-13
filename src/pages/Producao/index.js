import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import producao from '../../assets/producao.png'

export default function Producao() {

    const [startDate, setStartDate] = useState(new Date());

    const [state, setState] = useState({
        material: "",
        quantidade: "",
        data: "",
    })

    async function handleSubmit() {
        const data = setState({
            ...state,
            setStartDate
        });
        console.log(data);

    }
    function handleData(data) {
       setStartDate(data)
        console.log(data.format("dd/MM/yyyy"))
        // setStartDate(evt.target.value)
    }

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log(evt.target.name + value)
    }
    return (
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
                    {/* <DatePicker
                        name="data"
                        showPopperArrow={false}
                        selected={state.data}
                        onChange={handleChange}
                        dateFormat="dd/MM/yyyy"
                    /> */}
                    <DatePicker
                        name="data"
                        showPopperArrow={false}
                        selected={startDate}
                        onChange={date =>handleData(date)}
                        dateFormat="dd/MM/yyyy"
                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )

}