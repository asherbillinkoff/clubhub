import Axios from "axios";

Axios.defaults.withCredentials = true;

export default class API {
  constructor() {
    this.url = "http://localhost:3001";
  }

  checkLogin() {
    return Axios.get(`${this.url}/login`);
  }

  getProducts(maxPrice, clubFilter, brandFilter, handFilter) {
    return Axios.get(
      `${this.url}/products/?maxprice=${maxPrice}&club_type=${clubFilter}&brand=${brandFilter}&hand=${handFilter}`
    );
  }

  login(email, password) {
    return Axios.post(`${this.url}/login`, {
      email: email,
      password: password,
    });
  }

  logout() {
    return Axios.get(`${this.url}/logout`);
  }

  registerUser(user) {
    return Axios.post(`${this.url}/register`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      is_male: user.gender,
      address: user.address,
      city: user.city,
      country: user.country,
    });
  }

  getUserProfile() {
    return Axios.get(`${this.url}/userprofile`);
  }

  editUserProfile(userId, email, firstName, lastName, address) {
    return Axios.post(`${this.url}/editprofile`, {
      userId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
    });
  }

  getProductDetails(productId) {
    return Axios.get(`${this.url}/productdetails/${productId}`);
  }

  getIrons() {
    return Axios.get(`${this.url}/products/i`);
  }

  getDrivers() {
    return Axios.get(`${this.url}/products/d`);
  }

  getPutters() {
    return Axios.get(`${this.url}/products/p`);
  }

  //Only for the product details page
  addToCart(userId, productId) {
    return Axios.post(`${this.url}/addtocart`, {
      userId: userId,
      productId: productId,
    });
  }

  removeItem(itemId) {
    return Axios.post(`${this.url}/removeitem/${itemId}`);
  }

  removeProduct(itemId1) {
    return Axios.post(`${this.url}/removeproduct/${itemId1}`);
  }

  //Only for the cart page
  updateCart(itemId) {
    return Axios.post(`${this.url}/updatecart/${itemId}`);
  }

  getCartItems(userId) {
    return Axios.get(`${this.url}/cartitems/${userId}`);
  }

  addToWishlist(productId) {
    return Axios.get(`${this.url}/addtowishlist/${productId}`);
  }

  getWishlist(userId) {
    return Axios.get(`${this.url}/getwishlist/${userId}`);
  }
}
