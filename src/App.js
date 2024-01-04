
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AppUsers from './components/users/AppUsers';
import Fruits from './components/fruits/Fruits';
import Category from './components/category/Category';
import Milk from './components/milk/Milk';
import Riders from './components/riders/Riders';
import Orders from './components/orders/Orders';
import  Promotion  from './components/promotions/Promotion';
import Zone from './components/zones/Zone';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/users" element={<AppUsers/>}/>
        <Route exact path='/fruits' element={<Fruits/>}/>
        <Route exact path='/category' element={<Category/>}/>
        <Route exact path='/milk' element={<Milk/>}/>
        <Route exact path='/rider' element={<Riders/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route exact path='/promotion' element={<Promotion/>}/>
        <Route exact path='/delivery' element={<Zone/>}/>
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
