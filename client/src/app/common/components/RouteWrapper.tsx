import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const className = 'p-4'

const RouteWrapper = (props: Props) => {
  const { children } = props

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default RouteWrapper