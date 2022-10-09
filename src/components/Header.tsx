import React from 'react';
import {Link} from "react-router-dom";

import {useRecoilState} from "recoil";
import {checkPage} from "../atoms";

import styled from "styled-components";

import SignInButton from "./Buttons/SignInButton";

import LogoImg from '../assets/img/logo.png';
import FavImg from '../assets/img/buttons/favourite.png';
import FavActiveImg from '../assets/img/buttons/activeFavButton.png'

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

  a:link {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }

  a:visited {
    color: rgba(255, 255, 255, 1);
  }

  a:hover {
    text-decoration: underline;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Favourite = styled.button`
  position: absolute;
  right: 300px;
  top: 13px;

  background: none;
  border: none;
`

const Header = () => {
    const [activeFavPage, setActiveFavPage] = useRecoilState(checkPage);

    return (
        <HeaderWithStyles>
            <Link to="/home"><Logo src={LogoImg} alt="logo" onClick={() => {
                setActiveFavPage(true)
            }}/></Link>
            <NavBar>
                <List>
                    <li><Link to="/home" onClick={() => {
                        setActiveFavPage(true)
                    }}>HOME</Link></li>
                    <li>TOURS</li>
                    <li>ABOUT</li>
                    <li>HELP</li>
                </List>
            </NavBar>
            <Favourite onClick={() => {
                setActiveFavPage(false)
            }}>
                <Link to="/favourites"><img src={activeFavPage ? FavImg : FavActiveImg} alt="favIcon"/></Link>
            </Favourite>
            <SignInButton/>
        </HeaderWithStyles>
    );
};

export default Header;
