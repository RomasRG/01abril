import { useState } from "react"
import { useEffect } from "react"
import Segredo from "./Segredo"
import './App.css'

export default function Pesquisa(){
    const [sub, setSub] = useState('')
    const [pesquisa, setPesquisa] = useState('')
    const [path, setPath] = useState('default')
    const pesquisas = [
        '1_de_abril',
        'algoritmo',
        'cartas',
        'desenhos',       
        'filmes',
        'louva a deus',
        'nossa_musica',
        'o_pequeno_principe',
        'pijamas',
        'pitanga',
        'uenp',
        'wallpaper'
    ]

    function caminho(e){
        setPesquisa('')
        setPath(e)
    }

    function Datalist({pesquisas, pesquisa}){
        let rows = []
        if(pesquisa != ""){
            pesquisas.forEach((element)=>{
                if(element.includes(pesquisa)){
                    rows.push(
                        <div onClick={()=>caminho(element)} id="resultado" key={element}>{element}</div>
                    )
                }
            })
        }
        return(
            <>{rows}</>
        )
    }
       

    useEffect(()=>{
        const texto = async ()=>{
            const data = await fetch("./descricoes/" + path + ".txt")
            return data.text()
        }
        texto().then(res => setSub(res))
    }, [setSub, sub, path])

    function Musica(){
        let musica = []
        if(path == 'nossa_musica'){
            musica.push(
                <audio controls src="./musica/nossa_musica.m4a" key="musica"/>
            )
        }
        return(
            <div>
                {musica}
            </div>
        )

    }

    return(
        <div id="display">
            <div className="search_box">
                <input id="pesquisa" type="text" onChange={(e)=>setPesquisa(e.target.value)}/>
                <Datalist pesquisas={pesquisas} pesquisa={pesquisa} />
            </div>
            
            <div id='content'>
                <div id="info">
                    <img id="imagem" src={"./imagens/" + path + ".jpg"}/>
                    <p id="sub">{sub}</p>
                </div>
                <Musica/>
                <Segredo/>
            </div>
        </div>
    )


}