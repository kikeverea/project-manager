import SideMenuItem, { type MenuItem } from "./SideMenuItem.tsx";
import { Link } from "@tanstack/react-router";

type SideMenuProps = {
  items: MenuItem[]
  label?: string
}

const SideMenu = ({ label='MENU', items } : SideMenuProps) => {
  return (
    <div className='bg-slate-800 w-[250px]'>
      <div className='p-4 border-b border-gray-600'>
        <Link to='/' className='no-underline'>
          { label }
        </Link>
      </div>
      <div className='py-2'>
        <ul>
          { items.map(item =>
            <SideMenuItem key={item.path} {...item} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu