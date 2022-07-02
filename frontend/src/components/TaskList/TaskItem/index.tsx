import { useState } from "react";

function TaskItem({ editTask, deleteTask, taskList,  
}: any) {

  // const newTask = {
  //   name: title, content, id_user: Number(owner) 
  // }
 
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(taskList);

  const deleteClick = (e:any) => deleteTask(e.target.id);

  const toogleEditForm = () => setIsEditing(isEditing);
  
  const editClick = (e: any) => {
    e.preventDefault();
    editTask(task.id, /* newTask */);
    toogleEditForm();
  };
  
  const handleChange = (e: any) => setTask(e.target.value);

  const viewTask = (
    <>
    <h3>Tarefa</h3>
      <ul key={taskList.id} className="todo-list" >
        <li>{taskList.name}</li>
        <li>{taskList.content}</li>
        {/* <li>{taskList.TaskUser.map((user: { id_user: any; }) => user.id_user)}</li> */}
        <button type="button" onClick={deleteClick} value={taskList.id}>Deletar tarefa</button>
        <button type="button" onClick={editClick}>Editar tarefa</button>
    </ul>
  </>
);

  const editingForm = (
    <div className="">
      <p>editando tarefa</p>
      {/* <form className="" onSubmit={handleUpdate}>
        <input onChange={handleChange} value={taskList.name} type="text" />
        <button>Save</button>
      </form> */}
      </div>
  )

  return isEditing ? editingForm : viewTask
}
export default TaskItem;
