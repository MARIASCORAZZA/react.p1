import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Paciente from "./components/Paciente"
import './index.css'


function App() {
  

  return (
    <>

    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 flex md:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>

    </>
  )
}

export default App
