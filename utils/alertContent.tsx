import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)

const alertContent = (title: string, text: string, icon?: string) => {
  return MySwal.fire({
    title: title,
    text: text,
    icon: icon === "error" ? "error" : "success",
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

export default alertContent
