import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
//import Sidebar from './Components/Sidebar';

//import Sidebar from "./Components/Sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import{Feed,VideoDetails,ChannelDetail,SearchFeeds,Navbar,NoPage} from './components'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <main className="container-fluid">
      <Routes>
        <Route  path="/" exact  element={<Feed/>} /> 
        <Route  path="/feed"  element={<Feed/>} /> 
        <Route  path="/video/:id" element={<VideoDetails/>} />    
        <Route  path="/channel/:id" element={<ChannelDetail/>} />
        <Route  path="/search/:searchTerm" element={<SearchFeeds/>} />
        <Route  path="*" element={<NoPage/>} />
      </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
