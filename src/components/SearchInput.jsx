import React, { useEffect, useState } from 'react'
import { VscSearch } from 'react-icons/vsc'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const Icon = styled.div`
  position: absolute;
  height: 100%;
  width: 40px;
  display: flex;
  top: 0;
  pointer-events: none;

  svg {
    height: 15px;
    width: auto;
    margin: auto;
  }
`

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 18px;
  padding: 15px;
  padding-left: 40px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: .2s;
  
  :focus {
    box-shadow: 0 1px 5px -4px black;
  }
`

export default function SearchInput({ value, onValue, onEnter, timeout=250, ...rest }) {
  
  const [ insideValue, setInsideValue ] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onValue?.(insideValue)
    }, [timeout])
    return () => clearTimeout(timeoutId)
  }, [insideValue, onValue])

  const handleChange = (e) => {
    setInsideValue(e.target.value)
  }

  return (
    <Container>
      <StyledInput 
        placeholder="Search book"
        value={insideValue}
        onChange={handleChange}
        onKeyDown={(e) => e.keyCode === 13 && onEnter?.()}
        {...rest}
      />
      <Icon>
        <VscSearch/>
      </Icon>
    </Container>
  )
}
