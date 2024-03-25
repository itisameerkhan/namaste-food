import "./Cors.scss";
import CORS_IMG from "../assets/cors.png";

const Cors = () => {
  return (
    <div className="cors">
        <p>If You find this Page, make sure you enable CORS extension to your chrome</p>
        <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">
        <img src={CORS_IMG} alt="" />
        </a>
    </div>
  )
}

export default Cors