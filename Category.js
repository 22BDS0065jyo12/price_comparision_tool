import React from "react"; 
import Product from "./Product"; 
 
function Category({ title, products }) { 
  return ( 
    <div className="categories"> 
      <h2 style={{ textAlign: "center", fontSize: "35px", color: title === 
'Footwears' ? 'brown' : 'brown' }}> 
        <b>{title}</b> 
      </h2> 
      <div className="container"> 
        {products.map((product, index) => ( 
          <div key={index} className="key"> 
            <Product 
              image={product.image} 
              name={product.name} 
              price={product.price} 
              offer={product.offer} 
              source={product.source} 
              rating={product.reviews ? product.reviews : 0} 
              reviews={product.reviews ? product.reviews : []} // Pass reviews 
prop here 
            /> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
export default Category;