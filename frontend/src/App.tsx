import { useState } from 'react';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { useFeth } from './hooks/useFetch';

function Todo() {
  const {taskList, isLoading} = useFeth('http://localhost:4003/task');
  //const [taskList, setTaskList] = useState<any[]>([]); 

  return (
    <>
  {isLoading && <p>Loading</p>}
  <div className="todo-wrapper">
    <h1>To Do List</h1>
    <Form setTaskList ={''} taskList={taskList} />
    <TaskList taskList={taskList}/>
  </div>
    </>
  );
}

export default Todo;