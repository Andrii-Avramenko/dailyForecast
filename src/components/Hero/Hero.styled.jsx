import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 60px 16px 40px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)),
    url("") center/cover no-repeat;
  color: #ffffff;
  text-align: center;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;

  @media (min-width: 768px) {
    padding: 80px 24px 60px;
  }

  @media (min-width: 1024px) {
    padding: 100px 20px 80px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 24px 0;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 34px;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    gap: 32px;
    margin-bottom: 50px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.4;
  margin: 0;
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    max-width: 280px;
    text-align: right;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    max-width: 320px;
  }
`;

export const Divider = styled.div`
  width: 60px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    width: 2px;
    height: 60px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const DateWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 16px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 580px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: none;
  border-radius: 8px 0 0 8px;
  background-color: #dcdcdc;
  font-size: 14px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #888;
  }

  @media (min-width: 768px) {
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  width: 48px;
  height: 44px;
  background-color: #f2a666;
  border: none;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e09353;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }

  @media (min-width: 768px) {
    width: 54px;
    height: 48px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 4px 0 0 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 8px 0;
  z-index: 10;
  color: #333;
  text-align: left;
  overflow: hidden;
  max-height: 250px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
