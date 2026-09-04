import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;

  background-color: rgba(0, 0, 0, 0.75);

  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;

  width: clamp(293px, 40vw, 600px);

  padding: 21px 32px 16px;

  background-color: #ffffff;

  border-radius: 25px;

  box-sizing: border-box;

  transition: width 300ms ease;

  @media screen and (min-width: 480px) {
    min-height: 454px;

    padding: 24px 35px 18px;
  }

  @media screen and (min-width: 768px) {
    min-height: 440px;

    padding: 28px 40px 20px;
  }

  @media screen and (min-width: 1200px) {
    padding: 60px 45px 22px;

    border-radius: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;

  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  border: none;
  background: transparent;

  color: #777;

  font-size: 20px;
  line-height: 1;

  cursor: pointer;

  z-index: 10;

  transition: color 250ms ease;

  &:hover {
    color: #111;
  }

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 12px;

    font-size: 22px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 28px;

  text-align: center;

  font-size: 16px;
  font-weight: 400;

  color: #111111;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;

  font-size: 9px;
  line-height: 1;

  color: #111111;

  @media screen and (min-width: 480px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 9px;

    font-size: 11px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 29px;

  margin-bottom: 18px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 2px solid transparent;
  border-radius: 8px;

  outline: none;

  background-color: #e5e5e5;

  color: #333333;

  font-size: 9px;

  transition:
    border-color 250ms ease,
    background-color 250ms ease;

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus {
    border-color: #0099ff;
    background-color: #eeeeee;
  }

  @media screen and (min-width: 480px) {
    height: 32px;

    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    height: 38px;

    margin-bottom: 22px;

    font-size: 11px;
  }

  @media screen and (min-width: 1200px) {
    height: 42px;

    font-size: 12px;
  }
`;

export const Button = styled.button`
  width: 77px;
  height: 25px;

  margin: 0 auto;

  border: none;
  border-radius: 7px;

  background-color: #ffad68;

  color: #111111;

  font-size: 9px;

  cursor: pointer;

  transition:
    background-color 250ms ease,
    transform 250ms ease;

  &:hover {
    background-color: #ff9b4b;
  }

  &:active {
    transform: scale(0.96);
  }

  @media screen and (min-width: 480px) {
    width: 85px;
    height: 28px;

    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 95px;
    height: 32px;

    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    width: 105px;
    height: 35px;

    font-size: 14px;
  }
`;

export const LoginText = styled.p`
  margin: 13px 0 0;

  text-align: center;

  color: #111111;

  font-size: 6px;

  @media screen and (min-width: 480px) {
    font-size: 7px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;

    font-size: 8px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 9px;
  }
`;

export const LoginLink = styled.a`
  color: #111111;

  text-decoration: underline;

  cursor: pointer;
`;

