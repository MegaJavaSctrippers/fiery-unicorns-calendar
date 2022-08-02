import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Alert = withReactContent(Swal)
export const success = (content) => {
  Alert.fire({
    position: 'bottom',
    html: content,
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: 'success-sweet',
    },
  })
}
