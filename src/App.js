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

// import React from 'react';
// import './styles.css'; 
// import backgroundImage from './styles.css'; 
// import logoImage from './logo page.png'


// function App() {
//   return (
//     <div className="background-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <header className="App-header" style={{ textAlign: 'center' }}>
//         <div style={{ marginBottom: '20px' }}> {/* Adăugați o diviziune pentru fiecare linie de text */}
//           <p style={{ fontSize: '50px', color: 'black', fontWeight: 'bold', fontFamily: 'Consolas' }}>
//             Welcome to
//           </p>
//         </div>
//         <div> {/* Adăugați o diviziune pentru fiecare linie de text */}
//           <img src={logoImage} alt="Logo" style={{ width: '200px', height: 'auto', filter: 'invert(100%)', marginBottom: '10px' }} />
//         </div>
//         <div> {/* Adăugați o diviziune pentru fiecare linie de text */}
//           <a style={{ fontSize: '20px', color: 'white', textDecoration: 'none' }}>
//             Click to start
//           </a>
//         </div>
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
    <div className="background-image" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      
      <div className="fog-effect" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 100%)'
      }} />
      <div className="fog-effect" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0.%, rgba(0, 0, 0, 0) 100%)'
      }} />
      <header className="App-header" style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '50px', color: 'white', fontWeight: 'bold', fontFamily: 'Consolas' }}>
            Welcome to
          </p>
        </div>
        <div>
          <img src={logoImage} alt="Logo" style={{ width: '200px', height: 'auto', marginBottom: '10px' }} />
        </div>
        <div>
          <a style={{ fontSize: '20px', color: 'white', textDecoration: 'none' }}>
            Click to start
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
