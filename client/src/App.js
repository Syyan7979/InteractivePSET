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

// Teacher pages
import TeacherLogin from "./pages/Teacher/TeacherLogin";
import Apply from "./pages/Teacher/Apply";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import Classes from "./pages/Teacher/Classes";
import ProblemSets from "./pages/Teacher/ProblemSets";
import TeacherProfile from "./pages/Teacher/TeacherProfile";

const App = () => {
  // const userIsLoggedIn = false;

  return (
    <BrowserRouter>
      <Routes>
        {/* Student pages */}
        <Route path = "/" element={<Layout showMenu={false}/>}>
          <Route index element={<Login/>}/>
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

        {/* Teacher pages */}
        <Route path = "/teacher" element={<Layout showMenu={false}/>}>
          <Route index element={<TeacherLogin/>}/>
          <Route path = "/teacher/login" element={<TeacherLogin/>}/>
          <Route path = "/teacher/apply" element={<Apply/>}/>
        </Route>
        
        <Route path = "/teacher" element={<Layout/>}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
          <Route path="/teacher/classes" element={<Classes/>}/>
          <Route path="/teacher/problem-sets" element={<ProblemSets/>}/>
          <Route path="/teacher/profile" element={<TeacherProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;