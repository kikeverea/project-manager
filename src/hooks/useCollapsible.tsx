import { type ElementType, useState } from 'react'

type Props = {
  component: ElementType
  componentProps?: Record<string, unknown>
}

const useCollapsible = () => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const Wrapper = ({ component: Component, componentProps }: Props) => {
    return <Component {...componentProps} collapsed={ collapsed } />
  }

  return [Wrapper, setCollapsed]
}

export default useCollapsible