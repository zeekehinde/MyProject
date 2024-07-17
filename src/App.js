import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Restaruant from './Components/Restaurant/Restaurant';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import {Routes, Route} from 'react-router-dom'
import Sign from './Components/Signin/Sign';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/restaurant' element={<Restaruant/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Sign' element={<Sign/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
