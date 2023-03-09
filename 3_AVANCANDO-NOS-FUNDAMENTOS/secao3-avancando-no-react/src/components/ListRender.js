import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Vinicius", "Pedro", "Josias", "Maria"])

  return (
    <div>
        <ul>{/*Esta ArrowFunction do map, utilizamos o () ao invés de {}, por que o jsx é considerado um objeto,
        e quando retorna objeto no map, precisa colocar parênteses () */}
            {list.map((item) => (
                <li>{item}</li>
            ))}
            {/*OBS.: Iterar listas sem a propriedade Key, gerará Warning no console!*/}
        </ul>
    </div>
  )
}

export default ListRender