import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0,.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    input {
      border-radius: 6px;
      border: 0;
      background: #121214;
      color: #C4C4CC;
      padding: 1rem;

      &::placeholder {
        color: #7C7C8A;
      }
    }

    button[type="submit"] {
        height: 58px;
        border: 0;
        background: #00875F;
        color: #fff;
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:hover {
          background: #015F43;
          transition: background-color .2s;
        }
      }
  }
`

export const CloseButtton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;  
  line-height: 0;
  cursor: pointer;
  color: #7C7C8A;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: .5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: #29292E;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: #C4C4CC;

  svg {
    color: ${props => props.variant === 'income' ? props.color="#00B37E" : props.color='#F75A68'};
  }

  &[data-state='unchecked'] {
    background: #323238;
    transition: background-color .2s
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.color="#00875F" : props.color="#AB222E"};

    svg {
      color: #fff;
    }
  }
`