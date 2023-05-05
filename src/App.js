import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CreatePackageForm from "./components/CreatePackage/CreatePackageForm";
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PackageCardContainer from './components/CardsContainer/PackageCardContainer'
import PackageDetail from './components/Detail/Package/PackageDetail';
import Navbar from './components/Navbar/Navbar';
import CustomPackage from './components/CustomPackage/CustomPackage';
import ActivityCardContainer from './components/CardsContainer/ActivityCardContainer';
import ActivityDetail from './components/Detail/Activity/ActivityDetail';
import HotelDetail from './components/Detail/Hotel/HotelDetail';
import RestoDetail from './components/Detail/Resto/RestoDetail';
import HotelCardContainer from './components/CardsContainer/HotelCardContainer'
import RestaurantCardContainer from './components/CardsContainer/RestaurantCardContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path='/form' element={<CreatePackageForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/packagecards' element={<PackageCardContainer/>}/>
          <Route path='/package/:id' element={<PackageDetail/>}/>
          <Route path='/carrito' element={<CustomPackage/>}/>
          <Route path="/activitycards" element={<ActivityCardContainer/>}/>
          <Route path='/activity/byId/:id' element={<ActivityDetail/>}/>
          <Route path='/hotel/byId/:id' element={<HotelDetail/>}/>
          <Route path='/restaurant/byId/:id' element={<RestoDetail/>}/>
          <Route path='/hotelcards' element={<HotelCardContainer/>}/>
          <Route path='/restaurantcards' element={<RestaurantCardContainer/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



