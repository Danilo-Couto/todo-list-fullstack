export function TaskList({taskList, deleteOne, editOne}:any) {

  return (
    <> 
    {taskList?.map(({id, name, content, TaskUser}: any, index: any) => (
      <ul key={index} className="todo-list" >
          <li>{name}</li>
          <li>{content}</li>
          <li>{TaskUser.map((user: { id_user: any; }) => user.id_user)}</li>
          <button type="button" onClick={deleteOne} value={id}>Excluir</button>
          <button type="button" onClick={editOne} value={id}>Editar</button>
      </ul>
        ))}
    </>
  );
}
