import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import SearchInput from '../../components/SearchInput'

const Page = styled.div`
`

const Content = styled.div`
  position: relative;
  padding: 20px;
`

export default function HomePage() {
  return (
    <Page>
      <Content>
        <SearchInput />
      </Content>
      <Footer/>
    </Page>
  )
}
