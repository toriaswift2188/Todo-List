function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>{todo.text}</div>
      ))}
    </>
  );
}

function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="New To-Do..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{todo.text} (-)</div>
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
