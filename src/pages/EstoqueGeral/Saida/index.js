import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
// import Select from 'react-select';

import Header from '../../components/Header'

import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'

import './styles.css';
import stock from '../../assets/stock.svg'

export default function Saida() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [schools, setSchools] = useState([]);

    const [state, setState] = useState({
        quantidade: "",
        data: moment(new Date()).format("DD-MM-YYYY"),
        school_id: ""
    })

    useEffect(() => {
        api.get('school').then(response => {
            setSchools(response.data)
        })
    }, [setSchools])

    async function handleSubmit(e) {

        e.preventDefault();
        const data = state
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
            <div className="container-saida">
                <div className="content">
                    <header>
                        <p>Saída de Mercadoria</p>
                        <img src={stock} width={125} alt="" />
                    </header>
                    <form onSubmit={handleSubmit}>
                        {/* <Select
                           // value={schools}
                            onChange={handleChange}
                            options={schools}
                        /> */}

                        <select name="school_id" defaultValue="escola" onChange={handleChange} autosize={true}>
                            <option value="escola" disabled>Escola</option>
                            {
                                schools.map(school => (
                                    <option value={school.id} key={school.id} className="text">{school.name}</option>

                                ))}
                        </select>
                        <input type="text"
                            placeholder="Quantidade"
                            maxLength="5"
                            name="quantidade"
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