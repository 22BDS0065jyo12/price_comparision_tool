// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';import './index.css'; 
import Cart from './Cart.js';  
import './Home.css' 
import Header from './Header.js' 
import Homepage from './Homepage.js' 
import Footer from './footer.js' 
 
const MyApp = () => { 
  return ( 
      <div className="App"> 
        
          <Header /> 
          <Homepage/> 
          <Cart/> 
          <Footer /> 
        </div> 
      
    ); 
  }; 
   
export default MyApp;