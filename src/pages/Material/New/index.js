import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
import FormMaterial from './../../../components/FormMaterial'
// import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";

import api from '../../../services/api'

import './styles.css';
import stock from './../../../assets/stock.svg'

export default function Material() {

    const history = useHistory();
    const [colors, setcolors] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const [material, setMaterial] = useState({
        description: "",
        uniMed: "",
        quantidade: "",
        code: "",
        rendimento: "",
        price: "",
        largura: "",
        deadline: "",

    })

    useEffect(() => {

        api.get('color').then(response => {
            setcolors(response.data)
        })
    }, [setcolors])


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
            deadline: moment(data).format("DD-MM-YYYY")
        })
        console.log(moment(data).format("DD-MM-YYYY"))
        // setStartDate(evt.target.value)
    }

    return (
        <>
            <FormMaterial botao={"Cadastrar"} />
        </>
    )
}