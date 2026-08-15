import { useState } from "react";
import logo from "../Footer/Images/logo.png";
import user from "../../assets/header/user.png";
import Modal from "../Modal/Modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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