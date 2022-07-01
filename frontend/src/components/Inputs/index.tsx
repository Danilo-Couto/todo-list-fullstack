import { TitleInput } from "./ContentInput";
import { ContentInput } from "./OwnerInput";
import { OwnerInput } from "./TitleInput";

export function Inputs({setTitle, setContent, setOwner}: any) {
  
  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value === 'Danilo' ? '0' : '1'); 

  const props = { addTitle, addContent, addOwner }

  return (
    <>
    <TitleInput {...props}/>
    <ContentInput {...props}/>
    <OwnerInput {...props}/>
    </>
  );
}
