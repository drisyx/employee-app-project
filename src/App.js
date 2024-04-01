import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import EmployeeNavbar from './components/EmployeeNavbar';
import ViewAll from './components/ViewAll';
import Force from './components/Force';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Force />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/search' element={<SearchEmployee />} />
        <Route path='/view' element={<ViewAll />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
