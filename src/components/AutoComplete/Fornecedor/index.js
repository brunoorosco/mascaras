import api from '../../../services/api'
//import React, { useEffect, useState, useRef } from "react";

// export default function Auto() {
//     const [display, setDisplay] = useState(false);
//     const [options, setOptions] = useState([]);
//     const [search, setSearch] = useState("");
//     const wrapperRef = useRef(null);
//     const [state, setState] = useState({
//         fornecedor: "",
//         fornecedor_id: ""
//     })
//     useEffect(() => {
//         api.get('fornecedor').then(response => {
//             setOptions(response.data);
//         })
//     }, [setOptions])

//     useEffect(() => {
//         window.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             window.removeEventListener("mousedown", handleClickOutside);
//         };
//     });

//     const handleClickOutside = event => {
//         const { current: wrap } = wrapperRef;
//         if (wrap && !wrap.contains(event.target)) {
//             setDisplay(false);
//         }
//     };

//     function handleChange(evt) {
//         evt.preventDefault();

//         const value = evt.target.value;
//         setState({
//             ...state,
//             [evt.target.name]: value
//         });
//         console.log(value)
//     }

//     return (
//         <div ref={wrapperRef} className="col ">
//             <select className="form-control" defaultValue="fornecedor" name="fornecedor" onChange={handleChange} autosize={true}>
//                 <option value="fornecedor" disabled>Fornecedor</option>
//                 {
//                     options.map(fornecedor => (
//                         <option value={fornecedor.id} key={fornecedor.id} className="text">{fornecedor.name}</option>

//                     ))}
//             </select>

//         </div>
//     );

// }
// /src/components/form/fields/Select.js
import React, { useEffect, useState } from 'react'


export default function Select({ name, value }) {

    const [options, setOptions] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        api.get('fornecedor').then(response => {
            setOptions(response.data);

        })
    }, [setOptions])

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setItem(value)
    }

    return (
        <>
            <select name={name} defaultValue='fornecedor' className="form-control" onChange={handleChange}>
                <option defaultValue="0" disabled>Fornecedor</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </>
    )
}
