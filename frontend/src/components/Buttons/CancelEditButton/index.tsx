export function CancelEditButton({setIsEditing}:any){
  return (
    <button type="button" onClick={() => {setIsEditing(false)}}>Cancelar</button>
    );
}
