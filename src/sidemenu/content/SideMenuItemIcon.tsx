import type { ReactElement } from "react";
import { dasherize } from "../../util/util.ts";

const SideMenuItemIcon = ({ label, icon }: { label: string, icon?: ReactElement }) => {

  if (!icon)
    return null

  return (
    <span
      data-testid={`menu-item-${dasherize(label)}-icon`}
      className='
          inline-block min-w-[25px] text-2xl ms-auto me-auto transition-all duration-300
          xl:me-0 xl:ms-0 xl:text-sm
        '
    >
      { icon || <i></i>}
    </span>
  )
}

export default SideMenuItemIcon