import axios from 'axios';
import { useState } from 'react';
import { Inputs } from '../Inputs';

const url = 'http://localhost:4003/task'

export function Form({setTaskList, taskList}: any) {

  const [title, setTitle] = useState('');  
  const [content, setContent] = useState(''); 
  const [owner, setOwner] = useState('Danilo'); 
  
  const submitTask = async (event: any) => {
    event.preventDefault(); 
    // if (!taskList) return;
    try {
      await axios.post(url, {
        name: title, content, id_user: owner // incluir via backend rota para usar owner
      });
      alert('task saved')
      // alert(res.data);
      // setTaskList([...taskList, {title, content, owner}]);
      setTitle(''); 
      setContent('');
      } catch (error) {
      console.log(error) //tratar erro
    }
  }
  const deleteAll = async () => {
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error) //tratar erro
    }
  }

  const props = {
    title, setTitle,
    content, setContent,
    owner, setOwner,
    submitTask
  }
 
  return (
    <>
      <form onSubmit={submitTask}>
        <Inputs {...props} />
        <button type="button" onClick={deleteAll}>Excluir Tudo</button>
      </form>  
    </>
  );
}
