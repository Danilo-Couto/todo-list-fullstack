export function Fields({addTitle, title, addContent, content, addOwner, owner}: any) {
  return (
    <>
    <input type="text" required placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />
    <input type="text" required placeholder="Descreva a tarefa" onChange={addContent} value={content} />
    <label> Escolha o responsável:
      <select onChange={addOwner} required value={owner}>
        <option defaultValue={"default"}></option>
        <option value={'1'}>Danilo</option>
        <option value={'2'}>Murilo</option>
      </select>
    </label>
    </>
  );
}
