import React, { useState } from 'react';
import InputMask from 'react-input-mask'
import './styles.css'
import producao from '../../assets/producao.png'

export default function Producao() {

    const [state, setState] = useState({
        material: "",
        quantidade: "",
        data: "",
    })

    async function handleSubmit() {


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
                    <InputMask
                        placeholder="Data"
                        mask="99/99/99"
                        name="data"
                        value={state.data}
                        onChange={handleChange}

                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )

}