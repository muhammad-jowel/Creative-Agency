import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import OurServicePage from './pages/OurServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AboutDetailsPage from './pages/AboutDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import RegistrationPage from './pages/AdminPages/RegistrationPage';
import LoginPage from './pages/AdminPages/LoginPage';
import DashboardPage from './pages/AdminPages/DashboardPage';
import VerifyLoginPage from './pages/AdminPages/VerifyLoginPage';
import AdminBlogPage from './pages/AdminPages/AdminBlogPage';
import AdminServicePage from './pages/AdminPages/AdminServicePage';
import AdminTeamPage from './pages/AdminPages/AdminTeamPage';
import AdminMessagePage from './pages/AdminPages/AdminMessagePage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import OurBlogPage from './pages/OurBlogPage';




const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/service" element={<OurServicePage/>} />
        <Route path="/blog" element={<OurBlogPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />

        <Route path="/about-details" element={<AboutDetailsPage/>} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage/>} />

        <Route path="/admin/register" element={<RegistrationPage/>} />
        <Route path="/admin/login" element={<LoginPage/>} />
        <Route path="/admin/verify-login" element={<VerifyLoginPage/>} />

        <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/admin/blog" element={<ProtectedRoute><AdminBlogPage/></ProtectedRoute>} />
        <Route path="/admin/service" element={<ProtectedRoute><AdminServicePage/></ProtectedRoute>} />
        <Route path="/admin/team" element={<ProtectedRoute><AdminTeamPage/></ProtectedRoute>} />
        <Route path="/admin/message" element={<ProtectedRoute><AdminMessagePage/></ProtectedRoute>} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;