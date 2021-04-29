import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BooksList from '../../components/books/BooksList'
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

        <BooksList books={books} />

      </Content>
      <Footer/>
    </Page>
  )
}
