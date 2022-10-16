import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import Layout from '~/components/Layout'
import type { NextPage } from 'next'
import { Header } from '~/components/common/header'
import { useRouter } from 'next/router'
import { pagesPath } from '~/utils/$path'
import styled from 'styled-components'

const Home: NextPage = () => {
  const { data: tasks, error, mutate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      mutate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    mutate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    mutate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>

  const router = useRouter()

  const hancleClick = () => {
    router.push(pagesPath.home.$url())
  }

  return (
    <Layout>
      <Head>
        <title>これはブログになる</title>
      </Head>

      <Header />

      <ToHome className={styles.title} onClick={hancleClick}>
        HOMEはここをクリック
      </ToHome>

      <p className={styles.description}>frourio-todo-app</p>

      <div>
        <form style={{ textAlign: 'center' }} onSubmit={createTask}>
          <input value={label} type="text" onChange={inputLabel} />
          <input type="submit" value="ADD" />
        </form>
        <ul className={styles.tasks}>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(task)}
                />
                <span>{task.label}</span>
              </label>
              <input
                type="button"
                value="DELETE"
                style={{ float: 'right' }}
                onClick={() => deleteTask(task)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home

const ToHome = styled.h1`
  :hover {
    color: blue;
    cursor: pointer;
  }
`
