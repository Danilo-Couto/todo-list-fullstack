import { useState } from "react";
import { Inputs } from "../../Inputs";

function TaskItem({ editTask, deleteTask, key, id, title, content, taskUser
}: any) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setTitle] = useState('');  
  const [editedContent, setContent] = useState(''); 
  const [editedOwner, setOwner] = useState(undefined); 

  const editedTask = {
    name: editedTitle,
    editedContent,
    userId: Number(editedOwner),
    taskId: taskUser.id
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
    <h3>Tarefa</h3>
      <ul key={key} className="todo-list" >
        <li>{title}</li>
        <li>{content}</li>
        <li>{taskUser.taskId}</li>
        <button type="button" onClick={deleteClick} value={id}>Deletar tarefa</button>
        <button type="button" onClick={toogleEditForm}>Editar tarefa</button>
    </ul>
  </>
);

  const editingForm = (
    <div className="">
      <p>editando tarefa</p>
      <form className="" onSubmit={sendEdition}>
        <Inputs {...{setTitle, setContent, setOwner, title, content }} />
        <button type="submit">Salvar</button>
        <button type="button" onClick={toogleEditForm}>Cancelar</button>
      </form>
      </div>
  )

  return isEditing ? editingForm : viewTask
}

export default TaskItem;
