import { useState } from "react";
import { Inputs } from "../../Inputs";

function TaskItem({ editTask, deleteTask, key, id, title, content, status, owner
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
    <h4>{title}</h4>
      <div key={key} className="todo-list" >
        <p>descrição: {content}</p>
        <p>responsável: {owner}</p>
        <p>status: {status}</p>
        <button type="button" onClick={deleteClick} value={id}>Deletar tarefa</button>
        <button type="button" onClick={toogleEditForm}>Editar tarefa</button>
    </div>
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
