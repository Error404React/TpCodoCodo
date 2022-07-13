import { Link } from "react-router-dom";
import '../styles/Nav.css';

export function Nav() {
  return (
    <ul className="principalContainer">
      <div className="divLiContainer">
        <li className="liContainer"><Link className="linkContainer" to= "/">DEPORTES</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/">ENTRETENIMIENTO</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/">ECONOMÍA</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/">TECNOLOGÍA</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/">CIENCIA</Link></li>
      </div>
    </ul>
  )
}