import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBarStyle = styled.nav`
  width: 100%;
  margin: 10rem 2rem;
`;

const NavBarGrid = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const Icon = styled(motion.img)`
  width: 50px;
  height: 50px;

  &:hover {
    filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
  }
`;

//key object
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
        {Object.keys(images).map((key, index) => {
          return (
            <li index={index}>
              <Icon
                src={images[key]}
                whileHover={{ y: -20 }}
                whileTap={{ scale: 0.8, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.45 }}
              />
            </li>
          );
        })}
      </NavBarGrid>
    </NavBarStyle>
  );
};

export default NavBar;
