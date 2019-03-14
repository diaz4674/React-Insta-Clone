import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Instagram_logo from '../imgs/Instagram_logo.svg';
import logo from '../imgs/logo.svg';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className = 'navBar'>
        <div className = 'igLogos'>
            <NavLink href="#"><img src = {logo} alt ="Instagram Logo" className = 'logo'/></NavLink>
            <NavLink href="#"><img src = {Instagram_logo} alt = "Instagram Logo" className = 'instagramTitle'/></NavLink>
        </div>
            <input type ='text' placeholder = 'search'  className ='search'/>
        <div> 

        </div>
      </div>
    );
  }
}