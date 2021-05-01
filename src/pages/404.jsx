import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
  }
`

export default function NotFound() {
  return (
    <Container>
      <Flex>
        <span>404 | Page not found</span>
        <Link to='/'>Go back to Home Page</Link>
      </Flex>
    </Container>
  )
}
