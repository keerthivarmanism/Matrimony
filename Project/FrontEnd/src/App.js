
import './App.css';
import Body from './components/Body';
import Home from './components/HomePage';
import Login from './components/Login';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Membership from './components/membership';
import Profile from './components/Profile';
import About from './components/About';
import Signup from './components/SignUp';
import { Provider } from 'react-redux';
import store from './components/store';
import Feedback from './components/FeedBack';
// import Contact from './components/contact';


// import ProfileCreation from './components/profilcreation';






function App() {
  return (
     <Provider store={store}>
      <BrowserRouter>
      
      <Routes>
      {/* <Route path='/' element={<ProfileCreation/>}></Route> */}
      <Route path='/feedback' element={<Feedback/>}></Route>
      {/* <Route path='/contact' element={<Contact/>}></Route> */}
      <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/SignUp' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/member' element={<Membership/>}></Route>
         </Routes>  
       </BrowserRouter>
      
      
       </Provider>
  );
}

export default App;
