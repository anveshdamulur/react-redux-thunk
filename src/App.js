import { useSelector } from 'react-redux';
import './App.css';
import ProductsComponent from './components/ProductsComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={ProductsComponent} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
