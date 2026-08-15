import { useState } from "react"
import { input } from "./Hero.styled.jsx"
import { HiOutlineSearch } from "react-icons/hi";

function Hero() {
  const [searching, setSearching] = useState("");  
  const [] = useState() 

  function handleChange(event) {
    setSearching(event.target.value);
  }
    return (
      <>
        <h1>Weather dashboard</h1>
        <p>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <p></p>
        <input
          onChange={handleChange}
          value={searching}
          type="text"
          placeholder="Search location..."
        />
        <button>
          <HiOutlineSearch />
        </button>
      </>
    );
}

export default Hero