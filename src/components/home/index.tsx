import { memo } from 'react'
import styled from 'styled-components'
import { UserInfo } from '~/components/home/userInfo'

export const MyHome = memo(() => {
  return (
    // TODO UserDocumentsコンポーネントを挿入

    <Wrapper>
      <UserInfo></UserInfo>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  padding: 24px;
`
