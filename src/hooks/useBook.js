import { useCallback, useEffect, useState } from "react"
import { getBook } from "../services/books"

export function useBook( bookId ){
  const [ book, setBook ] = useState({})

  const handleGetBook = useCallback(async () => {
    try {
      const resp = await getBook(bookId)
      setBook(resp)
    } catch (error) {
      console.error(error)
    }
  }, [bookId])

  useEffect(() => {
    handleGetBook()
  }, [handleGetBook])

  return book
}