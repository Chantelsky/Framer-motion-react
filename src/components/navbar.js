import React from "react";
import styled from "styled-components";

const NavBarStyle = styled.nav`
  width: 100%;
  margin: 2rem 2rem;
`;

const NavBarGrid = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const images = {
  home: "https://image.flaticon.com/icons/svg/557/557387.svg",
  favorites: "https://image.flaticon.com/icons/svg/599/599887.svg",
  photos: "https://image.flaticon.com/icons/svg/635/635260.svg",
  settings: "https://image.flaticon.com/icons/svg/1835/1835948.svg"
};

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavBarGrid>
        <li>
          <Icon src={images.home} />
        </li>
        <li>
          <Icon src={images.favorites} />
        </li>
        <li>
          <Icon src={images.photos} />
        </li>
        <li>
          <Icon src={images.settings} />
        </li>
      </NavBarGrid>
    </NavBarStyle>
  );
};

export default NavBar;
