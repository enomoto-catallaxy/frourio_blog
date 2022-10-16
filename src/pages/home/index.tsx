import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { MyHome } from '~/components/home'
import { Header } from '~/components/common/header'

const MyHomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Header />

      <Wrapper>
        <MyHome></MyHome>
      </Wrapper>
    </>
  )
}

export default MyHomePage

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
