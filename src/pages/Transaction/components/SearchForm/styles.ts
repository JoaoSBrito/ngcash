import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: #121214;
    color: #C4C4CC;
    padding: 1rem;

    &::placeholder {
      color: #7C7C8A;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: .75rem;

    padding: 1rem;
    background:transparent;
    border: 1px solid #00B37E;
    color: #00B37E;
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: #00875F;
      border-color: #00B37E;
      color: #fff;
      transition: background-color .2s, color .2s, border-color .2s;
    }
  }
`