import useAspidaSWR from '@aspida/swr'
import { Avatar } from '@mantine/core'
import { memo } from 'react'
import styled from 'styled-components'
import { apiClient } from '~/utils/apiClient'

export const UserInfo = memo(() => {
  const initialUser = useAspidaSWR(apiClient.users, {}).data

  // TODO postメソッドをつけて投稿できるようにする
  return (
    <Wrapper>
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <UserInfoContent>
        {(initialUser?.firstName, initialUser?.lastName)}
      </UserInfoContent>
      <UserInfoContent>{initialUser?.email}</UserInfoContent>
      <UserInfoContent>{initialUser?.introduction}</UserInfoContent>
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
