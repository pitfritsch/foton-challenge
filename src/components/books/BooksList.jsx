import React from 'react'
import styled from 'styled-components'
import BookCard from './BookCard'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`

export default function BooksList({ books=[] }) {

  return (
    <ListContainer>
      {books.map(book => 
        <BookCard key={book.id} book={book} />
      )}
    </ListContainer>
  )
}
