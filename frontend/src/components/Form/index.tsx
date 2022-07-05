import axios from 'axios';
import { useState } from 'react';
import { URL } from '../../utils/url';
import { Inputs } from '../Inputs';

export function Form() {
  
  const [title, setTitle] = useState();  
  const [content, setContent] = useState(); 
  const [owner, setOwner] = useState(undefined); 
  const [status, setStatus] = useState(undefined); 

  const newTask = {
    name: title, content, status,
    userId: owner === "Danilo" ? 1 : 2 
  }
  
  const createTask = async (event: any) => {
    event.preventDefault(); 
    try {
      await axios.post(URL, newTask); 
    } catch (error) {
    console.log(error) //exibir se erro
    }
  }

  const deleteAllTasks = async () => await axios.delete(URL);

  return (
    <>
      <form onSubmit={createTask}>
      <Inputs {...{setTitle, setContent, setOwner, setStatus}} />
        <button type="submit">Adicionar Tarefa</button>
        <button type="button" onClick={deleteAllTasks}>Excluir Tudo</button>
    </form>  
    </>
  );
}
