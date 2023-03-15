{/*Por convenção o parâmetro se chama de props. */}
const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é:  {props.name}</h2>
    </div>
  )
}

export default ShowUserName