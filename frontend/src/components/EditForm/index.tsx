export function EditForm() {
  return (
    <>
      <input type="text" required placeholder="Edite uma tarefa" /* onChange={addTitle} value={title} */ />
      <input type="text" required placeholder="Edite a descricao" /* onChange={addContent} value={content} */ />
      <label> Escolha o responsável:
        <select /* onChange={addOwner} required value={owner} */>
          <option value="Danilo">Danilo</option>
          <option value="Murilo">Murilo</option>
        </select>
      </label>
      <button type="button">Concluir</button>
    </>
  );
}
