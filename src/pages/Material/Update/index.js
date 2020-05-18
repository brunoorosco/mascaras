import React, { useEffect } from 'react'
import { Form } from "@unform/web";

import Input from './../../../components/Form/Input'

export default function Produto() {

    const initialData = {
        email: 'bruno@'
    }
    const teste = 
        useEffect(() => { }, [])


function handleSubmit(data) {
    console.log(data)
}
return (
    <>
        <h3>Teste formulario</h3>
        <Form initialData={initialData} onSubmit={handleSubmit}>
            <div className="row form-group">
                <Input name="name" />
            </div>
            <div className="row form-group">
                <Input name="email" />
            </div>
            <div className="row form-group">
                <Input name="password" type="password" />
            </div>
            <button className="btn btn-primary">enviar</button>
        </Form>
    </>
)
}