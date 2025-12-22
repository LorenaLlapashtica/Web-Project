import React, { useState, useEffect } from 'react';
import './App.css';

// Pika 93 & 94: Krijimi i një komponente funksionale
function App() {
  // Pika 103: Përdorimi i Hook-ut useState (menaxhimi i gjendjes)
  const [rezervime, setRezervime] = useState(0);
  const [destinacioni, setDestinacioni] = useState("Paris");

  // Pika 102: Përdorimi i useEffect (ndodh kur ngarkohet komponenti)
  useEffect(() => {
    console.log("Paneli i React u ngarkua!");
  }, []);

  // Pika 104: Funksioni për trajtimin e eventeve (Event Handling)
  const shtoRezervim = () => {
    setRezervime(rezervime + 1);
  };

  return (
    <div className="App" style={{ padding: '50px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#97445e', padding: '20px', color: 'white', borderRadius: '15px' }}>
        <h1>Imaginative Tourism - React Panel</h1>
        <p>Ky panel menaxhohet tërësisht përmes React Hooks.</p>
      </header>

      <main style={{ marginTop: '30px', border: '2px dashed #97445e', padding: '20px', borderRadius: '10px' }}>
        <h2>Eksploro destinacionin: <span style={{color: '#97445e'}}>{destinacioni}</span></h2>
        
        {/* Pika 104: onClick Event */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setDestinacioni("Maldive")} style={btnStyle}>Maldive</button>
          <button onClick={() => setDestinacioni("Bregdeti Shqiptar")} style={btnStyle}>Albania</button>
          <button onClick={() => setDestinacioni("Alpet e Kosovës")} style={btnStyle}>Kosovo</button>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3>Rezervimet aktuale: {rezervime}</h3>
          <button onClick={shtoRezervim} style={mainBtnStyle}>
            Rezervo Tani!
          </button>

          {/* Pika 105: Conditional Rendering (Shfaqet vetëm nëse ka rezervime) */}
          {rezervime > 0 && (
            <p style={{ color: 'green', fontWeight: 'bold', marginTop: '15px' }}>
              Sapo keni bërë një rezervim për {destinacioni}! ✅
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

// Stilet e thjeshta
const btnStyle = { margin: '5px', padding: '10px 15px', cursor: 'pointer', border: '1px solid #97445e', borderRadius: '5px', background: 'white' };
const mainBtnStyle = { backgroundColor: '#97445e', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' };

export default App;
