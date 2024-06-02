import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import Dessert from "../../../assets/menu/dessert-bg.jpeg";
import Pizza from "../../../assets/menu/pizza-bg.jpg";
import Salad from "../../../assets/menu/salad-bg.jpg";
import Soup from "../../../assets/menu/soup-bg.jpg";
import menuimg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import MenuCategori from "../MenuCategori/MenuCategori";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitel
        subHeading="Don't Mess"
        heading="Today's Offer"
      ></SectionTitel>
      {/* offered menu items */}
      <MenuCategori items={offered} title="offered" ></MenuCategori>
      {/* desert menu items */}
      <MenuCategori items={dessert} title='dessert' img={Dessert}></MenuCategori>
      {/* Pizza menu items*/}
      <MenuCategori items={pizza} title={"pizza"} img={Pizza}></MenuCategori>
      {/* Salad menu item*/}
      <MenuCategori items={salad} title={"salad"} img={Salad}></MenuCategori>
      {/* Soup menu items*/}
      <MenuCategori items={soup} title={"soup"} img={Soup}></MenuCategori>
    </div>
  );
};

export default Menu;
