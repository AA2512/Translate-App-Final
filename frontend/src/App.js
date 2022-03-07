// import logo from './logo.svg';
import "./App.css";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
          </Switch>
          <p>My First React App</p>
        </header> */}
        <Hero />
        <Form />
        {/* <Results /> */}
        {/* <h2 className="main-head">Codeyoung - Translation App</h2>
        <div className="form-container">
          <form action="">
            <label>Enter the text to be translated:</label>
            <input type="text" name="translateText" id="translateText" />
          </form>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
