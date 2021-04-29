import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0px 2px 5px -3px black;
`

const InfosContainer = styled.div`
`

const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: rgba(49, 49, 49, 0.8);
  margin: 9px 0 0 0;
`

const Author = styled.p`
  font-size: 10px;
  font-weight: 900;
  color: rgba(49, 49, 49, 0.8);
  margin: 5px 0 0 0;
`

export default function BookCard({ book, ...rest }) {
  console.log({ book })

  return (
    <div>
      <ImageContainer>
        <Image src={book?.volumeInfo?.imageLinks?.thumbnail} width='100%' alt='oi' />
      </ImageContainer>
      <Title>
        {book?.volumeInfo?.title}
      </Title>
      <Author>
        by {book?.volumeInfo?.authors?.[0]}
      </Author>
      {/* <a href={book.selfLink} target='_blank' rel="noreferrer">{book.volumeInfo.title}</a> */}
    </div>
  )
}
