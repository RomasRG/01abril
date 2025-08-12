import { useState } from "react"
import { useEffect } from "react"

function Letra({letra, pos_letra, pos_texto}){
  const [text, setText] = useState("");
  const [poema, setPoema] = useState(<></>)
  const [mouse, setMouse] = useState(false)

  const path = "./poemas/" + letra + ".txt"

  const data = async ()=> {
      const texto = await fetch(path)
      return texto.text()
  }

  useEffect(()=>{
    if(mouse){
    data().then(res => setText(res))
    setPoema(
        <div className="poema">
          {text}
        </div>)
    } else {
      setText('')
      setPoema(<></>)
    }
  }, [mouse, setMouse, text, setText])

    return (
      <div style={{width:'65px', height:'65px'}}>
        <div  className='letra' onMouseEnter={()=>setMouse(true)} 
        onMouseLeave={()=>setMouse(false)}>
          {letra}      
        </div>
          {poema}
      </div>
  )
}

export default Letra