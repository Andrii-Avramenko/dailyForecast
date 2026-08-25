import styled from "styled-components";
import { theme } from "../../../theme";

export const GallerySection = styled.section`
  @media screen and (min-width: 480px) {
display:none;

  }

  @media screen and (min-width: 1200px) {
display:block;
  }
  position: relative;

  width: 100%;
  margin-top: 80px;
  margin-bottom: 48px;

  overflow: hidden;
`;

export const GalleryTitle = styled.h2`
  margin-left: 150px;
  margin-bottom: 40px;


  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const GalleryList = styled.div`
  position: relative;

  width: 1200px;
  height: 210px;

  margin-top: 40px;
  margin: 0 auto;

  overflow: visible;
`;

export const GalleryItem = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;

  width: 385px;
  height: 210px;

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 1000ms cubic-bezier(0.65, 0, 0.35, 1),
    opacity 1000ms ease,
    filter 800ms ease;

  ${({ $position }) => {
    const positions = {
      0: `
        transform:
          translate(-50%, -50%)
          scale(1);

        opacity: 1;

        z-index: 10;

      
      `,

      "-1": `
  transform:
    translate(calc(-50% - 180px), -50%)
    scale(0.8);

  opacity: 1;
  z-index: 8;

`,

      1: `
  transform:
    translate(calc(-50% + 180px), -50%)
    scale(0.8);

  opacity: 1;
  z-index: 8;

`,
      "-2": `
  transform:
    translate(calc(-50% - 360px), -50%)
    scale(0.6);

  opacity: 1;
  z-index: 6;

`,

      2: `
  transform:
    translate(calc(-50% + 360px), -50%)
    scale(0.6);

  opacity: 1;
  z-index: 6;

`,

      "-3": `
  transform:
    translate(calc(-50% - 650px), -50%)
    scale(0.1);

  opacity: 0;
  z-index: 4;

    pointer-events: none;
`,

      3: `
  transform:
    translate(calc(-50% + 650px), -50%)
    scale(0.1);

  opacity: 0;
  z-index: 4;
  
    pointer-events: none;
`,

      "-4": `
        transform:
          translate(calc(-50% - 800px), -50%)
          scale(0.3);

        opacity: 0;

        z-index: 2;

        pointer-events: none;
      `,

      4: `
        transform:
          translate(calc(-50% + 800px), -50%)
          scale(0.3);

        opacity: 0;

        z-index: 2;

        pointer-events: none;
      `,

      "-5": `
        transform:
          translate(calc(-50% - 950px), -50%)
          scale(0.2);

        opacity: 0;

        z-index: 1;

        pointer-events: none;
      `,

      5: `
        transform:
          translate(calc(-50% + 950px), -50%)
          scale(0.2);

        opacity: 0;

        z-index: 1;

        pointer-events: none;
      `,
    };

    return positions[$position] || "";
  }}
`;

export const GalleryImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
