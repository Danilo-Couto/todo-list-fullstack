import { Inputs } from '../Inputs';

export function Form({...props}: any) {
  const {createTask, deleteAllTasks} = props;

  return (
    <>
      <form onSubmit={createTask}>
      <Inputs {...props} />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={deleteAllTasks}>Excluir Tudo</button>
    </form>  
    </>
  );
}
