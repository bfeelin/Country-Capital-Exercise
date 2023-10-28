import './App.css'
import CountryCapitalGame from './CountryCapitalGame'

function App() {

  return (
    <>
      <CountryCapitalGame data= {{Germany: "Berlin", Azerbaijan: "Baku", Ireland: "Dublin", USA: "Washington DC", Scotland: "Glasgow"}} />
    </>
  )
}

export default App
