import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/common/Navbar';
import ForgetPassword from './pages/ForgetPassword';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashbord/MyProfile';
import Error from './components/common/Error';
import PrivateRoute from './components/common/PrivateRoute';
import Settings from './components/core/Dashbord/Settings';
import GetEnrolledCourse from './components/core/Dashbord/GetEnrolledCourse';
import Cart from './components/core/Dashbord/Cart';
import AddCourse from './components/core/Dashbord/AddCourse';
import MyCourse from './components/core/Dashbord/instructor course/index';
import EditCourse from './components/core/Dashbord/EditCourse';
import Catalog from './pages/Catalog';
import CourseDetails from './pages/CourseDetails';
import MainBox from './components/chatbot/MainBox';
import { useState } from 'react';
import { FaComments } from "react-icons/fa";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className=' min-h-screen  bg-richblack-900 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/update-password/:id' element={<UpdatePassword />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />

        <Route element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path='/dashboard/my-profile' element={<MyProfile />} />
          <Route path='/dashboard/settings' element={<Settings />} />
          <Route path='/dashboard/enrolled-courses' element={<GetEnrolledCourse />} />
          <Route path='/dashboard/cart' element={<Cart />} />
          <Route path='/dashboard/add-course' element={<AddCourse />} />
          <Route path='/dashboard/my-courses' element={<MyCourse />} />
          <Route path='/course/editcourse/:courseId' element={<EditCourse />} />
        </Route>

        <Route path='/catalog/:catalogName' element={<Catalog />} />
        <Route path='/courses/:courseId' element={<CourseDetails />} />
      </Routes>
      <div>
        <button className="chat-launch-button" onClick={() => setShowChat(true)}>
          <FaComments style={{ marginRight: "8px" }} />
          Ask AI ChatBot
        </button>

        {showChat && (
          <div className="chat-float-container">
            <MainBox onClose={() => setShowChat(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
