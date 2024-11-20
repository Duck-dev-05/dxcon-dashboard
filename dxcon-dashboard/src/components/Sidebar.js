import React from "react";
import './css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-section">
            <img 
          src="./image/image 5.png" 
          alt="DXCON Logo" 
          className="logo" 
        />
            </div>
            <ul className="menu">
               <li>Dashboard</li>
               <li>Thêm dự án mới</li>
               <li>Xem lịch sử thay đổi</li>
            </ul>
            <div className="user-info">
                <img src="./image/Ellipse 8.jpg" alt="Profile" className="user-avatar"/>
                <p>Bach To</p>
                <span>ADMIN</span>
            </div>
        </div>
    );
};

export default Sidebar;