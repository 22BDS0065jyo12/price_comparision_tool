import React from 'react'; 
import Category from './Category'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 
'recharts';  
 
function Homepage() { 
     
    const categories = [ 
        { 
            title: 'Footwears', 
            products: [ 
                { 
                    image: 'Screenshot 2024-01-18 003632.png', 
                    name: 'Product-1', 
                    price: 1000, 
                    rating: 2, 
                    reviews: [ 
                        { source: 'Amazon', price: 1000, rating: 2 }, 
                        { source: 'Flipcart', price: 1100, rating: 1 }, 
                        { source: 'Myntra', price: 1050, rating: 3 }, 
                        { source: 'Snapdeal', price: 1200, rating: 4 }, 
                        { source: 'Ebay', price: 950, rating: 2 }, 
                    ], 
                    offer: '10% off', 
                    source: 'Amazon' 
                }, 
                { 
                    image: 'Screenshot 2024-01-18 003938.png', 
                    name: 'Product-2', 
                    price: 2000, 
                    rating: 4, 
                    reviews: [ 
                        { source: 'Amazon', price: 2100, rating: 3 }, 
                        { source: 'Flipcart', price: 2000, rating: 4 }, 
                        { source: 'Myntra', price: 2050, rating: 5 }, 
                        { source: 'Snapdeal', price: 2200, rating: 4 }, 
                        { source: 'Ebay', price: 1900, rating: 3 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Flipcart' 
                }, 
                // Add more products here 
                { 
                    image: 'Screenshot 2024-01-18 201023.png', 
                    name: 'Product-3', 
                    price: 1500, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 1600, rating: 3 }, 
                        { source: 'Flipcart', price: 1550, rating: 4 }, 
                        { source: 'Myntra', price: 1500, rating: 3 }, 
                        { source: 'Snapdeal', price: 1700, rating: 4 }, 
                        { source: 'Ebay', price: 1450, rating: 5 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Myntra' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 154453.png', 
                    name: 'Product-4', 
                    price: 3000, 
                    rating: 4, 
                    reviews: [ 
                        { source: 'Amazon', price: 3100, rating: 4 }, 
                        { source: 'Flipcart', price: 3200, rating: 2 }, 
                        { source: 'Myntra', price: 3050, rating: 4 }, 
                        { source: 'Snapdeal', price: 3000, rating: 4 }, 
                        { source: 'Ebay', price: 2900, rating: 3 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Snapdeal' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 154401.png', 
                    name: 'Product-5', 
                    price: 4000, 
                    rating: 5, 
                    reviews: [ 
                        { source: 'Amazon', price: 4100, rating: 3 }, 
                        { source: 'Flipcart', price: 3800, rating: 2 }, 
                        { source: 'Myntra', price: 4050, rating: 1 }, 
                        { source: 'Snapdeal', price: 4200, rating: 4 }, 
                        { source: 'Ebay', price: 4000, rating: 5 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Ebay' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 154917.png', 
                    name: 'Product-6', 
                    price: 5000, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 5000, rating: 3 }, 
                        { source: 'Flipcart', price: 5400, rating: 2 }, 
                        { source: 'Myntra', price: 5050, rating: 1 }, 
                        { source: 'Snapdeal', price: 5200, rating: 2 }, 
                        { source: 'Ebay', price: 4900, rating: 4 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Amazon' 
                } 
            ] 
        }, 
        { 
            title: 'Watches', 
            products: [ 
                { 
                    image: 'Screenshot 2024-01-18 010645.png', 
                    name: 'Product-1', 
                    price: 500, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 500, rating: 3 }, 
                        { source: 'Flipcart', price: 550, rating: 5 }, 
                        { source: 'Myntra', price: 525, rating: 2 }, 
                        { source: 'Snapdeal', price: 600, rating: 3 }, 
                        { source: 'Ebay', price: 480, rating: 4 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Amazon' 
                }, 
                { 
                    image: 'Screenshot 2024-01-18 201521.png', 
                    name: 'Product-2', 
                    price: 4000, 
                    rating: 4, 
                    reviews: [ 
                        { source: 'Amazon', price: 4200, rating: 3 }, 
                        { source: 'Flipcart', price: 4000, rating: 4 }, 
                        { source: 'Myntra', price: 4050, rating: 5 }, 
                        { source: 'Snapdeal', price: 4300, rating: 4 }, 
                        { source: 'Ebay', price: 3800, rating: 3 }, 
                    ], 
                    offer: '15% off', 
                    source: 'Flipcart' 
                }, 
                // Add more products here 
                { 
                    image: 'Screenshot 2024-04-21 190049.png', 
                    name: 'Product-3', 
                    price: 6000, 
                    rating: 4, 
                    reviews: [ 
                        { source: 'Amazon', price: 6100, rating: 3 }, 
                        { source: 'Flipcart', price: 6050, rating: 2 }, 
                        { source: 'Myntra', price: 6000, rating: 4 }, 
                        { source: 'Snapdeal', price: 6200, rating: 1 }, 
                        { source: 'Ebay', price: 5900, rating: 3 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Myntra' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 190147.png', 
                    name: 'Product-4', 
                    price: 12000, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 12100, rating: 2 }, 
                        { source: 'Flipcart', price: 12300, rating: 3 }, 
                        { source: 'Myntra', price: 12050, rating: 4 }, 
                        { source: 'Snapdeal', price: 12000, rating: 3 }, 
                        { source: 'Ebay', price: 11800, rating: 2 }, 
                    ], 
                    offer: '20% off', 
                    source: 'snapdeal' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 190218.png', 
                    name: 'Product-5', 
                    price: 5500, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 5600, rating: 4 }, 
                        { source: 'Flipcart', price: 5400, rating: 5 }, 
                        { source: 'Myntra', price: 5550, rating: 4 }, 
                        { source: 'Snapdeal', price: 5700, rating: 5 }, 
                        { source: 'Ebay', price: 5500, rating: 3 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Ebay' 
                }, 
                { 
                    image: 'Screenshot 2024-01-18 201714.png', 
                    name: 'Product-6', 
                    price: 9000, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 9000, rating: 3 }, 
                        { source: 'Flipcart', price: 9300, rating: 2 }, 
                        { source: 'Myntra', price: 9050, rating: 3 }, 
                        { source: 'Snapdeal', price: 9200, rating: 2 }, 
                        { source: 'Ebay', price: 8900, rating: 1 }, 
                    ], 
                    offer: '20% off', 
                    source: 'amazon' 
                } 
            ] 
        }, 
        { 
            title: 'Electronic-products', 
            products: [ 
                { 
                    image: 'Screenshot 2024-01-19 084905.png', 
                    name: 'Product-1', 
                    price: 80000, 
                    rating: 5, 
                    reviews: [ 
                        { source: 'Amazon', price: 80000, rating: 5 }, 
                        { source: 'Flipcart', price: 81000, rating: 1 }, 
                        { source: 'Myntra', price: 80500, rating: 3 }, 
                        { source: 'Snapdeal', price: 82000, rating: 2 }, 
                        { source: 'Ebay', price: 78000, rating: 4 }, 
                    ], 
                    offer: '10% off', 
                    source: 'Amazon' 
                }, 
                { 
                    image: 'Screenshot 2024-01-19 085820.png', 
                    name: 'Product-2', 
                    price: 90000, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 91000, rating: 2 }, 
                        { source: 'Flipcart', price: 90000, rating: 3 }, 
                        { source: 'Myntra', price: 90500, rating: 4 }, 
                        { source: 'Snapdeal', price: 92000, rating: 3 }, 
                        { source: 'Ebay', price: 89000, rating: 2 }, 
                    ], 
                    offer: '15% off', 
                    source: 'Flipcart' 
                }, 
                 
                { 
                    image: 'Screenshot 2024-01-19 194502.png', 
                    name: 'Product-3', 
                    price: 1499, 
                    rating: 2, 
                    reviews: [ 
                        { source: 'Amazon', price: 1480, rating: 2 }, 
                        { source: 'Flipcart', price: 1500, rating: 3 }, 
                        { source: 'Myntra', price: 1499, rating: 2 }, 
                        { source: 'Snapdeal', price: 1520, rating: 3 }, 
                        { source: 'Ebay', price: 1475, rating: 2 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Myntra' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 191010.png', 
                    name: 'Product-4', 
                    price: 3000, 
                    rating: 5, 
                    reviews: [ 
                        { source: 'Amazon', price: 3200, rating: 1 }, 
                        { source: 'Flipcart', price: 3100, rating: 2 }, 
                        { source: 'Myntra', price: 3050, rating: 3 }, 
                        { source: 'Snapdeal', price: 3000, rating: 5 }, 
                        { source: 'Ebay', price: 2900, rating: 1 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Snapdeal' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 191050.png', 
                    name: 'Product-5', 
                    price: 7500, 
                    rating: 3, 
                    reviews: [ 
                        { source: 'Amazon', price: 7600, rating: 4 }, 
                        { source: 'Flipcart', price: 7300, rating: 5 }, 
                        { source: 'Myntra', price: 7550, rating: 4 }, 
                        { source: 'Snapdeal', price: 7700, rating: 5 }, 
                        { source: 'Ebay', price: 7500, rating: 3 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Ebay' 
                }, 
                { 
                    image: 'Screenshot 2024-04-21 191305.png', 
                    name: 'Product-6', 
                    price: 9000, 
                    rating: 4, 
                    reviews: [ 
                        { source: 'Amazon', price: 9000, rating: 4 }, 
                        { source: 'Flipcart', price: 9240, rating: 2 }, 
                        { source: 'Myntra', price: 9050, rating: 3 }, 
                        { source: 'Snapdeal', price: 9200, rating: 2 }, 
                        { source: 'Ebay', price: 8900, rating: 1 }, 
                    ], 
                    offer: '20% off', 
                    source: 'Amazon' 
                } 
            ] 
        } 
    ]; 
    const findBestProduct = (products) => { 
        let bestProduct = null; 
        let bestAveragePrice = Infinity; 
 
        products.forEach(product => { 
            let totalPrices = 0; 
            let totalRatings = 0; 
            product.reviews.forEach(review => { 
                totalPrices += review.price; 
                totalRatings += review.rating; 
            }); 
            const averagePrice = totalPrices / product.reviews.length; 
            const averageRating = totalRatings / product.reviews.length; 
             
            if (averagePrice < bestAveragePrice) { 
                bestAveragePrice = averagePrice; 
                bestProduct = product; 
                bestProduct.averageRating = averageRating;  
            } 
        }); 
 
        return bestProduct; 
    }; 
 
    const prepareChartData = () => { 
        const data = []; 
        categories.forEach(category => { 
            const bestProduct = findBestProduct(category.products); 
            if (bestProduct) { 
                data.push({ category: category.title, rating: 
bestProduct.averageRating, price: bestProduct.price }); 
            } 
        }); 
        return data; 
    }; 
 
    return ( 
        <div style={{ backgroundColor: '#f3f4f6', padding: '20px' }}> 
            {categories.map((category, index) => ( 
                <div key={index}> 
                    <Category title={category.title} 
products={category.products} /> 
                 
                    <div style={{ marginTop: '20px' }}> 
                        <h3>Best {category.title}</h3> 
                        {findBestProduct(category.products) && ( 
                            <div> 
                                <p>{findBestProduct(category.products).name} 
from {findBestProduct(category.products).source} is the best choice!</p> 
                                <p>Average Rating: <span style={{ color: 
'black' }}>{findBestProduct(category.products).averageRating}</span></p> 
                                <p>Average Price: 
${findBestProduct(category.products).price}</p> 
                            </div> 
                        )} 
                    </div> 
                </div> 
            ))} 
             
            <h2 style={{ marginTop: '40px' }}>Best Products Comparison</h2> 
            <BarChart width={800} height={400} data={prepareChartData()} 
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}> 
                <CartesianGrid strokeDasharray="3 3" /> 
                <XAxis dataKey="category" /> 
                <YAxis /> 
                <Tooltip /> 
                <Legend /> 
                <Bar dataKey="rating" fill="#8884d8" /> 
                <Bar dataKey="price" fill="#82ca9d" /> 
            </BarChart> 
        </div> 
    ); 
} 
 
export default Homepage;