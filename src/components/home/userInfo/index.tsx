import { Avatar } from '@mantine/core'
import { memo } from 'react'
import styled from 'styled-components'

export const UserInfo = memo(() => {
  return (
    <Wrapper>
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <UserInfoContent>ユーザー名</UserInfoContent>
      <UserInfoContent>email</UserInfoContent>
      <UserInfoContent>自己紹介</UserInfoContent>
      <UserInfoContent>投稿数</UserInfoContent>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: block;

  margin-left: 72px;
  padding: 12px;

  text-align: center;
  width: 480px;
  background-color: lightgray;
`
const UserInfoContent = styled.div`
  margin-bottom: 12px;
`
