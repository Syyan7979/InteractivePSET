import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bulma/css/bulma.min.css'
import './styles/global.scss'

import Layout from "./elements/Layout";

// Student pages
import Login from "./pages/Student/Login";
import Register from "./pages/Student/Register";
import Dashboard from "./pages/Student/Dashboard";
import Enrollment from "./pages/Student/Enrollment";
import Grades from "./pages/Student/Grades";
import Profile from "./pages/Student/Profile";

const App = () => {
  // const userIsLoggedIn = false;

  return (
    <BrowserRouter>
      <Routes>
        {/* Student pages */}
        <Route path = "/" element={<Layout showMenu={false}/>}>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<Register/>}/>
        </Route>
        
        <Route path = "/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/enrollment" element={<Enrollment/>}/>
          <Route path="/grades" element={<Grades/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
