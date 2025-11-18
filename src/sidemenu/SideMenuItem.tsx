import type { MenuItem } from "./types.ts";
import SideMenuSubMenu from "./SideMenuSubMenu.tsx";
import SideMenuLink from "./SideMenuLink.tsx";

const SideMenuItem = (item: MenuItem) => {

  return (
    <li className={'text-gray-400 hover:text-white cursor-pointer'}>
      { item.subitems?.length
        ? <SideMenuSubMenu {...item }/>
        : <SideMenuLink {...item} />
      }
    </li>
  )
}

export default SideMenuItem