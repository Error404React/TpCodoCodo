import { Link } from "react-router-dom";
import '../styles/Nav.css';

export function Nav() {
  return (
    <ul className="principalContainer">
      <div className="divLiContainer">
        <li className="liContainer"><Link className="linkContainer" to= "/">GENERAL</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/sports">DEPORTES</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/entertainment">ENTRETENIMIENTO</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/business">NEGOCIOS</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/technology">TECNOLOGÍA</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/science">CIENCIA</Link></li>
        <li className="liContainer"><Link className="linkContainer" to= "/health">SALUD</Link></li>
      </div>
    </ul>
  )
}
