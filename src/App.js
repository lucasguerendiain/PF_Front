import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import CreatePackageForm from "./components/CreatePackage/CreatePackageForm";
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PackageDetail from './components/Detail/Package/PackageDetail';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path='/form' element={<CreatePackageForm/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}/>
          <Route path='/detail' element={<PackageDetail/>}/>
          <Route path='/container' element={<CardsContainer/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



