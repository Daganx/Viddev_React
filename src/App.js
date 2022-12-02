import { BrowserRouter,Routes,Route, } from 'react-router-dom';
// IMPORT DE MON CSS;
import './App.css';
// IMPORT DE MES PAGES;
import Home from './Components/Pages/Home';
import Error404 from './Components/Pages/Error404';
import Registrer from './Components/Pages/Registrer';
import Movies from './Components/Pages/Movies';
import Contact from './Components/Pages/ContactUs';
import TvShows from './Components/Pages/TvShows';
import Login from './Components/Pages/Login';
import Admin from './Components/Pages/Admin';

// MA FONCTION APP AVEC MES ROUTES;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/tvshows' element={<TvShows/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registrer' element={<Registrer/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
