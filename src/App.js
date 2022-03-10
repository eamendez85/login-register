import './App.css';
import { LoginPage } from './components/Page/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './components/Page/HomePage';
import { RegisterPage } from './components/Page/RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
