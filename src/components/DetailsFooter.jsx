import React, { useCallback } from 'react'
import { FiBookOpen, FiHeadphones, FiShare } from 'react-icons/fi'
import styled from 'styled-components'

const Container = styled.div`
  width: calc(100vw - 40px);
  position: fixed;
  bottom: 50px;
  left: 20px;
  box-shadow: 3px 3px 23px 0px rgba(107, 103, 70, 0.13);
  height: 50px;
  background-color: white;
  border-radius: 2px;

  display: flex;
  justify-content: space-evenly;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  font-size: 18px;
  color: rgba(207, 203, 210, 1);
  transition: .2s;

  span {
    font-size: 14px;
    font-weight: 700;
    color: rgba(63, 64, 67, 1);
  }

  :active {
    transform: scale(.9)
  }
`
const Vr = styled.hr`
  width: 1px;
  height: 50%;
  border: none;
  border-right: 1px solid rgba(151, 151, 151, 0.2);
`

export default function DetailsFooter({bookId}) {
  
  const startReading = useCallback(() => {
    localStorage.setItem('currently_reading', bookId)
  }, [bookId])

  return (
    <Container>
      <Item onClick={startReading}>
        <FiBookOpen/>
        <span>
          Read
        </span>
      </Item>
      <Item>
        <Vr/>
      </Item>
      <Item>
        <FiHeadphones />
        <span>
          Listen
        </span>
      </Item>
      <Item>
        <Vr/>
      </Item>
      <Item>
        <FiShare/>
        <span>
          Share
        </span>
      </Item>
    </Container>
  )
}
