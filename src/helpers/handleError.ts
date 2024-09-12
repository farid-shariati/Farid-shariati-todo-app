import { toast } from 'react-toastify'

export const handleError = (error: string | null, message: string): unknown => {
  return toast.error(error || message)
}
