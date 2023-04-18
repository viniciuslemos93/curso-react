import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragmentss from './components/Fragmentss';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {
  const nome = "João"
  const [userName] = useState("Maria")
  
  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar:true, km: 0 },
    { id: 2, brand: "Kia", color: "Prata", newCar: false, km: 34500 },
    { id: 3, brand: "Ferrari", color: "Amarela", newCar: false, km: 10000 }
  ]

  function showMessage() {
    console.log("Evento do componente Pai")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>      
      <div>
        {/*Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/*Imagem em src > assets a importação é dinâmica, com o nome da importação.
        Isso é melhor pra manutenção, caso troca a pasta de local por exemplo, será alterado em um local apenas.*/}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />

      <ListRender />

      <ConditionalRender />
      {/*Props*/}
      {/*O componente ShowUserName tem acesso a uma prop chamado "name" com o valor de "Vinicius", o outro com uma variável e o útimo passando com useState.*/}
      <ShowUserName name="Vinicius" />
      <ShowUserName name={nome} />
      <ShowUserName name={userName} />
      {/*Destructuring*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/*Reaproveitando o Card de carros */}
      <CarDetails brand="Ford" km={0} color="Preto" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/*Loop em array de objetos - Loop de componente*/}
      {/*cada iteração imprimir 1 componente*/}
      {cars.map((car) => (        
        <CarDetails
        key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragmentss propFragment="teste" />
      
      {/* Children */}
      <Container myValue="Testing">
        <p>E este é o conteúdo!</p>
      </Container>

      <Container myValue="Testing 2">
        <h5>E este é o conteúdo do container 2!</h5>
      </Container>

      {/* executar função com Prop */}
      <ExecuteFunction myFunction={showMessage}/>
    </div>
  );
}

export default App;