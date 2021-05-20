import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Service from './page/Service';
import Contact from './page/Contact';
import { TestProvider } from './contexts/TestContext';

function App() {
  return (
    <Router>
      <TestProvider>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/service'>
            <Service />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </TestProvider>
    </Router>
  );
}

export default App;
