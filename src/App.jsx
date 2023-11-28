import './App.scss';
import Dashboard from './pages/dashboard';
import Formulaire from './pages/formulaire';
import { Routes, Route } from 'react-router-dom';

window.onload = function() {
  const rootDiv = document.getElementById('root');
  const screenHeight = window.innerHeight;
  rootDiv.style.height = screenHeight + 'px';
};

function App() {

  return (
    <>
      <Routes>
        <Route index element={ <Dashboard /> } />
        <Route path='/formulaire' element={ <Formulaire /> } />
      </Routes>
    </>
  )
}

export default App
