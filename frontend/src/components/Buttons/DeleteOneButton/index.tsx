export function DeleteOneButton({deleteOne, id}:any){
  return (
    <button type="button" onClick={deleteOne} value={id}>Delete Task</button>
  );
}
