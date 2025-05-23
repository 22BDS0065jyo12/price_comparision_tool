import React from 'react'; 
const Footer = () => { 
  return ( 
    <footer className="footer"> 
      <div className="container"> 
        <div className="footer-col"> 
        <link rel="stylesheet" type="text/css" 
href="https://cdnjs.cloudflare.com/ajax/libs/font
awesome/5.15.1/css/all.min.css"/> 
 
          <h4>Company</h4> 
          <ul> 
            <li><a href="#">About Us</a></li> 
            <li><a href="#">Contact Us</a></li> 
            <li><a href="#">Terms & Conditions</a></li> 
            <li><a href="#">Privacy Policy</a></li> 
          </ul> 
        </div> 
        <div className="footer-col"> 
          <h4>Categories</h4> 
          <ul> 
            <li><a href="#">Footwear</a></li> 
            <li><a href="#">Clothing</a></li> 
            <li><a href="#">Accessories</a></li> 
            <li><a href="#">Electronics</a></li> 
          </ul> 
        </div> 
        <div className="footer-col"> 
          <h4>Help & Support</h4> 
          <ul> 
            <li><a href="#">FAQs</a></li> 
            <li><a href="#">Shipping Information</a></li> 
            <li><a href="#">Returns & Exchanges</a></li> 
            <li><a href="#">Customer Service</a></li> 
          </ul> 
        </div> 
        <div className="footer-col"> 
          <h4>Follow Us</h4> 
          <div className="social-links"> 
            <a href="#"><i className="fab fa-facebook-f"></i></a> 
            <a href="#"><i className="fab fa-twitter"></i></a> 
            <a href="#"><i className="fab fa-instagram"></i></a> 
            <a href="#"><i className="fab fa-linkedin-in"></i></a> 
          </div> 
        </div> 
      </div> 
      <div className="footer-bottom"> 
        <p>&copy; 2024 jyothsnahanumanthu12@gmail.com.All rights reserved.</p> 
      </div> 
    </footer> 
  ); 
} 
 
export default Footer;