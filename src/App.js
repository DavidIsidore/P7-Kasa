//import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/Notfound';
//import Card from './components/Card/Card';
import Accomodation from './pages/Accomodation/Accomodation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
