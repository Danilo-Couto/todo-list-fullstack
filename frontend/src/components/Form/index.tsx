import { Inputs } from '../Inputs';

export function Form({...propsComing}: any) {
  const {submitTask, deleteAll} = propsComing;
  const props = {...propsComing}

  return (
    <>
      <form onSubmit={submitTask}>
        <Inputs {...props} />
        <button type="button" onClick={deleteAll}>Excluir Tudo</button>
      </form>  
    </>
  );
}
