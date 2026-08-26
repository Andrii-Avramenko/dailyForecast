import { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import user from "../../assets/header/user.png";
import Modal from "../Modal/Modal";

import { StyledHeader, Navigation, UserInfo, SignUp } from "./Header.styled";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(() => localStorage.getItem('username') ?? '')

  const updateName = (name) => {
    localStorage.setItem('username', name)
    setUsername(name)
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledHeader id="header">
        <Navigation>
          <a href="#">
            <img src={logo} alt="24/7 Forecast logo" />
          </a>
          <ul>
            <li>
              <a href="#hero">Who we are</a>
            </li>
            <li>
              <a href="#footer">Contacts</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
        </Navigation>
        <UserInfo>
          {!username && <SignUp type="button" onClick={openModal}>Sign Up</SignUp>}
          {!!username && <p>{username}</p>}
          <img src={user} alt="user icon" />
        </UserInfo>
      </StyledHeader>
      {isModalOpen && <Modal onClose={closeModal} updateName={updateName}/>}
    </>
  );
}
