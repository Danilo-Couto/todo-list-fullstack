export function DeleteOneButton({deleteTask, id}:any){
  return (
    <button type="button" onClick={deleteTask} value={id}>Delete Task</button>
  );
}
