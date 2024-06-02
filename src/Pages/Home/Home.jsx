import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Categori from "./Categori/Categori";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner></Banner>
            <Categori></Categori>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;