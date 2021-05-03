import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { getBook } from '../../services/books'
import notFound from '../../images/not_found.jpg'
import StatsIcon from '../../icons/StatsIcon'
import { useHistory } from 'react-router'
import { useBook } from '../../hooks/useBook'

const Container = styled.div`
  min-height: 99px;
  min-width: 232px;
  background-color: rgba(0, 23, 61, 1);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  position: relative;
  min-width: 72px;
  height: 100%;
  background-image: url(${notFound});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -4px black;

  ${p => p.src && css`
    background-image: url(${p.src});
  `}
`

const Title = styled.h1`
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #FEFEFE;
  margin: 0;

  @supports not (-webkit-line-clamp: 2){
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @supports(-webkit-line-clamp: 2){
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
`
const Author = styled.i`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.28889px;
  color: #E7E7E1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
const ReadingInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #E7E7E1;
`

export default function DiscoverBookCard({ bookId }) {
  const history = useHistory()

  const book = useBook(bookId)
  
  return (
    <Container onClick={() => history.push(`/book/${book.id}`)}>
      <InfoContainer>
        <div>
          <Title>
            {book?.volumeInfo?.title}
          </Title>
          <Author>
            {book?.volumeInfo?.authors?.[0]}
          </Author>
        </div>
        <ReadingInfo>
          <StatsIcon /><span><b>{' +120 '}</b>Read Now</span>
        </ReadingInfo>
      </InfoContainer>
      <ImageContainer src={book?.volumeInfo?.imageLinks?.thumbnail}/>
    </Container>
  )
}
