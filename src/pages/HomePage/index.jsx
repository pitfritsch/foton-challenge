import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import CurrentlyReadingBook from '../../components/books/CurrentlyReadingBook'
import DiscoverBookCard from '../../components/books/DiscoverBookCard'
import Footer from '../../components/Footer'
import SearchInput from '../../components/SearchInput'

const books = [
  'dsz5AwAAQBAJ',
  'rB2ZDQAAQBAJ',
  'pD6arNyKyi8C',
  '_i6bDeoCQzsC'
]

const Title = styled.h4`
  font-size: 24px;
  font-weight: 400;
  color: #54565A;
`
const Name = styled.span`
  color: rgba(255, 105, 120, 1);
  font-weight: 600;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px 20px 80px 20px;
`

const DiscoverBookContainer = styled.div`
  display: flex;
  overflow: auto;
  grid-gap: 10px;
  background-color: transparent;
`

const Flex = styled.div`
  display: flex;
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
`

const More = styled.a`
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #4ABDF1;
`
const Subtitle = styled.span`
font-size: 18px;
line-height: 21px;
letter-spacing: 0.5px;
color: #3F4043;
`

export default function HomePage() {
  const history = useHistory()

  const [ query, setQuery ] = useState({
    search: '',
    page: 0
  })

  const handleChangeSearch = useCallback(( newValue ) => {
    setQuery({
      search: newValue,
      page: 0
    })
  }, [])

  const redirectTo = useCallback(() => {
    if (!query.search) return

    history.push(`/search/${query.search}`)
  }, [history, query])

  useEffect(() => {
    redirectTo()
  }, [redirectTo])

  const currentlyReading = localStorage.getItem('currently_reading')

  return (
    <>
      <Content>
        <SearchInput
          value={query.search}
          onValue={handleChangeSearch}
          timeout={500}
        />
        
        <Title>
          {'Hi, '}
          <Name>
          Mehmed Al Fatih
          </Name>
          {' 👋'}
        </Title>
        
        <Flex justify='space-between' align='center'>
          <Subtitle>Discover new book</Subtitle>
          <More>More</More>
        </Flex>
        <br/>
        <DiscoverBookContainer>
          {books.map(bookId => 
            <DiscoverBookCard key={bookId} bookId={bookId} />
          )}
        </DiscoverBookContainer>

        <br/>
        <br/>
        <Flex justify='space-between' align='center'>
          <Subtitle>Currently Reading</Subtitle>
          <More>All</More>
        </Flex>
        <br/>
        <CurrentlyReadingBook bookId={currentlyReading} />

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vBzBgewl4ac?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </Content>
      <Footer/>
    </>
  )
}
