import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import CartMDB from "./CartMDB";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);
  const { userId } = useContext(UserContext);
  const api = new API();

  useEffect(() => {
    console.log("preCartFetch", userId);
    const fetchCart = async () => {
      setCartLoading(true);
      if (userId !== 0) {
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
        <CartMDB items={cartItems} loading={cartLoading}></CartMDB>
      </Container>
    </>
  );
}

export default CartPage;
