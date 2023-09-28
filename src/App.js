import './App.css';
import Home from './pages';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Store from './pages/Store';
import Auto from './pages/Auto';
import Photo from './pages/Photo';
import VIDEOS from './components/BodyImages/InfoImages';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bmwe36-widebody-kit-parts" element={<Work project={VIDEOS[0]} nextP={VIDEOS[1].link} prevP={VIDEOS[0].link}/>}/>
          <Route path="/F12015" element={<Work project={VIDEOS[1]} nextP={VIDEOS[2].link} prevP={VIDEOS[0].link}/>}/>
          <Route path="/bmwe36-widebody-kit-anim" element={<Work project={VIDEOS[2]} nextP={VIDEOS[3].link} prevP={VIDEOS[1].link}/>}/>
          <Route path="/origin" element={<Work project={VIDEOS[3]} nextP={VIDEOS[4].link} prevP={VIDEOS[2].link}/>}/>
          <Route path="/bmwe36-widebody-kit" element={<Work project={VIDEOS[4]} nextP={VIDEOS[5].link} prevP={VIDEOS[3].link}/>}/>
          <Route path="/NissanNismoGT-R" element={<Work project={VIDEOS[5]} nextP={VIDEOS[5].link} prevP={VIDEOS[4].link}/>}/>
          <Route path="/foggyVase" element={<Work project={VIDEOS[6]} nextP={VIDEOS[7].link} prevP={VIDEOS[5].link}/>}/>
          <Route path="/bathroom" element={<Work project={VIDEOS[7]} nextP={VIDEOS[8].link} prevP={VIDEOS[6].link}/>}/>
          <Route path="/Porsche-911-exterior" element={<Work project={VIDEOS[8]} nextP={VIDEOS[9].link} prevP={VIDEOS[7].link}/>}/>
          <Route path="/Porsche-911-interior" element={<Work project={VIDEOS[9]} nextP={VIDEOS[9].link} prevP={VIDEOS[8].link}/>}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Photo" element={<Photo />}/>
          <Route path="/Auto" element={<Auto />}/>
          <Route path="/Store" element={<Store />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
