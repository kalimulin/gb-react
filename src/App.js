import logo from './logo.svg'
import './App.css'

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Welcome name="Рустам" />
      </header>
    </div>
  )
}

export default App
