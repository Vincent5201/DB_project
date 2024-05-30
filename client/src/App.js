import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import Login from "./pages/login";
import MainPage from "./pages/main_page";
import Selector from "./Selector";
function App() {
  // lesson from the class , it might be useful for data processing from database
  let data = [{ data1: 10 }, { data2: "road" }, { position: { x: 5, y: 7 } }];
  // {data.map((single_data)=>(<component_name property1=single_data.data1
  // property2 = single_data.data2
  // property2 = single_data.position />)
  // }

  return (
    <BrowserRouter>
      <HeaderMenu />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>

      <Selector properties="props" anotherprop={5} />
      <h1 style={{ color: "lightblue" }}>What???</h1>
    </BrowserRouter>
  );
}

export default App;
