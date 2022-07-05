export function Sorting({setSort }: any) {

  const sortByInputs = ['tarefa', 'data de criação', 'status'];
  const sortings = sortByInputs.map((input: any)=> (
    <option value={input}>{input}</option>

  ));
  return (
    <>
      <h4>Filtrar por</h4>
      <label>
      <select onChange={(e) => setSort(e.target.value)}> 
      {sortings}
      </select>
    </label>    
    </>
  );
}

