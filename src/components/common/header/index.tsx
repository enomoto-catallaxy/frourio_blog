import { memo } from 'react'
import { Loader } from '@mantine/core'
import styled from 'styled-components'

export const Header = memo(() => {
  return (
    <Wrapper>
      <Loader size={100} />
      header
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
