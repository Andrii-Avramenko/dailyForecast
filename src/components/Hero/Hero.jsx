import { useState } from "react"
import { input } from "./Hero.styled.jsx"

function Hero() {
  const [searching, setSearching] = useState("");  
  const [] = useState() 
    return (
      <>
        <h1>Weather dashboard</h1>
        <p>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <p></p>
        <input

          value={searching}
          type="text"
          placeholder="Search location..."
        />
        <button></button>
      </>
    );
}

export default Hero