interface IOwnerInput {
  addOwner: any;
  owner: string;
}
export function OwnerInput({addOwner, owner}:IOwnerInput) {
  return (
    <label> Escolha o responsável:
    <select onChange={addOwner} required value={owner}>
      <option value="Danilo">Danilo</option>
      <option value="Murilo">Murilo</option>
    </select>
  </label>
  );
}
