import OvaExpert from "../images/OvaExpert_logo.png"
import { Link } from "react-router-dom";
const Sitelogo = () => {
    return(
        <div className="site-logo w-16 h-16">
            <Link to={"/"}><img src={OvaExpert} alt="site logo" /></Link>
        </div>
    )
}

export default Sitelogo;