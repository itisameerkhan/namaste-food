import { NOT_FOUND } from "../utils/constants"
import "./Error.scss"

const Error = () => {
  return (
    <div className="error">
        <img src={NOT_FOUND} alt="" />
        <h1>OOPS! Something went wrong</h1>
    </div>
  )
}

export default Error