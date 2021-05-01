import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/book/:id'>
          <HomePage/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
