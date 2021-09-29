import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text-body);
    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    background: var(--green);
    box-shadow: var(--elevation-0);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  width: 100%;
  margin: 1rem 0;
`;
interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  padding: 0 1.5rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  color: var(--text-title);
  font-size: 1rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  box-shadow: var(--elevation-0);
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#D7D7D7")};
  }

  img {
    margin-right: 1rem;
  }
`;
