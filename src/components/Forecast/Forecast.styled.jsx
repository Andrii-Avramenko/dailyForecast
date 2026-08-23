import styled from "styled-components";
const tablet = "768px";
const desktop = "1200px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;

  @media (min-width: ${tablet}) {
    gap: 24px;
    padding: 0 24px;
  }

  @media (min-width: ${desktop}) {
    padding: 0;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;

  @media (min-width: ${tablet}) {
    padding: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 12px 0;

  @media (min-width: ${tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin: 0 0 16px 0;
  }
`;

export const ChartWrapper = styled.div`
  height: 160px;
  width: 100%;

  @media (min-width: ${tablet}) {
    height: 220px;
  }
`;

export const DayList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (min-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;


export const DayRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 18px 12px;

  @media (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr 1fr;
    align-items: center;
    text-align: left;
    gap: 12px;
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: 10px 20px;
  }
`;

export const DayDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 400;
  }
`;

export const DayIcon = styled.img`
  width: 36px;
  height: 36px;

  @media (min-width: ${tablet}) {
    width: 28px;
    height: 28px;
  }
`;

export const DayTemp = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const DayDescription = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;

  @media (min-width: ${tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: right;
  }
`;

export const StatusText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;