import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import AutoFornecedor from '../AutoComplete/Fornecedor'

const NewTaskInput = ({ onSubmit }) => {


  const [disableInput, setDisableInput] = useState(false)
  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: moment(Date()).format("DD-MM-YYYY"),
    idFornecedor: "",
    fornecedor: "",
    quantity: "",
    material:"",
    idMaterial: "",
    unitPrice: "",
    totalPrice: "",
  });


  function setNewTask(evt) {
    evt.preventDefault();
    console.log(evt)
    const value = evt.target.value;
    setNewItem({
      ...newItem,
      [evt.target.name]: value
    });

  }
  function setNewTaskData(data) {
    //setStartDate(data)
    setNewItem({
      ...newItem,
      dataEntrada: moment(data).format("DD-MM-YYYY")
    })
    console.log(moment(data).format("DD-MM-YYYY"))
    // setStartDate(evt.target.value)
  }


  function submit(e) {
    e.preventDefault();
    //   console.log(newItem)
    onSubmit(newItem);
    setNewItem({
      ...newItem,
      quantity:"0",
      unitPrice: "0",
      totalPrice:"0"
    })
    setDisableInput(true)
  }

  return (
    <div>
      <form onSubmit={submit} autoComplete="off">
        <div className="card">
          <div className="card-body">
            Cadastro de Entrada
            <div className="row">

              <div className="col-2">
                <input
                  name="notaFiscal"
                  className="form-control"
                  placeholder="Nota Fiscal / Cupom Fiscal"
                  onChange={setNewTask}
                  disabled = {disableInput}
                  
                />
              </div>
              <div className="col-5">
                <input
                  name="fornecedor"
                  className="form-control"
                  placeholder="Fornecedor"
                  onChange={setNewTask}
                  disabled = {disableInput}
                />
              </div>
              <div className="col-2">
                <DatePicker
                  name="dataEntrada"
                  showPopperArrow={true}

                  onChange={setNewTaskData}
                  dateFormat="dd/MM/yyyy"
                  value={newItem.dataEntrada}
                  className="form-control"
                  placeholder="Data da Entrega"
                  disabled = {disableInput}
                />
              </div>
              <div className="col">
                            <AutoFornecedor 
                                    name='fornecedo'
                                    onChange={setNewTask} />
                        </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <input
              name="material"
              className="form-control"
              placeholder="Material"
              onChange={setNewTask}
              value={newItem.material}
            />
          </div>
          <div className="col-1">
            <input
              name="quantity"
              className="form-control"
              placeholder="Qt."
              onChange={setNewTask}
              value={newItem.quantity}
            />
          </div>
          <div className="col-2">
            <input
              name="unitPrice"
              className="form-control"
              placeholder="R$ Unitário"
              onChange={setNewTask}
              value={newItem.unitPrice}
            />
          </div>
          <div className="col-2">
            <input
              name="totalPrice"
              className="form-control"
              placeholder="R$ Total"
              onChange={setNewTask}
              value={newItem.totalPrice}
            />
          </div>

        </div>
        <button className="btn btn-danger btn-block" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;
