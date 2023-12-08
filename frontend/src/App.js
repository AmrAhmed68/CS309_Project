import "./App.css";
import SignInScreen from "./Components/SignUP/SignUP";
import Login from "./Components/Login/Login";
import Home from './Components/Home';
import HomeScreen from "./Components/HomeScreen";
import Slider from './Components/Slider';
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import Search from "./Components/Search";

function App() {


  const handleSearch = (query) => {
    console.log('Search query:', query);
  };
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      {/* <Slider/> */}
      <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/Login" element={<Login />} />
            
            <Route path="/signIn" element={<SignInScreen />} />
          </Routes>
    </div>
  );
}

export default App;