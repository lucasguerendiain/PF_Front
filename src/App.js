import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import CreatePackageForm from "./components/CreatePackage/CreatePackageForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/form' element={<CreatePackageForm/>}>Crear Paquete</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

