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
  DropdownList,
  DropdownItem,
} from "./Hero.styled";

function Hero() {
  const [searching, setSearching] = useState("");

  const items = ["Яблуко", "Банан", "Апельсин", "Ківі", "Ананас"];

  const filteredItems =
    searching.trim() === ""
      ? []
      : items.filter((item) =>
          item.toLowerCase().includes(searching.toLowerCase()),
        );

  return (
    <HeroSection>
      <Title>Weather dashboard</Title>

      <InfoWrapper>
        <Description>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </Description>
        <Divider />
        <DateWrapper>
          <div>August 2026</div>
          <div>
            Wensdey, 26<sup>th</sup>
          </div>
        </DateWrapper>
      </InfoWrapper>

      <SearchContainer>
        <SearchInput
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
          type="text"
          placeholder="Search location..."
        />
        <SearchButton>
          <HiOutlineSearch />
        </SearchButton>

        {filteredItems.length > 0 && (
          <DropdownList>
            {filteredItems.map((item, index) => (
              <DropdownItem key={index} onClick={() => setSearching(item)}>
                {item}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </SearchContainer>
    </HeroSection>
  );
}

export default Hero;
