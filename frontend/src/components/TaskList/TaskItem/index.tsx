import { useState } from "react";
import { Inputs } from "../../Inputs";

function TaskItem({ editTask, deleteTask, key, id, title, content, status, userId
}: any) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setTitle] = useState('');  
  const [editedContent, setContent] = useState(''); 
  const [editedOwner, setOwner] = useState(undefined); 
  const [editedStatus, setStatus] = useState(undefined); 

  const editedTask = {
    name: editedTitle,
    editedContent,
    status: editedStatus,
    owner: editedOwner,
    // taskId: taskUser.id
  }
 
  const deleteClick = ({target}: any) => deleteTask(target.value);

  const toogleEditForm = () => setIsEditing(!isEditing);
  
  const sendEdition = (e: any) => {
    e.preventDefault();
    editTask(id, editedTask);
    toogleEditForm();
  };

  const viewTask = (
    <>
    <h4>tarefa: {title}</h4>
      <ul key={key} className="todo-list" >
        <li>descrição: {content}</li>
        <li>responsável: {userId}</li>
        <li>status: {status}</li>
        <button type="button" onClick={deleteClick} value={id}>Deletar tarefa</button>
        <button type="button" onClick={toogleEditForm}>Editar tarefa</button>
    </ul>
  </>
);

  const editingForm = (
    <div className="">
      <p>editando tarefa</p>
      <form className="" onSubmit={sendEdition}>
        <Inputs {...{
          setTitle, setContent, setStatus, title, content,
          status, setOwner, editedStatus
        }} />
        <button type="submit">Salvar</button>
        <button type="button" onClick={toogleEditForm}>Cancelar</button>
      </form>
      </div>
  )

  return isEditing ? editingForm : viewTask
}

export default TaskItem;
