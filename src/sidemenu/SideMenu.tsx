import SideMenuItem from './SideMenuItem.tsx'
import { Link } from '@tanstack/react-router'
import type { MenuItem } from './types.ts'

type SideMenuProps = {
  items: MenuItem[]
  label?: string
}

const SideMenu = ({ label='MENU', items } : SideMenuProps) => {
  return (
    <div className='bg-slate-800 w-[75px] xl:w-[250px] transition-all duration-300'>

      {/* Header */}
      <div className='p-4 border-b border-gray-600'>
        <Link to='/' className='no-underline'>
          { label }
        </Link>
      </div>

      {/* Items */}
      <div className='py-2'>
        <ul>
          { items.map(item => (
            <SideMenuItem key={item.path} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu