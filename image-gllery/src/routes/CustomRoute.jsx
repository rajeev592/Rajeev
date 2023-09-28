import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import SinglePhoto from "../pages/SinglePhoto"


const CustomRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:id" element={<SinglePhoto/>}/>
        </Routes>
    )
}
export default CustomRoute;