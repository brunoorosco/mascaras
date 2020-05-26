import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
// import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'

//import './styles.css';

export default function Material(props) {

    console.log(props.botao)

    const history = useHistory();
    const [colors, setcolors] = useState([]);
    // const [startDate, setStartDate] = useState(new Date());

    const [material, setMaterial] = useState({
        description: "",
        uniMed: "",
        quantidade: "",
        code: "",
        rendimento: "",
        price: "",
        largura: "",
        deadline: "",
        deadlineDescription: "",
        volume:""
       
    })


    async function handleSubmit(e) {

        e.preventDefault();
        const data = material
        console.log(data);

        try {
            await api.post('material', data, {
                headers: {
                    //       Authorization: ongId,
                }
            }

            )
            history.push('/estoque')
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

        // setStartDate(data)
        setMaterial({
            ...material,
            deadline: moment(data).format("DD-MM-YYYY")
        })
        console.log(moment(data).format("DD-MM-YYYY"))
        // setStartDate(evt.target.value)
    }

    return (
        <>
             <div className="container">
                <h3>Cadastro de Material</h3>

                <form onSubmit={handleSubmit} autoComplete="off">

                    <div className="row form-group">
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
                                    name="volume"
                                    value={material.volume}
                                    onChange={handleChange} />
                                <div className="input-group-append select">
                                    <select name="uniMed" defaultValue="kg" onChange={handleChange}  className="btn btn-outline-secondary form-control">
                                        <option value="kg" >Kg</option>
                                        <option value="m" >metro(s)</option>
                                        <option value="pc" >pç(s)</option>
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
                    <div className="row form-group">
                        <div className="col-2">
                            <select name="color" defaultValue="color" onChange={handleChange}  className="form-control">
                                <option value="color" disabled>Cor</option>
                                {/* {
                                    colors.map(color => (
                                        <option value={color.id} key={color.id} className="text">{color.name}</option>

                                    ))} */}
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
                                    //selected={material.deadline}
                                    value={material.deadline}
                                    onChange={date => handleData(date)}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    placeholder="Prazo de Entrega"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col">
                            <input className="form-control"
                                type="text"
                                placeholder="Observação do Produto"
                                name="deadlineDescription"
                                value={material.deadlineDescription}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <button className="button" type="submit">{props.botao}</button>
                </form>
            </div>

        </>
    )
}