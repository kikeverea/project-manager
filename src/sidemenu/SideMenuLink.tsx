import type { MenuItem } from './types.ts'
import SideMenuItemContent from './content/SideMenuItemContent.tsx'
import { Link } from '@tanstack/react-router'

const SideMenuLink = (item: MenuItem) => {

  return (
    <Link
      to={ item.path }
      className={`flex items-center w-full no-underline py-2 ${item.isSubItem ? 'px-0 xl:px-10' : 'px-4'}`}
    >
      <SideMenuItemContent {...item} />
    </Link>
  )
}

export default SideMenuLink