import logo from './logo.svg';
import './App.css';

function App() {

  const nom = 'React';

  return ( /* JSX */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Allo {nom.toUpperCase()} !</h2>
      </header>
    </div>
  );
}

export default App;
