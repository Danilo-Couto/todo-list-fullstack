export function TitleInput({addTitle, title}: any) {
  return (
    <input type="text" required placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />
  );
}
