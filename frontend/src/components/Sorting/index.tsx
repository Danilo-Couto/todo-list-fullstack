export function Sorting({sort, addSort }: any) {

  const sortByInputs = ['tarefa', 'data de criação', 'status'];
  // console.log(sort)

  const sortings = sortByInputs.map((input: any)=> (
    <option value={input}>{input}</option>
  ));

  return (
    <>
      <h4>Filtrar por</h4>
      <label>
      <select onChange={addSort} required value={sort}>
        {sortings}
      </select>
    </label>    
    </>
  );
}

