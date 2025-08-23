import Letra from "./Letra"
import { useState } from "react"
import { useEffect } from "react"
import './App.css'
import Pesquisa from "./Pesquisa"

function App() {


    return(
    <>
      <div style={{height: '1000px'}}>
        <div className="secao_branca">
          <div className="love">
            <Letra letra={'L'}/>
            <Letra letra={'O'}/>
            <Letra letra={'V'}/>
            <Letra letra={'E'}/>
          </div>
          <Pesquisa/>
        </div>
      </div>
          
    </>
    
    )
}

export default App
