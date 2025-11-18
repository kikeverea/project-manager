import { createRootRoute, Outlet } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import SideMenu from '../sidemenu/SideMenu.tsx'

export const Route = createRootRoute({
  component: () => {
    return (
      <div className='flex items-stretch h-screen'>
        <SideMenu items={[
          { label: 'Item 1', icon: <FontAwesomeIcon icon={faHouse} />, path: 'no_path'  },
          { label: 'Item 2', icon: <FontAwesomeIcon icon={faHouse} />, path: '#', subitems: [
            { label: 'Sub item 1', icon: <FontAwesomeIcon icon={faHouse} />, path: 'sub' },
            { label: 'Sub item 2', icon: <FontAwesomeIcon icon={faHouse} />, path: 'no_path' },
          ]},
          { label: 'Item 3', icon: <FontAwesomeIcon icon={faHouse} />, path: 'no_path'  },
          { label: 'Item 4', icon: <FontAwesomeIcon icon={faHouse} />, path: 'no_path'  },
        ]}/>
        <div className='flex-1 h-full p-8'>
          <Outlet />
        </div>
      </div>
    )
  }
})