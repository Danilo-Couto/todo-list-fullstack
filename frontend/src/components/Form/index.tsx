import axios from 'axios';
import { useState } from 'react';
import { Inputs } from '../Inputs';

const url = 'http://localhost:4003/task'

export function Form({loadPage, setLoadPage}: any) {
  
  const [title, setTitle] = useState();  
  const [content, setContent] = useState(); 
  const [owner, setOwner] = useState(undefined); 

  const newTask = {
    name: title, content, userId: Number(owner) 
  }
  
  const createTask = async (event: any) => {
    event.preventDefault(); 
    try {
      await axios.post(url, newTask); 
    } catch (error) {
    console.log(error) //tratar erro
    }
  }

  const deleteAllTasks = async () => await axios.delete(url);

  return (
    <>
      <form onSubmit={createTask}>
      <Inputs {...{setTitle, setContent, setOwner}} />
        <button type="submit">Adicionar Tarefa</button>
        <button type="button" onClick={deleteAllTasks}>Excluir Tudo</button>
    </form>  
    </>
  );
}
