import { beforeEach, describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import SideMenuItem from "./SideMenuItem.tsx";

describe('Menu item', () => {

  beforeEach(() => {
    render(<SideMenuItem path='/path' label='Test item' icon={ <span>This is an icon</span> }/>)
  })

  test("renders the item's label", async () => {
    const label = screen.getByText('Test item')
    expect(label).toBeInTheDocument()
  })

  test("renders the item's icon", async () => {
    const icon = screen.getByTestId(`menu-item-test-item-icon`)
    expect(icon).toBeInTheDocument()
  })

  test("renders the item's anchor with the correct path", async () => {
    const anchor = screen.getByRole('link') as HTMLAnchorElement
    expect(anchor.href).toBe('http://localhost:3000/path')
  })
})