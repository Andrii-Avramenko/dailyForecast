import { useState } from "react";
import logo from "../../assets/logo.webp";
import user from "../../assets/header/user.png";
import Modal from "../Modal/Modal";

import { IoIosArrowDown } from "react-icons/io";

import {
  StyledHeader,
  MobileNav,
  Navigation,
  UserInfo,
  SignUp,
  MobileMenuButton,
} from "./Header.styled";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") ?? "",
  );

  const updateName = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    switch (isMenuOpen) {
      case true:
        setIsMenuOpen(false)
        break
      case false:
        setIsMenuOpen(true)
        break
      default:
        console.error('Помилка з меню')
        return
    }
  }

  return (
    <>
      <StyledHeader id="header">
        <a href="#">
          <img src={logo} alt="24/7 Forecast logo" />
        </a>
        <MobileNav className={isMenuOpen && 'openMenu'}>
          <Navigation>
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
            {!username && (
              <SignUp type="button" onClick={openModal}>
                Sign Up
              </SignUp>
            )}
            {!!username && <p>{username}</p>}
            <img src={user} alt="user icon" />
          </UserInfo>
        </MobileNav>
        <MobileMenuButton onClick={toggleMenu}  className={isMenuOpen && 'openMenu'}>
          <span>Menu</span>
          <IoIosArrowDown />
        </MobileMenuButton>
      </StyledHeader>
      {isModalOpen && <Modal onClose={closeModal} updateName={updateName} />}
    </>
  );
}
