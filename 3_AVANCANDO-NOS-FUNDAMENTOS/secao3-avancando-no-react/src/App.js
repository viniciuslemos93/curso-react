import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const nome = "João"
  const [userName] = useState("Maria")

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
      {/*O componente ShowUserName tem acesso a uma prop chamado "name" com o valor de "Vinicius", o outro com uma variável e o útimo passando com useState.*/}
      <ShowUserName name="Vinicius" />
      <ShowUserName name={nome} />
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;