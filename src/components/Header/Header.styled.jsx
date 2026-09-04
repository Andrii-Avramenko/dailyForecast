import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  max-height: 50px;
  padding: 14px 50px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};

  & > a,
  & > a > img {
    width: 36px;
    height: 22px;
  }

  @media screen and (min-width: 768px) {
    gap: 57px;
    padding: 17px 100px;

    & > a,
    & > a > img {
      width: 54px;
      height: 36px;
    }
  }

  @media screen and (min-width: 1110px) {
    gap: 111px;
    padding: 12px 150px;

    & > a,
    & > a > img {
      width: 82px;
      height: 56px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  a {
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 480px) {
    ul {
      flex-direction: row;
      gap: 45px;
    }
  }

  @media screen and (min-width: 1110px) {
    ul {
      gap: 49px;
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;

export const MobileNav = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 30px 50px;
    align-items: center;
    z-index: -1;
    opacity: 0;
    background-color: #e6e6e6;
    transform: translateY(-100%);
    transition:
      opacity 100ms ease-in,
      transform 100ms ease-in;

    &.openMenu {
      opacity: 1;
      transform: translateY(50px);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.black};

  img {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;
    gap: 25px;
  }

  @media screen and (min-width: 1110px) {
    gap: 27px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SignUp = styled.button`
  height: 28px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.sm};

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeight};

  background-color: ${({ theme }) => theme.colors.accent};

  @media screen and (min-width: 1110px) {
    height: 35px;
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const MobileMenuButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    transition: transform 100ms ease-in;
  }

  &.openMenu {
    svg {
      transform: rotate(270deg);
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
