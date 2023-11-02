import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Home from "./pages/home"
import Loading from "./pages/loading"
import Showcase from "./pages/showcase"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/loading" element={<Loading/>}/>
            <Route path="/showcase" element={<Showcase/>}/>
        </Route>
    )
)

export default router