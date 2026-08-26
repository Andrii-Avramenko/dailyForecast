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
} from "./modal.styled";

export default function Modal({ onClose }) {
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

    console.log("Form submitted");
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
            type="text"
            placeholder="Username"
          />

          <Label htmlFor="email">E-Mail</Label>

          <Input
            id="email"
            type="email"
            placeholder="E-Mail"
          />

          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            placeholder="Password"
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