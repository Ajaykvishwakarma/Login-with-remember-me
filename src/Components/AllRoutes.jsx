import { Nav } from './Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
// import { Details } from '../Details/Details';
import { Login } from './Login';
import { Register } from './Signup';
export const AllRoutes = () => {

    return(
        <>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
        </Routes>

        </>
    )
}