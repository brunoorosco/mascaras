import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import './styles.css';
import stock from '../../assets/stock.svg'

export default function Saida() {

    const [state, setState] = useState({
        escola: "",
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
        <div className="container-saida">
            <div className="content">
                <header>
                    <p>Saída de Mercadoria</p>
                    <img src={stock} width={125} alt="" />
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="escola"
                        placeholder="Escola"
                        maxLength="4"
                        value={state.escola}
                        onChange={handleChange} />
                    <input type="text"
                        placeholder="Quantidade"
                        maxLength="5"
                        name="quantidade"
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