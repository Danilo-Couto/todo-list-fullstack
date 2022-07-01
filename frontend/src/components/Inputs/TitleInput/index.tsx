export function OwnerInput({addOwner, owner}: any) {
  return (
    <label> Escolha o responsável:
    <select onChange={addOwner} required value={owner}>
      <option value="Danilo">Danilo</option>
      <option value="Murilo">Murilo</option>
    </select>
  </label>
  );
}
