import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreatePackageForm from "./components/CreatePackage/CreatePackageForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/form' element={<CreatePackageForm/>}>Crear Paquete</Route>
      </Routes>
    </div>
  );
}

export default App;
