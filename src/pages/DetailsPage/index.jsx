import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { getBook } from '../../services/books'
import { FiArrowLeft } from "react-icons/fi";
import notFound from '../../images/not_found.jpg'
import Loading from '../../components/Loading';
import DetailsHeader from '../../components/DetailsHeader';


const Container = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
`

const GoBackButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  border-radius: 50%;
  border: none;
  background: transparent;
  z-index: 1;
`

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  /* margin: auto; */
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: calc(100vw/3);
  border-radius: 5px;
  /* box-shadow: 0px 2px 5px -4px black; */
  filter: drop-shadow(0px 15px 13px #00000044);
  z-index: 1;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
`

export default function Details() {
  const { bookId } = useParams()
  const history = useHistory()
  const [ book, setBook ] = useState({})

  const handleGoBack = useCallback(() => {
    history.goBack()
  }, [ history ])

  const handleGetBook = useCallback(async () => {
    try {
      const resp = await getBook(bookId)
      console.log(resp)
      setBook(resp)
    } catch (error) {
      console.error(error)
    }
  }, [bookId])

  useEffect(() => {
    handleGetBook()
  }, [handleGetBook])

  return (<>
    <DetailsHeader />
    <Container>
      <GoBackButton onClick={handleGoBack}>
        <FiArrowLeft />
      </GoBackButton>
      <ImageBox>
        <Loading
          size={'25px'}
          thickness={'2px'}
          color={'rgba(49,49,49,0.8)'}
          style={{
            position: 'absolute'
          }}
        />
        <Image src={book?.volumeInfo?.imageLinks?.thumbnail}/>
      </ImageBox>
      <Title>
        <b>{book?.volumeInfo?.title}</b>{book?.volumeInfo?.subtitle ? ` : ${book?.volumeInfo?.subtitle}`  : ''}
      </Title>
      {bookId}
    </Container>
  </>)
}
