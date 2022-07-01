import { useState } from 'react';
import { EditForm } from './components/EditForm';
import { Form } from './components/Form';
import { Inputs } from './components/Inputs';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:4003/task'

function Todo() {
  const {...propsComing } = useFetch(url);
  const [taskListState, setTaskList] = useState<any[]>([]); 

  const { isLoading, taskList, deleteOne, isEditing, setIsEditing} = propsComing; 
  const props = { setTaskList, ...propsComing}

  // const {data, isFetching} = useQuery('taskList', async () => {
  //   const res = await axios.get(url);
  //   return res.data;
  // });
  
  // concentrar todas as funcoes de axios num so componente

  return (
    <>
      <div className="todo-wrapper">
        {isLoading && <p>Loading</p>}
        {isEditing 
        ? <EditForm {...props}/>
        : 
        <>
        <h1>To Do List</h1>
          <>
            <Form {...props} />
            <TaskList taskList={taskList || taskListState} deleteOne={deleteOne} setIsEditing={setIsEditing} />
          </>
        </>
      }
      </div>
    </>
  );
}

export default Todo;