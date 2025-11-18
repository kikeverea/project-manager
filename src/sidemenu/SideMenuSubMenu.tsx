import { useRef, useState } from 'react'
import type { MenuItem } from './types.ts'
import SideMenuItem from './SideMenuItem.tsx'
import SideMenuItemContent from "./content/SideMenuItemContent.tsx";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideMenuSubMenu = (submenu: MenuItem) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const ref = useRef<HTMLUListElement>(null)

  return (
    <>
      <span
        className={`flex items-center w-full pt-2 ${submenu.isSubItem ? 'ps-10' : 'px-4'}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <SideMenuItemContent {...submenu} isSubMenu={ true } />
        <FontAwesomeIcon icon={faChevronDown} className='text-xs'/>
      </span>

      {/** Sub items **/}
      <ul
        ref={ ref }
        className={`
          overflow-hidden transition-all duration-300 ${ collapsed ? 'pb-2' : 'py-2'}
        `}
        style={{
          maxHeight: collapsed ? 0 : `${ref.current?.scrollHeight}px`,
        }}
      >
        { submenu.subitems?.map(subitem => (
          <SideMenuItem {...subitem} key={subitem.path} isSubItem={ true } />
        ))}
      </ul>
    </>
  )
}

export default SideMenuSubMenu