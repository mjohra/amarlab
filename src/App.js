import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import PrivateRoute from './Pages/Login/PrivateRoute';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/blogs'
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
