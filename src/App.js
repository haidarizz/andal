import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Digitrend from './routes/Digitrend';
import Content from './routes/Content';
import About from './routes/About';
import Digiscope from './routes/Digiscope';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/digiscope" element={<Digiscope/>}/>
        <Route path="/digitrend" element={<Digitrend/>}/>
      </Routes>
    </div>
  );
}

//export default App;
