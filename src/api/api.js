import Axios from "axios";

Axios.defaults.withCredentials = true;

export default class API {
  #url;

  constructor() {
    this.#url = "http://localhost:3001";
  }

  checkLogin() {
    return Axios.get(`${this.#url}/login`);
  }

  logout() {
    return Axios.get(`${this.#url}/logout`);
  }

  getUserProfile() {
    return Axios.get(`${this.#url}/userprofile`);
  }

  editUserProfile(userId, email, firstName, lastName, address) {
    return Axios.post(`${this.#url}/editprofile`, {
      userId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
    });
  }

  getProductDetails(productId) {
    return Axios.get(`${this.#url}/productdetails/${productId}`);
  }

  getIrons() {
    return Axios.get(`${this.#url}/products/i`);
  }

  getDrivers() {
    return Axios.get(`${this.#url}/products/d`);
  }

  getPutters() {
    return Axios.get(`${this.#url}/products/p`);
  }

  //Only for the product details page
  addToCart(userId, productId) {
    return Axios.post(`${this.#url}/addtocart`, {
      userId: userId,
      productId: productId,
    });
  }

  removeItem(itemId) {
    return Axios.post(`${this.#url}/removeitem/${itemId}`);
  }

  removeProduct(itemId1) {
    return Axios.post(`${this.#url}/removeproduct/${itemId1}`);
  }

  //Only for the cart page
  updateCart(itemId) {
    return Axios.post(`${this.#url}/updatecart/${itemId}`);
  }

  getCartItems(userId) {
    return Axios.get(`${this.#url}/cartitems/${userId}`);
  }
}
