import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: "새로운 메시지가 도착했습니다!" }
    ]);

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
    };

    const addNotification = (message) => {
        setNotifications(prevNotifications => [
            ...prevNotifications,
            { id: prevNotifications.length + 1, message }
        ]);
    };

    const simulateAddNotification = () => {
        addNotification("새로운 알림: 사용자가 로그인했습니다.");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                또보자
            </Link>
            <ul className="nav-items">
                {navItems.map(item => {
                    if (item.title === "추모공간") {
                        return (
                            <li key={item.id} className="nav-item"
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                                {dropdown && <Dropdown />}
                            </li>
                        );
                    }
                    return (
                        <li key={item.id} className="nav-item">
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <div className="navbar-actions">
                <Button />
                <div className="notification-icon" onClick={handleNotificationClick}>
                    <img src="/images/notification.png" alt="Notification Icon" width={24} height={24} />
                    {showNotifications && (
                        <div className="notification-popup show">
                            <ul>
                                {notifications.map(notification => (
                                    <li key={notification.id}>{notification.message}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
