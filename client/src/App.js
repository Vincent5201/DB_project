import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Header from "./components/header";
import Login from "./pages/login";
import MainPage from './pages/main_page';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<MainPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
