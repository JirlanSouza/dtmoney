import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 10rem;

  button {
    height: 3rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    padding: 0 2rem;
    border: 0;
    border-radius: 0%.25rem;
    box-shadow: var(--elevation-0);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
