import Letra from "./Letra"
import { useState } from "react"
import { useEffect } from "react"
import './App.css'
import altas from './letras.json'

function App() {
  const[teste, setTeste] = useState('')

  const get_data = async()=>{
    let dados = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    return dados.text()
  }

  get_data().then(setTeste)

    return(
    <div>
      <Letra letra={'L'} pos_letra='490px' pos_texto='380px'/>
      <Letra letra={'O'} pos_letra='540px' pos_texto='450px'/>
      <Letra letra={'V'} pos_letra='600px' pos_texto='520px'/>
      <Letra letra={'E'} pos_letra='660px' pos_texto='590px'/>
      <div style={{position:'absolute', left:'500px', top:'200px',zIndex:'-1', whiteSpace:'pre-wrap'}}>
        <h1>
          {teste}
        </h1>
        
      </div>
    </div>
    )
}

export default App
