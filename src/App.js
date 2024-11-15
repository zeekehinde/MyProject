import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Restaruant from './Components/Restaurant/Restaurant';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import {Routes, Route} from 'react-router-dom'
import Sign from './Components/Signin/Sign';
import Sidebar from './Components/User/SidebarSection/Sidebar';
import Activity from './Components/User/BodySection/ActivitySection/Activity';
import Top from './Components/User/BodySection/TopSection/Top'
import Listing from './Components/User/BodySection/ListingSection/Listing';
import RestOwner from './Components/Resturantowner/RestOwner';
import Next from './Components/Resturantowner/Next';
import Dashboard from './Components/Dashboard/Dashboard';
import Foodform from './Components/Dashboard/FoodSection';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/restaurant' element={<Restaruant/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        <Route path='./ActivitySection/Activity' element={<Activity/>}/>
        <Route path='./TopSection/Top' element={<Top/>}/>
        <Route path='./ListingSection/Listing' element={<Listing/>}/>
        <Route path='/RestOwner' element={<RestOwner/>}/>
        <Route path='/Next' element={<Next/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>

      </Routes>
    
  );
}

export default App;
