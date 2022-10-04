import React from 'react';
import LogoImg from '../../assets/img/logo.png';
import FavImg from '../../assets/img/favourite.png';
import styled from "styled-components";
import SignInButton from "../Buttons/SignIn/SignInButton";

const HeaderWithStyles = styled.header`
  background-color: rgba(30, 30, 30, 48%);
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
`

const Logo = styled.img`
  position: absolute;
  left: 80px;
  top: 19px;
  mix-blend-mode: difference;
`

const NavBar = styled.nav`
  position: absolute;
  width: 295px;
  height: 23px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  color: rgba(255, 255, 255, 1);
`

const Favourite = styled.button`
  position: absolute;
  right: 300px;
  top: 13px;
  width: 53px;
  height: 53px;
  
  border: none;
`

const Header = () => {
    return (
        <HeaderWithStyles>
            <Logo src={LogoImg} alt="logo"/>
            <NavBar >
                <List >
                    <li>HOME</li>
                    <li>TOURS</li>
                    <li>ABOUT</li>
                    <li>HELP</li>
                </List>
            </NavBar>
            <Favourite>
                <img src={FavImg} alt="favIcon"/>
            </Favourite>
            <SignInButton/>
        </HeaderWithStyles>
    );
};

export default Header;
