import './App.css';
import ChallengeCar from './components/ChallengeCar';

function App() {
  const objects = [
    {id:1, marca:"VW", km:0, cor:"Preto"},
    {id:2, marca:"Peugeot", km:0, cor:"Laranja"},
    {id:3, marca:"Renault", km:0, cor:"Amarelo"}    
  ]

  return (
    <div className="App">
      <h1>Carros para Venda</h1>
      {objects.map((object) => (
          <ChallengeCar key={object.id} marca={object.marca} km={object.km} cor={object.cor} />
        ))}
    </div>
  );
};

export default App;