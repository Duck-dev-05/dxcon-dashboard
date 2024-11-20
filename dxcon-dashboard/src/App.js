import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardTable from "./components/DashboardTable";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
      </div>
    </div>
  );
};

export default App;