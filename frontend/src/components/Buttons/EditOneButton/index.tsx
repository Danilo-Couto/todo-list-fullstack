export function EditOneButton
({setIsEditing, id}:any ){

  return (
    <button type="button" onClick={() => setIsEditing(true)} value={id}>Edit Task</button>
  );
}
