import { beforeEach, describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { screen, render, within } from '@testing-library/react'
import SideMenu from './SideMenu.tsx'

describe('Menu item', () => {

  beforeEach(() => {
    render(
      <SideMenu items={[
        { label: 'label 1', icon: <div></div>, path: '/path/1' },
        { label: 'label 2', icon: <div></div>, path: '/path/2' },
        { label: 'label 3', icon: <div></div>, path: '/path/3' },
      ]}/>
    )
  })

  test("renders the all menu items", async () => {
    const menuItems = screen.getAllByRole('listitem')

    menuItems.forEach((menuItem, ind) => {
      const title = within(menuItem).getByText(`label ${ind + 1}`)
      expect(title).toBeInTheDocument()
    })
  })
})