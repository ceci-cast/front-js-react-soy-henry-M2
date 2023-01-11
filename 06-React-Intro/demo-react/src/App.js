import Titulo from "./components/titulo";
import Alumnos from "./components/alumnos";
import Boton from "./components/Boton";
import Boton2 from "./components/Boton2";
// todo lo que queramos mostrar en pantalla lo traemos al archivo app.js

function App() {
  const alumnos = [
    {name: 'Estiven', age: 24},
    {name: 'Lucas', age: 19},
    {name: 'Mayra', age: 28}
  ]

  return (
    <>
      <Titulo/>

      <h3>Alumnos</h3>
      <Alumnos pepitos={alumnos} hola='holis' />

      <Boton text='soy un boton' />
      <Boton2 text='soy otro boton' />

    </>
  );
}

export default App;
