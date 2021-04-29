import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import SearchInput from '../../components/SearchInput'
import { getBooks } from '../../services/books'

const Page = styled.div`
`

const Content = styled.div`
  position: relative;
  padding: 20px;
`

export default function HomePage() {

  const [ search, setSearch ] = useState('')
  const [ books, setBooks ] = useState([])

  const handleGetBooks = useCallback(async () => {
    try {
      const { items } = await getBooks(search)
      setBooks(items)
    } catch (e) {
      setBooks([])
    }
  }, [search])

  useEffect(() => {
    handleGetBooks()
  }, [handleGetBooks])

  return (
    <Page>
      <Content>
        <SearchInput
          value={search}
          onValue={setSearch}
        />

        {books.map(book => 
          <p key={book.id}>
            <a href={book.selfLink} target='_blank'>{book.volumeInfo.title}</a>
          </p>
        )}

      </Content>
      <Footer/>
    </Page>
  )
}
