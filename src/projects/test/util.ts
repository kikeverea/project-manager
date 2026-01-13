import { screen, waitForElementToBeRemoved, within } from '@testing-library/react'

export const getRows = async () => {
  await waitForElementToBeRemoved(() => screen.queryByRole('status', { name: /loading/i }))

  const [_header, body] = screen.getAllByRole('rowgroup')
  return within(body).getAllByRole('row')
}