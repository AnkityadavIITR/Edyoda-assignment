
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Routes>
        <Route to={"/"} element={<Hero/>}/>
      </Routes>
    </div>
  );
}

export default App;
