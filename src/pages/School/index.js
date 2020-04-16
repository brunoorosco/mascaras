import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
import Header from '../../components/Header'

import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'

import './styles.css';
import school from '../../assets/school.png'

export default function Saida() {

    const history = useHistory();
    const [schools, setSchools] = useState([]);

    async function handleSubmit(e) {

        e.preventDefault();
        const data = {
            name: schools
        }
        console.log(data);

        try {
            await api.post('school', data, {
                headers: {
                    //       Authorization: ongId,
                }
            }).then(response => {
                alert(response.data.message)
            })
            setSchools("")

            // history.push('/dashboard')
        } catch (error) {
            alert(`Erro ao cadastrar ${error}`)
        }
    }

    function handleChange(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setSchools(value)
        //  console.log(value)
    }

    return (
        <>
            <Header />
            <div className="container-school">
                <div className="content">
                    <header>
                        <p>Cadastro de Escola</p>
                        <img src={school} width={125} alt="" />
                    </header>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="CFP da Escola"
                            maxLength="5"
                            name="school"
                            value={schools}
                            onChange={handleChange}
                        />



                        <button className="button" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}