import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import { AppBar } from '@mui/material'
import LogoMain from 'app/common/components/LogoMain'
import { clearLocalUserData } from 'app/common/utils/authUtils'
import NavLink from 'app/navigation/NavLink'
import routes from 'app/routes'
import { layoutSpacing } from 'app/uiVars'
import { CSSProperties } from 'react'

type Props = {
  isAuth: boolean
}

const styles: CSSProperties = {
  height: layoutSpacing.navBarHeight,
}

const NavBar = (props: Props) => {
  const { isAuth } = props

  return (
    <>
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
            {!isAuth && (
              <>
                <NavLink
                  to={routes.login}
                  icon={<LoginRoundedIcon />}
                >
                  Log In
                </NavLink>

                <NavLink
                  to={routes.register}
                  icon={<PersonAddAltRoundedIcon />}
                >
                  Register
                </NavLink>
              </>
            )}

            {isAuth && (
              <NavLink
                onClick={clearLocalUserData}
                icon={<MeetingRoomIcon />}
              >
                Logout
              </NavLink>
            )}

            <NavLink
              to={routes.about}
              icon={<InfoRoundedIcon />}
            >
              About
            </NavLink>
          </div>
        </div>
      </AppBar>
    </>
  )
}

export default NavBar