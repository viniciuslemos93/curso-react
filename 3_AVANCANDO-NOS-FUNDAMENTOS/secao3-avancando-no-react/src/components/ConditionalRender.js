import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false)

  return (
  <div>
    {/*Condicional simples para checar se o valor é verdadeiro ou falso, e imprime ou não. */}
    <h1>Isso será exibido?</h1>
    {x && <p>Se x for true, sim!</p>}
  </div>
  )
}

export default ConditionalRender