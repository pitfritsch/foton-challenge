import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailsHeader from '../../components/DetailsHeader';
import DetailsFooter from '../../components/DetailsFooter';
import Loading from '../../components/Loading';
import { getBook } from '../../services/books';


const Container = styled.div`
  padding: 50px 20px 100px 20px;
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
  margin: 0px;
  margin-top: 30px;
`

const Author = styled.span`
  color: rgba(255, 105, 120, 1);
  font-size: 16px;
  margin: 10px 0;
  font-weight: 600;
`
const Description = styled.div`
  font-size: 14px;
  line-height: 25px;
  color: rgba(49, 49, 49, 0.6);
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
      <Author>{book?.volumeInfo?.authors?.[0]}</Author>
      <Description dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}/>
    </Container>
    <DetailsFooter />
  </>)
}
