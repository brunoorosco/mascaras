import React, { useEffect, useState } from 'react'
import api from './../../services/api'

const Select = ({ name, value, onChange , ...rest}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        api.get('fornecedor').then(response => {
            setOptions(response.data);
        })
    }, [setOptions])

    const handleChange = (event) => {
    //   console.log(event.target.value)
       onChange(event.target.value);
    }

    return (

        <select name={name}  defaultValue='fornecedor' className="form-control" onChange={handleChange} {...rest} >
            <option value="fornecedor" disabled>Fornecedor</option>
            {options.map(option => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>

    );

}

export default Select