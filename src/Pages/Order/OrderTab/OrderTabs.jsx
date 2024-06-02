import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTabs = ({item}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 my-8">
   {
        item.map(item => <FoodCard 
        key={item._id}
        item={item}
        ></FoodCard>)
    }
   </div>
   
        </div>
    );
};

export default OrderTabs;