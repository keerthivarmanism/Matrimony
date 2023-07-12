// import {BrowserRouter,Routes,Route} from 'react-router-dom';

// import Body from './components/Body';
// import './App.css';
// import Login from './components/Login';

// import Sidebar from "./components/Sidebar";
// import Home from './pages/Home';
// import Customers from './pages/Customers';
// import Contact from './pages/Products';
// import About from './pages/about';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Body/>}></Route> 
//           <Route path='/side' element={<Sidebar/>}></Route>
//         </Routes>
//   </BrowserRouter>

//       <Login/>
  
//      </div>
//   );
//  }

// export default App;
 


import './App.css';
import Body from './components/Body';
// import Home from './components/HomePage';
import Login from './components/Login';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Body/>}></Route>
        {/* <Route path='/sidebar' element={<SideBar/>}></Route> */}
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;