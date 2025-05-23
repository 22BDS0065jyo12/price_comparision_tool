import React from 'react' 
const Header=()=>{ 
     
  return( 
     
    <div style={{ backgroundColor: 'bisque' }}> 
      <div className="main"> 
            <div className="nav-bar"> 
              <div className="image-container"> 
                    <img src="jyo.png" width="60px" height="60px" alt='logo' 
/> 
                </div> 
                <div className="icon"> 
                    <h1 className="logo">Online Shop</h1> 
                </div> 
                
                <div className="menu"> 
                    <nav> 
                        <ul> 
                            <li><a href="#">Home</a></li> 
                            <li><a href="#">Cart</a></li> 
                            <li><a href="#">Orders</a></li> 
                            <li><a href="#">Profile</a></li> 
                            <li><a 
href="file:///C:/Users/91789/OneDrive/Desktop/Documents/Desktop/OneDrive/Deskt
 op/_website/contact.html">Contact</a></li> 
                        </ul> 
                        
                    </nav> 
                </div> 
                <div className="search"> 
                    <input className="srch" name="text" placeholder="type 
here" value=""/> 
                    <a href="#"><button className="button">search</button></a> 
                     
                </div> 
            </div> 
            <div className="banner"> 
                <h1 align="center">Welcome to Online Shopping</h1> 
                <p align="center" className="p">The trend of online shopping 
has increased in recent times with the increase<br/> of e-commerce and digital 
technology. With just a single click,<br/> you can shop for everything by 
sitting at your home<br/> as per your choice, convenience and budget.</p> 
                <div className="centered-button"> 
                    <button className="contact"><a href="#">Join Us 
&#8594;</a></button> 
                </div> 
            </div> 
            <div className="photo"> 
                <img src="Screenshot 2024-01-14 230523.png" /> 
            </div> 
        </div> 
      </div> 
  ) 
} 
export default Header