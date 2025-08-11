import { HashRouter, Route, BrowserRouter } from "react-router-dom"
import App from "./App"

export default function Retorno(){
    return(
        <div>
        <BrowserRouter>
            <Route path="/" Component={<App/>}/>
        </BrowserRouter>
        </div>
    )
}