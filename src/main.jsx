import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Route, Routes,RouterProvider, BrowserRouter, createBrowserRouter} from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'
import App from './App.jsx'
import E from './E.jsx'
import Erro from './Erro.jsx'
import Retorno from './Retorno.jsx'

const router = createHashRouter([
  {path: "/" , element:<App/>},
  {path:"/E" , element:<E/>},
  {path:"*" , element:<Erro/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>

)
