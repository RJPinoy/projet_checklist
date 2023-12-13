import './App.scss';
import Dashboard from './pages/dashboard';
import Checklist from './pages/checklist';
import Formulaire from './pages/formulaire';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

window.onload = function() {
  const rootDiv = document.getElementById('root');
  const screenHeight = window.innerHeight;
  rootDiv.style.height = screenHeight + 'px';
};

function App() {
  return (
    <>
      <Provider store={ store }>
        <Routes>
          <Route index element={ <Dashboard /> } />
          <Route path='/formulaire' key={location.pathname} element={ <Formulaire /> } />
          <Route path='/checklist/:id' key={location.pathname} element={ <Checklist /> } />
        </Routes>
      </Provider>
    </>
  )
}

export default App
