import { TitleInput } from "./ContentInput";
import { ContentInput } from "./OwnerInput";
import { OwnerInput } from "./TitleInput";

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
    <TitleInput addTitle={addTitle} title={title}/>
    <ContentInput addContent={addContent} content={content}/>
    <OwnerInput addOwner={addOwner} owner={owner}/>
    </>
  );
}
