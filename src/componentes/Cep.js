import React from 'react'

export const Cep = ({ cep }) => {

    const [dado, setDado] = React.useState(null);

    React.useEffect(() => {
        if (cep !== null) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => response.json()).then((json) => setDado(json))
        }
    }, [cep])

    if (dado === null) {
        return null
    }
    return (
        <div>
            <h1>{dado.cep}</h1>
            <h1>{dado.logradouro}</h1>
            <h1>{dado.complemento}</h1>
            <h1>{dado.bairro}</h1>
            <h1>{dado.localidade}</h1>
            <h1>{dado.uf}</h1>
        </div>
    )
}
