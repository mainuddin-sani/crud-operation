import './App.css';
import {Routes, Route} from 'react-router-dom';
import Adduser from './Page/Adduser/Adduser';

function App() {
  return (
    <Routes>
      <Route path='/user/add' element={<Adduser></Adduser>}></Route>
    </Routes>
  );
}

export default App;
