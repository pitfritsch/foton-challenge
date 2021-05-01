import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import BooksList from '../../components/books/BooksList'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import SearchInput from '../../components/SearchInput'
import { getBooks } from '../../services/books'

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

export default function SearchPage() {
  const history = useHistory()

  const { search } = useParams()

  const [ loading, setLoading ] = useState(false)
  const [ books, setBooks ] = useState([])
  const [ page, setPage ] = useState([])

  const handleChangeSearch = useCallback(( newValue ) => {
    if (newValue === search) return
    if (!newValue) {
      history.push('/')
      return
    }
    setBooks([])
    // setQuery({
    //   search: newValue,
    //   page: 0
    // })
    history.replace(`/search/${newValue}`)
  }, [history, search])
  
  const handleGetBooks = useCallback(async () => {
    if (!search) {
      setBooks([])
      return
    }
    
    setLoading(true)

    try {
      const { items } = await getBooks({ search, page })
      setBooks(b => page > 0 ? [ ...b, ...items ] : items)
    } catch (e) {
      setBooks([])
    } finally {
      setLoading(false)
    }
  }, [search, page])

  useEffect(() => {
    handleGetBooks()
  }, [handleGetBooks])

  return (
    <>
      <Content>
        <SearchInput
          value={search}
          onValue={handleChangeSearch}
          timeout={500}
        />
        {/* <h1>{query.search}</h1>
        <h2>{query.page}</h2> */}

        <BooksList books={books} />

        {books.length > 0 && !loading &&
          <LoadMoreButton
            onClick={() => setPage(p => p + 1)}
          >
            Load more
          </LoadMoreButton>
        }

        {loading &&
          <Loading
            size={'25px'}
            thickness={'2px'}
            color={'rgba(49,49,49,0.8)'}
          />
        }

      </Content>
      <Footer />
    </>
  )
}
