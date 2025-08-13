import { useState } from "react"
import { useEffect } from "react"

export default function Pesquisa(){
    const [sub, setSub] = useState('')
    const pesquisas = [
        '#1 de abril',
        '#algoritmo',
        '#cartas',
        '#desenhos',       
        '#filmes',
        '#louva a deus',
        '#nossa musica',
        '#o pequeno principe',
        '#pijamas',
        '#pitanga',
        '#uenp',
        '#wallpaper',


    ]

    useEffect(()=>{
        const texto = async ()=>{
            const data = await fetch("./descricoes/default.txt")
            return data.text()
        }
        texto().then(res => setSub(res))
    }, [setSub, sub])

    return(
        <div>
            <input className="search_box" type="text"/>
            <div id='content'>
                <img id="imagem" src="./imagens/default.jpg"/>
                <p id="sub">{sub}</p>
            </div>
            
        </div>
        
    )


}