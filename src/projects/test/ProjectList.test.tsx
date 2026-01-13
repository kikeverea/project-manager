import { beforeEach, describe, expect, test } from 'vitest'
import { http, HttpResponse } from 'msw'
import '@testing-library/jest-dom'
import { screen, within } from '@testing-library/react'
import { server } from '../../test/server'
import ProjectList from '../index.tsx'
import { projectList } from '../../test/handlers.ts'
import { render } from '../../test/util.tsx'
import { getRows } from './util.ts'

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
      const rows = await getRows()
      expect(rows.length).toBe(projectList.length)

      rows.forEach((row, i) => {
        const project = projectList[i]
        const [ name ] = within(row).getAllByRole('cell')

        expect(name.textContent).toBe(project.name)
      })
    })

    test('renders tracking badge if project is being tracked', async () => {
      const rows = await getRows()

      rows.forEach((row, i) => {
        const project = projectList[i]
        const trackingIndicator = within(row).queryByRole('status', { name: "tracking" })

        if (project.tracking)
          expect(trackingIndicator).toBeInTheDocument()
        else
          expect(trackingIndicator).not.toBeInTheDocument()
      })
    })
  })
})
