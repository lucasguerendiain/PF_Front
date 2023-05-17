import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CreatePackageForm from './components/CreatePackage/CreatePackageForm';
import Footer from './components/Footer/Footer';
import PackageCardContainer from './components/CardsContainer/PackageCardContainer';
import PackageDetail from './components/Detail/Package/PackageDetail';
import Navbar from './components/Navbar/Navbar';
import CustomPackage from './components/CustomPackage/CustomPackage';
import ActivityCardContainer from './components/CardsContainer/ActivityCardContainer';
import ActivityDetail from './components/Detail/Activity/ActivityDetail';
import HotelDetail from './components/Detail/Hotel/HotelDetail';
import RestoDetail from './components/Detail/Resto/RestoDetail';
import HotelCardContainer from './components/CardsContainer/HotelCardContainer';
import RestaurantCardContainer from './components/CardsContainer/RestaurantCardContainer';
import ScrollToTop from './scrollToTop';
import Dashboard from './components/Dashboard/Dashboard';
import User from './components/User/User';
import AdminMail from './components/MailSend/AdminMail';
import PrivateRoutes from './PrivateRoutes';
import NotFound from './components/NotFound/NotFound';
import InfoForAdmin from './components/Reservas/InfoForAdmin/InfoForAdmin';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/dashboard/form' element={<CreatePackageForm />} exact/>
            <Route path='/dashboard' element={<Dashboard />} exact/>
            <Route path='/adminMail' element={<AdminMail />} exact/>
            <Route path='/adminReservas' element={<InfoForAdmin/>}/>
          </Route>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} exact/>
          <Route path='/packagecards' element={<PackageCardContainer />} exact/>
          <Route path='/package/:id' element={<PackageDetail />} exact/>
          <Route path='/carrito' element={<CustomPackage />} exact/>
          <Route path='/activitycards' element={<ActivityCardContainer />} exact/>
          <Route path='/activity/byId/:id' element={<ActivityDetail />} exact/>
          <Route path='/hotel/byId/:id' element={<HotelDetail />} exact/>
          <Route path='/restaurant/byId/:id' element={<RestoDetail />} exact/>
          <Route path='/hotelcards' element={<HotelCardContainer />} exact/>
          <Route
            path='/restaurantcards'
            element={<RestaurantCardContainer exact/>}
          />
          <Route path='/user' element={<User />} exact/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
