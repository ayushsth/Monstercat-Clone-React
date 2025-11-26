import '../App.css'
import { SidebarIcons } from "./Data";
import React, { useState } from "react";
import "../style/sidebar.css";


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            
            <div className="sidebar-header">
                {isOpen ? (
                    <>
                        <img src="/photos/mc_logo.png" alt="Logo" className="mc_sidebar_logo" />
                        <div className='mc_title'>monstercat</div>
                        <div className="sidebar-header-right">
                            <img src="/photos/cross.png" alt="Close" className="close-icon" onClick={() => setIsOpen(false)} />
                        </div>
                    </>
                ) : (
                    <img src="/photos/main-menu.png" alt="Open" className="menu-icon" onClick={() => setIsOpen(true)}
                    />
                )}
            </div>

            {isOpen && (
                <div className="details-scroll">
                    <p>Music</p>
                    <p>Artist</p>
                    <p>About</p>
                    <p>News</p>
                    <p>Events</p>
                    <p>Programming</p>
                    <p>Gold</p>
                    <p>Partners</p>
                    <p>Press</p>
                    <p>Player</p>
                    <p>Shop</p>
                    <p>Lost Civilization</p>
                </div>
            )}

            <div className="icon-section">
                <ul className={isOpen ? "icon-row" : "icon-column"}>
                    {SidebarIcons.map(({ id, icon, name }) => (
                        <li key={id}>
                            <img src={icon} alt={name} className="sidebar-icon" />
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <div className="auth-buttons">
                    <button className="sign-in">Sign In</button>
                    <p className="or">OR</p>
                    <button className="sign-up">Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default Sidebar;