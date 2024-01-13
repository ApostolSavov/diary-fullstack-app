import Footer from 'app/Footer'
import RegisterRoute from 'app/Register/RegisterRoute'
import LoginRoute from 'app/Login/LoginRoute'
import NavBar from 'app/navigation/NavBar'
import { layoutSpacing } from 'app/uiVars'
import { Route, Routes } from 'react-router-dom'
import { useReadLocalStorage } from 'app/common/hooks/useReadLocalStorage'
import CreateEntryRoute from 'app/diaryEntries/CreateEntry/CreateEntryRoute'

const { navBarHeight, footerHeight } = layoutSpacing

const style = {
  marginTop: navBarHeight,
  minHeight: `calc(100vh - ${navBarHeight}px - ${footerHeight}px)`
}

const App = () => {
  const userData = useReadLocalStorage('user')

  return (
    <>
      <NavBar isAuth={!!userData} />

      <div style={style}>
        <Routes>
          <Route path='/' element={<div>Home</div>} />

          <Route path='/login' element={<LoginRoute />} />

          <Route path='/register' element={<RegisterRoute />} />

          <Route path='/entries/create' element={<CreateEntryRoute />} />

          <Route path='/about' element={<div>About</div>} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
