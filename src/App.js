import './styles/app.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home'; 
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { emojiCursor } from 'cursor-effects';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   new emojiCursor({ emoji: ["🥁", "🥁", "🥁"] });
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
