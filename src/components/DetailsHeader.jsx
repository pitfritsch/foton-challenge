import React from 'react'
import styled from 'styled-components'
import WaveCircle from '../images/WaveCircle'
import WaveCircleTwo from '../images/WaveCircleTwo'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 250px;
  background-color: rgba(255, 246, 229, 1);

  border-bottom-right-radius: 100px;
`

const W1 = styled(WaveCircle)`
  position: absolute;
  right: 0;
`
const W2 = styled(WaveCircleTwo)`
  position: absolute;
  right: 25%;
  bottom: 5%;
`
const BordedCircle = styled.div`
  position: absolute;
  right: 30%;
  bottom: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(69, 80, 167, 1);
  border-radius: 50%;
`
const DarkCircle = styled.div`
  position: absolute;
  left: 25%;
  bottom: 30%;
  width: 63px;
  height: 63px;
  background-color: rgba(0, 23, 61, 1);
  border-radius: 50%;
`
const RedCircle = styled.div`
  position: absolute;
  left: 20%;
  bottom: 50%;
  width: 15px;
  height: 15px;
  background-color: rgba(255, 105, 120, 1);
  border-radius: 50%;
`

export default function DetailsHeader() {
  return (
    <Background>
      <W1/>
      <W2/>
      <BordedCircle />
      <DarkCircle />
      <RedCircle/>
    </Background>
  )
}
