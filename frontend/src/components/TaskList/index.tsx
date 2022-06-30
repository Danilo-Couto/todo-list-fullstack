import axios from 'axios';
const url = 'http://localhost:4003/task'

export function TaskList({taskList}:any) {


  const deleteOne = async ({target}: any) => {
    try {
      await axios.delete(`${url}/${target.value}`)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <> 
    {taskList?.map(({id, name, content, TaskUser}: any, index: any) => (
      <ul key={index} className="todo-list" >
          <li>{name}</li>
          <li>{content}</li>
          <li>{TaskUser.map((user: { id_user: any; }) => user.id_user)}</li>
          <button type="button" onClick={deleteOne} value={id}>Excluir</button>
      </ul>
        ))}
    </>
  );
}
