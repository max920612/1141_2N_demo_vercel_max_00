import { Outlet } from "react-router-dom";
import Navbar_00 from "../components/Navbar_00";

const HomeLayoutPage_00 = () => {
    return (
        <>
            <Navbar_00 /> 
            <Outlet />
        </>
    );
};

export default HomeLayoutPage_00;
