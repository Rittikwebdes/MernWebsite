import Contact from "./Components/Contact";
import Review from "./Components/Review";
import Signup from "./Components/Signup";
import Courses from "./Courses/Courses";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";
export default function App() {


  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
  
   <Router>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/courses" element={authUser? <Courses />:  <Navigate to="/signup"  />}/>
  <Route path="/signup" element={<Signup />} />
  <Route path="/contacts" element={<Contact />} />
  <Route path="/reviews" element={<Review />} />

</Routes>

</Router>
     <Toaster />
    </>
  );
}
