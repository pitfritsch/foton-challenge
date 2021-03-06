import React from 'react'
import styled from 'styled-components'
import { FiBook, FiHome, FiUser } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  z-index: 10;
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin: auto;
  width: 100%;
  height: 100%;
  transition: .2s;
  border-radius: 2px;
  color: ${p => p.selected ? "#000" : "#BFBEBF"};

  p {
    margin: 0;
    font-size: 10px;
  }

  svg {
    height: 18px;
    width: auto;
  }

  :active {
    background-color: #00000011;
    /* box-shadow: 0 0 20px -15px black inset; */
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export default function Footer() {

  const history = useHistory()

  return (
    <StyledFooter>
      <StyledLink to='/'>
        <FooterItem selected={history.location.pathname === '/'}>
          <FiHome/>
          <p>Home</p>
        </FooterItem>
      </StyledLink>
      <FooterItem>
        <FiBook/>
        <p>Libraries</p>
      </FooterItem>
      <FooterItem>
        <FiUser/>
        <p>Profile</p>
      </FooterItem>
    </StyledFooter>
  )
}
