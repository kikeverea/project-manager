import type { ReactElement } from "react";
import { dasherize } from "../util/util.ts";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export type MenuItem = {
  label: string,
  path: string,
  icon?: ReactElement,
  link?: ReactElement,
  subitems?: MenuItem[]
}

const SideMenuItem = ({ label, icon, path, subitems }: MenuItem) => {
  return (
    <li key={`${dasherize(label)}-key`} className='py-2 px-4 text-gray-400 hover:text-white'>
      <Link to={path} className='flex items-center w-full no-underline'>
        <span className='inline-block min-w-[25px]' data-testid={`menu-item-${dasherize(label)}-icon`}>
          { icon }
        </span>
        <span className='flex-1'>
          { label }
        </span>
        { subitems && <FontAwesomeIcon icon={faChevronDown} className='text-xs'/>}
      </Link>
    </li>
  )
}

export default SideMenuItem