import axios from "axios"

export async function getBooks ({ search, page }) {
  const pageSize = 12
  try {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${pageSize}&startIndex=${page * pageSize}`)
    return data
  } catch (e) {
    throw e
  }
}