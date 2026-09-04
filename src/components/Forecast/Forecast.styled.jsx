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

export const CitySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 8px;
`;

export const CityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CityCard = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: 18px;
  padding: 16px 18px 12px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 24px rgba(25, 26, 31, 0.08);
`;

export const CityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.black};
`;

export const CityName = styled.span`
  font-family: Montserrat;
font-weight: 500;
font-style: Medium;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
text-align: right;
`;

export const CityCountry = styled.span`
color: #000000;
`;

export const CityTime = styled.div`
  width: 63px;
  height: 29px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  margin-top: 6px;
  color: #000000;
margin: 0 auto;
margin-top: 6px;
`;

export const CityTag = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 114px;
  height: 28px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 100%;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 10px;

  &:hover,
  &[aria-pressed="true"] {
    filter: brightness(0.95);
  }
`;

export const CityMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 0.72rem;
  margin-bottom: 6px;
  color: #000000;
`;

export const WeatherIcon = styled.img`
  width: 84px;
  height: 84px;
  margin: 4px auto 8px;
`;

export const CityTempValue = styled.div`
width: 69px;
height: 39px;
font-family: Montserrat;
font-weight: 500;
font-style: Medium;
font-size: 32px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
margin: 0 auto;
`;

export const CityActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: 1px solid rgba(76, 76, 76, 0.08);
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 1.2rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.04);
`;


export const FavoriteButton = styled(ActionButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #f04d5a;
`;

export const DeleteButton = styled(ActionButton)`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  color: #000000;
`;

export const MoreButton = styled.button`
  background: #f3a05a;
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 9px 14px;
  cursor: default;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(243, 160, 90, 0.25);
  opacity: 0.9;
`;

