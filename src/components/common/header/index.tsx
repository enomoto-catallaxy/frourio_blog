import { memo } from 'react'
import { Loader } from '@mantine/core'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { pagesPath } from '~/utils/$path'

export const Header = memo(() => {
  const router = useRouter()

  const handleClick = () => {
    router.push(pagesPath.$url())
  }
  return (
    <Wrapper>
      <Loader size={100} />
      <ToRoot onClick={handleClick}>ROOT</ToRoot>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  padding: 12px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightgreen;
`
const ToRoot = styled.h1`
  :hover {
    color: blue;
    cursor: pointer;
  }
`
