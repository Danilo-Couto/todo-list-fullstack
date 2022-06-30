interface InputsProps {
  title: string; 
  setTitle: Function;
  content: string;
  setContent: Function;
  owner: string; 
  setOwner: Function;
}

export function Inputs({...propsComing}: InputsProps) {

  const {setTitle, title, setContent, setOwner, content, owner } = propsComing;

  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value === 'Danilo' ? '0' : '1'); 

  return (
    <>
      <input type="text" required placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />
      <input type="text" required placeholder="Descreva a tarefa" onChange={addContent} value={content} />
      <label> Escolha o responsável:
        <select onChange={addOwner} required value={owner}>
          <option value="Danilo">Danilo</option>
          <option value="Murilo">Murilo</option>
        </select>
      </label>
      <button type="submit">Adicionar</button>
    </>
  );
}
