import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma Inline
      </p>
    </div>
  );
}

export default App;
