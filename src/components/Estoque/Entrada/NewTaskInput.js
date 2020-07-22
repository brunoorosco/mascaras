import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import api from '../../../services/api'
import InputMoney from '../../InputMoney'
import SelectFornecedor from '../../SelectFornecedor'
import SelectMaterial from '../../SelectMaterial'

const NewTaskInput = ({ onSubmit }) => {

  const [forn, setForn] = useState([]);
  const [material, setMaterial] = useState({
    code: "",
    name: "",
    price: "",
  });
  const [price, setPrice] = useState("");
  const [options, setOptions] = useState([]);
  const [listMaterial, setListMaterial] = useState([]);
  const [disableInput, setDisableInput] = useState(false)
  const [total, setTotal] = useState('')

  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: moment(Date()).format("DD-MM-YYYY"),
    fornecedor_id: "",
    quantity: 1,
    code: "",
    material_id: "",
    material: "material",
    unitPrice: "",
    totalPrice: 0,
  });

  useEffect(() => {
    setNewItem({
      ...newItem,
      fornecedor_id: forn,
    })
  }, [forn])


  useEffect(() => {
    api.get('material').then(response => {
      setListMaterial(response.data);
    })
  }, [setListMaterial])


  useEffect(() => {

    const valor = (parseFloat(newItem.quantity) * parseFloat(price))

    if (!isNaN(valor)) {
      setNewItem({
        ...newItem,
        totalPrice: valor,
        unitPrice: price
      })
    } else {
      setNewItem({
        ...newItem,
        totalPrice: 0,
      })
    }
  }, [newItem.quantity, price])

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
  }

  function handleChange(evt) {
    evt.preventDefault();
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
    onSubmit(newItem);
    setNewItem({
      ...newItem,
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      material: "material",

    })
    setPrice(0)
    setDisableInput(true)
  }

  return (
    <div>
      <form onSubmit={submit} autoComplete="off">
        <div className="card">
          <div className="card-header">
            <strong>Cadastro de Entrada</strong>
          </div>
          <div className="card-body">
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
                <SelectFornecedor
                  name='idFornecedor'
                  onChange={setForn}
                  disabled={disableInput}
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
                  disabled={disableInput}
                />
              </div>

            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <strong>Adicionar Itens</strong>
          </div>
          <div className="card-body">
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
                {/* <SelectMaterial
                  name='material_id'
                  onChange={setMaterial}
                  value = {material}
                //  selectItem = {}
                 // codeItem = 
                  nameItem =  {setNewItem({...material,  })}  
                /> */}
                <select name='material_id' defaultValue={newItem.material} className="form-control" onChange={handleSelect}>
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
                <InputMoney
                  required
                  name="price"
                  className="form-control"
                  placeholder="R$ Unitário"
                  onChange={setPrice}
                  value={price}
                />
              </div>
              <div className="col-2">
                <input
                  disabled
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
          </div>
        </div>
      </form>
    </div >

  )
};

export default NewTaskInput;
