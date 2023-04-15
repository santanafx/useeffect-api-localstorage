import React from 'react'
import { Cep } from './componentes/Cep';

function App() {

  const [cep, setCep] = React.useState(null);

  React.useEffect(() => {
    const consultaCep = window.localStorage.getItem('cep');
    if (consultaCep !== null) {
      setCep(consultaCep);
    }
  }, [])

  React.useEffect(() => {
    if (cep !== null) {
      window.localStorage.setItem('cep', cep)
    }
    //window.localStorage = acessar o local storage, .setItem=criar um item dentro do local storage, ('produto', produto)= definir o nome da chave como 'produto' e valor produto
  }, [cep])

  const handleClick = (event) => {
    setCep(event.target.innerHTML);
  }

  return (
    <div>
      <h1>CEP selecionado:{cep}</h1>
      <button onClick={handleClick} style={{ margin: '0 10px' }}>
        35700291
      </button>
      <button onClick={handleClick} style={{ margin: '0 10px' }}>
        35700357
      </button>
      <Cep cep={cep} />
    </div>
  );
}

export default App;
