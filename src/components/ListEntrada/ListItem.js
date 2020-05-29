import React,{useState} from 'react';

const ListItem = ({ onChange, onDelete, value }) => {

  const [itens, setItens] = useState({
    notaFiscal: value.notaFiscal,
    dataEntrada: new Date(),
    idFornecedor: "",
    quantity: value.quantity,
    material: value.material,
    unitPrice: "",
    totalPrice: "",
  });

  //  console.log(value.notaFiscal)
  return (
    <div className="Item-container">
      {/* <input
        type='text'
        className="Item-field"
        value={itens.notaFiscal}
        onChange={onChange}
        name='notaFiscal'
      />
      <input
        type='text'
        className="Item-field"
        value={itens.material}
        onChange={onChange}
        name='material'
      /> */}
      <span >Nota Fiscal: {itens.notaFiscal}</span>
      <span ></span>
      <span >{itens.material}</span>
      <span >{itens.quantity}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListItem;
