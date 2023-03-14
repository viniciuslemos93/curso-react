import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState("Vinicius")

  return (
  <div>
    {/*Condicional simples para checar se o valor é verdadeiro ou falso, e imprime ou não. */}
    <h1>Isso será exibido?</h1>
    {x && <p>Se x for true, sim!</p>}
    {/*Condicional | IF ternário*/}
    {name === "João" ? (
      <div>
        <p>O nome é João!</p>
      </div>
    ) : (
      <div>
        <p>Nome não encontrado!</p>
      </div>
    )}
    {/*Botão setando o nome para João*/}
    <button onClick={() => setName("João") }>Clica aqui</button>
  </div>
  )
}

export default ConditionalRender