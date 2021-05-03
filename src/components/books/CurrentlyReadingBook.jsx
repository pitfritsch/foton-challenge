import React from 'react'
import styled, { css } from 'styled-components'
import { useBook } from '../../hooks/useBook'
import ChapterIcon from '../../icons/ChapterIcon'
import notFound from '../../images/not_found.jpg'


const Container = styled.div`
  height: 100px;
  width: 88vw;
  padding: 20px 0;
  position: relative;
`

const ColoredContainer = styled.div`
  width: calc(100% - 120px);
  height: 80px;
  position: absolute;
  left: -20px;
  padding: 10px 10px 10px 120px;

  background: #EEF5DB;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 91px;
  height: 136px;
  background-image: url(${notFound});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -4px black;
  z-index: 1;

  ${p => p.src && css`
    background-image: url(${p.src});
  `}
`
const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.direction};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  height: ${p => p.height};
`

const Title = styled.h1`
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 20px;
  line-height: 26.66px;
  letter-spacing: 2px;
  color: rgba(42, 43, 38, 1);
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

const Author = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #74776D;
`

const ChapterInfo = styled.span`
  display: flex;
  align-items: flex-end; 
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.020635px;
  color: #2A2B26;
`

const ColorRed = styled.span`
  color: rgba(255, 105, 120, 1);
  font-weight: 600;
`

export default function CurrentlyReadingBook({ bookId }) {
  const book = useBook(bookId)
  return (
    <Container>
      <ImageContainer src={book?.volumeInfo?.imageLinks?.thumbnail}/>
      <ColoredContainer>
        <Flex direction='column' height='100%' justify='space-between'>
          <div>
            <Title>
              {book?.volumeInfo?.title}
            </Title>
            <Author>
              by {book?.volumeInfo?.authors?.[0]}
            </Author>
          </div>
          <ChapterInfo>
            <ChapterIcon />
            <span>
            {'Chapter '}<ColorRed>{' 2 '}</ColorRed>{' from 9'}
            </span>
          </ChapterInfo>
        </Flex>
      </ColoredContainer>
    </Container>
  )
}
