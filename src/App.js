import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import StudentTable from './component/StudentTable';
import CreateStudent from './component/CreateStudent';
import EditStudent from './component/EditStudent';
import ViewDetail from './component/ViewDetail';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<StudentTable/>}></Route>
        <Route path='/student/create' element={<CreateStudent/>}></Route>
        <Route path='/student/edit/:sid' element={<EditStudent/>}></Route>
        <Route path='/student/view/:sid' element={<ViewDetail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
