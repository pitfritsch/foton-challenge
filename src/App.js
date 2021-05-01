import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404';
import Details from './pages/Details';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/book/:bookId'>
          <Details/>
        </Route>
        <Route path='/search/:search'>
          <SearchPage/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
