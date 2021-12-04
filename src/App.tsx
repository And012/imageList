import React, {useState} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './routes/Main'
import SecondPage from "./routes/SecondPage";
import {ReactComponent as Logo1} from "./assets/dashboard-interface.svg";
import {ReactComponent as Logo2}  from "./assets/Group.svg";
import {ReactComponent as Logo3} from "./assets/logo.svg";

function App() {
  const [selectedItemCount, setSelectedItemCount] = useState<number>(0)
  return (
      <Router>
        <div className="container">
          <div className="nav">
            <div style={selectedItemCount === 0 ? {borderLeft: '3px solid #8964D7'}: {marginLeft: '3px'}} onClick={() => setSelectedItemCount(0)} className="itemContainer first">
              <Link to="/" >
                <Logo1 />
              </Link>
            </div>
            <div style={selectedItemCount === 1 ? {borderLeft: '3px solid #8964D7'}: {marginLeft: '3px'}} onClick={() => setSelectedItemCount(1)} className="itemContainer">
              <Link to="/secondPage">
                <Logo3 />
              </Link>
            </div>
            <div style={selectedItemCount === 2 ? {borderLeft: '3px solid #8964D7'}: {marginLeft: '3px'}} onClick={() => setSelectedItemCount(2)} className="itemContainer">
              <Link to="/thirdPage">
                <Logo2 />
              </Link>
            </div>
          </div>
          <div className="routesContainer">
            <Routes>
              <Route path="/secondPage" element={<SecondPage title="Second page"/>} />
              <Route path="/thirdPage" element={<SecondPage title="Third page"/>}/>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </div>


      </Router>
  );
}

export default App;
