import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainForm from './components/MainForm'
import AllGames from './components/AllGames';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllGames />} />
          <Route path='/new' element={<MainForm />} />
          <Route path='/new/:id' element={<AllGames />} />
          <Route path='/edititem/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
