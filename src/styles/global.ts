import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --green: #33CC95;
    --blue:#5429CC;
    
    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --elevation-0: 0 1px 1px 1px #0000000F;
    --elevation-1: 0 1px 2px 1px #0000002A;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    outline-color: var(--blue);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, .5);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    
    padding: 4rem 3rem;
    border-radius: 0.25rem;
    background: var(--background);
    box-shadow: var(---elevation-1);
  }

  .react-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;

    border: none;
    background: transparent;
    transition: filter 0.2s;
    transition: transform 0.2s;

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }
`;
