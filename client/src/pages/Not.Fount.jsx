
import err404 from "../assets/notFound.svg";

function NotFound() {
  return(
    <div>
      <p>Page Not Found</p>
      <img src={err404} />
    </div>
  )
}

export default NotFound;