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
  font-family: "Poppins", Arial, sans-serif;
  color: #2b2b2b;
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
  background: #ececec;
  border-radius: 20px;
  padding: 16px;

  @media (min-width: ${tablet}) {
    padding: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: #2b2b2b;
  margin: 0 0 12px 0;

  @media (min-width: ${tablet}) {
    font-size: 14px;
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
  background: #e2e2e2;
  border-radius: 16px;
  padding: 18px 12px;

  @media (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr 1fr;
    align-items: center;
    text-align: left;
    gap: 12px;
    border-radius: 20px;
    padding: 10px 20px;
  }
`;

export const DayDate = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #2b2b2b;

  @media (min-width: ${tablet}) {
    font-size: 13px;
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
  font-size: 13px;
  font-weight: 600;
  color: #2b2b2b;
`;

export const DayDescription = styled.span`
  font-size: 12px;
  color: #6b6b6b;
  text-align: center;

  @media (min-width: ${tablet}) {
    font-size: 13px;
    text-align: right;
  }
`;

export const StatusText = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  text-align: center;
`;