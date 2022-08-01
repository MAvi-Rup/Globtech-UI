
import './App.css';
import Navbar from './Page/Navbar';
import Home from './Page/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Page/Services';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
      </Routes>

    </div>
  );
}

export default App;
