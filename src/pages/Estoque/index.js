
// import React from 'react'
// import ReactDOM from 'react-dom';

// import MaterialList from '../../components/TableStock'

// export default function Estoque() {

//     return (

//         <>
//             <MaterialList />
//         </>

//     );
// };
import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
//import '../css/Table.css'
//import '../dist/react-bootstrap-table-all.min.css'
 
 
function onInsertRow(row) {
  let newRowStr = ''
 
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }
  alert('You inserted:\n ' + newRowStr)
}
 
 
function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}
 
class Table7 extends Component {
  render() {
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow,

     
    }
 
    // To delete rows you be able to select rows
    const selectRowProp = {
      mode: 'checkbox'
    }
    var products = [{
        id: 1,
        name: "Item name 1",
        price: 100
    },{
        id: 2,
        name: "Item name 2",
        price: 100
    },];

    const cellEditProp = {
        mode: 'dbclick', // 'dbclick' for trigger by double-click
        nonEditableRows: function() {
          return [3];
        }
      }
   
     
 
    return (
      <div>
        <BootstrapTable data={products}
                         pagination={true}
                        insertRow={true}
                        deleteRow={true}
                        selectRow={selectRowProp}
                        options={options}
                        cellEdit={cellEditProp}
        >
          <TableHeaderColumn isKey dataField='id'
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'
          >
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table7