import React, { Component } from 'react';  
import ReactTable from "react-table";  

// import "react-table/react-table.css";  
import api from '../../services/api'

class FornecedorList extends Component {

    constructor() {
        super()
        // State é onde 'guardamos' as variáveis, os dados da nossa aplicação que sofrerão alterações. É onde basicamente declaramos todas as variáveis do nosso componente
        this.state = {
            materials: []
        }
    }

    // componentDidMount - Esse método é chamado imediatamente após a montagem do componente.
    componentDidMount() {
        // Utilizamos agora o axios para requisitar a lista de clientes
        api.get('school').then(response => {
            this.setState({
                materials: response.data

            })
            console.log(response.data)
        })
    }


    // Função para deletar um cliente
    deleteMaterial(materialId) {
        api.delete('fornecedor' + '/' + `${materialId}`)
            .then(() => {

                // Usamos o GET depois de uma requisição para atualizar a lista
                return api.get('school')
            })
            .then(res => {

                // Editando os dados no state
                const materials = res.data;
                this.setState({ materials });
            })
    }

    render() {

        const data = [{
            name: 'Ayaan',
            age: 26
        }, {
            name: 'Ahana',
            age: 22
        }, {
            name: 'Peter',
            age: 40
        }, {
            name: 'Virat',
            age: 30
        }, {
            name: 'Rohit',
            age: 32
        }, {
            name: 'Dhoni',
            age: 37
        }]
        const columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Age',
            accessor: 'age'
        }]
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={2}
                    pageSizeOptions={[2, 4, 6]}
                />
            </div>
        )
    }
}

export default FornecedorList