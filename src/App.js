import './App.css';
import {Routes, Route} from 'react-router-dom';
import Adduser from './Page/Adduser/Adduser';
import Home from './Page/Home/Home';
import Update from './Page/Update/Update';

function App() {
  return (
    <Routes>
      <Route path='/user/add' element={<Adduser></Adduser>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
    </Routes>
  );
}

export default App;
