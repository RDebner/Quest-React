import './App.css'
import Text from './Components/Upper-case-colored-text'
import Button from './Components/Button'  

function App() {

  return (
    <>
     <Text text={'olá, mundo!'} color={"red"}/>
     <Text text={'olá, mundo!'} color={"blue"}/>
     <Text text={'olá, mundo!'} color={"yellow"}/>
     <Button label="Clique aqui"/>
     <Button label="Enviar"/>
    </>
  )
}

export default App
