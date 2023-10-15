import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 16px 0;
    align-items: center;
  }
  display: flex;
  background-color: #18191c;
  justify-content: space-around;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

// export const Image = styled.img`
//   width: 50px;
//   border-radius: 50%;
//   margin-right: 10px;
// `;

export const HeaderLogo = styled.a`
  font-family: MontserratSemiBold;
  text-decoration: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Span = styled.span`
  color: blue;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 760px) {
    position: fixed;
    top: 0px;
    right: -100%;
    background-color: #222833;
    color: #eee;
    width: 60%;
    height: 35vh;
    padding: 20px 20px;
    z-index: 100;
    transition: 0.5s;
    border-radius: 0 0 0 50%;

    &.show {
      right: 0;
    }
  }
`;

export const NavList = styled.ul`
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  margin: 16px 0;
`;

export const NavLink = styled.button`
  background-color: transparent;
  padding: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      background-color: blue;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 24px;
  top: 18px;
  right: 24px;
  display: block;
  color: white;
  background-color: transparent;

  cursor: pointer;
  @media screen and (min-width: 760px) {
    display: none;
  }

  &:hover {
    background-color: red;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: white;
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    display: inline;
  }
`;
