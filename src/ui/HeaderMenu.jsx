import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";

import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
import ButtonIcon from "./ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;