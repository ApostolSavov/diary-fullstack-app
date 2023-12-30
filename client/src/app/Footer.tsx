import LogoMain from 'app/common/components/LogoMain'
import { toClassName } from 'app/common/utils/toClassName'
import { layoutSpacing } from 'app/uiVars'

const className = toClassName(
  'bg-slate-500 text-white',
  'flex justify-center items-center',
)

const style = {
  height: layoutSpacing.footerHeight
}

const Footer = () => {

  return (
    <footer className={className} style={style}>

      <div className='h-5 mr-1'>
        <LogoMain />
      </div>
      Diary app - Fullstack project by Apostol Savov.
    </footer>
  )
}

export default Footer