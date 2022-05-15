import React from 'react'
import{Nav,NavLink,Bars,NavMenu}from './NavbarElements';
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/About" activeStyle>
                   About me
                </NavLink>
                <NavLink to="/AmazingCredentials" activeStyle>
                    amazing credentials
                </NavLink>
                <NavLink to="/Amazingstuff" activeStyle>
                    amazing stuff
                </NavLink>
                
            </NavMenu>
        </Nav>
        </>
  );
};

export default Navbar;
