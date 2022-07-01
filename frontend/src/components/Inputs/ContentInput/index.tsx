interface ITitleInput {
  addTitle: any;
  title: string;
}
export function TitleInput({addTitle, title}:ITitleInput) {
  return (
    <input type="text" required placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />
  );
}
