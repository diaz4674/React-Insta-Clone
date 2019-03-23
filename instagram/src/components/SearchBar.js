import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Instagram_logo from '../imgs/Instagram_logo.svg';
import logo from '../imgs/logo.svg';
import './SearchBar.css';
import styled from 'styled-components'

const LogoHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    `

const AlignContent = styled.div `
    display: flex;
    align-items: center;
`

const Form = styled(AlignContent)`
    margin: 0 25px;
`
const Input = styled.input `
    margin: 0 5px;
    display: flex;
    justify-content: center;
`

const JustifyCenter = styled.div `
    display: flex;
    justify-content: center;
    `
const NavLogo1 = styled.a `
  display: flex;
  align-content: center;
  height: 80px;
  width: 80px;
`

const NavLogo2 =  styled(NavLogo1) `
  height: 60px;
  width: 100px;
`

const SearchLogo = styled.img `
  width: 100%;
`


const SearchBar = (props) => {
    return (
      <LogoHeader>
        <AlignContent>
            <NavLogo1 href="#"><SearchLogo src = {logo} alt ="Instagram Logo" className = 'logo'/></NavLogo1>
            <NavLogo2 href="#"><SearchLogo src = {Instagram_logo} alt = "Instagram Logo" className = 'instagramTitle'/></NavLogo2>
        </AlignContent>
          <Form> 
            <input type ='text' placeholder = ' &#xf002; Search' name = {props.search} value = {props.search} onChange= {(e) => {props.searchHandler(e)}} className ='search fas' /> 
          </Form>
        <JustifyCenter>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </JustifyCenter>

      </LogoHeader>
    );
}

export default SearchBar;