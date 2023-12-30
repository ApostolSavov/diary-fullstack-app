import { toClassName } from 'app/common/utils/toClassName'
import { ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

type Props = {
  to?: string
  onClick?: () => void
  icon?: JSX.Element
  children?: ReactNode
}

const className = toClassName(
  'flex flex-col items-center',
  'h-full text-white py-1 px-2',
  'hover:bg-primary-dark'
)


const NavLink = (props: Props) => {
  const { to, onClick, icon, children } = props

  if (!to) {
    return (
      <div
        onClick={onClick}
        className={toClassName(
          className,
          'hover:cursor-pointer'
        )}
      >
        {icon}
        {children}
      </div>
    )
  }

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => (
        toClassName(
          className,
          { 'bg-primary-dark': isActive }
        )
      )}
    >
      {icon}
      {children}
    </RouterNavLink>
  )
}

export default NavLink