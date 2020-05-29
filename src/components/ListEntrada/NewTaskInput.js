import React, { useState } from 'react';
const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: new Date(),
    idFornecedor: "",
    quantity: "",
    idMaterial: "",
    unitPrice: "",
    totalPrice: "",
  });


  function setNewTask(evt) {
    evt.preventDefault();

    const value = evt.target.value;
    setNewItem({
        ...newItem,
        [evt.target.name]: value
    });

}

  function submit(e) {
    e.preventDefault();
 //   console.log(newItem)
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="notaFiscal"
          className="Todo-input"
          placeholder="Nº da Nota Fiscal"
          onChange={setNewTask}
        />
        <input
          name="material"
          className="Todo-input"
          placeholder="Material"
          onChange={setNewTask}
        />
        <input
          name="quantity"
          className="Todo-input"
          placeholder="Quantidade"
          onChange={setNewTask}
        />
        <input
          name="unitPrice"
          className="Todo-input"
          placeholder="Preço Unitário"
          onChange={setNewTask}
        />
        <input
          name="totalPrice"
          className="Todo-input"
          placeholder="Preço Total"
          onChange={setNewTask}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;
