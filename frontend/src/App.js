import "./App.css";
import SignInScreen from "./Components/SignUP/SignUP";
import Login from "./Components/Login/Login";
// import SearchComponent from './Components/Search';
import HomeScreen from "./Components/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {

  // const handleSearch = (query) => {
  //   // Perform actions based on the search query, such as updating state or fetching data.
  //   console.log('Search query:', query);
  // };

  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/login" element={<Login />} />
            
            <Route path="/signIn" element={<SignInScreen />} />
          </Routes>
      {/* <SearchComponent onSearch={handleSearch} /> */}
    </div>
  );
}

export default App;