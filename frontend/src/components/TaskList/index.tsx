import { DeleteOneButton } from "../Buttons/DeleteOneButton";
import { EditOneButton } from "../Buttons/EditOneButton";

export function TaskList({taskList, deleteOne, setIsEditing}:any) {

  return (
    <> 
      {taskList?.map(({id, name, content, TaskUser}: any, index: any) => (
        <ul key={index} className="todo-list" >
            <li>{name}</li>
            <li>{content}</li>
            <li>{TaskUser.map((user: { id_user: any; }) => user.id_user)}</li>
          <DeleteOneButton deleteOne={deleteOne} id={id}/>
          <EditOneButton setIsEditing={setIsEditing} id={id}/>
      </ul>
        ))}
    </>
  );
}
