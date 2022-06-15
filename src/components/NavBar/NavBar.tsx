import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Wrapper>
        <nav className="navbar-container">
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/products">Shop</NavLinkStyled>
        <NavLinkStyled to="/about">About</NavLinkStyled>
        <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </nav>
    </Wrapper>
    )
   
}

const Wrapper = styled.section`
.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background: #b4bdcc; 
     border-bottom: 1px solid black;  

  }
`

const NavLinkStyled = styled(NavLink)`
  padding: 20px;
  color: white;
  text-decoration: none;
  font: normal 1em 'Playfair Display SC', serif;
  &:hover {
    color: grey;
    background: #464c5c;
  }
`;

export default NavBar
