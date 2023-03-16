
function CarDetails({brand, km, color, newCar}) {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {/*Validando se o carro é novo ou não */}
        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails