import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../../services/books'

export default function Details() {

  const { bookId } = useParams()
  const handleGetBook = useCallback(async () => {

    try {
      const resp = await getBook(bookId)
      console.log(resp)
      
    } catch (error) {
      console.error(error)
    }
  }, [bookId])

  useEffect(() => {
    handleGetBook()
  }, [handleGetBook])

  return (
    <div>
      {bookId}
    </div>
  )
}
