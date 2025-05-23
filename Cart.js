import React,{useState} from 'react';
const Cart=()=>{
const[cartItems, setCartItems]=useState([
{id: 1, name: 'Product-1', price: 1000, quantity: 0, image:'Screenshot
2024-01-18 003632.png'},
{id: 2, name: 'Product-2', price: 2000, quantity: 0, image:'Screenshot
2024-01-18 003938.png'},
{id: 3, name: 'Product-3', price: 1500, quantity: 0, image:'Screenshot
2024-01-18 201023.png'},
{id: 4, name: 'product-1', price: 500, quantity: 0, image: 'Screenshot
2024-01-18 010645.png'},
{id: 5, name: 'product-2', price: 4000, quantity: 0, image: 'Screenshot
2024-01-18 201521.png'},
{id: 6, name: 'product-3', price: 3500, quantity: 0, image: 'Screenshot
2024-01-18 201714.png'},
{id: 7, name: 'Product-1', price: 80000, quantity: 0, image:'Screenshot
2024-01-19 084905.png'},
{id: 8, name: 'Product-2', price: 90000, quantity: 0, image:'Screenshot
2024-01-19 085820.png'},
{id: 9, name: 'Product-3', price: 1499, quantity: 0, image:'Screenshot
2024-01-19 194502.png'}]);
const removeFromCart=(id)=>{
const updatedCart=cartItems.filter(item=> item.id !==id)
setCartItems(updatedCart);
}
const AddQuantity = (id) => {
const updatedCart = cartItems.map(item => {
if (item.id === id) {
return { ...item, quantity: item.quantity + 1 };
}
return item;
});
setCartItems(updatedCart);
};
const calculateTotal=()=>{
return cartItems.reduce((total,item)=>total+
(item.price*item.quantity),0)
}
return (
<div className="cart-page">
<h2>Add to Cart</h2>
<div className="cart-items">
{cartItems.map(item => (
<div className="cart-item" key={item.id}>
<div>{item.name}</div>
<div>Rs.{item.price}</div>
<div>Quantity:{item.quantity}</div>
<img src={process.env.PUBLIC_URL + '/' + item.image}
alt={item.name}/>
<button onClick={() =>AddQuantity(item.id)}>Buy now</button>
<button onClick={() =>removeFromCart(item.id)}>Remove</button>
</div>
))}
</div>
<div className="total">
<h3>Total: ${calculateTotal()}</h3>
<button>Total</button>
</div>
</div>
)
}
export default Cart