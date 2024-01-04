import React from 'react';
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from '../../assets/Globe.svg';
import Tag from '../../assets/Tag.svg';
import User from '../../assets/User.svg';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClass="active"
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: '10px' }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeClass="active"
            style={{ paddingLeft: '40px' }}
          >
            <img src={Tag} alt="Tag" style={{paddingRight: '10px'}} />
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeClass="active"
            style={{ paddingLeft: '40px' }}
          >
            <img src={User} alt="User" style={{paddingRight: '10px'}} />
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
