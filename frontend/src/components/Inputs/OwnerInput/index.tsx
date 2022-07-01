export function ContentInput({addContent, content}:any) {
  return (
    <input type="text" required placeholder="Descreva a tarefa" onChange={addContent} value={content} />
  );
}
