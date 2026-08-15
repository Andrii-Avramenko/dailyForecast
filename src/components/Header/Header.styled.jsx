import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 111px;
  align-items: center;

  ul {
    display: flex;
    gap: 45px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const SignUp = styled.button`
  height: 35px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radii.sm};

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeight};

  background-color: ${({ theme }) => theme.colors.accent};
`;
