import Axios from "axios";

export default class API {
  #url;

  constructor() {
    this.#url = "http://localhost:3001";
  }

  checkLogin() {
    return Axios.get(`${this.#url}/login`);
  }

  getProductDetails(productId) {
    return Axios.get(`${this.#url}/productdetails/${productId}`);
  }

  //Only for the product details page
  addToCart(userId, productId) {
    return Axios.post(`${this.#url}/addtocart`, {
      userId: userId,
      productId: productId,
    });
  }

  removeFromCart(itemId) {
    return Axios.post(`${this.#url}/removefromcart/${itemId}`);
  }

  //Only for the cart page
  updateCart(itemId) {
    return Axios.post(`${this.#url}/updatecart/${itemId}`);
  }

  getCartItems(userId) {
    return Axios.get(`${this.#url}/cartitems/${userId}`);
  }
}
