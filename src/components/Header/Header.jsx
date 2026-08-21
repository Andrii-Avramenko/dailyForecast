import { useState } from "react";
import logo from "../Footer/Images/logo.png";
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
      <header id="header">
        <img src={logo} alt="24/7 Forecast logo" />

        <nav>
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
        </nav>

        <div>
          <button type="button" onClick={openModal}>
            Sign Up
          </button>

          <img src={user} alt="user icon" />
        </div>
      </header>

      {isModalOpen && (
        <Modal onClose={closeModal} />
      )}
    </>
  );
}