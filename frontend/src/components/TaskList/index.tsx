export function TaskList({taskList}:any) {
  return (
    <> 
    {taskList?.map(({name, content, TaskUser}: any, index: any) => (
      <ul key={index} className="todo-list" >
          <li>{name}</li>
          <li>{content}</li>
          <li>{TaskUser.map((user: { id_user: any; }) => user.id_user)}</li>
      </ul>
        ))}
    </>
  );
}
