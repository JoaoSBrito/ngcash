import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #121214;
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  border-radius: 6px;
  border: 0;

  background: #00875F;
  color: #fff;

  font-weight: bold;
  cursor: pointer;

  &:hover{
    background: #015F43;
    transition: background-color .2s;
  }
`