import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './server.ts'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => {
  server.close()
})


vi.mock('@tanstack/react-router', async (importActual) => {
  const actual = await importActual<any>()
  return {
    ...actual,
    // Replace TanStack Router's Link with a plain anchor
    Link: ({ to, children, ...props }: any) => (
      <a href={to ? to : '/'} {...props}>{children}</a>
    ),
  }
})
