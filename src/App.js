import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plate Snap - Retete și Gătit</h1>
        <p>Bine ai venit la Plate Snap! Aici vei găsi o varietate de rețete delicioase și idei pentru gătit.</p>
        <img src="/cale/catre/logo.png" className="App-logo" alt="logo" /> {/* Înlocuiește calea cu logo-ul aplicației tale */}
        <p>
          Alegeți o rețetă sau explorați noile idei pentru gătit.
        </p>
        <a
          className="App-link"
          href="/cale/catre/rețete"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorați rețetele noastre
        </a>
      </header>
    </div>
  );
}

export default App;
