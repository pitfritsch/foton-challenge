import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import styled, { css } from 'styled-components'
import notFound from '../../images/not_found.jpg'

const ellipsis = css`
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

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
  background-image: url(${notFound});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -4px black;

  ${p => p.src && css`
    background-image: url(${p.src});
  `}
`

const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: rgba(49, 49, 49, 0.8);
  margin: 9px 0 0 0;

  ${ellipsis}
`

const Author = styled.p`
  font-size: 10px;
  font-weight: 900;
  color: rgba(49, 49, 49, 0.8);
  margin: 5px 0 0 0;
  
  ${ellipsis}
`

export default function BookCard({ book, ...rest }) {
  const history = useHistory()

  const handleSelectBook = useCallback(() => {
    history.push(`/book/${book.id}`)
  }, [history, book])

  return (
    <div onClick={handleSelectBook}>
      <ImageContainer src={book?.volumeInfo?.imageLinks?.thumbnail}/>
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
