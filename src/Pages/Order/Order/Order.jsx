import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTabs from "../OrderTab/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks','offer'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    
    const [menu] = useMenu();


    const dessert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
    const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="">
         <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
      <Cover img={orderCoverImg} title={"Oder Food"}></Cover>
      <Tabs className='mt-4' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    <Tab>Offer</Tab>
  </TabList>
  <TabPanel>
  <OrderTabs item={salad}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs item={pizza}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs item={soup}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs item={dessert}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs item={drinks}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs item={offered}></OrderTabs>
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
