import React, { useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css';

const ListItem = ({ onChange, onDelete, value }) => {

  const [itens, setItens] = useState({
    notaFiscal: value.notaFiscal,
    dataEntrada: new Date(),
    quantity: value.quantity,
    codeMaterial: value.code,
    material: value.material,
    unitPrice: value.unitPrice,
    totalPrice: value.totalPrice,
  });

  //  console.log(value.notaFiscal)
  return (
    <div className="list">
      <ul>
        <li>
          <div className='row'>
            <div className="col-2">
              <strong>Cód. Produto</strong>
              <p>{itens.codeMaterial}</p>
            </div>
            <div className="col">
              <strong>Material</strong>
              <p>{itens.material}</p>
            </div>
            <div className="col-1">
              <strong>Quant.</strong>
              <p>{itens.quantity}</p>
            </div>
            <div className="col-2">
              <strong>Valor Unitário</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itens.unitPrice)}</p>
            </div>
            <div className="col-2">
              <strong>Total</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itens.totalPrice)}</p>
            </div>
            <button onClick={onDelete} type="button">
              <FiTrash2 size={16} color="#a8a8b3" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
