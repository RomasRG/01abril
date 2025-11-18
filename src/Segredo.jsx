import { useState } from "react"

export default function Segredo(){
    const [senha, setSenha] = useState("")

    function Password(){
        if(senha == "n3^07I"){
            return(
            <div>
                <video controls>
                    <source src = ".\video\Video8Narracao.mp4" type="video/mp4"/>
                </video>
            </div>
            
            )
        } else {
            return(
            <div id="screen">?</div>
            )
        }

    }

    return(
        <div id="maze">
            <Password/>
            senha: <input type="text" onChange={(e)=>setSenha(e.target.value)}/>
        </div>
    )
}