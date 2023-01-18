import CartItem from "./CartItem";

function Cart({ items, loading }) {
  console.log("Cart Items:", items);
  console.log(loading);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div>
        {items.map((item) => (
          <CartItem key={item.product_id} item={item}></CartItem>
        ))}
      </div>
    </div>
  );
}

export default Cart;
