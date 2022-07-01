import { EditForm } from './components/EditForm';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';

function Todo() {
  const {...props } = useFetch();
  const { isLoading, isEditing } = props; 

  return (
    <>
      <div className="todo-wrapper">
        {isLoading && <p>Loading</p>}
        {isEditing 
        ? <EditForm {...props}/>
        : 
        <>
        <h1>To Do List</h1>
        <Form {...props} />
        <TaskList {...props} />
        </>
      }
      </div>
    </>
  );
}

export default Todo;