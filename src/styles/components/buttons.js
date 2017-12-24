import styled, { css } from 'styled-components'

import { green, purple, white, neutral6, neutral2 } from '../tools/variables'

export const Button = styled.button`
  padding: 16px 24px;
  background-color: ${green};
  color: ${white};
  border-radius: 8px;
  cursor: pointer;
  outline: 0;

  ${props => props.white && css`
    background-color: ${white};
    color: ${green};
  `}

  ${props => props.whiteOutline && css`
    border: 2px solid ${white};
    background-color: transparent;
  `}

  ${props => props.greenOutline && css`
    border: 2px solid ${green};
    background-color: transparent;
    color: ${green}
  `}
`

export const ButtonGradient = styled.button`
  padding: 8px 16px;
  background-color: ${white};
  color: ${neutral6};
  border-radius: 8px;
  transition: all 0.4s;

  &:hover {
    background-color: ${neutral2};
  }
`

export const ButtonGradientText = styled.button`
  color: $cl-neutral-6;
  background: linear-gradient(
    to bottom right,
    ${neutral6}, #fd746c,
    ${green}, #00c9ff,
    ${purple}, #e73827);
  background-repeat: no-repeat;
  background-size: 1000% 1000%;
  animation: gradient-bg 150s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  transition: all 0.4s;
`
