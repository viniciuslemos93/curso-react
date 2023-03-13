import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Vinicius", "Pedro", "Josias", "Maria"])

    const [users, setUsers] = useState([
        {id: 1, name: "Vincius", age: 29},
        {id: 2, name: "João", age: 25},
        {id: 3, name: "Davi", age: 32},
    ])

    const deleteRandon= () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>{/*Esta ArrowFunction do map, utilizamos o () ao invés de {}, por que o jsx é considerado um objeto,
        e quando retorna objeto no map, precisa colocar parênteses () */}
            {list.map((item) => (
                <li>{item}</li>
            ))}
            {/*OBS.: Iterar listas sem a propriedade Key, gerará Warning no console!
            Portando, o React precisa de uma chave única em cada um dos ítens iterados. Isso ajuda e renderizar o componente.*/}

            {/*Agora usando a Key no map! Assim não gera o Warning no console. É uma boa prática!*/}
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

        <ul>
            {/*Neste exemplo, como se o ID viesse do banco de dados, usamos para a key, o ID do usuário.*/}
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandon}>Delete Random User</button>

    </div>
  )
}

export default ListRender