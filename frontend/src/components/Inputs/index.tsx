import { InputFields } from "./InputFields";

export function Inputs({setTitle, setContent, setOwner}: any) {
  
  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value); 

  return (
    <>
    <InputFields {...{addTitle, addContent, addOwner}}/>
    </>
  );
}
