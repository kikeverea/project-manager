import { beforeEach, describe, expect, test } from 'vitest'
import { http, HttpResponse } from 'msw'
import '@testing-library/jest-dom'
import { screen, waitFor, within } from '@testing-library/react'
import { server } from '../../test/server'
import ProjectList from '../index.tsx'
import { projectList } from '../../test/handlers.ts'
import { render } from '../../test/util.tsx'

describe('Project List', () => {

  describe('no data', () => {

    beforeEach(() => {
      server.use(http.get('api/projects', () => HttpResponse.json({ projects: [] })))
    })

    test("renders the table", async () => {
      render(<ProjectList />)

      const table = screen.getByRole('table')
      expect(table).toBeInTheDocument()
    })

    test("renders the table headers", async () => {
      render(<ProjectList />)

      const table = screen.getByRole('table')
      const headers = within(table).getAllByRole('columnheader')

      expect(headers.length).toBeGreaterThan(0)
    })

    test("renders the empty message", async () => {
      render(<ProjectList />)

      const table = screen.getByRole('table')
      const emptyMessageCell = within(table).getByRole('cell')

      expect(emptyMessageCell.textContent).toBe('No hay proyectos')
    })
  })

  describe('with data', () => {

    beforeEach(() => {
      render(<ProjectList />)
    })

    test('renders loading indicator', async () => {
      const indicator = screen.getByRole('status')
      expect(indicator).toBeInTheDocument()
    })

    test('renders project rows', async () => {
      const indicator = screen.getByRole('status')
      expect(indicator).toBeInTheDocument()

      await waitFor(() => {
        const indicator = screen.queryByRole('status')
        expect(indicator).not.toBeInTheDocument()
      })

      const [_header, body] = screen.getAllByRole('rowgroup')
      const rows = within(body).getAllByRole('row')

      expect(rows.length).toBe(projectList.length)
    })
    //
    //   test('renders all items', async () => {
    //     const items = await screen.findAllByRole('listitem')
    //     const todos = list.todos
    //     expect(items).toHaveLength(todos.length)
    //
    //     for (let i = 0; i < todos.length; i++) {
    //       const todo = todos[i]
    //       const checkbox = await screen.findByRole('checkbox', { name: `mark ${todo.title}` }) as HTMLInputElement
    //
    //       expect(checkbox.checked).toBe(todo.completed)
    //     }
    //   })
    //
    //   test('add item to the list', async () => {
    //     const itemsThen = await screen.findAllByRole('listitem')
    //
    //     const { titleInput, submit } = await showForm()
    //
    //     await userEvent.type(titleInput, 'new todo')
    //     await userEvent.click(submit)
    //
    //     const itemsNow = await screen.findAllByRole('listitem')
    //     const { titleInput: inputNow } = getForm()
    //
    //     expect(itemsNow).toHaveLength(itemsThen.length + 1)
    //     expect(await screen.findByText(/new todo/i)).toBeInTheDocument()
    //     expect(inputNow).not.toBeInTheDocument()
    //   })
    //
  })
})
