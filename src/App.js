import { Routes , Route} from 'react-router-dom'
import {Home} from '../src/pages/Home/index'
import { Archive } from './pages/Archive';
import { Delete } from './pages/Delete';
import { Important } from './pages/Important';

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/bin' element={<Delete/>}/>
      <Route path='/important' element={<Important/>}/>
    </Routes>
    </div>
  );
}

export default App;
