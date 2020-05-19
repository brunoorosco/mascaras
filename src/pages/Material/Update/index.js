import React, { useEffect, useState } from 'react'
import { Form } from "@unform/web";
import api from './../../../services/api'
import Input from './../../../components/Form/Input'

export default function Produto(props) {

    
    const id = props.match.params.id;
    console.log(id)

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

    
    const initialData = {
        ...material.description
    }

    useEffect(() => {

        api.get('material/'+id).then(response => {
            setMaterial(response.data)
        })
    }, [setMaterial])


function handleSubmit(data) {
    console.log(data)
    console.log({material})
}
return (
    <>
        <h3>Teste formulario</h3>
        <Form initialData={initialData} onSubmit={handleSubmit}>
            <div className="row form-group">
                <Input name="description" />
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