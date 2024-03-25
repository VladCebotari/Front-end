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


function App() {
  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})`, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <header className="App-header">
        <p style={{ fontSize: '30px', color: 'black', fontWeight: 'bold' }} >
          Welcome to
        </p>
        <a style={{ fontSize: '20px', color: 'black' }}>
              PlateSnap
        </a>
      </header>
    </div>
  );
}



export default App;

