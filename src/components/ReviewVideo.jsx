import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`

export default function ReviewVideo({ videoId }) {
  return (
    <Container>
      <Content>
        <iframe 
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          title="YouTube video player"
          frameborder="0"
          allow="
            accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture
          " 
          allowfullscreen
        />
      </Content>
    </Container>
  )
}
