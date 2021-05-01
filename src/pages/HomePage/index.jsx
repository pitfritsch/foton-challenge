import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BooksList from '../../components/books/BooksList'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import SearchInput from '../../components/SearchInput'
import { getBooks } from '../../services/books'

const Page = styled.div`
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 20px 80px 20px;
`

const LoadMoreButton = styled.button`
  margin: auto;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -4px black;
  padding: 5px 20px;
  background-color: white;
  transition: .2s;

  :active {
    transform: scale(0.9)
  }
`

export default function HomePage() {

  const [ loading, setLoading ] = useState(false)
  const [ books, setBooks ] = useState([])

  const [ query, setQuery ] = useState({
    search: '',
    page: 0
  })

  const handleChangeSearch = useCallback(( newValue ) => {
    setBooks([])
    setQuery({
      search: newValue,
      page: 0
    })
  }, [])

  const handleGetBooks = useCallback(async () => {
    if (!query.search) {
      setBooks([])
      return
    }
    
    setLoading(true)

    try {
      const { items } = await getBooks(query)
      setBooks(b => query.page > 0 ? [ ...b, ...items ] : items)
    } catch (e) {
      setBooks([])
    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    handleGetBooks()
  }, [handleGetBooks])

  return (
    <Page>
      <Content>
        <SearchInput
          value={query.search}
          onValue={handleChangeSearch}
          timeout={500}
        />

        <BooksList books={books} />

        {books.length > 0 && !loading &&
          <LoadMoreButton
            onClick={() => setQuery(q => ({ ...q, page: q.page + 1}))}
          >
            Load more
          </LoadMoreButton>
        }

        {loading &&
          <Loading
            loading={true}
            size={'25px'}
            thickness={'2px'}
            color={'rgba(49,49,49,0.8)'}
          />
        }

      </Content>
      <Footer/>
    </Page>
  )
}
