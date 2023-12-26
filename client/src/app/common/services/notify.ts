import { toast } from 'react-toastify'

const defaultOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
} as const

const notify = {
  success: (text: string) => toast.success(text, defaultOptions),
  info: (text: string) => toast.info(text, defaultOptions),
  warning: (text: string) => toast.warning(text, defaultOptions),
  error: (text: string) => toast.error(text, defaultOptions),
}

export default notify