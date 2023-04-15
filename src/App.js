import React from 'react'

function App() {

  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const a = window.localStorage.getItem('produto');
    if (a !== null) {
      setProduto(a);
    }
  }, [])

  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem('produto', produto)
    }
    //window.localStorage = acessar o local storage, .setItem=criar um item dentro do local storage, ('produto', produto)= definir o nome da chave como 'produto' e valor produto
  }, [produto])

  const handleClick = (event) => {
    setProduto(event.target.innerHTML);
  }

  return (
    <div>
      <h1>CEP selecionado:{produto}</h1>
      <button onClick={handleClick} style={{ margin: '0 10px' }}>
        35700291
      </button>
      <button onClick={handleClick} style={{ margin: '0 10px' }}>
        35700357
      </button>
    </div>
  );
}

export default App;
