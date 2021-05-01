import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  margin: auto;
  border-radius: 50%;
  animation: ${rotate} 0.5s linear infinite;

  ${p => p.size && css`
    width: ${p.size};
    height: ${p.size};
  `}

  ${p => p.thickness && css`
    border: ${p.thickness} solid transparent;
    border-top: ${p.thickness} solid;
  `}

  ${p => p.color && css`
    border-top-color: ${p.color};
  `}

`

export default function Loading({ loading=false, ...rest }) {
  return (
    <Circle {...rest}>
      
    </Circle>
  )
}
