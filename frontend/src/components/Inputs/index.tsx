import { TitleInput } from "./ContentInput";
import { ContentInput } from "./OwnerInput";
import { OwnerInput } from "./TitleInput";

export function Inputs({setTitle, setContent, setOwner, title, content, owner}: any) {
  
  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value); 

  const props = { addTitle, addContent, addOwner, title, content, owner }

  return (
    <>
    <TitleInput {...props}/>
    <ContentInput {...props}/>
    <OwnerInput {...props}/>
    </>
  );
}
