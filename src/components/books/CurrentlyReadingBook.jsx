import React from 'react'
import { useBook } from '../../hooks/useBook'

export default function CurrentlyReadingBook({ bookId }) {
  const book = useBook(bookId)
  return (
    <div>
      
    </div>
  )
}
