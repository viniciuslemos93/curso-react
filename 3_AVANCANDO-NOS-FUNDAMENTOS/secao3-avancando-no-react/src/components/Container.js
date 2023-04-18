
function Container({ children, myValue }) {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {/* children irá imprimir todo o HTML que for mandado ao chamar o componente lá na aplicação */}
        {children}
        { <p>O valor é: {myValue} </p> }
    </div>
  )
}

export default Container