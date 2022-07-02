import { Fields } from "./Fields";

export function Inputs({setTitle, setContent, setOwner, title, content, owner}: any) {
  
  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value); 

  return (
    <>
    <Fields {...{addTitle, addContent, addOwner, title, content, owner}}/>
    </>
  );
}
