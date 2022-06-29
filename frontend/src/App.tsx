import React, { useState } from 'react';

function Todo() {
  const [title, setTitle] = useState('');  
  const [content, setContent] = useState(''); 
  const [owner, setOwner] = useState('Danilo'); 
  
  const [taskList, setTitleList] = useState<any[]>([]); 

  function addTitle(event: any) {
    const title = event.target.value;
    setTitle(title); 
  }
  
  function addContent(event: any) {
    const content = event.target.value;
    setContent(content); 
  }

  function addOwner(event: any) {
    const owner = event.target.value;
    setOwner(owner); 
  }

  function submitTask(event: any) {
    event.preventDefault(); 

    if (!taskList) return;
    setTitleList([...taskList, {title, content, owner}]);
    setTitle(''); 
    setContent(''); 
  }

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      <form onSubmit={submitTask}>

        <input type="text" placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />

        <input type="text" placeholder="Descreva a tarefa" onChange={addContent} value={content} />

        <label>
        Escolha o responsável:
        <select onChange={addOwner} value={owner}>
          <option value="Danilo">Danilo</option>
          <option value="Murilo">Murilo</option>
        </select>
        </label>

        <button type="submit">Adicionar</button>
      </form>
      {taskList.map((task, index) => (
      <ul key={index} className="todo-list" >
          <li>{task.title}</li>
          <ol>{task.content}</ol>
          <ol>{task.owner}</ol>
      </ul>
        ))}
    </div>
  );
}

export default Todo;