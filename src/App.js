import './App.css';
import Home from './pages';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Origin from './pages/work/Origin';
import About from './pages/About';
import Store from './pages/Store';
import Auto from './pages/Auto';
import Photo from './pages/Photo';
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work/Origin" element={<Origin />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Photo" element={<Photo />}/>
          <Route path="/Auto" element={<Auto />}/>
          <Route path="/Store" element={<Store />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
