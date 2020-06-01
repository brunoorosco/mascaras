import { useField } from '@unform/core';
import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, {
    Component,
    PropTypes,
    useEffect,
    useState,
    useRef
} from 'react'


// export default function AutoFornecedor({ name, ...rest }) {

//     const [fornecedor, setFofrnecedor] = useState([]);

//     function getItemsAsync(searchValue, cb) {
//         let url = `https://api.github.com/search/repositories?q=${searchValue}&language=javascript`
//         fetch(url).then((response) => {
//             return response.json();
//         }).then((results) => {
//             if (results.items != undefined) {
//                 let items = results.items.map((res, i) => { return { id: i, value: res.full_name } })
//                 this.setState({ repos: items })
//                 cb(searchValue)
//             }
//         });
//     }

//     return (
//         <>
//             <input name={name}  {...rest} className="form-control" />
//             <Search items={this.state.repos}
//                 multiple={true}
//                 getItemsAsync={this.getItemsAsync.bind(this)}
//                 onItemsChanged={this.HiItems.bind(this)} />
//         </>
//     )
// }


class AutoFornecedor extends Component {

    constructor(props) {
        super(props)
        this.state = { repos: [] }
    }

    getItemsAsync(searchValue, cb) {
        let url = `http://localhost:3333/fornecedor`
        fetch(url).then((response) => {
            return response.json();
        }).then((results) => {
            if (results.items != undefined) {
                let items = results.items.map((res, i) => { return { id: i, value: res.full_name } })
                this.setState({ repos: items })
                cb(searchValue)
            }
        });
    }

    render() {
        return (
            <div>
                <Search items={this.state.repos}
                    multiple={true}
                    getItemsAsync={this.getItemsAsync.bind(this)}
                // onItemsChanged={this.HiItems.bind(this)} 
                />
            </div>
        )
    }
}

export default AutoFornecedor;