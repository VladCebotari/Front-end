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
//           Plate
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './styles.css'; 
import backgroundImage from './styles.css'; 
import logoImage from './logo page.png'


function App() {
  return (
    <div className="background-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '50px', color: 'black', fontWeight: 'bold', fontFamily: 'Consolas' }}>
          Welcome to
        </p>
        <img src={logoImage} alt="Logo" style={{ width: '300px', height: 'auto', filter: 'invert(100%)', marginBottom: '30px' }} />
        <a style={{ fontSize: '20px', color: 'black', display: 'inline-block', textDecoration: 'none' }}>
          Click to start
        </a>
      </header>
    </div>
  );
}





export default App;
