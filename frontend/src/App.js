import './App.css';
import SignUP from './Components/SignUP/SignUP';
import Login from './Components/Login/Login';
import SearchComponent from './Components/Search';


function App() {

  // const handleSearch = (query) => {
  //   // Perform actions based on the search query, such as updating state or fetching data.
  //   console.log('Search query:', query);
  // };

  return (
    <div className="App">
      <SignUP/>
      <Login/>
      {/* <SearchComponent onSearch={handleSearch} /> */}
    </div>
  );
}

export default App;