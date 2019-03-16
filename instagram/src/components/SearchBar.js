import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Instagram_logo from '../imgs/Instagram_logo.svg';
import logo from '../imgs/logo.svg';
import './SearchBar.css';



const SearchBar = (props) => {
    return (
      <div className = 'navBar'>
        <div className = 'igLogos'>
            <NavLink href="#"><img src = {logo} alt ="Instagram Logo" className = 'logo'/></NavLink>
            <NavLink href="#"><img src = {Instagram_logo} alt = "Instagram Logo" className = 'instagramTitle'/></NavLink>
        </div>
            <input type ='text' placeholder = ' &#xf002; Search' name = {props.search} value = {props.search} onChange= {props.searchHandler} className ='search fas' /> 

        <div className = 'userLogos'>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </div>

      </div>
    );
}

export default SearchBar;