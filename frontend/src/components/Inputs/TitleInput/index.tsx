export function OwnerInput({addOwner, owner}: any) {
  return (
    <label> Escolha o responsável:
    <select onChange={addOwner} required value={owner}>
      
      <option defaultValue={"default"}></option>
      <option value={'1'}>Danilo</option>
      <option value={'2'}>Murilo</option>
    </select>
  </label>
  );
}
