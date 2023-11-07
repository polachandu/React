const ItemListComponent = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-4 border-gray-40 border-b-2 text-left">
          <div className="py-2 flex justify-between">
            <span>{item.card.info.name}</span>
            <span>  {item.card.info.price/100}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemListComponent;
