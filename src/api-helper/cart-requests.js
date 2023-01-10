import axios from "axios";

const api = axios.create({baseURL:"http://localhost:5000/"})

export const addToCart = async() =>
 await api.post("/add-to-cart")
 .then(res => res).catch(err => err)

 export const removeFromCart = async() =>
 await api.delete("/remove-from-cart")
 .then(res => res).catch(err => err)