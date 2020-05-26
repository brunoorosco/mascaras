
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import DatePicker from "react-datepicker";
import moment from 'moment'
import api from './../../../services/api'
import Input from './../../../components/Form/Input'

export default function StockIn() {

    const [teste, setTeste] = useState([])
    const history = useHistory();
    const [description, setDescription] = useState([])
    const [material, setMaterial] = useState({
        id: "",
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

        api.get('material/').then(response => {

            setMaterial(response.data[0])


        })
    }, [setMaterial])

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
                <h3>Edição de Material</h3>
                <Form initialData={material} onSubmit={handleSubmit} autocomplete="off">
                    <div className="row form-group">
                        <div className="col-2">
                            <Input className="form-control text-center"
                                name="id"
                                disabled
                            //value={material.description}
                            />
                        </div>
                        <div className="col">
                            <Input className="form-control"
                                placeholder="Descrição"
                                maxLength="100"
                                name="description"
                                //value={material.description}
                                onChange={handleChange} />
                        </div>
                        <div className="col-3">
                            <div className="input-group">
                                <Input className="form-control"
                                    placeholder="Peso/metros/Pç"
                                    name="deadline"
                                    // value={material.uniMed}
                                    onChange={handleChange} />
                                <div className="input-group-append select">
                                    <select name="tecido" defaultValue="malha" onChange={handleChange} className="btn btn-outline-secondary form-control">
                                        <option value="malha" >Kg</option>
                                        <option value="plano" >metro(s)</option>
                                        <option value="plano" >pç</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <Input className="form-control"
                                    placeholder="Largura"
                                    name="largura"
                                    //  value={material.largura}
                                    onChange={handleChange} />
                                <div className="input-group-append select">
                                    <span className="input-group-text">metro(s)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-2">
                            <select name="color" defaultValue="color" onChange={handleChange} className="form-control">
                                {/* <option value="color" disabled>Cor</option>
                                {
                                    colors.map(color => (
                                        <option value={color.id} key={color.id} className="text">{color.name}</option>

                                    ))} */}
                            </select>
                        </div>
                        <div className="col-1">
                            <Input
                                className="form-control"
                                placeholder="Rend."
                                name="rendimento"
                                //value={material.rendimento}
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
                                    // selected={material.deadline}
                                    onChange={date => handleData(date)}
                                    dateFormat="dd/MM/yyyy"
                                    value={material.deadline}
                                    className="form-control"
                                // placeholder="Prazo de Entrega"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col">
                            <Input className="form-control"
                                placeholder="Observação do Produto"
                                name="deadlineDescription"
                                //  value={material.obser}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <button className="btn btn-primary">Atualizar</button>
                </Form>
            </div>
        </>
    )
}