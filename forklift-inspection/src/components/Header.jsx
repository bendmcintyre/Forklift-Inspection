import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div id="navbar-container">
          <nav>
            {/* For routing we need match the route name in Route path attribute */}
            
            <Link to="/inspections">INSPECTIONS</Link>
            <Link to="/reminders">REMINDER</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </div>
    )
}