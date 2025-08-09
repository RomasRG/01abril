import Letra from "./Letra"
import './App.css'

function App() {

    return(
    <div>
      <Letra letra={'L'} pos_letra='490px' pos_texto='380px'/>
      <Letra letra={'O'} pos_letra='540px' pos_texto='450px'/>
      <Letra letra={'V'} pos_letra='600px' pos_texto='520px'/>
      <Letra letra={'E'} pos_letra='660px' pos_texto='590px'/>
      <div style={{position:'absolute', left:'500px', top:'200px',zIndex:'-1'}}>
        <h1>
          teste
        </h1>
      </div>
    </div>
    )
}

export default App
