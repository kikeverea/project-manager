import { screen, waitFor, within } from '@testing-library/react'
import { expect } from 'vitest'

export const getRows = async () => {
  await waitFor(() => {
    const indicator = screen.queryByRole('status')
    expect(indicator).not.toBeInTheDocument()
  })

  const [_header, body] = screen.getAllByRole('rowgroup')
  return within(body).getAllByRole('row')
}