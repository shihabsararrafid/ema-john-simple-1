import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Review from './Components/Review/Review';
import About from './Components/About/About';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route></Route>
      </Routes>

    </div>
  );
}

export default App;
