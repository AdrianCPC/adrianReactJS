import React, {useState, useEffect} from 'react';
import './App.css';
import './Normalize.css';
import Coverpage from './components/coverpage/Coverpage';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {

  //Logical for changed color when scrolling to down on navbar
  const [scrollHeight, setScrollHeight] = useState(0);
  
  //Control position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  //Update scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar scrollView={scrollHeight}/>
      <Coverpage/>
      <About/>
    </div>
  );
}

export default App;
