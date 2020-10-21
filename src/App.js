import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About/About';
import Products from './components/Products/Products';
import Teams from './components/Teams/Teams';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />
        
      <Switch>
        <Route exact path="/" component={Hero}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/signup" component={Signup}/>
        <Route  path="/teams" component={Teams}/>
        <Route  path="/about" component={About}/>
        <Route  path="/question" component={Question}/>
        <Route  path="/questions" component={Questions}/>
        <Route  path="/products" component={Products}/>
      </Switch>
          <Footer />
          
      </Router>
 
    </div>
  );
}

export default App;
