import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Service from './page/Service';
import Contact from './page/Contact';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/items'>
            <Service />
          </Route>
          <Route path='/cart'>
            <Contact />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
