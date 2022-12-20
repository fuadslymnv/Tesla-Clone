import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a className="logo">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#"> Account</a>

        <CustomMenu onClick={()=> setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}> 
        <CloseContainer> 
        <CustomClose onClick={()=> setBurgerStatus(false)} />

        </CloseContainer>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 14px;

  .logo {
    margin-left:30px
  }

`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    height: 18px;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 600;
    padding: 0 15px; // 10px default
    flex-wrap: nowrap;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
display:flex;
align-items:center;
a {
  font-weight: 600;
  margin-right: 15px;
}
`;

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`;

const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:30px;
display:flex;
flex-direction:column;
text-align:start;
transition: transform 0.2s;
transform:${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
li {
  padding:15px 0;
}

a {
  font-weight:520;
}

`;

const CustomClose=styled(CloseIcon)`
cursor:pointer;
`;

const CloseContainer=styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-start;
`;