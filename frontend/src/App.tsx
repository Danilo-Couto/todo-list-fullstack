import { useState } from 'react';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:4003/task'

function Todo() {
  const {...propsComing } = useFetch(url);
  const [taskListState, setTaskList] = useState<any[]>([]); 

  const { isLoading, taskList } = propsComing; 
  const props = { setTaskList, ...propsComing}

  // const {data, isFetching} = useQuery('taskList', async () => {
  //   const res = await axios.get(url);
  //   return res.data;
  // });
  
  // concentrar todas as funcoes de axios num so componente

  return (
    <>
  <div className="todo-wrapper">
    <h1>To Do List</h1>
    <Form {...props} />
    {isLoading && <p>Loading</p>}
    <TaskList taskList={taskList || taskListState}/>
  </div>
    </>
  );
}

export default Todo;