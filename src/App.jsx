import { Link, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Create from './routes/Create';
import Gallery from './routes/Gallery';
import Home from './routes/Home';
import Update from './routes/Update';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sideBarButtons">
          <Link to="/home"><button>Home</button></Link>
          <Link to="/create"><button>Create a Crewmate!</button></Link>
          <Link to="/gallery"><button>Crewmate Gallery</button></Link>
        </div>
      </div>
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;