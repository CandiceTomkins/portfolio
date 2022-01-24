import logo from './ct_logo.png';
import './App.css';
import About from './About';



function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
  <div className="about-me-list">
        <h2 className="about-me-muted"> Candice Tomkins <br/> sun seeker. beach lover. wild swimmeer. wine drinker. adventure taker. travel guru.</h2>
        <h1 className="about-me-bright">front-end developer. freelance creative <small>based in Lisbon, Portugal</small></h1>
        </div>
      </header>
      </div>
      <About/>
    </div>


   
  );
}

export default App;
