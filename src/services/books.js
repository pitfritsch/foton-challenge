import axios from "axios"

export async function getBooks ( query ) {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    return data
  } catch (e) {
    throw e
  }
}