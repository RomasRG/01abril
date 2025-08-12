import Letra from "./Letra"
import { useState } from "react"
import { useEffect } from "react"
import './App.css'

function App() {


    return(
    <>
      <div style={{height: '800px'}}>
        <div className="secao_branca">
          <div className="love">
            <Letra letra={'L'} pos_letra='490px' pos_texto='380px'/>
            <Letra letra={'O'} pos_letra='540px' pos_texto='450px'/>
            <Letra letra={'V'} pos_letra='600px' pos_texto='520px'/>
            <Letra letra={'E'} pos_letra='660px' pos_texto='590px'/>
          </div>
        </div>
      </div>
          
    </>
    
    )
}

export default App
