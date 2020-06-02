
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import DatePicker from "react-datepicker";
import moment from 'moment'
import api from './../../../services/api'
import Input from './../../../components/Form/Input'
import AutoFornecedor from '../../../components/AutoComplete/Fornecedor'
import './styles.css'

export default function StockIn() {

    const [teste, setTeste] = useState([])
    const history = useHistory();
    const [description, setDescription] = useState([])
    const [material, setMaterial] = useState({
        notaFiscal: "",
        dataEntrada: new Date(),
        idFornecedor: "",
        quantity: "",
        idMaterial: "",
        unitPrice: "",
        totalPrice: "",
    })

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setMaterial({
            ...material,
            [evt.target.name]: value
        });

    }
    function handleData(data) {

        //setStartDate(data)
        setMaterial({
            ...material,
            deadline: moment(data).format("DD-MM-YYYY")
        })
        console.log(moment(data).format("DD-MM-YYYY"))
        // setStartDate(evt.target.value)
    }

    async function handleSubmit(data) {


        console.log(data)

        try {
            await api.put('material', data, {
                headers: {
                    //       Authorization: ongId,
                }
            })
            history.push('/estoque')
        } catch (error) {
            alert(`Erro ao atualizar ${error}`)
        }
    }
    return (
        <>
            <div className="container">

                <h3>Entrada de Material</h3>
                <Form initialData={material} onSubmit={handleSubmit} autoComplete="off">
                    <div className="row form-group">
                        <div className="col-2">
                            <Input className="form-control text-center"
                                name="notaFiscal"
                                placeholder="Nota Fiscal Nº"
                            // value={material.notaFiscal}
                            />
                        </div>
                        <div className="col">
                            <Input className="form-control"
                                placeholder="Material"
                                name="description"
                            // value={material.idMaterial}
                            // onChange={handleChange} 
                            />
                        </div>
                        <div className="col-3">
                            <Input className="form-control"
                                placeholder="Quantidade"
                                name="deadline"
                            // value={material.quantity}
                            // onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-2">
                            <div className="input-group">
                                <Input className="form-control"
                                    placeholder="Largura"
                                    name="unitPrice"
                                // value={material.unitPrice}
                                // onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">

                        <div className="col-2">
                            <Input
                                className="form-control"
                                placeholder="Valor Total"
                                name="totalPrice"
                            // value={material.totalPrice}
                            // onChange={handleChange} 
                            />
                        </div>

                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Prazo de Entrega</span>
                                </div>

                                <DatePicker
                                    name="dataEntrada"
                                    showPopperArrow={true}
                                    // selected={material.dataEntrada}
                                    onChange={date => handleData(date)}
                                    dateFormat="dd/MM/yyyy"
                                    value={material.dataEntrada}
                                    className="form-control"
                                // placeholder="Prazo de Entrega"
                                />

                            </div>
                        </div>
                        <div className="col">
                            <AutoFornecedor name={'forn'} />
                        </div>
                    </div>



                    <div className="row form-group">
                        <div className="col">
                            <Input className="form-control"
                                placeholder="Observação do Produto"
                                name="data"
                            // value={material.dataEntrada}
                            // onChange={handleChange} 
                            />
                        </div>
                    </div>

                    <button className="btn btn-danger btn-block">Registrar Entrada</button>
                </Form>


            </div>
        </>
    )
}