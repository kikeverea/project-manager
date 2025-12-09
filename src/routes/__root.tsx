import {  createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck'
import SideMenu from '../sidemenu/SideMenu.tsx'
import { queryClient } from '../queryClient.tsx'
import { type QueryClient, QueryClientProvider } from '@tanstack/react-query'

export type RouterContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className='flex items-stretch h-screen'>
          <SideMenu items={[
            { label: 'Proyectos', icon: <FontAwesomeIcon icon={faListCheck} />, path: '/'  },
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
      </QueryClientProvider>
    )
  }
})