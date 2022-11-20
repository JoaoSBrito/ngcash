import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: #323238;

  border-radius: 6px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #C4C4CC;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background-color: #015F43;
  `}
`