import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import { FiTrash, FiEdit } from 'react-icons/fi'
import api from '../../services/api'
import fakeData from '../../assets/uses.json'
import 'react-table-6/react-table.css';
import Fornecedor from '../../pages/Fornecedor/New';

export default function ListFornecedor() {

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('fornecedor').then(response => {
            setData(response.data)
        })

    },[])

    async function handleDeleteMaterial(id) {
        try {
            await api.delete(`fornecedor/${id}`, {
                headers: {
                   // Authorization: ongId
                }
            })
           setData(data.filter(fornecedor => fornecedor.id !== id)); 
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    const columns = [{
        Header: 'CNPJ',
        accessor: 'cnpj',
        width: 140,

    }, 
    {
        Header: 'Empresa',
        accessor: 'name'
    }, {
        Header: 'Telefone',
        accessor: 'telephone',
        filterable: false
    }, {
        Header: 'Contato',
        accessor: 'contact',
        filterable: false
    }, {
        Header: 'Email',
        accessor: 'email',
        filterable: false
    },
    {
        width: 80,
        sorteble: false,
        Header: 'Ação',
        filterable: false,
        maxWidth:80,
        minWidth:80,
        Cell: props => {
            return (
                <div>
                    <Link className="btn-sm" to={`/fornecedor/${data.name}`} ><FiEdit size={15} color={'#0202B2'} /></Link>
                    <Link className="btn-sm" to="#"onClick={() => handleDeleteMaterial(props.original.id)}><FiTrash size={15} color={'#b20202'} /></Link>
                   
                </div>

            )

        }
    }]

    return (
    
            <ReactTable className='table'
                filterable
                data={data}
                columns={columns}
                defaultPageSize={10}
                pageSizeOptions={[5, 10, 25]}
            />

        
    );
};