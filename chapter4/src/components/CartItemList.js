import CartItem from "./CartItem";

export default ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageId={item.imageId}
            description={item.description}
            itemRatings={item.ratings}
          />
        );
      })}
    </div>
  );
};
