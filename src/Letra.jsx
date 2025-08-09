import { useState } from "react"
import { useEffect } from "react"

function Letra({letra, pos_letra, pos_texto}){
  const [text, setText] = useState("");
  const [mouse, setMouse] = useState(false)
  const path = "http://localhost:5173/01abril/src/poemas/" + letra + ".txt"

  const data = async ()=> {
      const texto = await fetch(path)
      return texto.text()
  }

  useEffect(()=>{
    if(mouse){
    data().then(res => setText(res))
    } else {
      setText('')
    }
  })

    return (
      <div>
        <div style={{
        position:'absolute', 
        left:pos_letra, 
        top:'60px',
        fontSize:'50px',
        fontFamily:'fantasy'
        }} onMouseEnter={()=>setMouse(true)} 
        onMouseLeave={()=>setMouse(false)}>
          {letra}      
        </div>
        <div  style={{
          position: 'relative',
          left:pos_texto, 
          top:'130px',
          whiteSpace: "pre-wrap",
          width:'250px',
          background:'white'
          }}>
          {text}
        </div>
      </div>
  )
}

export default Letra