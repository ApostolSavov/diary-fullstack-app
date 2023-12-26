import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import { AppBar } from '@mui/material'
import LogoMain from 'app/common/components/LogoMain'
import NavLink from 'app/navigation/NavLink'
import routes from 'app/routes'
import { customSpacing } from 'app/uiVars'
import { CSSProperties } from 'react'

const styles: CSSProperties = {
  height: customSpacing.navBarHeight,
}

const NavBar = () => {

  return (
    <AppBar
      color={'primary'}
      sx={styles}
    >
      <div className='h-full flex justify-between'>
        <div className='h-full min-w-fit'>
          <NavLink
            to={routes.home}
            icon={<LogoMain />}
          />
        </div>

        <div className='flex'>
          <NavLink
            to={routes.register}
            icon={<PersonAddAltRoundedIcon />}
          >
            Register
          </NavLink>

          <NavLink
            to={routes.about}
            icon={<InfoRoundedIcon />}
          >
            About
          </NavLink>
        </div>
      </div>
    </AppBar>
  )
}

export default NavBar