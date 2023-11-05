const RestaurantCategory = ({resCategory}) => {

    console.log("categories :", resCategory);
    return <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
            <span className="font-bold">{resCategory?.title} ({resCategory?.itemCards.length})</span>
            <span>🔽</span>
        </div>
        {/* Accordian */}
    </div>
}

export default RestaurantCategory;