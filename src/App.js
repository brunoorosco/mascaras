import React,{ useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/Sidebar/SideBar";
import Content from "./components/Sidebar/content/Content";

import './global.css';
//import Sidebar from './components/Sidebar'

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    // <Sidebar />
     <Router>
     <div className="App wrapper">
       <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
       <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
     </div>
   </Router>

  );
}

export default App;
