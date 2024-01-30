import React from "react";
import UserDetails from "./FormPages/UserInfo/UserInfo";
import EducationInfo from "./FormPages/EduInfo/EducationInfo";
import JobInfo from "./FormPages/JobInfo/JobInfo";
import Greeting from "./FormPages/ThankYou/lastpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UserDetails/>} />
          <Route path="/UserInfo" element={<UserDetails/>}/>
          <Route path="/EducationInfo" element={<EducationInfo/>} />
          <Route path="/JobInfo" element={<JobInfo/>} />
          <Route path="lastpage" element={<Greeting/>}/>
        </Routes>
      </Router>
    

    </>
  )

}

export default App;