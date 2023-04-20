import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PaymentPage from './Components/PaymentPage';
import Home from './Components/Home';
import DashbordOrderAdmin from './Components/dashboard-vip-member'
import MembershipVip from './Components/membership-vip-member';
import OrderVipMember from './Components/Orders-vip-memeber'
import MyreviewAdmin from './Components/my-review-admin';
import Login from './Components/Login12';
import About from './Components/About';
import Contactuss from './Components/contactus';
import Tatsu from './Components/tatsu-landing-page';
import Collection from './Components/collection';
import Productdetail from './Components/product-detail'
import Subcription from './Components/subcription';
import Signup3 from './Components/Signup3';
import SignupForm from './Components/signupForm';
import AddtoCard from './Components/AddtoCard';
import SignupForm2 from './Components/SignupForm2';
import LogInPage from './Components/Signup';
import Header from './Components/Header/Header';
import  Sidebar  from './Components/Admin Dashbord/Sidebar';
import Dashbord from './Components/Admin Dashbord/Dashbord';
import AddProduct from './Components/Admin Dashbord/Product Add Page/addProduct';
import AllProduct from './Components/AllProduct';
import GetData1 from './GetData1';
import { AllProductDashboad } from './Components/Admin Dashbord/Product Add Page/AllProduct';
import ForgetPassword from './Components/ForgetPassword';
import Hoodies from './Components/Hoodies';
import Tshirts from './Components/Tshirts';
import Shorts from './Components/Shorts';
import Joggers from './Components/Joggers';
import Hats from './Components/Hats';
// import Modaltryty from './Components/Modal/modal';
// import  {AllProduct }   from './Components/Admin Dashbord/Product Add Page/AllProduct';
// import AdminDashboard from './Components/Admin Dashbord/AdminDashboard';
function App() {
  return (

    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/paymentPage"} element={<PaymentPage />} />
          <Route path={"/Signup3"} element={<Signup3/>} />
          <Route path={"/Productdetail"} element={<Productdetail/>} />
          {/* <Route path={"/Third"} element={<Third />} /> */}
          <Route path={"/GetData1"} element={<GetData1 />} />
          <Route path={"/ForgetPassword"} element={<ForgetPassword />} />
          <Route path={"/Dashboard"} element={<Dashbord />} />
          <Route path={"/AllProduct"} element={<AllProduct />} />
          <Route path={"/AllProductDashboard"} element={<AllProductDashboad />} />
          <Route path={"/AddProduct"} element={<AddProduct />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/AddtoCard"} element={<AddtoCard/>} />
          <Route path={"/Signup"} element={<LogInPage />} />
          <Route path={"/SignupForm1"} element={<SignupForm />} />
          <Route path={"/SignupForm2"} element={<SignupForm2 />} />
          <Route path={"/SignupForm3"} element={<Signup3 />} />
          <Route path={"/subcription"} element={<Subcription />} />
          <Route path={"/contactus"} element={<Contactuss />} />
          <Route path={"/collection"} element={<Collection />} />
          <Route path={"/Tatsu"} element={<Tatsu />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/Contactuss"} element={<Contactuss />} />
          <Route path={"/AddtoCard"} element={<AddtoCard />} />
          <Route path={"/DashbordOrderAdmin"} element={<DashbordOrderAdmin />} />
          <Route path={"/MyreviewAdmin"} element={<MyreviewAdmin />} />
          <Route path={"/MembershipVip"} element={<MembershipVip />} />
          <Route path={"/OrderVipMember"} element={<OrderVipMember />} />
          <Route path={"/hoodie"} element={<Hoodies/>} />
          <Route path={"/Tshirts"} element={<Tshirts/>} />
          <Route path={"/Shorts"} element={<Shorts/>} />
          <Route path={"/Joggers"} element={<Joggers/>} />
          <Route path={"/Hats"} element={<Hats/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
