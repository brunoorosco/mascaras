import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function MaterialList(){

        // State é onde 'guardamos' as variáveis, os dados da nossa aplicação que sofrerão alterações. É onde basicamente declaramos todas as variáveis do nosso componente
     const [material, setMaterial]   = useState([])

        useEffect(() => {
            api.get('material').then(response => {
                setMaterial(response.data)
                console.log(response.data[0].cnpj)
            })          
        },[])
        

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
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>In Stock</th>
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
                                    <td>{material.name}</td>
                                    <td>{material.email}</td>
                                    <td>{material.telefone}</td>
                                    <td>{material.cpf}</td>
                                    <td>
                                        <Link
                                            className='btn btn-default btn-xs'
                                            to={`/material/${material.id}`}
                                        >
                                            Editar
                                                        </Link>
                                        <button
                                            className="btn btn-danger btn-xs btn-delete"
                                            onClick={() => this.handleDeleteMaterial(material.id)}
                                        >
                                            Excluir
                                                            </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        )
    }
