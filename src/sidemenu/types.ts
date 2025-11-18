import type { ReactElement } from "react";

export type MenuItem = {
  label: string
  path: string
  icon?: ReactElement
  link?: ReactElement
  subitems?: MenuItem[]
  isSubItem?: boolean
  isSubMenu?: boolean
}