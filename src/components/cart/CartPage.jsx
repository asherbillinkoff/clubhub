import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import Cart from "./Cart";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);
  const { userId } = useContext(UserContext);
  const api = new API();
  console.log(userId);
  const context = useContext(UserContext);
  console.log(context);

  useEffect(() => {
    console.log("preCartFetch", userId);
    const fetchCart = async () => {
      setCartLoading(true);
      if (userId !== 0 || userId !== undefined) {
        let res = await api.getCartItems(userId);
        console.log(res);
        setCartItems(res.data);
        setCartLoading(false);
      }
    };
    fetchCart();
  }, [userId]);
  console.log(cartItems);

  return (
    <>
      <NavBar></NavBar>
      <Container className="ms-5 mt-5">
        <Cart items={cartItems} loading={cartLoading}></Cart>
      </Container>
    </>
  );
}

export default CartPage;
