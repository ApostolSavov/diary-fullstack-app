import Footer from 'app/Footer'
import RegisterRoute from 'app/Register/RegisterRoute'
import NavBar from 'app/navigation/NavBar'
import { customSpacing } from 'app/uiVars'
import { Route, Routes } from 'react-router-dom'

const { navBarHeight, footerHeight } = customSpacing

const style = {
  marginTop: navBarHeight,
  minHeight: `calc(100vh - ${navBarHeight}px - ${footerHeight}px)`
}

const App = () => {

  return (
    <>
      <NavBar />

      <div style={style}>
        <Routes>
          <Route path='/' element={<div>Home</div>} />

          <Route path='/register' element={<RegisterRoute />} />

          <Route path='/about' element={<div>About</div>} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
