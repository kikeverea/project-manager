import { beforeEach, describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { screen, render, within } from '@testing-library/react'
import SideMenuItem from "../SideMenuItem.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

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

  describe('with sub items', () => {
    test("renders submenu", async () => {
      render(<SideMenuItem
        path='#'
        label='Test item'
        icon={ <span></span> }
        subitems={[
          { label: 'Sub item 1', icon: <FontAwesomeIcon icon={faHouse} />, path: '/sub_path/1'  },
          { label: 'Sub item 2', icon: <FontAwesomeIcon icon={faHouse} />, path: '/sub_path/2'  }
        ]}
      />)

      const submenu = screen.getByRole('list') as HTMLUListElement
      expect(submenu).toBeInTheDocument()

      const subitems = within(submenu).getAllByRole('link') as HTMLAnchorElement[]

      subitems.forEach((subitem, ind) => {
        expect(subitem.textContent).toBe(`Sub item ${ind + 1}`)
        expect(subitem.href).toBe(`http://localhost:3000/sub_path/${ind + 1}`)
      })
    })
  })
})