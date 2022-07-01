import { Inputs } from "../Inputs";

export function EditForm({...propsComing}: any) {
  const props = {...propsComing}
  const {submitEdition, setIsEditing} = propsComing;

  return (
    <>
      <h2>Editing Task</h2>
      <form onSubmit={submitEdition}>
        <Inputs {...props} />
         <button type="submit">Concluir</button>
         <button type="button" onClick={() => {setIsEditing(false)}}>Cancelar</button>
      </form>  
      </>
  );
}
