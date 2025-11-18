import type { MenuItem } from '../types.ts'
import { dasherize } from '../../util/util.ts'

const SideMenuItemContent = ({ icon, label, isSubMenu }: Omit<MenuItem, 'path'>) => {

  const marginEnd = isSubMenu ? '0' : 'auto'
  const textSizeMultiplier = isSubMenu ? '' : '2'

  return (
    <>
      {/** Icon **/}
      { icon &&
        <span
          data-testid={`menu-item-${dasherize(label)}-icon`}
          className={`
            inline-block
            transition-all duration-300
            min-w-[25px]
            text-${textSizeMultiplier}xl
            ms-auto me-${marginEnd} xl:me-0 xl:ms-0 xl:text-sm
          `}
        >
          { icon }
        </span>
      }

      {/** Label **/}
      <span className='flex-1 hidden xl:inline-block' data-testid={`menu-item-label`}>
        {label}
      </span>
    </>
  )
}

export default SideMenuItemContent