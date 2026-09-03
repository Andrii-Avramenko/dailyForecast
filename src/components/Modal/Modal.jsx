import { useEffect } from "react";

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
}
 from "./modal.styled.";

export default function Modal({ onClose, onRegister }) {
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

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    onRegister(user);
    onClose();
  };

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
            required
          />

          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail"
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
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