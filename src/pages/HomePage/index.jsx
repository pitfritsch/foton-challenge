import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import SearchInput from '../../components/SearchInput'

const Page = styled.div`
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 20px 80px 20px;
`

export default function HomePage() {
  const history = useHistory()

  const [ query, setQuery ] = useState({
    search: '',
    page: 0
  })

  const handleChangeSearch = useCallback(( newValue ) => {
    setQuery({
      search: newValue,
      page: 0
    })
  }, [])

  const redirectTo = useCallback(() => {
    if (!query.search) return

    history.push(`/search/${query.search}`)
  }, [history, query])

  useEffect(() => {
    redirectTo()
  }, [redirectTo])

  return (
    <Page>
      <Content>
        <SearchInput
          value={query.search}
          onValue={handleChangeSearch}
          timeout={500}
        />
        
        

      </Content>
      <Footer/>
    </Page>
  )
}
