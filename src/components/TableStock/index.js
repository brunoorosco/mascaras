import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function MaterialList() {

    // State é onde 'guardamos' as variáveis, os dados da nossa aplicação que sofrerão alterações. É onde basicamente declaramos todas as variáveis do nosso componente
    const [material, setMaterial] = useState([])

    useEffect(() => {
        api.get('material').then(response => {
            setMaterial(response.data)
            console.log(response.data[0].cnpj)
        })
    }, [])


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
                        <th>Stock</th>
                        <th>Largura</th>
                        <th>Rendimento</th>
                        <th>Cor</th>
                        <th>Fornecedor</th>
                        <th>
                            <Link
                                className='btn btn-primary'
                                to='/material'
                            >
                                Adicionar Material
                                </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        material.map((material, index) => (
                            <tr key={material.id}>
                                <td>{material.id}</td>
                                <td>{material.description}</td>
                                <td>{material.stock}</td>
                                <td>{material.largura}</td>
                                <td>{material.rendimento}</td>
                                <td>{material.cor}</td>
                                <td>{material.fornecedor}</td>
                                <td>
                                    <Link
                                        className='icon'
                                        to={`/material/${material.id}`}
                                    >
                                        <FiEdit size={15} color={'#0202B2'} />
                                    </Link>
                                    <Link
                                        className="icon"
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
