import React, { useState } from 'react';
import './styles.css';
import ListItem from './ListItem'
import NewTaskInput from './NewTaskInput'

const ListaEntrada = () => {
  const [tasks, setTasks] = useState([]);
  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: new Date(),
    idFornecedor: "",
    quantity: "",
    idMaterial: "",
    unitPrice: "",
    totalPrice: "",
  });

  console.log(newItem)

  function addNewTask(task) {
    setNewItem({ ...task })
    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, value: task });
    setTasks(itensCopy);
    //console.log(newItem)
  }

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

   function enviar(data)
  {
        data.preventDefault();
        console.log(data)
  }

  return (
    <div className="container">
      <div className="App-header">
        <NewTaskInput onSubmit={addNewTask} />
        <form onSubmit={enviar}>
          {tasks.map(({ id, value }, index) => (

            <ListItem
              key={id}
              value={value}
              onChange={(event) => updateTask(event, index)}
              onDelete={() => deleteTask(index)}
            />
          ))}

         
        </form>
      </div>
      {/* <div className="Array-preview">
        <pre>
          {JSON.stringify(tasks, null, 4)}
        </pre>
      </div> */}
    </div>
  )
}

export default ListaEntrada;
