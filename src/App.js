import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';


function App() {
  return (
    <div>
      <Header/>
  
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/FAQ' element={<FAQs/>}></Route>
      <Route path='*' element={<h1 className='m-3'>Error</h1>}/>
      
     </Routes>

      <Footer/>
    </div>
  );
}

export default App;
