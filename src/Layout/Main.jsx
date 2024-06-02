import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";



const Main = () => {
    const location = useLocation()
   const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className="max-w-screen-xl mx-auto">
            {noHeaderFooter || <Navbar></Navbar>}
            <div className="pt-16 min-h-[calc(100vh-230px)]">
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;