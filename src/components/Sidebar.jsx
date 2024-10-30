import { stack as Menu } from 'react-burger-menu';
import './Sidebar.css'
import React from 'react'

function BurgerMenu() {
  const showSettings = (event) => {
    event.preventDefault();
    console.log('Settings clicked');
  };

  return (
    <Menu width={350}>
      <a id="Introduction" className="menu-item" href="/introduction">Introduction</a>
      <a id="Education" className="menu-item" href="#education">Education</a>
      <a id="Experience" className="menu-item" href="#experience">Experience</a>
      <a id="Skills" className="menu-item" href="#skills">Skills</a>
      <a id="Projects" className="menu-item" href="#projects">Projects and In Progress</a>
      <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
    </Menu>
  );
}

export default BurgerMenu;
