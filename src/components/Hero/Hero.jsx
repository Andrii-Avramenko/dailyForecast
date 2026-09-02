import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
  HeroSection,
  Title,
  InfoWrapper,
  Description,
  Divider,
  DateWrapper,
  SearchContainer,
  SearchInput,
  SearchButton,
} from "./Hero.styled";
import fetchCityForecast from "../../services/citySeach";

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

function Hero() {
  const [cityName, setCityName] = useState("");

  const today = new Date();

  const monthYear = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const dayOfWeek = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const dayOfMonth = today.getDate();
  const suffix = getOrdinalSuffix(dayOfMonth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName) return;
    try {
      const newCityForecast = await fetchCityForecast(cityName);
      console.log(newCityForecast);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeroSection id='hero'>
      <Title>Weather dashboard</Title>

      <InfoWrapper>
        <Description>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </Description>
        <Divider />
        <DateWrapper>
          <div>{monthYear}</div>
          <div>
            {dayOfWeek}, {dayOfMonth}
            <sup>{suffix}</sup>
          </div>
        </DateWrapper>
      </InfoWrapper>

      <SearchContainer onSubmit={handleSubmit}>
        <SearchInput
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          type="text"
          placeholder="Search location..."
        />
        <SearchButton>
          <HiOutlineSearch />
        </SearchButton>
      </SearchContainer>
    </HeroSection>
  );
}

export default Hero;
