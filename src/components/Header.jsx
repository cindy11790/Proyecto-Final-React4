import { Link } from "react-router-dom"; //debe de ser el Link con la L mayuscula//
const Header = () => {
    return(
        <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Calculo" className="nav-link">
              Calculo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Registro" className="nav-link">
                Registro
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Historial" className="nav-link">
              Historial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Estadisticas" className="nav-link">
              Estadisticas
              </Link>
            </li>
            
          </ul>
        </nav>
      </header>
    );
}
export default Header;