import React, { useState } from "react"; 
import StarRating from "./StarRating";  
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, 
ResponsiveContainer } from 'recharts'; 
 
const sourceLogos = { 
  "Amazon": "amazon_logo_url", 
  "Flipcart": "flipcart_logo_url", 
  "Myntra": "myntra_logo_url", 
  "Snapdeal": "snapdeal_logo_url", 
  "Ebay": "ebay_logo_url", 
}; 
 
const Product = ({ image, name, price, offer, source, rating, reviews }) => { 
  const [showPriceComparison, setShowPriceComparison] = useState(false); 
 
  const calculateAverageRating = (reviews) => { 
    if (reviews.length === 0) { 
      return 0;  
    } 
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 
0); 
    return Math.round(totalRating / reviews.length); 
  }; 
 
  const averageRating = calculateAverageRating(reviews); 
 
  const getSourceLogo = () =>{ 
    return sourceLogos[source]; 
  }; 
 
  const dynamicPriceChart = ( 
    <ResponsiveContainer width="100%" height={200}> 
      <LineChart data={reviews}> 
        <CartesianGrid strokeDasharray="3 3" /> 
        <XAxis dataKey="source" /> 
        <YAxis /> 
        <Tooltip /> 
        <Line type="monotone" dataKey="price" stroke="#8884d8" /> 
      </LineChart> 
    </ResponsiveContainer> 
  ); 
 
  const userReviews = reviews.map((review, index) => ( 
    <div key={index}> 
      <p><strong>{review.source}:</strong> {review.comment}</p> 
      <StarRating rating={review.rating} /> 
    </div> 
  )); 
 
  const calculateSavings = () => { 
    const prices = reviews.map(review => review.price); 
    const minPrice = Math.min(...prices); 
    const savings = Math.max(price - minPrice, 0); 
    return savings; 
  }; 
 
  return ( 
    <div className="product-box"> 
      <img src={image} alt={name} className="product-image" /> 
      <div className="product-details"> 
        <h3>{name}</h3> 
        <p>Price: ${price}</p> 
        <StarRating rating={averageRating} color="yellow"/> 
        {offer && ( 
          <div className="offer" style={{backgroundColor: '#4caf50'}}> 
            <p style={{ color: 'white' }}>Offer: {offer}</p> 
          </div> 
        )} 
        <div className="source-logo"> 
          {source && ( 
            <img src={getSourceLogo()} alt={source} /> 
          )} 
        </div> 
        <div className="button-container"> 
          <button className="buy-now-btn">Buy Now</button> 
          <button className="add-to-cart-btn">Add to Cart</button> 
          <button className="price-comparison-btn" onClick={() => 
setShowPriceComparison(!showPriceComparison)}>Price Comparison</button> 
        </div> 
        {showPriceComparison && ( 
          <div className="price-comparison-table"> 
            <h4>Price Comparison:</h4> 
            {dynamicPriceChart} 
            <p>Savings: ${calculateSavings()}</p> 
            <p>You could save ${calculateSavings()} by buying from the 
cheapest source!</p> 
          </div> 
        )} 
        <div className="user-reviews"> 
          <h4>User Reviews:</h4> 
          {userReviews} 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default Product;