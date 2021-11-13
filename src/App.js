import './App.css';
import './Normalize.css';
import Coverpage from './components/coverpage/Coverpage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Coverpage/>
    </div>
  );
}

export default App;
