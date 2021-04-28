import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
