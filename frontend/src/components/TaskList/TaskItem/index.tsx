import { useState } from "react";
import { Inputs } from "../../Inputs";

function TaskItem({ editTask, deleteTask, key, id, title, content, owner, taskList
}: any) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setTitle] = useState('');  
  const [editedContent, setContent] = useState(''); 
  const [editedOwner, setOwner] = useState(undefined); 

  const editedTask = {
    name: editedTitle, editedContent, id_user: Number(editedOwner) 
  }
 
  const deleteClick = ({target}: any) => deleteTask(target.value);

  const toogleEditForm = () => setIsEditing(!isEditing);
  
  const sendEdition = (e: any) => {
    e.preventDefault();
    editTask(id, editedTask);
    toogleEditForm();
  };

  const idOwner = owner.map((id: { id_user: any; })=> id.id_user)
  
  const viewTask = (
    <>
    <h3>Tarefa</h3>
      <ul key={key} className="todo-list" >
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
        <li>{idOwner}</li>
        <button type="button" onClick={deleteClick} value={id}>Deletar tarefa</button>
        <button type="button" onClick={toogleEditForm}>Editar tarefa</button>
    </ul>
  </>
);

  const editingForm = (
    <div className="">
      <p>editando tarefa</p>
      <form className="" onSubmit={sendEdition}>
        <Inputs {...{setTitle, setContent, setOwner, title, content, idOwner }} />
        <button type="submit">Salvar</button>
      </form>
      </div>
  )

  return isEditing ? editingForm : viewTask
}

export default TaskItem;
