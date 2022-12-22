import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Digitrend from './routes/Digitrend';
import Content from './routes/Content';
import About from './routes/About';
import Squad from './routes/Squad';
import Digiscope from './routes/Digiscope';
import Datascope from './routes/Datascope';
import Album from './routes/Album';
import Makrab from './routes/Makrab';
import Mantai from './routes/Mantai';
import Fotkab from './routes/Fotkab';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/squad" element={<Squad/>}/>
        <Route path="/album" element={<Album/>}/>
        <Route path="/digiscope" element={<Digiscope/>}/>
        <Route path="/datascope" element={<Datascope/>}/>
        <Route path="/digitrend" element={<Digitrend/>}/>
        <Route path="/makrab" element={<Makrab/>}/>
        <Route path="/mantai" element={<Mantai/>}/>
        <Route path="/fotkab" element={<Fotkab/>}/>
      </Routes>
    </div>
  );
}

//export default App;
