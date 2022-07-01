import { Inputs } from '../Inputs';

export function Form({...props}: any) {
  const {submitTask, deleteAll} = props;

  return (
    <>
      <form onSubmit={submitTask}>
      <Inputs {...props} />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={deleteAll}>Excluir Tudo</button>
    </form>  
    </>
  );
}
