import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Menu from './Menu/Menu';
import Home from './homepage/Home';
import Cart from './Cart/Cart';
import Payment from './Payment/Payment';
import Profile from './profile/Profile';
import Contact from './contact/Contact';
import CustomFood from './Custom Food/CustomFood';
import Order from './Orders/Order';
import Dashboard from './Admin/HomePage/Dashboard';
import AddUser from './Admin/HomePage/AddUser';
import UploadMenu from './Admin/HomePage/UploadMenu';
import ManageMenu from './Admin/HomePage/ManageMenu';
import CustomerSupport from './Admin/HomePage/CustomerSupport';
import Booking from './Admin/HomePage/Booking';
import AdminLogin from './Admin/Login/Login';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="/add-menu" element={<UploadMenu />} />
        <Route path="/manage-items" element={<ManageMenu />} />
        <Route path='/Admin/login' element={<AdminLogin />} />

        <Route path="/order" element={<Order />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/custom" element={<CustomFood />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Menu/Cart" element={<Cart />} />
        <Route path="/Menu/Cart/payment" element={<Payment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
