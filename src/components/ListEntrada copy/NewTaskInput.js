import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import api from '../../services/api'

const NewTaskInput = ({ onSubmit }) => {

  const [options, setOptions] = useState([]);
  const [listMaterial, setListMaterial] = useState([]);
  const [disableInput, setDisableInput] = useState(false)
  const [total, setTotal] = useState('')

  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: moment(Date()).format("DD-MM-YYYY"),
    idFornecedor: "",
    totalPrice: "",
    quantity: 1,
    code: "",
    idMaterial: "",
    material: "material",
    unitPrice: "",
    totalPrice: 0,
  });

  const [pedido, setPedido] = useState({
    notaFiscal: "",
    dataEntrada: moment(Date()).format("DD-MM-YYYY"),
    idFornecedor: "",
    fornecedor: "",
    totalPrice: "",
  });

  useEffect(() => {
    api.get('fornecedor').then(response => {
      setOptions(response.data);
    })
  }, [setOptions])

  useEffect(() => {
    api.get('material').then(response => {
      setListMaterial(response.data);
    })
  }, [setListMaterial])


  useEffect(() => {
    const valor = (parseFloat(newItem.quantity) * parseFloat(newItem.unitPrice))

    if (!isNaN(valor)) {
      setNewItem({
        ...newItem,
        totalPrice: valor,
      })
    } else {
      setNewItem({
        ...newItem,
        totalPrice: 0,
      })
    }
  }, [newItem.quantity, newItem.unitPrice])


  function filter_array(test_array) {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
      const value = test_array[index];

      if (value) {
        result[++resIndex] = value;
      }
    }

    return result;
  }



  function setNewTask(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    const name = evt.target.name;
    setNewItem({
      ...newItem,
      [name]: value
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

  function handleChange(evt) {
    evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;
    setNewItem({
      ...newItem,
      [evt.target.name]: value,
    });
  }

  function handleSelect(evt) {
    evt.preventDefault();
    const codeMaterial = listMaterial[evt.target.options.selectedIndex - 1].code; //função retorna valor da code do material selecionado
    const nameMaterial = listMaterial[evt.target.options.selectedIndex - 1].description; //função retorna valor da code do material selecionado
    //console.log(material[evt.target.options.selectedIndex-1].code)
    const name = evt.target.name;
    const value = evt.target.value;

    setNewItem({
      ...newItem,
      [evt.target.name]: value,
      code: codeMaterial,
      material: nameMaterial
    });
  }

  function submit(e) {
    e.preventDefault();
    //   console.log(newItem)
    onSubmit(newItem);
    setNewItem({
      ...newItem,
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      material: "material",

    })
    setDisableInput(true)
  }

  return (
    <div>
      <form onSubmit={submit} autoComplete="off">
        <div className="card">
          <div className="card-body">
            <h4>Cadastro de Entrada</h4>
            <div className="row">

              <div className="col-2">
                <input
                  name="notaFiscal"
                  className="form-control"
                  placeholder="Nota Fiscal / Cupom Fiscal"
                  onChange={setNewTask}
                  disabled={disableInput}

                />
              </div>
              <div className="col">
                <select name='idFornecedor' disabled={disableInput} defaultValue='fornecedor' className="form-control" onChange={handleChange} >
                  <option value="fornecedor" disabled>Fornecedor</option>
                  {options.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
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
                  disabled={disableInput}
                />
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <input
              placeholder="Cód. do Produto"
              name="code"
              className="form-control"
              defaultValue={newItem.code}
              disabled
            />
          </div>
          <div className="col-5">
            <select name='idMaterial' defaultValue={newItem.material} className="form-control" onChange={handleSelect}>
              <option value="material" disabled>Material</option>
              {listMaterial.map(option => (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              ))}
            </select>
          </div>
          <div className="col-1">
            <input
              required
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Qt."
              onChange={handleChange}
              value={newItem.quantity}
            />
          </div>
          <div className="col-2">
            <input
              required
              name="unitPrice"
              className="form-control"
              placeholder="R$ Unitário"
              onChange={handleChange}
              value={newItem.unitPrice}
            />
          </div>
          <div className="col-2">
            <input
              name="totalPrice"
              className="form-control"
              placeholder="R$ Total"
              onChange={handleChange}
              value={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newItem.totalPrice)}
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
