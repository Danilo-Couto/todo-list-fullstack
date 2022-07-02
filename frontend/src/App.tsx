import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';

function App() {
  const {isLoading, ...props } = useFetch();

  return (
    <>
      <div className="App-wrapper">
        <h1>Lista de Tarefas</h1>
        {isLoading && <p>Loading</p>}
        <Form />
        <TaskList {...props} />
      </div>
    </>
  );
}

export default App;