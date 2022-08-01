
import './App.css';

import Home from './Page/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Page/Services';
import Login from './Page/Login';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
