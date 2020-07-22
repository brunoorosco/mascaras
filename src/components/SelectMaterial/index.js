import React, { useEffect, useState } from 'react'
import api from './../../services/api'

const SelectMaterial = ({ name, value, onChange, selectItem, codeItem, nameItem }) => {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        api.get('material').then(response => {
            setItens(response.data);
        })
    }, [setItens])

    const handleChange = (event) => {
        //   console.log(event.target.value)
        onChange(event.target.value);
    }

    const handleSelect = (evt) => {
        evt.preventDefault();
        codeItem = itens[evt.target.options.selectedIndex - 1].code; //função retorna valor da code do material selecionado
        nameItem = itens[evt.target.options.selectedIndex - 1].description; //função retorna valor da code do material selecionado
        //console.log(material[evt.target.options.selectedIndex-1].code)
        name = evt.target.name;
        selectItem = evt.target.value;
        //console.log(codeItem)

   
    }
    return (
        <select name={name} className="form-control" onChange={handleSelect}>
            <option value="material" disabled>Material</option>
            {itens.map(option => (
                <option key={option.id} value={option.id}>
                    {option.description}
                </option>
            ))}
        </select>
    );
}

export default SelectMaterial;