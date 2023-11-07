import ItemListComponent from "./ItemListComponent";
import { useState } from "react";
const RestaurantCategory = ({resCategory, showItems}) => {
    // const[showItems, setShowItems] = useState(false);

    const handleClick = () =>{
        // setShowItems(!showItems);
    }
    console.log("categories :", resCategory);
    return <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{resCategory?.title} ({resCategory?.itemCards.length})</span>
            <span>🔽</span>
            </div>
    
        {/* Accordian */}
        {showItems && <ItemListComponent items={resCategory.itemCards}/>}
    </div>
    </div>
}

export default RestaurantCategory;