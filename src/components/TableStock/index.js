import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function MaterialList() {

    // State é onde 'guardamos' as variáveis, os dados da nossa aplicação que sofrerão alterações. É onde basicamente declaramos todas as variáveis do nosso componente
    const [material, setMaterial] = useState([])

    useEffect(() => {
        api.get('material').then(response => {
            setMaterial(response.data)
         //  console.log(response.data[0].cnpj)
        })
    }, [setMaterial])


    async function handleDeleteMaterial(id) {
        try {
            await api.delete(`material/${id}`, {
                headers: {
                    // Authorization: ongId
                }
            })
            setMaterial(material.filter(material => material.id !== id));
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    return (
        <div className="container">
            <h2>Estoque de Materiais</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Stock Mínimo</th>
                        <th>Stock Máximo</th>
                        <th>Total</th>
                        <th>Cor</th>
                        <th>Fornecedor</th>
                        <th className="text-center">
                            <Link
                                className=''
                                to='/material/new'
                            >
                                <FiPlus size={20} /> Material
                                </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        material.map((material, index) => (
                            <tr key={material.id}>
                                <td>{material.code}</td>
                                <td>{material.description}</td>
                                <td>{material.min}</td>
                                <td>{material.max}</td>
                                <td>{material.total}</td>
                                <td>{material.cor}</td>
                                <td>{material.fornecedor}</td>
                                <td className="text-center">
                                    <Link
                                        className='icon'
                                        to={`/material/${material.id}`}
                                    >
                                        <FiEdit size={15} color={'#0202B2'} />
                                    </Link>
                                    <Link
                                        className="icon" to='#'
                                        onClick={() => handleDeleteMaterial(material.id)}
                                    >
                                        <FiTrash size={15} color={'#b20202'} />
                                   </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
