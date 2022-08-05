import Swal from 'sweetalert2'
import icons from '../assets/icons'

export const remove = (content) => {
  Swal.fire({
    html: `Удалить ${content}`,
    showCloseButton: true,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Да',
    cancelButtonText: 'Нет',
    buttonsStyling: false,
    reverseButtons: true,
    closeButtonHtml: `<img class='close-sweet' src=${icons.closeBlackSVG}/>`,
    customClass: {
      popup: 'sweet-delete',
      confirmButton: 'confirm-btn',
      cancelButton: 'cancel-btn',
      closeButton: 'close-btn',
      actions: 'btn-group-sweet',
    },
    showClass: {
      popup: 'animate__animated animate__slideInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  })
}
