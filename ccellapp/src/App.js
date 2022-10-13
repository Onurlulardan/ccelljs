import React from 'react';
import styles from './assets/Home.module.css';
import { Routes, Route, Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Header from './components/headerComp/Header';
import Footer from './components/footerComp/Footer';

// Sayfalar
import Home from './view/Home';
import About from './view/about';
import Blog from './view/blog';
import Blogdetail from './view/blogdetail';
import Buy from './view/buy';
import Contact from './view/contanct';
import Internetcampains from './view/internetcampains';
import Internetcampainsdetail from './view/internetcampainsdetail';
import Internetpackages from './view/internetpackages';
import Internetpackagesdetail from './view/internetpackagedetail';
import Licances from './view/licances';
import Login from './view/login';
import Mission from './view/mission';
import Modem from './view/modem';
import Ccell from './view/ccell';
import Referral from './view/referral';
import Press from './view/press';
import Reseller from './view/reseller';
import Review from './view/review';
import Soldform from './view/soldform';
import Sss from './view/sss';
import Privacy from './view/privacy';
import Kvkk from './view/kvkk';
import Cookie from './view/cookie';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blogdetail/:id' element={<Blogdetail/>} />
        <Route path='/buy' element={<Buy/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/internetcampains' element={<Internetcampains/>} />
        <Route path='/internetcampainsdetail/:id' element={<Internetcampainsdetail/>} />
        <Route path='/internetpackages/:id' element={<Internetpackages/>} />
        <Route path='/internetpackagedetail/:catid/:id' element={<Internetpackagesdetail/>} />
        <Route path='/licances' element={<Licances/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/modem' element={<Modem/>} />
        <Route path='/ccell' element={<Ccell/>} />
        <Route path='/referral' element={<Referral/>} />
        <Route path='/press' element={<Press/>} />
        <Route path='/reseller' element={<Reseller/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/soldform' element={<Soldform/>} />
        <Route path='/sss' element={<Sss/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/cookie' element={<Cookie/>} />
        <Route path='/kvkk' element={<Kvkk/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
