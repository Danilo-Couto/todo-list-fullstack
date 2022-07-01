import { Inputs } from "../Inputs";
import { OkEditButton } from "../Buttons/OkEditButton";
import { CancelEditButton } from "../Buttons/CancelEditButton";

export function EditForm({...props}: any) {
  const {submitEdition} = props;

  return (
    <>
      <h2>Editing Task</h2>
      <form onSubmit={submitEdition}>
        <Inputs {...props} />
        <OkEditButton/>
        <CancelEditButton {...props}/>
      </form> 
      </>
  );
}
