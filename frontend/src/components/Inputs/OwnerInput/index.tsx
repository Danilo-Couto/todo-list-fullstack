interface IContentInput {
  addContent: any;
  content: string;
}
export function ContentInput({addContent, content}:IContentInput) {
  return (
    <input type="text" required placeholder="Descreva a tarefa" onChange={addContent} value={content} />
  );
}
