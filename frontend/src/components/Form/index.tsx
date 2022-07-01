import { Inputs } from '../Inputs';

export function Form({...propsComing}: any) {
  const props = {...propsComing}
  const {submitTask, deleteAll} = propsComing;

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
