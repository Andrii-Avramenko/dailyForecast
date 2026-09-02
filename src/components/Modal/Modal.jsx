import { useEffect, useState } from "react";

import {
  ModalBackdrop,
  ModalContainer,
  CloseButton,
  Title,
  Form,
  Label,
  Input,
  Button,
  LoginText,
  LoginLink,
} from "./modal.styled";

export default function Modal({ onClose, updateName }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateName(username)
    onClose()
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        console.error("Помилка")
    }
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton type="button" onClick={onClose}>
          ×
        </CloseButton>

        <Title>Sign up</Title>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>

          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />

          <Label htmlFor="email">E-Mail</Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={handleChange}
          />

          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />

          <Button type="submit">
            Sign up
          </Button>
        </Form>

        <LoginText>
          Already have an account?{" "}
          <LoginLink href="#">
            Log in
          </LoginLink>
        </LoginText>
      </ModalContainer>
    </ModalBackdrop>
  );
}