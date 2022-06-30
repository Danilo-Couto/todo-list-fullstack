import { useState } from 'react';

// interface FormProps {
// }

export function Form({setTaskList, taskList}: any) {

  const [title, setTitle] = useState('');  
  const [content, setContent] = useState(''); 
  const [owner, setOwner] = useState('Danilo'); 
  
  const addTitle = (event: any) => setTitle(event.target.valueitle);
  const addContent = (event: any) => setContent(event.target.value);
  const addOwner = (event: any) => setOwner(event.target.value); 

  const submitTask = (event: any) => {
    event.preventDefault(); 
    if (!taskList) return;

    setTaskList([...taskList, {title, content, owner}]);
    setTitle(''); 
    setContent(''); 
  }
 
  return (
    <>
      <form onSubmit={submitTask}>

        <input type="text" placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />

        <input type="text" placeholder="Descreva a tarefa" onChange={addContent} value={content} />

        <label> Escolha o responsável:
          <select onChange={addOwner} value={owner}>
            <option value="Danilo">Danilo</option>
            <option value="Murilo">Murilo</option>
          </select>
        </label>

        <button type="submit">Adicionar</button>

      </form>
    </>
  );
}
