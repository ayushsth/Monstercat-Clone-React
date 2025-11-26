import './App.css';
import { info } from './Components/Data';
import { EmblaCarousel }  from './Components/Carousel'; 
import Sidebar from './Components/Sidebar'; 
import img from './mc_logo.png'
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.cdnfonts.com/css/monument-extended";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <div className="App">
      <MC_LOGO />
      <Sidebar />
      <div className='MainContent'>
        <EmblaCarousel images={info} />
      </div>
    </div>
  );
}

function MC_LOGO() {
  return <img src={img} alt='' className='logo'/>;
}


export default App;